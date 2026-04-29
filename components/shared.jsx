// Shared utilities, buttons, formatters
const WHATSAPP_URL = "https://wa.me/5563999496259?text=Olá, vim pelo site do Casa+ e quero sair do aluguel.";
const PHONE_DISPLAY = "(63) 99949-6259";

const fmtBRL = (v) => v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
const fmtBRLd = (v) => v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',minimumFractionDigits:2,maximumFractionDigits:2});

// MCMV parcel estimator: oficial Caixa
// F1: ≤3.200  | ≤255k | 4-4,75% | subsídio ≤49.500
// F2: 3.200,01-5.000 | ≤255k | 5-7% | subsídio menor
// F3: 5.000,01-9.600 | ≤400k | 7,66-8,16% | sem subsídio
// F4: 9.600,01-13.000 | ≤600k | 10% | sem subsídio
// Cota máx 80% | 420 parcelas | Parcela ≤ 30% renda
// Calibrado com exemplo: Renda 2k, imóvel 200k → sub 49.500, entrada 24.167,80, parcela 600
function estimateParcel({price, income, fgts=0}){
  let faixa, juros, subsidyMax, imovelMax;
  if(income <= 3200)      { faixa=1; juros=0.04;   subsidyMax=49500; imovelMax=255000; }
  else if(income <= 5000) { faixa=2; juros=0.05;   subsidyMax=25000; imovelMax=255000; }
  else if(income <= 9600) { faixa=3; juros=0.0791; subsidyMax=0;     imovelMax=400000; }
  else                    { faixa=4; juros=0.10;   subsidyMax=0;     imovelMax=600000; }

  // subsídio: máximo para rendas baixas, decresce até zerar no topo da faixa
  let subsidy = 0;
  if(faixa===1)      subsidy = Math.round(49500 * (1 - Math.max(0,(income-2000))/1500));
  else if(faixa===2) subsidy = Math.round(25000 * (1 - (income-3200)/1800));
  subsidy = Math.max(0, Math.min(subsidy, subsidyMax, price*0.35));

  // entrada: ~16% do saldo após subsídio (calibrado com exemplo oficial)
  // menos FGTS que o cliente já tem
  const entradaBase = (price - subsidy) * 0.16;
  const entradaEfetiva = Math.max(0, entradaBase - fgts);
  const financiado = Math.max(10000, price - subsidy - fgts - entradaEfetiva);

  // tabela price, 420 meses (35 anos: máx do programa)
  const i = juros/12;
  const n = 420;
  const pmt = financiado * (i*Math.pow(1+i,n))/(Math.pow(1+i,n)-1);
  // seguros MIP+DFI + taxa admin
  const seguros = financiado * 0.00028 + 25;
  const total = pmt + seguros;

  const comprometido = total / income;
  const viavel = comprometido <= 0.30 && income >= 1621 && price <= imovelMax;

  return {
    faixa,
    juros: +(juros*100).toFixed(2),
    imovelMax,
    subsidy: Math.round(subsidy),
    financiado: Math.round(financiado),
    entrada: Math.round(entradaEfetiva),
    parcela: Math.round(total),
    comprometido: Math.round(comprometido*100),
    viavel
  };
}

// Buttons
const Btn = ({variant='primary', size='md', icon, iconRight, children, className='', style={}, ...p}) => {
  const base = {
    display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,
    fontFamily:'Inter',fontWeight:600,
    borderRadius: size==='sm'?10:12,
    transition:'all .18s ease',
    whiteSpace:'nowrap',
    cursor:'pointer',
    userSelect:'none',
    ...(size==='sm' && {padding:'8px 14px',fontSize:13}),
    ...(size==='md' && {padding:'12px 20px',fontSize:14}),
    ...(size==='lg' && {padding:'15px 24px',fontSize:15}),
    ...(size==='xl' && {padding:'18px 28px',fontSize:16}),
  };
  const styles = {
    primary:{background:'var(--bordo)',color:'#fff',boxShadow:'0 4px 14px -4px oklch(0.42 0.13 25 / .4)'},
    dark:{background:'var(--ink)',color:'var(--paper)'},
    ghost:{background:'transparent',color:'var(--ink)',border:'1px solid var(--line)'},
    whats:{background:'var(--whats)',color:'#fff',boxShadow:'0 4px 14px -4px rgba(37,211,102,.5)'},
    outline:{background:'#fff',color:'var(--bordo)',border:'1.5px solid var(--bordo)'},
    invert:{background:'#fff',color:'var(--bordo)'},
    paper:{background:'var(--paper-2)',color:'var(--ink)'},
  };
  return (
    <button {...p} className={className} style={{...base,...styles[variant],...style}}
      onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-1px)';e.currentTarget.style.filter='brightness(1.05)'}}
      onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.filter=''}}>
      {icon}{children}{iconRight}
    </button>
  );
};

// WhatsApp link wrapper
const WhatsLink = ({children, msg, ...p}) => {
  const url = msg ? `https://wa.me/5563999496259?text=${encodeURIComponent(msg)}` : WHATSAPP_URL;
  return <a href={url} target="_blank" rel="noopener noreferrer" {...p}>{children}</a>;
};

// Tag / Pill
const Pill = ({tone='bordo', children, style={}}) => {
  const map = {
    bordo:{bg:'oklch(0.95 0.03 25)',color:'var(--bordo)'},
    success:{bg:'oklch(0.95 0.03 155)',color:'var(--success)'},
    ink:{bg:'oklch(0.18 0.01 40 / .08)',color:'var(--ink)'},
    paper:{bg:'var(--paper-2)',color:'var(--ink)'},
  };
  const s = map[tone];
  return (
    <span style={{
      display:'inline-flex',alignItems:'center',gap:6,
      padding:'5px 11px',borderRadius:999,
      fontSize:12,fontWeight:600,letterSpacing:'.01em',
      background:s.bg,color:s.color,fontFamily:'Inter',
      ...style
    }}>{children}</span>
  );
};

// Image placeholder (if asset missing)
const ImgPh = ({label, ratio='16/10', style={}}) => (
  <div style={{
    aspectRatio:ratio,
    background:'repeating-linear-gradient(45deg, oklch(0.90 0.02 50), oklch(0.90 0.02 50) 10px, oklch(0.93 0.02 50) 10px, oklch(0.93 0.02 50) 20px)',
    color:'var(--ink-3)',
    fontFamily:'ui-monospace,monospace',fontSize:12,
    display:'flex',alignItems:'center',justifyContent:'center',
    borderRadius:'inherit',
    ...style
  }}>{label}</div>
);

// Scroll-reveal wrapper — uses IntersectionObserver + .reveal-on-scroll CSS
const RevealDiv = ({children, delay=0, style={}, className='', ...props}) => {
  const ref = React.useRef();
  React.useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const obs = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){ el.classList.add('in-view'); obs.disconnect(); }
    },{threshold:0.12});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[]);
  return (
    <div ref={ref} className={`reveal-on-scroll${className?' '+className:''}`}
      style={{transitionDelay:`${delay}s`,...style}} {...props}>
      {children}
    </div>
  );
};

Object.assign(window, { WHATSAPP_URL, PHONE_DISPLAY, fmtBRL, fmtBRLd, estimateParcel, Btn, WhatsLink, Pill, ImgPh, RevealDiv });
