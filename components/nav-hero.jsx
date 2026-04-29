// ================= NAVBAR =================
const Navbar = ({state, setState}) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  },[]);

  const links = [
    {label:'Casas', href:'#casas'},
    {label:'Como funciona', href:'#processo'},
    {label:'Simular', href:'#simulador'},
    {label:'Nosso time', href:'#time'},
    {label:'Entregas', href:'#entregas'},
    {label:'Dúvidas', href:'#faq'},
    {label:'Contato', href:'#contato'},
  ];

  return (
    <header data-screen-label="nav" style={{
      position:'fixed',top:0,left:0,right:0,zIndex:50,
      background: scrolled ? 'rgba(250,247,242,.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-2)' : '1px solid transparent',
      transition:'all .25s ease'
    }}>
      <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:72}}>
        <a href="#top" style={{display:'flex',alignItems:'center'}}>
          <Icon.Logo size={44} inverted={!scrolled}/>
        </a>

        <nav style={{display:'flex',gap:30,alignItems:'center'}} className="nav-links">
          {links.map(l=>(
            <a key={l.href} href={l.href} style={{
              fontSize:13.5,fontWeight:500,letterSpacing:'.01em',
              color: scrolled ? 'var(--ink-2)' : 'rgba(255,255,255,.86)',
              transition:'color .15s'
            }} onMouseEnter={e=>e.currentTarget.style.color = scrolled ? 'var(--bordo)' : '#fff'}
               onMouseLeave={e=>e.currentTarget.style.color = scrolled ? 'var(--ink-2)' : 'rgba(255,255,255,.86)'}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <a href={`tel:+5563999496259`} style={{
            display:'flex',alignItems:'center',gap:7,fontSize:13,fontWeight:600,
            color: scrolled ? 'var(--ink)' : '#fff'
          }}>
            <Icon.Phone size={15}/> {PHONE_DISPLAY}
          </a>
          <Btn variant="primary" size="sm" onClick={()=>document.getElementById('simulador')?.scrollIntoView({behavior:'smooth',block:'start'})}
            iconRight={<Icon.Arrow size={14}/>}>
            Simular grátis
          </Btn>
        </div>
      </div>
      <style>{`
        @media (max-width: 960px){
          .nav-links{display:none !important}
        }
      `}</style>
    </header>
  );
};

// ================= HERO =================
const Hero = ({state, simValues, setSimValues}) => {
  const price = simValues.price;
  const income = simValues.income;
  const setPrice = (v) => setSimValues(s=>({...s, price:v}));
  const setIncome = (v) => setSimValues(s=>({...s, income:v}));
  const est = estimateParcel({price, income, fgts:0});

  return (
    <section data-screen-label="hero" id="top" style={{
      position:'relative',minHeight:'min(100vh, 860px)',
      paddingTop:72,
      color:'#fff',
      overflow:'hidden',
      background:'var(--ink)',
      paddingBottom:0
    }}>
      {/* BG image */}
      <div style={{position:'absolute',inset:0,zIndex:0}}>
        <img src="assets/hero-house.jpg" alt="" style={{
          width:'100%',height:'100%',objectFit:'cover',
          transform:'scale(1.02)',
        }}/>
        <div style={{
          position:'absolute',inset:0,
          background:'linear-gradient(100deg, oklch(0.18 0.02 30 / .92) 0%, oklch(0.18 0.02 30 / .78) 38%, oklch(0.18 0.02 30 / .35) 70%, oklch(0.18 0.02 30 / 0) 100%)'
        }}/>
        <div style={{
          position:'absolute',inset:0,
          background:'linear-gradient(180deg, rgba(10,10,10,.4) 0%, transparent 20%, transparent 70%, var(--paper) 100%)'
        }}/>
        {/* subtle noise */}
        <div style={{position:'absolute',inset:0,opacity:.08,mixBlendMode:'overlay',
          backgroundImage:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`}}/>
      </div>

      <div className="wrap" style={{position:'relative',zIndex:2,paddingTop:80,paddingBottom:80,display:'grid',gridTemplateColumns:'1.15fr 1fr',gap:60,alignItems:'center',minHeight:'calc(100vh - 72px)'}}>
        <div style={{maxWidth:620}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:10,fontSize:12,fontWeight:600,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(255,255,255,.75)'}}>
            <span style={{width:28,height:1,background:'rgba(255,255,255,.5)'}}/>
            Programa Minha Casa Minha Vida · Caixa
          </div>

          <h1 style={{
            fontSize:'clamp(40px, 5.6vw, 82px)',
            fontWeight:800,
            marginTop:22,
            letterSpacing:'-.04em',
            lineHeight:0.94,
            animation:'reveal .9s cubic-bezier(.2,.7,.2,1) both',
          }}>
            Pare de pagar<br/>
            aluguel. Comece<br/>
            a pagar <span style={{color:'var(--bordo-light)'}}>a sua&nbsp;casa.</span>
          </h1>

          <p style={{
            marginTop:24,fontSize:18,lineHeight:1.5,
            color:'rgba(255,255,255,.78)',maxWidth:520,fontWeight:400
          }}>
            Casas prontas em Palmas com parcela que cabe no bolso, subsídio do governo e atendimento humano do primeiro clique até a chave na mão.
          </p>

          <div style={{display:'flex',gap:12,marginTop:34,flexWrap:'wrap'}}>
            <Btn variant="primary" size="lg" onClick={()=>document.getElementById('simulador')?.scrollIntoView({behavior:'smooth'})} iconRight={<Icon.Arrow size={16}/>}>
              Simular minha parcela
            </Btn>
            <WhatsLink>
              <Btn variant="whats" size="lg" icon={<Icon.Whats size={18}/>}>
                Falar no WhatsApp
              </Btn>
            </WhatsLink>
          </div>

          {/* mini trust row */}
          <div style={{display:'flex',gap:28,marginTop:44,flexWrap:'wrap'}}>
            {[
              {k:'+100', v:'famílias atendidas'},
              {k:'6 anos', v:'construindo em Palmas'},
              {k:'100%', v:'atendimento humano'},
            ].map((s,i)=>(
              <div key={s.k} style={{animation:`count-up .6s cubic-bezier(.2,.7,.2,1) ${0.4+i*0.12}s both`}}>
                <div style={{fontFamily:'Archivo',fontSize:28,fontWeight:800,letterSpacing:'-.03em'}}>{s.k}</div>
                <div style={{fontSize:12,opacity:.65,marginTop:2,letterSpacing:'.02em'}}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline live simulator */}
        <div style={{
          background:'rgba(255,255,255,.97)',
          color:'var(--ink)',
          borderRadius:20,
          padding:'28px 30px 26px',
          boxShadow:'0 40px 80px -20px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.1)',
          backdropFilter:'blur(20px)',
          position:'relative',
          animation:'reveal 1s cubic-bezier(.2,.7,.2,1) .3s both',
        }}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:4}}>
            <div style={{fontSize:12,fontWeight:700,color:'var(--bordo)',letterSpacing:'.12em',textTransform:'uppercase'}}>Simulador rápido</div>
            <Pill tone="success" style={{fontSize:10}}>
              <span style={{width:6,height:6,borderRadius:'50%',background:'var(--success)',display:'inline-block'}}/>
              AO VIVO
            </Pill>
          </div>
          <h3 style={{fontSize:22,fontWeight:700,margin:'2px 0 18px',letterSpacing:'-.025em'}}>
            Sua parcela em 30 segundos
          </h3>

          <Slider label="Valor da casa" value={price} min={220000} max={600000} step={5000}
                  onChange={setPrice} format={fmtBRL}/>
          <Slider label="Sua renda familiar" value={income} min={1621} max={13000} step={1}
                  onChange={v=>{
                    const s = v<=1621?1621:v>=13000?13000:Math.round(v/100)*100;
                    setIncome(s);
                  }} format={fmtBRL}/>

          <div style={{
            marginTop:20,padding:'18px 20px',
            background:'var(--paper-2)',borderRadius:14,
            display:'grid',gridTemplateColumns:'1fr 1fr',gap:14
          }}>
            <div>
              <div style={{fontSize:11,color:'var(--ink-3)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600}}>Parcela estimada</div>
              <div style={{fontFamily:'Archivo',fontSize:36,fontWeight:800,color:'var(--bordo)',letterSpacing:'-.035em',lineHeight:1,marginTop:4}}>
                {fmtBRL(est.parcela)}<span style={{fontSize:13,color:'var(--ink-3)',fontWeight:500,fontFamily:'Inter'}}>/mês</span>
              </div>
            </div>
            <div>
              <div style={{fontSize:11,color:'var(--ink-3)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600}}>
                {est.subsidy>0 ? 'Subsídio estimado' : 'Entrada estimada'}
              </div>
              <div style={{fontFamily:'Archivo',fontSize:22,fontWeight:800,color: est.subsidy>0 ? 'var(--success)' : 'var(--ink)',letterSpacing:'-.025em',marginTop:4,lineHeight:1.1}}>
                {est.subsidy>0 ? fmtBRL(est.subsidy) : fmtBRL(est.entrada)}
              </div>
              <div style={{fontSize:11,color:'var(--ink-3)',marginTop:2}}>
                {est.subsidy>0 ? 'do governo' : `+ ${fmtBRL(est.financiado)} financiados`}
              </div>
            </div>
          </div>

          <div style={{
            marginTop:12,
            padding:'12px 14px',
            borderRadius:10,
            background:'var(--paper)',
            border:'1px solid var(--line-2)',
            fontSize:13,lineHeight:1.45
          }}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,marginBottom: price > est.imovelMax ? 8 : 0}}>
              <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:700,color:'var(--ink)'}}>
                <span style={{width:22,height:22,borderRadius:6,background:'var(--bordo)',color:'#fff',fontSize:11,fontWeight:800,display:'inline-flex',alignItems:'center',justifyContent:'center',fontFamily:'Archivo'}}>F{est.faixa}</span>
                Faixa {est.faixa} · juros {est.juros}% a.a.
              </div>
              <div style={{fontSize:11,color:'var(--ink-3)',fontWeight:600}}>
                Imóvel até {fmtBRL(est.imovelMax)}
              </div>
            </div>
            {price > est.imovelMax && (
              <div style={{display:'flex',gap:8,alignItems:'flex-start',color:'oklch(0.45 0.15 30)',fontWeight:500}}>
                <Icon.Clock size={14} style={{marginTop:2,flexShrink:0}}/>
                <span>Com renda de {fmtBRL(income)} (Faixa {est.faixa}), o valor máximo do imóvel é <strong>{fmtBRL(est.imovelMax)}</strong>. Ajuste o valor da casa ou fale com a gente.</span>
              </div>
            )}
          </div>

          <Btn variant="primary" size="lg" style={{width:'100%',marginTop:14}}
            onClick={()=>document.getElementById('simulador')?.scrollIntoView({behavior:'smooth'})}
            iconRight={<Icon.Arrow size={16}/>}>
            Receber proposta completa
          </Btn>
          <div style={{fontSize:11,color:'var(--ink-3)',textAlign:'center',marginTop:10,lineHeight:1.5}}>
            Estimativa aproximada · Valores podem variar · Sem consulta ao SPC
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px){
          #top .wrap{grid-template-columns:1fr !important;gap:40px !important}
        }
      `}</style>
    </section>
  );
};

// Slider
const Slider = ({label, value, onChange, min, max, step, format}) => {
  const pct = (value-min)/(max-min)*100;
  return (
    <div style={{marginTop:14}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:6}}>
        <label style={{fontSize:13,color:'var(--ink-2)',fontWeight:500}}>{label}</label>
        <div style={{fontFamily:'Archivo',fontSize:17,fontWeight:700,letterSpacing:'-.015em'}}>{format(value)}</div>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e=>onChange(Number(e.target.value))}
        style={{
          width:'100%',height:8,appearance:'none',WebkitAppearance:'none',
          background:`linear-gradient(to right, var(--bordo) 0%, var(--bordo) ${pct}%, var(--line) ${pct}%, var(--line) 100%)`,
          borderRadius:10,outline:'none',cursor:'pointer'
        }}/>
      <style>{`
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:3px solid var(--bordo);cursor:grab;box-shadow:0 2px 8px rgba(0,0,0,.15)}
        input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid var(--bordo);cursor:grab}
      `}</style>
    </div>
  );
};

Object.assign(window, { Navbar, Hero, Slider });
