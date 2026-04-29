// ================= FULL SIMULATOR =================
const FullSimulator = ({simValues, setSimValues}) => {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    nome:'', whatsapp:'', cidade:'Palmas',
    preco: simValues?.price || 220000,
    renda: simValues?.income || 1621,
    fgts:5000,
  });

  // Sincroniza quando o usuário muda os sliders na hero
  React.useEffect(()=>{
    if(step === 1 && simValues) {
      setForm(f=>({...f, preco: simValues.price, renda: simValues.income}));
    }
  }, [simValues?.price, simValues?.income]);
  const [sent, setSent] = React.useState(false);
  const est = estimateParcel({price:form.preco, income:form.renda, fgts:form.fgts});

  const update = (k,v) => {
    setForm(s=>({...s, [k]:v}));
    if(k==='preco' && setSimValues) setSimValues(s=>({...s, price:v}));
    if(k==='renda' && setSimValues) setSimValues(s=>({...s, income:v}));
  };
  const canStep2 = form.renda >= 1621 && form.preco <= est.imovelMax;
  const canSend = form.nome.length>2 && form.whatsapp.length>=10;
  const precoExcede = form.preco > est.imovelMax;

  const [sending, setSending] = React.useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if(!canSend || sending) return;
    setSending(true);

    const payload = {
      access_key: 'b8afd69e-8c01-42a3-9b94-a2e566357177',
      subject: `Novo lead Casa+ — ${form.nome}`,
      from_name: 'Site Casa+',
      nome: form.nome,
      whatsapp: form.whatsapp,
      cidade: form.cidade,
      valor_imovel: fmtBRL(form.preco),
      renda_familiar: fmtBRL(form.renda),
      saldo_fgts: fmtBRL(form.fgts),
      parcela_estimada: fmtBRL(est.parcela),
      subsidio_estimado: fmtBRL(est.subsidy),
      faixa_mcmv: `Faixa ${est.faixa} — juros ${est.juros}% a.a.`,
      viavel: est.viavel ? 'Sim' : 'Verificar',
    };

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      });
    } catch(_) {}

    setSending(false);
    setSent(true);
  };

  return (
    <section data-screen-label="simulador" id="simulador" style={{
      padding:'100px 0',
      background:`linear-gradient(135deg, var(--bordo) 0%, var(--bordo-dark) 100%)`,
      color:'#fff',position:'relative',overflow:'hidden'
    }}>
      <div style={{position:'absolute',top:-100,right:-100,width:400,height:400,borderRadius:'50%',background:'oklch(0.52 0.11 25 / .4)',filter:'blur(80px)'}}/>
      <div className="wrap" style={{position:'relative'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:60,alignItems:'start'}} className="sim-grid">
          <div>
            <Pill tone="bordo" style={{background:'rgba(255,255,255,.14)',color:'#fff',border:'1px solid rgba(255,255,255,.2)'}}>
              Gratuito · Sem consulta ao SPC
            </Pill>
            <h2 style={{fontSize:'clamp(34px, 4vw, 56px)',fontWeight:500,marginTop:18,letterSpacing:'-.025em',lineHeight:1.04}}>
              Simule sua parcela<br/>
              em <em style={{fontStyle:'italic',color:'var(--bordo-soft)'}}>2 minutos</em>.
            </h2>
            <p style={{fontSize:17,lineHeight:1.55,color:'rgba(255,255,255,.82)',marginTop:22,maxWidth:440}}>
              Resposta no WhatsApp <strong>em breve</strong>. Sem consulta ao SPC. Sem compromisso.
            </p>

            <div style={{marginTop:36,display:'flex',flexDirection:'column',gap:16}}>
              {[
                'Descobre sua parcela exata e subsídio disponível',
                'Consultor dedicado ajuda com toda a papelada',
                'Aprovação na Caixa em 5 a 20 dias úteis',
              ].map((t,i)=>(
                <div key={i} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                  <div style={{width:22,height:22,borderRadius:'50%',background:'rgba(255,255,255,.18)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,marginTop:1}}>
                    <Icon.Check size={13}/>
                  </div>
                  <div style={{fontSize:15,color:'rgba(255,255,255,.9)'}}>{t}</div>
                </div>
              ))}
            </div>

            <div style={{marginTop:34,padding:'18px 22px',background:'rgba(0,0,0,.18)',borderRadius:14,display:'flex',gap:14,alignItems:'center'}}>
              <div style={{width:44,height:44,borderRadius:'50%',background:'var(--whats)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <Icon.Whats size={22}/>
              </div>
              <div style={{fontSize:14,lineHeight:1.4}}>
                <strong>Prefere falar no WhatsApp?</strong><br/>
                <WhatsLink><span style={{color:'var(--bordo-soft)',textDecoration:'underline'}}>{PHONE_DISPLAY} · falar agora</span></WhatsLink>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div style={{
            background:'#fff',color:'var(--ink)',
            borderRadius:22,overflow:'hidden',
            boxShadow:'0 40px 80px -20px rgba(0,0,0,.35)',
          }}>
            {/* progress */}
            <div style={{padding:'22px 30px 0'}}>
              <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}>
                {[1,2,3].map(n=>(
                  <React.Fragment key={n}>
                    <div style={{
                      width:28,height:28,borderRadius:'50%',
                      background: step>=n ? 'var(--bordo)' : 'var(--line)',
                      color: step>=n ? '#fff' : 'var(--ink-3)',
                      display:'flex',alignItems:'center',justifyContent:'center',
                      fontSize:12,fontWeight:700
                    }}>{step>n ? <Icon.Check size={12}/> : n}</div>
                    {n<3 && <div style={{flex:1,height:2,background: step>n ? 'var(--bordo)' : 'var(--line)',borderRadius:2}}/>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div style={{padding:'6px 34px 32px'}}>
              {!sent && step===1 && (
                <div style={{animation:'slide-up .3s ease both'}}>
                  <div style={{fontSize:11,color:'var(--bordo)',fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase'}}>Passo 1 de 3</div>
                  <h3 style={{fontFamily:'Archivo',fontSize:26,fontWeight:700,marginTop:6,letterSpacing:'-.02em'}}>Simule sua compra</h3>
                  <p style={{color:'var(--ink-3)',fontSize:14,marginTop:6}}>Preencha os valores para ver sua estimativa real.</p>

                  <div style={{marginTop:26}}>
                    <Slider label="Valor do imóvel" value={form.preco} min={220000} max={600000} step={5000}
                      onChange={v=>update('preco',v)} format={fmtBRL}/>
                    <div style={{marginTop:24}}>
                      <Slider label="Renda familiar" value={form.renda} min={1621} max={13000} step={1}
                        onChange={v=>{
                          const s = v<=1621?1621:v>=13000?13000:Math.round(v/100)*100;
                          update('renda',s);
                        }} format={fmtBRL}/>
                    </div>
                    <div style={{marginTop:24}}>
                      <Slider label="Saldo de FGTS (aproximado)" value={form.fgts} min={0} max={60000} step={500}
                        onChange={v=>update('fgts',v)} format={fmtBRL}/>
                    </div>
                  </div>

                  {/* aviso renda mínima */}
                  {form.renda < 1621 && (
                    <div style={{marginTop:20,padding:'12px 16px',background:'oklch(0.95 0.04 60)',borderRadius:10,fontSize:13,color:'oklch(0.4 0.1 60)',display:'flex',gap:8,alignItems:'flex-start'}}>
                      <Icon.Clock size={15} style={{flexShrink:0,marginTop:1}}/>
                      <span><strong>Atenção:</strong> a renda mínima para o MCMV é R$ 1.621 (1 salário mínimo). Fale com a gente para compor renda com cônjuge se necessário.</span>
                    </div>
                  )}

                  {/* aviso valor do imóvel acima do limite da faixa */}
                  {precoExcede && (
                    <div style={{marginTop:20,padding:'14px 16px',background:'oklch(0.96 0.03 25)',border:'1.5px solid oklch(0.85 0.06 25)',borderRadius:12,fontSize:13,color:'oklch(0.38 0.12 25)',display:'flex',gap:10,alignItems:'flex-start'}}>
                      <Icon.Clock size={16} style={{flexShrink:0,marginTop:1}}/>
                      <div style={{lineHeight:1.55}}>
                        <strong>Valor do imóvel acima do limite para sua renda.</strong><br/>
                        Com renda de {fmtBRL(form.renda)}, você se enquadra na <strong>Faixa {est.faixa}</strong> do MCMV, cujo imóvel máximo é <strong>{fmtBRL(est.imovelMax)}</strong>.<br/>
                        <span style={{marginTop:4,display:'block'}}>Ajuste o valor do imóvel para prosseguir ou fale com a gente para mais opções.</span>
                      </div>
                    </div>
                  )}

                  <Btn variant="primary" size="lg"
                    style={{width:'100%',marginTop:26,opacity:canStep2?1:.45,pointerEvents:canStep2?'auto':'none'}}
                    onClick={()=>setStep(2)} iconRight={<Icon.Arrow size={16}/>}>
                    Ver minha simulação
                  </Btn>
                  <div style={{fontSize:11,color:'var(--ink-3)',textAlign:'center',marginTop:10,lineHeight:1.5}}>
                    Simulação de caráter estimativo. Os valores são aproximados e podem variar conforme análise da Caixa.
                  </div>
                </div>
              )}

              {!sent && step===2 && (
                <div style={{animation:'slide-up .3s ease both'}}>
                  <div style={{fontSize:11,color:'var(--bordo)',fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase'}}>Passo 2 de 3</div>
                  <h3 style={{fontFamily:'Archivo',fontSize:26,fontWeight:700,marginTop:6,letterSpacing:'-.02em'}}>Sua estimativa</h3>

                  <div style={{marginTop:20,background:'var(--paper)',borderRadius:16,padding:'22px 24px',border:'1px solid var(--line-2)'}}>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>
                      <MetricBig label="Parcela estimada" value={fmtBRL(est.parcela)} sub="por 360 meses" tone="bordo"/>
                      <MetricBig label="Subsídio do governo" value={`até ${fmtBRL(est.subsidy)}`} sub="não precisa devolver" tone="success"/>
                    </div>
                    <div style={{borderTop:'1px dashed var(--line)',marginTop:18,paddingTop:16,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12}}>
                      <Metric label="Valor financiado" value={fmtBRL(est.financiado)}/>
                      <Metric label="Entrada (FGTS)" value={fmtBRL(est.entrada)}/>
                      <Metric label="Comprometido" value={`${est.comprometido}%`} ok={est.comprometido<=30}/>
                    </div>
                  </div>

                  <div style={{marginTop:16,padding:'14px 16px',borderRadius:12,
                    background: est.viavel ? 'oklch(0.95 0.04 155)' : 'oklch(0.95 0.04 60)',
                    color: est.viavel ? 'oklch(0.35 0.12 155)' : 'oklch(0.4 0.1 60)',
                    fontSize:14,fontWeight:500,display:'flex',gap:10,alignItems:'center'}}>
                    {est.viavel ? <Icon.CheckCircle size={18}/> : <Icon.Clock size={18}/>}
                    {est.viavel
                      ? <span><strong>Boa notícia!</strong> Seu perfil é compatível. Avance para receber a proposta.</span>
                      : <span>Vamos avaliar juntos. Existem caminhos mesmo assim.</span>}
                  </div>

                  <div style={{display:'flex',gap:10,marginTop:22}}>
                    <Btn variant="ghost" size="lg" onClick={()=>setStep(1)}>← Ajustar</Btn>
                    <Btn variant="primary" size="lg" style={{flex:1}} onClick={()=>setStep(3)} iconRight={<Icon.Arrow size={16}/>}>
                      Receber proposta personalizada
                    </Btn>
                  </div>
                </div>
              )}

              {!sent && step===3 && (
                <form onSubmit={onSubmit} style={{animation:'slide-up .3s ease both'}}>
                  <div style={{fontSize:11,color:'var(--bordo)',fontWeight:700,letterSpacing:'.14em',textTransform:'uppercase'}}>Passo 3 de 3</div>
                  <h3 style={{fontFamily:'Archivo',fontSize:26,fontWeight:700,marginTop:6,letterSpacing:'-.02em'}}>Como podemos te chamar?</h3>
                  <p style={{color:'var(--ink-3)',fontSize:14,marginTop:6}}>Nosso consultor vai entrar em contato pelo seu WhatsApp em breve.</p>

                  <div style={{marginTop:22,display:'flex',flexDirection:'column',gap:14}}>
                    <Field label="Seu nome" value={form.nome} onChange={v=>update('nome',v)} placeholder="Maria Silva"/>
                    <Field label="WhatsApp" value={form.whatsapp} onChange={v=>update('whatsapp',v)} placeholder="(63) 99999-9999"/>
                    <Field label="Cidade" value={form.cidade} onChange={v=>update('cidade',v)} placeholder="Palmas"/>
                  </div>

                  <div style={{display:'flex',gap:10,marginTop:22}}>
                    <Btn variant="ghost" size="lg" type="button" onClick={()=>setStep(2)}>← Voltar</Btn>
                    <Btn variant="primary" size="lg" type="submit" style={{flex:1,opacity:canSend?1:.5,pointerEvents:canSend?'auto':'none'}}
                      iconRight={<Icon.Arrow size={16}/>}>
                      Enviar e falar com consultor
                    </Btn>
                  </div>
                  <div style={{fontSize:11,color:'var(--ink-3)',textAlign:'center',marginTop:14,lineHeight:1.5}}>
                    Ao enviar você concorda em receber contato da Casa+. Seus dados são 100% protegidos (LGPD).
                  </div>
                </form>
              )}

              {sent && (
                <div style={{textAlign:'center',padding:'20px 0 10px',animation:'slide-up .3s ease both'}}>
                  <div style={{width:64,height:64,borderRadius:'50%',background:'oklch(0.95 0.04 155)',color:'var(--success)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 18px'}}>
                    <Icon.CheckCircle size={34}/>
                  </div>
                  <h3 style={{fontFamily:'Archivo',fontSize:28,fontWeight:700,letterSpacing:'-.02em'}}>Recebemos, {form.nome.split(' ')[0]}!</h3>
                  <p style={{color:'var(--ink-2)',fontSize:15,marginTop:10,maxWidth:360,margin:'10px auto 0'}}>
                    Em breve nosso consultor vai te chamar no WhatsApp <strong>{form.whatsapp}</strong> com a proposta completa.
                  </p>
                  <WhatsLink msg={`Olá! Acabei de preencher o simulador rápido da Casa+ e gostaria de adiantar a conversa.`}>
                    <Btn variant="whats" size="lg" icon={<Icon.Whats size={18}/>} style={{marginTop:22}}>
                      Adiantar conversa no WhatsApp
                    </Btn>
                  </WhatsLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 960px){ .sim-grid{grid-template-columns:1fr !important;gap:40px !important} }`}</style>
    </section>
  );
};

const Metric = ({label, value, ok}) => (
  <div>
    <div style={{fontSize:11,color:'var(--ink-3)',letterSpacing:'.06em',textTransform:'uppercase',fontWeight:600}}>{label}</div>
    <div style={{fontFamily:'Archivo',fontSize:17,fontWeight:700,marginTop:3,letterSpacing:'-.01em',color: ok===false?'oklch(0.55 0.15 30)':'var(--ink)'}}>{value}</div>
  </div>
);
const MetricBig = ({label, value, sub, tone}) => (
  <div>
    <div style={{fontSize:11,color:'var(--ink-3)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600}}>{label}</div>
    <div style={{fontFamily:'Archivo',fontSize:28,fontWeight:700,marginTop:4,letterSpacing:'-.02em',lineHeight:1.05,color: tone==='bordo'?'var(--bordo)':'var(--success)'}}>{value}</div>
    <div style={{fontSize:11,color:'var(--ink-3)',marginTop:3}}>{sub}</div>
  </div>
);

const Field = ({label, value, onChange, placeholder}) => (
  <div>
    <label style={{fontSize:12,color:'var(--ink-2)',fontWeight:600,letterSpacing:'.02em',marginBottom:6,display:'block'}}>{label}</label>
    <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
      style={{
        width:'100%',padding:'13px 16px',borderRadius:11,
        border:'1.5px solid var(--line)',background:'#fff',
        fontSize:15,transition:'border-color .15s ease',
      }}
      onFocus={e=>e.target.style.borderColor='var(--bordo)'}
      onBlur={e=>e.target.style.borderColor='var(--line)'}/>
  </div>
);

// ================= TESTIMONIALS =================
const Testimonials = () => {
  // ⚠️ Depoimentos ilustrativos — substituir pelos reais quando disponível
  const deps = [
    {
      nome: 'Ana Paula S.',
      local: 'Morada do Sol · Palmas/TO',
      texto: 'Achei que nunca ia conseguir sair do aluguel. A Casa+ resolveu tudo em menos de dois meses — documentação, aprovação na Caixa e entrega da chave. Hoje pago menos do que pagava de aluguel.',
    },
    {
      nome: 'Carlos e Fernanda M.',
      local: 'Taquaralto · Palmas/TO',
      texto: 'Meu marido é autônomo e tínhamos muito medo de não ser aprovados. O time da Casa+ nos orientou em cada etapa e deu tudo certo. O subsídio foi uma surpresa enorme.',
    },
    {
      nome: 'Rodrigo A.',
      local: 'Aureny III · Palmas/TO',
      texto: 'Processo muito transparente. Sabia exatamente o valor da parcela desde o início, sem surpresas. Recebi a chave no prazo combinado. Recomendo sem hesitar.',
    },
    {
      nome: 'Márcia L.',
      local: 'Sul de Palmas · Palmas/TO',
      texto: 'Não acreditava que meu FGTS ia cobrir a entrada inteira. Acabei não precisando tirar nada do bolso na assinatura. Atendimento nota 10, muito humano e paciente.',
    },
    {
      nome: 'Família Pereira',
      local: 'Jardim Palmas · Palmas/TO',
      texto: 'Sonho realizado! Sempre tivemos receio pela burocracia, mas foi muito mais simples do que esperávamos. A equipe da Casa+ esteve presente em cada passo.',
    },
    {
      nome: 'Josilene R.',
      local: 'Palmas · TO',
      texto: 'Fui indicada por uma amiga e não me arrependo. Atendimento rápido, honesto e sem enrolação. Em 60 dias saí do aluguel e entrei na minha casa.',
    },
  ];

  const Stars = () => (
    <div style={{display:'flex',gap:3,marginBottom:16}}>
      {[1,2,3,4,5].map(i=>(
        <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="var(--bordo)">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );

  const DepCard = ({d}) => (
    <div style={{
      background:'#fff',
      borderRadius:20,
      border:'1px solid var(--line)',
      padding:'28px 26px 26px',
      display:'flex',flexDirection:'column',
      height:'100%',
      boxShadow:'var(--shadow-sm)',
    }}>
      {/* aspas decorativas */}
      <div style={{
        fontFamily:'Georgia,serif',fontSize:64,lineHeight:.8,
        color:'var(--bordo-soft)',fontWeight:700,marginBottom:8,
        userSelect:'none',
      }}>"</div>
      <Stars/>
      <p style={{
        fontSize:15,lineHeight:1.7,color:'var(--ink-2)',
        flex:1,marginBottom:20,
      }}>
        {d.texto}
      </p>
      <div style={{display:'flex',alignItems:'center',gap:12,paddingTop:18,borderTop:'1px solid var(--line-2)'}}>
        <div style={{
          width:40,height:40,borderRadius:'50%',flexShrink:0,
          background:'var(--bordo)',color:'#fff',
          display:'flex',alignItems:'center',justifyContent:'center',
          fontFamily:'Archivo',fontSize:16,fontWeight:700,
        }}>{d.nome[0]}</div>
        <div>
          <div style={{fontFamily:'Archivo',fontSize:15,fontWeight:700,letterSpacing:'-.01em',color:'var(--ink)'}}>{d.nome}</div>
          <div style={{fontSize:12,color:'var(--ink-3)',marginTop:2}}>{d.local}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section data-screen-label="depoimentos" id="depoimentos" style={{padding:'100px 0',background:'var(--paper)'}}>
      <div className="wrap">

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',marginBottom:52,flexWrap:'wrap',gap:20}}>
          <RevealDiv>
            <Pill tone="bordo">Depoimentos</Pill>
            <h2 style={{fontSize:'clamp(32px, 3.8vw, 52px)',fontWeight:500,marginTop:14,letterSpacing:'-.025em',lineHeight:1.04}}>
              O que dizem<br/>
              nossas <em style={{fontStyle:'italic',color:'var(--bordo)'}}>famílias</em>.
            </h2>
          </RevealDiv>
          <RevealDiv delay={0.1} style={{display:'flex',alignItems:'center',gap:14}}>
            <div style={{width:44,height:44,borderRadius:12,background:'linear-gradient(135deg,#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <Icon.Instagram size={22} style={{color:'#fff'}}/>
            </div>
            <div>
              <div style={{fontFamily:'Archivo',fontSize:20,fontWeight:700,letterSpacing:'-.01em'}}>@casamais.to</div>
              <div style={{fontSize:12,color:'var(--ink-3)'}}>Acompanhe no Instagram</div>
            </div>
          </RevealDiv>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}} className="deps-grid">
          {deps.map((d,i)=>(
            <RevealDiv key={i} delay={i*0.08}>
              <DepCard d={d}/>
            </RevealDiv>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width:960px){ .deps-grid{grid-template-columns:repeat(2,1fr) !important} }
        @media (max-width:600px){ .deps-grid{grid-template-columns:1fr !important} }
      `}</style>
    </section>
  );
};

// ================= FAQ =================
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  const items = [
    {q:'Eu posso financiar mesmo sendo autônomo ou MEI?',
     a:'Sim. A Caixa aceita renda de autônomo, MEI e informal. A gente te orienta como comprovar (extratos, declaração, DAS). Muitos dos nossos clientes são autônomos.'},
    {q:'Preciso ter nome limpo?',
     a:'Nome sujo no SPC/Serasa não impede de imediato: depende da gravidade e tempo. Fazemos uma pré-análise sigilosa antes de qualquer consulta formal.'},
    {q:'Qual o valor da entrada?',
     a:'A entrada mínima é 3% do valor. Você pode pagar com FGTS, não precisa ter dinheiro poupado. Quanto mais FGTS, menor sua parcela.'},
    {q:'Quanto tempo leva do cadastro até a chave?',
     a:'Em média 45 a 90 dias. A aprovação na Caixa leva 5 a 20 dias; depois é assinatura, avaliação do imóvel e registro. Casas prontas entregam mais rápido.'},
    {q:'Posso pagar mais barato que o aluguel que pago hoje?',
     a:'Na maioria dos casos, sim. Com o subsídio do governo e a parcela fixa do MCMV, o custo mensal costuma ser bem menor que o aluguel equivalente em Palmas — especialmente para quem se enquadra nas Faixas 1 e 2. Fale com a gente para simular o seu caso.'},
    {q:'E se depois eu quiser vender ou sair?',
     a:'A casa é sua. Pode vender, alugar ou transferir o financiamento. Só pede carência mínima de alguns anos para transferir subsídio.'},
  ];
  return (
    <section data-screen-label="faq" id="faq" style={{padding:'100px 0',background:'var(--paper)'}}>
      <div className="wrap" style={{maxWidth:980}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:60,alignItems:'start'}} className="faq-grid">
          <RevealDiv style={{position:'sticky',top:100}}>
            <Pill tone="bordo">Perguntas frequentes</Pill>
            <h2 style={{fontSize:'clamp(32px, 3.6vw, 48px)',fontWeight:500,marginTop:14,letterSpacing:'-.025em',lineHeight:1.05}}>
              Antes de você <em style={{fontStyle:'italic',color:'var(--bordo)'}}>perguntar</em>.
            </h2>
            <p style={{color:'var(--ink-2)',fontSize:16,marginTop:18,lineHeight:1.55}}>
              Se sua dúvida não estiver aqui, chama a gente no WhatsApp. Nenhuma pergunta é boba, a gente responde todas.
            </p>
            <WhatsLink>
              <Btn variant="whats" size="md" icon={<Icon.Whats size={16}/>} style={{marginTop:20}}>
                Tirar dúvida no WhatsApp
              </Btn>
            </WhatsLink>
          </RevealDiv>

          <div>
            {items.map((it,i)=>{
              const isOpen = open===i;
              return (
                <div key={i} style={{
                  borderBottom:'1px solid var(--line)',
                  padding:'4px 0'
                }}>
                  <button onClick={()=>setOpen(isOpen?-1:i)} style={{
                    width:'100%',textAlign:'left',
                    display:'flex',justifyContent:'space-between',alignItems:'center',
                    padding:'20px 0',gap:16,
                    background:'transparent',cursor:'pointer'
                  }}>
                    <div style={{fontFamily:'Archivo',fontSize:19,fontWeight:700,letterSpacing:'-.015em',lineHeight:1.35,flex:1}}>
                      {it.q}
                    </div>
                    <div style={{
                      width:34,height:34,borderRadius:'50%',
                      background: isOpen ? 'var(--bordo)' : 'var(--paper-2)',
                      color: isOpen ? '#fff' : 'var(--ink)',
                      display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
                      transition:'all .2s ease'
                    }}>{isOpen ? <Icon.Minus size={16}/> : <Icon.Plus size={16}/>}</div>
                  </button>
                  {isOpen && (
                    <p style={{color:'var(--ink-2)',fontSize:15,lineHeight:1.6,paddingBottom:22,maxWidth:580,animation:'slide-up .25s ease both'}}>
                      {it.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`@media (max-width:860px){ .faq-grid{grid-template-columns:1fr !important;gap:32px !important} .faq-grid > div:first-child{position:static !important} }`}</style>
    </section>
  );
};

// ================= FINAL CTA =================
const FinalCTA = () => (
  <section data-screen-label="cta-final" id="contato" style={{padding:'120px 0',background:'var(--ink)',color:'#fff',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,backgroundImage:'url(assets/family-keys.jpg)',backgroundSize:'cover',backgroundPosition:'center right',opacity:.25,filter:'grayscale(30%)'}}/>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg, var(--ink) 40%, transparent 80%)'}}/>
    <div className="wrap" style={{position:'relative'}}>
      <RevealDiv style={{maxWidth:720}}>
        <Pill tone="bordo" style={{background:'rgba(255,255,255,.12)',color:'#fff',border:'1px solid rgba(255,255,255,.2)'}}>
          Última chamada para 2026
        </Pill>
        <h2 style={{fontSize:'clamp(40px, 5vw, 72px)',fontWeight:500,marginTop:22,letterSpacing:'-.028em',lineHeight:.98}}>
          Daqui a 12 meses<br/>
          você pode estar<br/>
          <em style={{fontStyle:'italic',color:'var(--bordo-light)'}}>na sua casa.</em>
        </h2>
        <p style={{fontSize:19,lineHeight:1.5,color:'rgba(255,255,255,.78)',marginTop:24,maxWidth:520}}>
          Ou pagando mais 12 meses de aluguel. A decisão começa com uma conversa de 10 minutos.
        </p>
        <div style={{display:'flex',gap:12,marginTop:36,flexWrap:'wrap'}}>
          <Btn variant="invert" size="xl" onClick={()=>document.getElementById('simulador')?.scrollIntoView({behavior:'smooth'})} iconRight={<Icon.Arrow size={18}/>}>
            Simular minha casa agora
          </Btn>
          <WhatsLink>
            <Btn variant="whats" size="xl" icon={<Icon.Whats size={20}/>}>WhatsApp direto</Btn>
          </WhatsLink>
        </div>
      </RevealDiv>
    </div>
  </section>
);

// ================= FOOTER =================
const Footer = () => (
  <footer style={{background:'#0d0807',color:'rgba(255,255,255,.7)',padding:'70px 0 28px'}}>
    <div className="wrap">
      <div style={{display:'grid',gridTemplateColumns:'1.4fr 1fr 1fr 1fr',gap:40,marginBottom:50}} className="footer-grid">
        <RevealDiv>
          <Icon.Logo size={44} inverted={true}/>
          <p style={{fontSize:14,lineHeight:1.6,marginTop:18,maxWidth:320}}>
            A casa que muda sua história. Especialistas em Minha Casa Minha Vida em Palmas · TO há 6 anos.
          </p>
          <div style={{marginTop:22,display:'flex',gap:10}}>
            <a href="https://instagram.com/casamais.to" target="_blank" rel="noopener" style={{width:38,height:38,borderRadius:'50%',background:'rgba(255,255,255,.08)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>
              <Icon.Instagram size={16}/>
            </a>
            <WhatsLink>
              <span style={{width:38,height:38,borderRadius:'50%',background:'var(--whats)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>
                <Icon.Whats size={17}/>
              </span>
            </WhatsLink>
          </div>
        </RevealDiv>
        <RevealDiv delay={0.1}>
          <h4 style={{color:'#fff',fontFamily:'Inter',fontSize:13,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:16}}>Navegar</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:10,fontSize:14}}>
            <li><a href="#casas">Casas disponíveis</a></li>
            <li><a href="#processo">Como funciona</a></li>
            <li><a href="#simulador">Simular financiamento</a></li>
            <li><a href="#entregas">Entregas</a></li>
            <li><a href="#time">Nosso time</a></li>
            <li><a href="#faq">Perguntas frequentes</a></li>
          </ul>
        </RevealDiv>
        <RevealDiv delay={0.2}>
          <h4 style={{color:'#fff',fontFamily:'Inter',fontSize:13,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:16}}>Contato</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:12,fontSize:14}}>
            <li><a href="https://maps.app.goo.gl/mLRBaXd5W54hVti7A" target="_blank" rel="noopener" style={{display:'flex',gap:9,alignItems:'center'}}><Icon.Pin size={14}/>Palmas · TO</a></li>
            <li><WhatsLink style={{display:'flex',gap:9,alignItems:'center'}}><Icon.Phone size={14}/>(63) 99949-6259</WhatsLink></li>
            <li><a href="mailto:casamais.incorp@gmail.com" style={{display:'flex',gap:9,alignItems:'center'}}><Icon.Mail size={14}/>casamais.incorp@gmail.com</a></li>
            <li style={{display:'flex',gap:9,alignItems:'center'}}><Icon.Clock size={14}/>Seg-Sex · 8h às 18h</li>
          </ul>
        </RevealDiv>
        <RevealDiv delay={0.3}>
          <h4 style={{color:'#fff',fontFamily:'Inter',fontSize:13,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',marginBottom:16}}>Credenciamentos</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:10,fontSize:13,color:'rgba(255,255,255,.55)'}}>
            <li>Habilitada pela CAIXA</li>
            <li>Programa MCMV · Governo Federal</li>
            <li>CNPJ 62.420.863/0001-75</li>
          </ul>
        </RevealDiv>
      </div>
      <div style={{paddingTop:24,borderTop:'1px solid rgba(255,255,255,.08)',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12,fontSize:12}}>
        <div>© {new Date().getFullYear()} Casa+. Todos os direitos reservados.</div>
        <div style={{display:'flex',gap:22,color:'rgba(255,255,255,.4)'}}>
          <span>Política de privacidade</span>
          <span>Termos de uso</span>
          <span>LGPD</span>
        </div>
      </div>
    </div>
    <style>{`@media (max-width:880px){ .footer-grid{grid-template-columns:1fr 1fr !important} } @media (max-width:520px){ .footer-grid{grid-template-columns:1fr !important} }`}</style>
  </footer>
);

Object.assign(window, { FullSimulator, Testimonials, FAQ, FinalCTA, Footer });
