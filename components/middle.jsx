// ================= TRUST BAR (social proof logos + numbers) =================
const TrustBar = () => {
  const items = [
    {label:'Habilitada', sub:'CAIXA'},
    {label:'Programa', sub:'Minha Casa Minha Vida'},
    {label:'Governo', sub:'Federal'},
    {label:'CRECI-TO', sub:'J-1127'},
    {label:'Selo', sub:'Construtor Responsável'},
  ];
  return (
    <section data-screen-label="trust" style={{
      background:'var(--paper)',
      borderBottom:'1px solid var(--line-2)',
      padding:'22px 0'
    }}>
      <div className="wrap" style={{display:'flex',alignItems:'center',gap:40,justifyContent:'space-between',flexWrap:'wrap'}}>
        <div style={{fontSize:11,fontWeight:700,color:'var(--ink-3)',letterSpacing:'.16em',textTransform:'uppercase',flexShrink:0}}>
          Credenciamentos
        </div>
        <div style={{display:'flex',gap:36,alignItems:'center',flexWrap:'wrap',flex:1,justifyContent:'space-around'}}>
          {items.map((it,i)=>(
            <RevealDiv key={i} delay={i*0.08}>
              <div style={{display:'flex',flexDirection:'column',gap:2,opacity:.72}}>
                <div style={{fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--ink-3)',fontWeight:600}}>{it.label}</div>
                <div style={{fontFamily:'Archivo',fontSize:18,fontWeight:700,color:'var(--ink)',letterSpacing:'-.01em'}}>{it.sub}</div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= PAIN / EMPATHY =================
const PainSection = () => {
  const dores = [
    {n:'01', t:'10 anos pagando aluguel', d:'Mais de R$ 100 mil que foram embora. Você poderia ter pago boa parte da casa.'},
    {n:'02', t:'"Não vai ser aprovado"', d:'A burocracia assusta, mas a gente resolve os papéis no seu lugar.'},
    {n:'03', t:'Medo de não caber no bolso', d:'Parcela fixa, sem surpresas. Cabe no orçamento de quem ganha desde 1 salário.'},
  ];
  return (
    <section data-screen-label="pain" style={{padding:'100px 0 80px',background:'var(--paper)'}}>
      <div className="wrap">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:60,alignItems:'end'}} className="pain-grid">
          <RevealDiv>
            <Pill tone="bordo">Para quem quer sair do aluguel</Pill>
            <h2 style={{fontSize:'clamp(34px, 4vw, 58px)',fontWeight:500,marginTop:18,letterSpacing:'-.025em',lineHeight:1.02}}>
              Todo mês, o aluguel<br/>
              leva um <em style={{fontStyle:'italic',color:'var(--bordo)'}}>pedaço</em> do<br/>
              seu sonho.
            </h2>
          </RevealDiv>
          <RevealDiv delay={0.15}>
            <p style={{fontSize:18,lineHeight:1.55,color:'var(--ink-2)',width:540,height:'111.6px',justifySelf:'end'}}>
              A boa notícia: em Palmas, famílias com renda familiar de até <br/><strong style={{color:'var(--ink)'}}>R$ 13.000</strong> podem financiar a casa própria pelo Minha Casa Minha Vida, com subsídio do governo e parcela <strong style={{color:'var(--ink)'}}>menor que<br/>o aluguel</strong> que pagam hoje.
            </p>
          </RevealDiv>
        </div>

        <div style={{
          marginTop:56,
          display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:0,
          border:'1px solid var(--line)',borderRadius:20,overflow:'hidden',background:'#fff'
        }} className="pain-cards">
          {dores.map((d,i)=>(
            <RevealDiv key={i} delay={i*0.13} style={{
              padding:'34px 30px',
              borderRight: i<2 ? '1px solid var(--line)' : 'none',
              position:'relative'
            }}>
              <div style={{fontFamily:'Archivo',fontSize:40,fontWeight:600,color:'var(--bordo)',opacity:.25,letterSpacing:'-.02em',lineHeight:1}}>
                {d.n}
              </div>
              <h3 style={{fontSize:22,fontWeight:600,margin:'14px 0 10px',letterSpacing:'-.015em'}}>{d.t}</h3>
              <p style={{color:'var(--ink-2)',fontSize:14.5,lineHeight:1.55}}>{d.d}</p>
            </RevealDiv>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){
          .pain-grid{grid-template-columns:1fr !important;gap:28px !important}
          .pain-cards{grid-template-columns:1fr !important}
          .pain-cards > div{border-right:none !important;border-bottom:1px solid var(--line)}
          .pain-cards > div:last-child{border-bottom:none}
        }
      `}</style>
    </section>
  );
};

// ================= HOUSES =================
// --- Google Sheets CMS ---
// Planilha pública: Arquivo → Compartilhar → Publicar na Web → CSV
// Cole o link em SHEETS_CSV_URL. Deixe "" para usar dados de exemplo.
// Colunas (linha 1 = cabeçalho):
//   projeto | capa | bairro | nome | valor | area | terreno | quartos | banheiros | vagas | tag | previsao | destaque | imagem | maps
// "projeto" = nome da obra (agrupa as casas). "capa" = foto de capa da obra.
// "imagem" e "capa" aceitam link público do Google Drive.
const SHEETS_CSV_URL = "https://docs.google.com/spreadsheets/d/1-xjogS59UbDc1NT4Vi2IAla3QnRnNLs-pf7FjWbOeXI/export?format=csv&gid=0";

const FALLBACK_HOUSES = [
  {projeto:'Morada do Sol – Sucupira', capa:'assets/house-1.jpg', bairro:'Morada do Sol', nome:'Casa 2', valor:220000, area:59, terreno:150, quartos:2, banheiros:2, vagas:1, tag:'Pronta para morar', destaque:true,  imagem:'assets/house-1.jpg'},
  {projeto:'Morada do Sol – Sucupira', capa:'assets/house-1.jpg', bairro:'Morada do Sol', nome:'Casa 3', valor:220000, area:59, terreno:150, quartos:2, banheiros:2, vagas:1, tag:'Pronta para morar', destaque:false, imagem:'assets/house-2.jpg'},
  {projeto:'Morada do Sol – Sucupira', capa:'assets/house-1.jpg', bairro:'Morada do Sol', nome:'Casa 4', valor:220000, area:59, terreno:150, quartos:2, banheiros:2, vagas:1, tag:'Últimas unidades', destaque:false, imagem:'assets/house-3.jpg'},
];

function parseCSV(text) {
  const [header, ...rows] = text.trim().split('\n');
  const keys = header.split(',').map(k => k.trim().replace(/^"|"$/g,'').toLowerCase());
  return rows.map(row => {
    const vals = row.match(/(".*?"|[^,]+|(?<=,)(?=,)|(?<=,)$|^(?=,))/g) || [];
    const obj = {};
    keys.forEach((k,i) => {
      let v = (vals[i]||'').trim().replace(/^"|"$/g,'');
      if(['valor','area','terreno','quartos','banheiros','vagas'].includes(k)) v = Number(String(v).replace(/\./g,'').replace(',','.'))||0;
      if(k==='destaque') v = v==='true'||v==='1'||v==='sim';
      obj[k] = v;
    });
    return obj;
  }).filter(h => h.projeto && h.nome);
}

function driveThumb(url) {
  const m = url && url.match(/\/d\/([^\/]+)/);
  return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w800` : url;
}

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key];
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {});
}

const ProjectCard = ({projeto, casas}) => {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const capa = driveThumb(casas[0]?.capa || casas[0]?.imagem);
  const bairro = casas[0]?.bairro || '';
  const maps = casas[0]?.maps || '';
  const minValor = Math.min(...casas.map(c=>c.valor));
  const minParcela = Math.min(...casas.map(c=>estimateParcel({price:c.valor,income:3500,fgts:0}).parcela));
  const disponiveis = casas.length;

  return (
    <article style={{
      borderRadius:20, overflow:'hidden',
      border:'1px solid var(--line)',
      background:'#fff',
      transition:'all .25s ease',
      transform: hover && !open ? 'translateY(-3px)' : 'none',
      boxShadow: open ? 'var(--shadow-lg)' : hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    }} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>

      {/* Cover / Header — sempre visível */}
      <button onClick={()=>setOpen(o=>!o)} style={{
        display:'block',width:'100%',textAlign:'left',
        background:'none',border:0,cursor:'pointer',padding:0
      }}>
        <div style={{position:'relative',overflow:'hidden',aspectRatio:'16/9'}}>
          <img src={capa} alt={projeto} style={{
            width:'100%',height:'100%',objectFit:'cover',
            transition:'transform .5s ease',
            transform: hover ? 'scale(1.04)' : 'scale(1)'
          }}/>
          <div style={{
            position:'absolute',inset:0,
            background:'linear-gradient(to top, rgba(10,8,6,.7) 0%, transparent 55%)'
          }}/>
          <div style={{position:'absolute',bottom:16,left:18,right:18,color:'#fff'}}>
            <div style={{fontSize:11,opacity:.75,letterSpacing:'.12em',textTransform:'uppercase',fontWeight:600,marginBottom:4}}>
              {bairro} · Palmas/TO
            </div>
            <div style={{fontFamily:'Archivo',fontSize:22,fontWeight:800,letterSpacing:'-.02em',lineHeight:1.1}}>
              {projeto}
            </div>
          </div>
          <div style={{
            position:'absolute',top:14,right:14,
            background:'rgba(255,255,255,.18)',backdropFilter:'blur(10px)',
            border:'1px solid rgba(255,255,255,.3)',
            borderRadius:30,padding:'5px 12px',
            fontSize:12,fontWeight:700,color:'#fff',display:'flex',alignItems:'center',gap:6
          }}>
            <span style={{width:7,height:7,borderRadius:'50%',background:'var(--success)',display:'inline-block'}}/>
            {disponiveis} {disponiveis===1?'unidade':'unidades'} disponíveis
          </div>
        </div>

        <div style={{
          padding:'16px 20px',
          display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,
          borderBottom: open ? '1px solid var(--line-2)' : 'none'
        }}>
          <div>
            <div style={{fontSize:11,color:'var(--ink-3)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600}}>Parcelas a partir de</div>
            <div style={{fontFamily:'Archivo',fontSize:24,fontWeight:800,color:'var(--bordo)',letterSpacing:'-.025em',lineHeight:1.1,marginTop:2}}>
              {fmtBRL(minParcela)}<span style={{fontSize:12,color:'var(--ink-3)',fontWeight:500,fontFamily:'Inter'}}>/mês</span>
            </div>
            <div style={{fontSize:12,color:'var(--ink-3)',marginTop:2}}>ou {fmtBRL(minValor)} à vista</div>
            {maps && (
              <a href={maps} target="_blank" rel="noopener noreferrer" style={{
                display:'inline-flex',alignItems:'center',gap:5,marginTop:8,
                fontSize:12,fontWeight:600,color:'var(--ink-2)',
                background:'var(--paper-2)',border:'1px solid var(--line)',
                borderRadius:20,padding:'5px 12px',textDecoration:'none'
              }}>
                <Icon.Pin size={12}/> Ver localização
              </a>
            )}
          </div>
          <div style={{
            display:'flex',alignItems:'center',gap:6,
            padding:'8px 16px',borderRadius:30,
            background: open ? 'var(--bordo)' : 'var(--paper-2)',
            color: open ? '#fff' : 'var(--ink)',
            fontSize:13,fontWeight:700,
            transition:'all .2s ease',
            flexShrink:0,border:'1px solid',
            borderColor: open ? 'var(--bordo)' : 'var(--line)'
          }}>
            {open ? 'Fechar' : 'Ver casas'}
            <span style={{
              display:'inline-block',
              transition:'transform .25s ease',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              fontSize:10
            }}>▼</span>
          </div>
        </div>
      </button>

      {/* Unidades expandidas */}
      {open && (
        <div style={{padding:'0 0 4px'}}>
          {casas.map((c, i) => {
            const est = estimateParcel({price:c.valor,income:3500,fgts:0});
            return (
              <div key={i} style={{
                display:'grid',gridTemplateColumns:'1fr auto',gap:14,alignItems:'center',
                padding:'14px 20px',
                borderBottom: i < casas.length-1 ? '1px solid var(--line-2)' : 'none',
              }}>
                <div>
                  <div style={{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}}>
                    <span style={{fontFamily:'Archivo',fontSize:16,fontWeight:700,letterSpacing:'-.01em'}}>{c.nome}</span>
                    {c.destaque && (
                      <span style={{
                        fontSize:10,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',
                        background:'var(--bordo)',color:'#fff',borderRadius:20,padding:'2px 8px'
                      }}>Destaque</span>
                    )}
                    <span style={{
                      fontSize:10,fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',
                      background:'var(--paper-2)',color:'var(--ink-2)',borderRadius:20,padding:'2px 8px',
                      border:'1px solid var(--line)'
                    }}>{c.tag}</span>
                  </div>
                  <div style={{display:'flex',gap:12,marginTop:5,color:'var(--ink-3)',fontSize:12,flexWrap:'wrap'}}>
                    <span><Icon.Ruler size={11}/> Área {c.area}m²</span>
                    {c.terreno>0 && <span><Icon.Ruler size={11}/> Terreno {c.terreno}m²</span>}
                    <span><Icon.Bed size={11}/> {c.quartos} qtos</span>
                    <span><Icon.Bath size={11}/> {c.banheiros} ban.</span>
                    <span><Icon.Car size={11}/> {c.vagas} vaga{c.vagas!==1?'s':''}</span>
                  </div>
                  {c.previsao && (
                    <div style={{display:'inline-flex',alignItems:'center',gap:5,marginTop:6,
                      fontSize:11,fontWeight:600,color:'var(--bordo)',
                      background:'var(--bordo-soft)',borderRadius:20,padding:'3px 10px'
                    }}>
                      <Icon.Clock size={11}/> Previsão: {c.previsao}
                    </div>
                  )}
                </div>
                <div style={{textAlign:'right',flexShrink:0}}>
                  <div style={{fontFamily:'Archivo',fontSize:18,fontWeight:800,color:'var(--bordo)',letterSpacing:'-.02em',lineHeight:1}}>
                    {fmtBRL(est.parcela)}<span style={{fontFamily:'Inter',fontSize:10,fontWeight:500,color:'var(--ink-3)'}}>/mês</span>
                  </div>
                  <div style={{fontSize:11,color:'var(--ink-3)',marginTop:2,marginBottom:8}}>{fmtBRL(c.valor)} à vista</div>
                  <WhatsLink msg={`Olá, tenho interesse na ${c.nome} do projeto ${projeto} em ${c.bairro}.`}>
                    <Btn variant="primary" size="sm" icon={<Icon.Whats size={13}/>}>Quero essa</Btn>
                  </WhatsLink>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
};

const HousesSection = () => {
  const [houses, setHouses] = React.useState(FALLBACK_HOUSES);
  const [loading, setLoading] = React.useState(!!SHEETS_CSV_URL);

  React.useEffect(() => {
    if (!SHEETS_CSV_URL) return;
    fetch(SHEETS_CSV_URL)
      .then(r => r.text())
      .then(text => { setHouses(parseCSV(text)); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const projetos = groupBy(houses, 'projeto');
  const nomes = Object.keys(projetos);

  return (
    <section data-screen-label="casas" id="casas" style={{padding:'100px 0',background:'#fff'}}>
      <div className="wrap">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',marginBottom:44,gap:24,flexWrap:'wrap'}}>
          <RevealDiv style={{maxWidth:580}}>
            <Pill tone="bordo">Disponíveis agora</Pill>
            <h2 style={{fontSize:'clamp(32px, 3.8vw, 52px)',fontWeight:500,marginTop:14,letterSpacing:'-.025em',lineHeight:1.04}}>
              Casas prontas.<br/>
              Parcela que <em style={{fontStyle:'italic',color:'var(--bordo)'}}>cabe</em>.
            </h2>
          </RevealDiv>
          <RevealDiv delay={0.15}>
            <p style={{color:'var(--ink-2)',fontSize:16,maxWidth:380}}>
              Todas financiáveis pelo MCMV. Sua parcela real pode ser menor com subsídio e FGTS.
            </p>
          </RevealDiv>
        </div>

        {loading ? (
          <div style={{textAlign:'center',padding:'60px 0',color:'var(--ink-3)'}}>Carregando obras…</div>
        ) : (
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}} className="projects-grid">
            {nomes.map((nome,i) => (
              <RevealDiv key={nome} delay={i*0.12}>
                <ProjectCard projeto={nome} casas={projetos[nome]}/>
              </RevealDiv>
            ))}
          </div>
        )}

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:40,padding:'22px 28px',background:'var(--paper-2)',borderRadius:18,flexWrap:'wrap',gap:16}}>
          <div>
            <div style={{fontFamily:'Archivo',fontSize:22,fontWeight:700,letterSpacing:'-.015em'}}>Quer ver outras opções?</div>
            <div style={{color:'var(--ink-2)',fontSize:14,marginTop:2}}>Fale com a gente e veja o catálogo completo.</div>
          </div>
          <div style={{display:'flex',gap:10}}>
            <WhatsLink msg="Olá, quero ver o catálogo completo de obras da Casa+">
              <Btn variant="outline" size="md" icon={<Icon.Whats size={16}/>}>Pedir catálogo</Btn>
            </WhatsLink>
            <Btn variant="dark" size="md" iconRight={<Icon.Arrow size={14}/>} onClick={()=>document.getElementById('simulador')?.scrollIntoView({behavior:'smooth'})}>
              Simular parcela
            </Btn>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px){ .projects-grid{grid-template-columns:repeat(2,1fr) !important} }
        @media (max-width: 640px){ .projects-grid{grid-template-columns:1fr !important} }
      `}</style>
    </section>
  );
};

const HouseCard = ({imagem,nome,bairro,valor,area,terreno,quartos,banheiros,vagas,tag,destaque,projeto}) => {
  const [hover, setHover] = React.useState(false);
  const parcela = estimateParcel({price:valor, income:3500, fgts:0}).parcela;
  return (
    <article style={{
      borderRadius:18,overflow:'hidden',
      background:'#fff',
      border:'1px solid var(--line)',
      transition:'all .25s ease',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      position:'relative'
    }} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      {destaque && (
        <div style={{position:'absolute',top:14,right:14,zIndex:2}}>
          <Pill tone="bordo" style={{background:'var(--bordo)',color:'#fff'}}>
            <Icon.Zap size={10}/> Mais procurada
          </Pill>
        </div>
      )}
      <div style={{position:'relative',overflow:'hidden',aspectRatio:'4/3'}}>
        <img src={imagem} alt={nome||bairro} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s ease',transform: hover ? 'scale(1.06)' : 'scale(1)'}}/>
        <div style={{position:'absolute',top:14,left:14}}>
          <Pill tone="paper" style={{background:'rgba(255,255,255,.95)',backdropFilter:'blur(6px)'}}>
            <Icon.CheckCircle size={12}/> {tag}
          </Pill>
        </div>
      </div>
      <div style={{padding:'20px 22px 22px'}}>
        <div style={{display:'flex',alignItems:'center',gap:6,color:'var(--ink-3)',fontSize:13,fontWeight:500}}>
          <Icon.Pin size={13}/> {bairro} · Palmas/TO
        </div>
        <h3 style={{fontFamily:'Archivo',fontSize:24,fontWeight:700,margin:'6px 0 14px',letterSpacing:'-.02em',lineHeight:1.1}}>
          {nome || `Casa ${quartos} quartos`}
        </h3>

        <div style={{display:'flex',gap:14,flexWrap:'wrap',paddingBottom:16,borderBottom:'1px dashed var(--line)',color:'var(--ink-2)',fontSize:13}}>
          <span style={{display:'flex',alignItems:'center',gap:5}}><Icon.Ruler size={14}/>Área {area}m²</span>
          {terreno>0 && <span style={{display:'flex',alignItems:'center',gap:5}}><Icon.Ruler size={14}/>Terreno {terreno}m²</span>}
          <span style={{display:'flex',alignItems:'center',gap:5}}><Icon.Bed size={14}/>{quartos} qtos</span>
          <span style={{display:'flex',alignItems:'center',gap:5}}><Icon.Bath size={14}/>{banheiros} ban.</span>
          <span style={{display:'flex',alignItems:'center',gap:5}}><Icon.Car size={14}/>{vagas} vaga{vagas!==1?'s':''}</span>
        </div>

        <div style={{marginTop:16,display:'flex',alignItems:'end',justifyContent:'space-between',gap:10}}>
          <div>
            <div style={{fontSize:11,color:'var(--ink-3)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600}}>A partir de</div>
            <div style={{fontFamily:'Archivo',fontSize:26,fontWeight:700,color:'var(--bordo)',letterSpacing:'-.02em',lineHeight:1.05,marginTop:2}}>
              {fmtBRL(parcela)}<span style={{fontSize:12,color:'var(--ink-3)',fontWeight:500,fontFamily:'Inter'}}>/mês</span>
            </div>
            <div style={{fontSize:12,color:'var(--ink-3)',marginTop:4}}>ou {fmtBRL(valor)} à vista</div>
          </div>
          <WhatsLink msg={`Olá, quero saber mais sobre a ${nome||'casa'} no ${bairro} (${projeto})`}>
            <Btn variant="primary" size="sm" icon={<Icon.Whats size={14}/>}>Quero essa</Btn>
          </WhatsLink>
        </div>
      </div>
    </article>
  );
};

// ================= PROCESS =================
const ProcessSection = () => {
  const [active, setActive] = React.useState(0);
  const steps = [
    {icon:Icon.Doc, t:'Pré-cadastro', desc:'Você preenche um formulário de 2 minutos. A gente responde no WhatsApp em breve.', tempo:'2 min'},
    {icon:Icon.Calc, t:'Simulação real', desc:'Calculamos sua parcela, subsídio e FGTS. Você vê exatamente o que vai pagar.', tempo:'mesmo dia'},
    {icon:Icon.CheckCircle, t:'Aprovação Caixa', desc:'Cuidamos da documentação com você. Sem correr em banco.', tempo:'5 a 20 dias'},
    {icon:Icon.Home, t:'Escolha da casa', desc:'Você visita as casas prontas e escolhe a que combina com a família.', tempo:'1 semana'},
    {icon:Icon.Key, t:'Chave na mão', desc:'Assinatura, entrega e registro. Mudança na semana seguinte.', tempo:'até 45 dias'},
  ];
  return (
    <section data-screen-label="processo" id="processo" style={{padding:'100px 0',background:'var(--paper)'}}>
      <div className="wrap">
        <RevealDiv style={{textAlign:'center',maxWidth:640,margin:'0 auto 56px'}}>
          <Pill tone="bordo">Como funciona</Pill>
          <h2 style={{fontSize:'clamp(32px, 3.8vw, 52px)',fontWeight:500,marginTop:14,letterSpacing:'-.025em',lineHeight:1.04}}>
            5 passos. <em style={{fontStyle:'italic',color:'var(--bordo)'}}>Sem mistério.</em>
          </h2>
          <p style={{color:'var(--ink-2)',fontSize:17,marginTop:14}}>
            Da primeira conversa até o dia da mudança, a Casa+ faz o caminho com você.
          </p>
        </RevealDiv>

        <div style={{display:'grid',gridTemplateColumns:'repeat(5, 1fr)',gap:0,position:'relative'}} className="process-grid">
          {/* connecting line */}
          <div style={{
            position:'absolute',top:34,left:'10%',right:'10%',height:2,
            background:`linear-gradient(to right, var(--bordo) 0%, var(--bordo) ${active*25}%, var(--line) ${active*25}%, var(--line) 100%)`,
            transition:'all .4s ease',zIndex:0
          }}/>
          {steps.map((s,i)=>{
            const isActive = i <= active;
            return (
              <button key={i} onClick={()=>setActive(i)} style={{
                display:'flex',flexDirection:'column',alignItems:'center',gap:12,
                padding:'0 10px',cursor:'pointer',textAlign:'center',
                background:'transparent',border:0,position:'relative',zIndex:1
              }}>
                <div style={{
                  width:68,height:68,borderRadius:20,
                  background: isActive ? 'var(--bordo)' : '#fff',
                  color: isActive ? '#fff' : 'var(--ink-3)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  border:'2px solid',borderColor: isActive ? 'var(--bordo)' : 'var(--line)',
                  transition:'all .25s ease',
                  boxShadow: isActive ? '0 10px 30px -8px oklch(0.42 0.13 25 / .4)' : 'none'
                }}>
                  <s.icon size={26}/>
                </div>
                <div style={{fontSize:10,letterSpacing:'.14em',textTransform:'uppercase',color:'var(--ink-3)',fontWeight:700}}>
                  Passo {String(i+1).padStart(2,'0')} · {s.tempo}
                </div>
                <h3 style={{fontFamily:'Archivo',fontSize:19,fontWeight:700,letterSpacing:'-.015em',color: active===i ? 'var(--bordo)' : 'var(--ink)'}}>{s.t}</h3>
              </button>
            );
          })}
        </div>

        <div style={{
          marginTop:40,padding:'30px 36px',
          background:'#fff',borderRadius:18,border:'1px solid var(--line)',
          display:'grid',gridTemplateColumns:'1fr auto',gap:30,alignItems:'center'
        }} className="process-detail">
          <div>
            <div style={{fontSize:12,color:'var(--bordo)',fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase'}}>
              {steps[active].t}
            </div>
            <p style={{fontFamily:'Archivo',fontSize:24,fontWeight:600,marginTop:8,letterSpacing:'-.015em',lineHeight:1.25,maxWidth:620}}>
              {steps[active].desc}
            </p>
          </div>
          <div style={{display:'flex',gap:10}}>
            <Btn variant="ghost" size="md" onClick={()=>setActive(Math.max(0,active-1))} style={{opacity: active===0?.4:1,pointerEvents:active===0?'none':'auto'}}>← Anterior</Btn>
            <Btn variant="dark" size="md" onClick={()=>setActive(Math.min(4,active+1))}>
              {active===4 ? 'Reiniciar' : 'Próximo →'}
            </Btn>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){
          .process-grid{grid-template-columns:repeat(5, 1fr) !important;overflow-x:auto;padding-bottom:8px}
          .process-detail{grid-template-columns:1fr !important}
        }
      `}</style>
    </section>
  );
};

// ================= BENEFITS (slim strip) =================
const BenefitsStrip = () => {
  const b = [
    {i:Icon.Wallet, t:'Subsídio até R$ 49.500', d:'Do governo federal, sem pagar de volta.'},
    {i:Icon.Tag, t:'FGTS como entrada', d:'Use seu saldo. Não precisa ter dinheiro na poupança.'},
    {i:Icon.Shield, t:'Parcelas fixas por 30 anos', d:'Sem surpresa. Sem correção pelo IPCA.'},
    {i:Icon.Spark, t:'Taxa a partir de 4% a.a.', d:'A menor do mercado habitacional, disponível na Faixa 1 do programa.'},
  ];
  return (
    <section data-screen-label="beneficios" style={{padding:'60px 0',background:'var(--ink)',color:'#fff'}}>
      <div className="wrap">
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:28}} className="benefit-grid">
          {b.map((x,i)=>(
            <RevealDiv key={i} delay={i*0.1} style={{display:'flex',gap:14,alignItems:'flex-start'}}>
              <div style={{
                width:42,height:42,borderRadius:12,
                background:'rgba(255,255,255,.08)',
                display:'flex',alignItems:'center',justifyContent:'center',
                color:'var(--bordo-light)',flexShrink:0,border:'1px solid rgba(255,255,255,.1)'
              }}>
                <x.i size={20}/>
              </div>
              <div>
                <div style={{fontFamily:'Archivo',fontSize:18,fontWeight:700,letterSpacing:'-.01em'}}>{x.t}</div>
                <div style={{fontSize:13,color:'rgba(255,255,255,.65)',marginTop:4,lineHeight:1.45}}>{x.d}</div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){ .benefit-grid{grid-template-columns:repeat(2,1fr) !important} }
        @media (max-width: 500px){ .benefit-grid{grid-template-columns:1fr !important} }
      `}</style>
    </section>
  );
};

// ================= TEAM =================
const TeamCard = ({pessoa:p, delay=0}) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        borderRadius:20, overflow:'hidden',
        position:'relative', aspectRatio:'3/4',
        background:'#111', cursor:'default',
        animation:`reveal .7s cubic-bezier(.2,.7,.2,1) ${delay}s both`,
        boxShadow: hover ? '0 28px 56px -14px rgba(0,0,0,.45)' : '0 8px 24px -8px rgba(0,0,0,.25)',
        transition:'box-shadow .45s ease, transform .45s ease',
        transform: hover ? 'translateY(-7px)' : 'translateY(0)',
      }}>
      {p.foto && (
        <img src={p.foto} alt={p.nome} style={{
          position:'absolute', inset:0,
          width:'100%', height:'100%',
          objectFit:'cover', objectPosition:'top center',
          display:'block',
          filter:'blur(0.4px)',
          transition:'transform .65s cubic-bezier(.2,.7,.2,1)',
          transform: hover ? 'scale(1.04)' : 'scale(1)',
        }}/>
      )}
      {/* gradiente só na faixa do texto (últimos 32%) */}
      <div style={{
        position:'absolute', bottom:0, left:0, right:0,
        height:'32%',
        background:'linear-gradient(to top, rgba(4,2,2,1) 0%, rgba(4,2,2,.85) 40%, transparent 100%)',
        pointerEvents:'none',
      }}/>
      {/* nome e cargo */}
      <div style={{position:'absolute', bottom:0, left:0, right:0, padding:'22px 22px', color:'#fff'}}>
        <div style={{fontFamily:'Archivo', fontSize:22, fontWeight:700, letterSpacing:'-.02em', lineHeight:1.1}}>
          {p.nome}
        </div>
        <div style={{display:'flex', alignItems:'center', gap:8, marginTop:7}}>
          <span style={{width:18, height:2, background:'var(--bordo-light)', borderRadius:2, flexShrink:0}}/>
          <span style={{fontSize:11, fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.65)'}}>
            {p.cargo}
          </span>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const team = [
    {
      nome: 'Edson Júnior',
      cargo: 'Diretor Administrativo',
      formacao: [
        'Eng. Civil — IFTO',
        'Pós-Grad. Gerenciamento de Obras — IPOG',
        'MBA Produtividade e Tecnologia da Construção',
      ],
      foto: 'assets/team-edson.jpg?v=4',
    },
    {
      nome: 'José Victor',
      cargo: 'Diretor de Operações',
      formacao: [
        'Eng. Civil — IFTO',
        'Pós-Grad. Perícias, Avaliações e Orçamentos — UNIMAIS',
      ],
      foto: 'assets/team-jose-victor.jpg?v=4',
    },
    {
      nome: 'Railton Pires',
      cargo: 'Diretor de Operações',
      formacao: [
        'Eng. Civil',
      ],
      foto: 'assets/team-railton.jpg?v=4',
    },
  ];

  return (
    <section data-screen-label="time" id="time" style={{padding:'100px 0',background:'var(--paper)'}}>
      <div className="wrap">
        <RevealDiv style={{textAlign:'center',maxWidth:580,margin:'0 auto 56px'}}>
          <Pill tone="bordo">Quem faz acontecer</Pill>
          <h2 style={{fontSize:'clamp(32px,3.8vw,52px)',fontWeight:500,marginTop:14,letterSpacing:'-.025em',lineHeight:1.04}}>
            Pessoas reais.<br/>
            <em style={{fontStyle:'italic',color:'var(--bordo)'}}>Comprometidas</em> com você.
          </h2>
          <p style={{color:'var(--ink-2)',fontSize:16,marginTop:14,lineHeight:1.6}}>
            A Casa+ é formada por um time local que conhece Palmas e entende o que uma família precisa para conquistar a casa própria.
          </p>
        </RevealDiv>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}} className="team-grid">
          {team.map((p,i) => <TeamCard key={i} pessoa={p} delay={i*0.12}/>)}
        </div>
      </div>
      <style>{`
        @media (max-width:860px){ .team-grid{grid-template-columns:1fr !important} }
      `}</style>
    </section>
  );
};

// ================= DELIVERIES GALLERY =================
const DeliveriesSection = () => {
  const fotos = [
    {src:'assets/entrega-1.jpg', alt:'Família recebendo a chave da casa nova com a equipe Casa+'},
    {src:'assets/entrega-2.jpg', alt:'Casal comemorando a entrega das chaves com a equipe Casa+'},
    {src:'assets/entrega-3.jpg', alt:'Momento de entrega de chave — Casa+'},
    {src:'assets/entrega-4.jpg', alt:'Família feliz na entrega da casa própria'},
    {src:'assets/entrega-5.jpg', alt:'Entrega de chave — conquista da casa própria'},
  ];

  // Layout: linha 1 = foto grande (span 4) + foto média (span 2)
  //         linha 2 = três fotos iguais (span 2 cada)
  const spans = [4, 2, 2, 2, 2];

  return (
    <section data-screen-label="entregas" id="entregas" style={{padding:'100px 0',background:'#fff'}}>
      <div className="wrap">
        <RevealDiv style={{textAlign:'center',maxWidth:580,margin:'0 auto 52px'}}>
          <Pill tone="bordo">Momentos reais</Pill>
          <h2 style={{fontSize:'clamp(32px,3.8vw,52px)',fontWeight:500,marginTop:14,letterSpacing:'-.025em',lineHeight:1.04}}>
            Famílias que já<br/>
            <em style={{fontStyle:'italic',color:'var(--bordo)'}}>realizaram</em> o sonho.
          </h2>
          <p style={{color:'var(--ink-2)',fontSize:16,marginTop:14,lineHeight:1.6}}>
            Cada chave entregue é uma história que muda. Essas são algumas das nossas favoritas.
          </p>
        </RevealDiv>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(6, 1fr)',
          gap:10,
        }} className="deliveries-grid">
          {fotos.map((f, i) => (
            <RevealDiv key={i} delay={i*0.1} style={{
              gridColumn: `span ${spans[i]}`,
              borderRadius:16,
              overflow:'hidden',
              aspectRatio: i===0 ? '16/10' : '4/5',
              background:'var(--paper-2)',
              position:'relative',
            }}>
              <img
                src={f.src}
                alt={f.alt}
                style={{
                  width:'100%', height:'100%',
                  objectFit:'cover',
                  objectPosition:'center 20%',
                  transition:'transform .55s ease',
                }}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
                onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
              />
              {/* subtle gradient overlay at bottom */}
              <div style={{
                position:'absolute',inset:0,
                background:'linear-gradient(to top, rgba(10,6,4,.35) 0%, transparent 50%)',
                pointerEvents:'none',
              }}/>
            </RevealDiv>
          ))}
        </div>

        {/* CTA row */}
        <RevealDiv delay={0.2} style={{
          marginTop:36,
          display:'flex',alignItems:'center',justifyContent:'center',gap:14,flexWrap:'wrap',
          padding:'22px 28px',
          background:'var(--paper-2)',borderRadius:18,
        }}>
          <div style={{textAlign:'center'}}>
            <div style={{fontFamily:'Archivo',fontSize:20,fontWeight:700,letterSpacing:'-.015em'}}>
              Você pode ser o próximo.
            </div>
            <div style={{color:'var(--ink-2)',fontSize:14,marginTop:2}}>
              Simule sua parcela em 2 minutos.
            </div>
          </div>
          <div style={{display:'flex',gap:10,flexShrink:0}}>
            <Btn variant="primary" size="md" iconRight={<Icon.Arrow size={14}/>}
              onClick={()=>document.getElementById('simulador')?.scrollIntoView({behavior:'smooth'})}>
              Simular agora
            </Btn>
            <WhatsLink>
              <Btn variant="whats" size="md" icon={<Icon.Whats size={16}/>}>WhatsApp</Btn>
            </WhatsLink>
          </div>
        </RevealDiv>
      </div>
      <style>{`
        @media (max-width:860px){
          .deliveries-grid{grid-template-columns:repeat(2,1fr) !important}
          .deliveries-grid > div{grid-column:span 1 !important;aspect-ratio:4/5 !important}
        }
        @media (max-width:520px){
          .deliveries-grid{grid-template-columns:1fr !important}
        }
      `}</style>
    </section>
  );
};

Object.assign(window, { TrustBar, PainSection, HousesSection, HouseCard, ProcessSection, BenefitsStrip, TeamSection, DeliveriesSection });
