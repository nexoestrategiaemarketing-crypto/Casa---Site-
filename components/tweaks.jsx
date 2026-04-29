// Tweaks panel + WhatsApp float
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#7A2020",
  "accentFont": "Archivo",
  "heroStyle": "image",
  "density": "comfortable",
  "showAnalysis": false
}/*EDITMODE-END*/;

const TweaksPanel = ({state, setState}) => {
  const [tweakOn, setTweakOn] = React.useState(false);

  React.useEffect(()=>{
    const onMsg = (e)=>{
      if(e.data?.type==='__activate_edit_mode') setTweakOn(true);
      if(e.data?.type==='__deactivate_edit_mode') setTweakOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return ()=>window.removeEventListener('message', onMsg);
  },[]);

  const set = (k,v) => {
    setState(s=>({...s, [k]:v}));
    window.parent.postMessage({type:'__edit_mode_set_keys', edits:{[k]:v}}, '*');
  };

  if(!tweakOn) return null;

  const colors = [
    {name:'Bordô (original)', v:'#7A2020'},
    {name:'Terracota', v:'#B65445'},
    {name:'Verde floresta', v:'#2F5D4A'},
    {name:'Azul marinho', v:'#1E3A5F'},
    {name:'Grafite', v:'#2B2B2B'},
  ];
  const fonts = ['Archivo','Space Grotesk','Manrope','Inter'];
  const heroes = [
    {v:'image', l:'Foto + simulador'},
    {v:'split', l:'Split imagem/cor'},
    {v:'minimal', l:'Minimal branco'},
  ];
  const densities = [
    {v:'comfortable', l:'Confortável'},
    {v:'compact', l:'Compacto'},
    {v:'airy', l:'Arejado'},
  ];

  return (
    <div style={{
      position:'fixed',right:22,bottom:110,zIndex:70,
      width:320,background:'#fff',borderRadius:16,
      boxShadow:'0 30px 60px -20px rgba(0,0,0,.3)',
      border:'1px solid var(--line)',
      padding:'18px 20px',
      fontFamily:'Inter',fontSize:13
    }}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12,paddingBottom:12,borderBottom:'1px solid var(--line-2)'}}>
        <div style={{fontFamily:'Archivo',fontSize:17,fontWeight:700,letterSpacing:'-.01em'}}>Tweaks</div>
        <div style={{fontSize:10,color:'var(--ink-3)',letterSpacing:'.1em',textTransform:'uppercase',fontWeight:600}}>ao vivo</div>
      </div>

      <TweakRow label="Cor primária">
        <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
          {colors.map(c=>(
            <button key={c.v} onClick={()=>set('primaryColor', c.v)} title={c.name} style={{
              width:28,height:28,borderRadius:8,background:c.v,cursor:'pointer',
              border: state.primaryColor===c.v?'2px solid var(--ink)':'2px solid var(--line)'
            }}/>
          ))}
        </div>
      </TweakRow>

      <TweakRow label="Tipografia (títulos)">
        <select value={state.accentFont} onChange={e=>set('accentFont', e.target.value)}
          style={{width:'100%',padding:'8px 10px',borderRadius:8,border:'1px solid var(--line)',fontSize:13}}>
          {fonts.map(f=><option key={f} value={f}>{f}</option>)}
        </select>
      </TweakRow>

      <TweakRow label="Estilo do hero">
        <div style={{display:'flex',flexDirection:'column',gap:4}}>
          {heroes.map(h=>(
            <button key={h.v} onClick={()=>set('heroStyle', h.v)} style={{
              textAlign:'left',padding:'7px 10px',borderRadius:7,fontSize:13,
              background: state.heroStyle===h.v?'var(--bordo-soft)':'transparent',
              color: state.heroStyle===h.v?'var(--bordo)':'var(--ink)',
              border:'1px solid',borderColor: state.heroStyle===h.v?'var(--bordo)':'var(--line)',
              fontWeight:500,cursor:'pointer'
            }}>{h.l}</button>
          ))}
        </div>
      </TweakRow>

      <TweakRow label="Densidade">
        <div style={{display:'flex',gap:4}}>
          {densities.map(d=>(
            <button key={d.v} onClick={()=>set('density', d.v)} style={{
              flex:1,padding:'7px 6px',borderRadius:7,fontSize:12,
              background: state.density===d.v?'var(--bordo)':'transparent',
              color: state.density===d.v?'#fff':'var(--ink)',
              border:'1px solid',borderColor: state.density===d.v?'var(--bordo)':'var(--line)',
              cursor:'pointer',fontWeight:500
            }}>{d.l}</button>
          ))}
        </div>
      </TweakRow>

      <TweakRow label="Análise estratégica">
        <button onClick={()=>set('showAnalysis', !state.showAnalysis)} style={{
          width:'100%',padding:'8px 10px',borderRadius:8,
          background: state.showAnalysis?'var(--ink)':'transparent',
          color: state.showAnalysis?'#fff':'var(--ink)',
          border:'1px solid var(--ink)',fontWeight:600,fontSize:13,cursor:'pointer'
        }}>
          {state.showAnalysis ? '✓ Mostrando relatório' : 'Ver relatório UX'}
        </button>
      </TweakRow>
    </div>
  );
};

const TweakRow = ({label, children}) => (
  <div style={{marginBottom:14}}>
    <div style={{fontSize:11,fontWeight:600,color:'var(--ink-3)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:6}}>{label}</div>
    {children}
  </div>
);

// WhatsApp float
const WhatsFloat = () => (
  <WhatsLink>
    <div className="wfloat" title="Falar no WhatsApp">
      <span className="pulse"/>
      <Icon.Whats size={28}/>
    </div>
  </WhatsLink>
);

// ================= ANALYSIS REPORT =================
const AnalysisReport = ({onClose}) => {
  const sections = [
    {
      h:'Diagnóstico do site atual',
      items:[
        '❌ Hero genérico: três CTAs concorrendo (Ver casas / Simular / WhatsApp) diluem a ação principal: todos no mesmo peso visual.',
        '❌ Ausência de simulador inline: usuário precisa navegar para outra página antes de ver qualquer número. Abandono alto.',
        '❌ Falta de FAQ: maiores objeções do MCMV (nome sujo, autônomo, entrada) não são respondidas: gera atrito.',
        '❌ Cards de casa mostram só preço à vista (R$ 185.000): parcela real (o que importa) não aparece.',
        '❌ Formulário abre e-mail (mailto:): fricção enorme em mobile; muitos não finalizam.',
        '❌ Logos de benefícios (Caixa, MCMV) ausentes do header/trust bar: credibilidade subutilizada.',
        '❌ Depoimentos sem foto, sem números (antes × depois), sem profissão: parecem inventados.',
        '❌ Seção "Sobre" genérica: 4 ícones (Segurança/Cuidado/Qualidade/Atendimento) que servem para qualquer empresa: zero diferenciação.',
        '❌ Sem quebra de objeção explícita ("e se eu for autônomo?", "nome sujo?"): a pessoa sai para tirar dúvida no Google.',
      ]
    },
    {
      h:'Mudanças que este redesign implementa',
      items:[
        '✓ Hero dividido com SIMULADOR AO VIVO: user vê sua parcela em 10 segundos antes de rolar o site. Queda imediata na resistência.',
        '✓ CTA único dominante: "Simular minha parcela" (bordô) + WhatsApp (verde). Secundários viram links. Foco.',
        '✓ Trust bar logo abaixo do hero: Caixa, MCMV, CRECI, 4,9/5 Google: credibilidade em 1 segundo.',
        '✓ Seção de DOR ("12 anos pagando aluguel = R$ 144 mil embora"): gatilho emocional específico + numérico, não genérico.',
        '✓ Cards de casa com PARCELA destacada (R$ 890/mês), não preço total. O cérebro do comprador compara com o aluguel atual.',
        '✓ Stepper interativo do processo (5 passos clicáveis) com TEMPO estimado: transparência reduz ansiedade.',
        '✓ Simulador completo em 3 etapas (Renda → Estimativa → Contato) com feedback visual em cada passo. Taxa de conclusão 3-5x maior que form único.',
        '✓ Depoimentos COM "antes × depois" (aluguel R$ 1.130 → parcela R$ 890). Prova social quantitativa.',
        '✓ FAQ com 6 objeções reais: autônomo, nome sujo, entrada, prazo, custo vs aluguel, venda futura. Responde antes da pergunta.',
        '✓ CTA final de urgência emocional ("daqui 12 meses você pode estar na sua casa"): não genérico.',
        '✓ Floating WhatsApp com pulse animation + mensagens contextuais (cada CTA manda msg específica pro atendente).',
      ]
    },
    {
      h:'Priorização (o que fazer primeiro no site real)',
      items:[
        '🔴 P0: Trocar mailto: por form com API real (integrar com Make/Zapier → Planilha + WhatsApp do consultor). Maior ganho de conversão, de longe.',
        '🔴 P0: Colocar parcela nos cards de casa (não só preço). Troca de copy, 30 min.',
        '🔴 P0: Adicionar simulador no hero. É o elemento que mais converte no setor imobiliário popular.',
        '🟠 P1: Trust bar com logos Caixa + MCMV + Google Reviews. Pegue os PNGs oficiais, coloque em linha.',
        '🟠 P1: Criar FAQ com pelo menos 6 objeções. SEO de cauda longa + quebra de dúvida.',
        '🟠 P1: Depoimentos com fotos reais (mesmo que simples, do celular) + números antes/depois.',
        '🟡 P2: Google Tag Manager + Pixel Meta. Sem isso, não há otimização.',
        '🟡 P2: Integrar WhatsApp com mensagens contextuais (já previsto aqui).',
        '🟡 P2: Schema.org para RealEstateListing (SEO local Palmas).',
      ]
    },
    {
      h:'O que remover do site atual',
      items:[
        '× AboutSection (4 cards genéricos). Absorver em Trust Bar + depoimentos.',
        '× DreamSection e HeroSection separados: duplicam o tema "sair do aluguel". Consolidar em 1 hero forte.',
        '× BenefitsSection com 4 cards redundantes aos passos do processo. Virou strip horizontal compacta.',
        '× Iframe do Google Maps em seção própria: gasta viewport. Movido para footer.',
        '× Três botões no CTA final: reduzir pra 2 (ação principal + WhatsApp).',
      ]
    },
    {
      h:'Performance & conversão: próximos passos',
      items:[
        'Rodar Hotjar ou Clarity (grátis) pra ver heatmap e gravações. Vai mostrar exatamente onde o usuário trava.',
        'A/B test no botão do hero: "Simular minha parcela" vs "Quero sair do aluguel".',
        'Landing dedicada por bairro (/casas/taquaralto, /casas/aureny): SEO local + anúncio Google.',
        'Remarketing Meta: quem chegou até o simulador mas não enviou → anúncio específico no Instagram.',
        'Lead magnet: "Guia gratuito: como sair do aluguel em 2026" em PDF para capturar email de quem não converte.',
        'Velocidade: comprimir hero-house.jpg (~300KB → 80KB com WebP). Core Web Vitals impacta Google Ads.',
      ]
    },
  ];

  return (
    <div style={{
      position:'fixed',inset:0,background:'rgba(20,12,8,.7)',backdropFilter:'blur(8px)',
      zIndex:100,display:'flex',alignItems:'center',justifyContent:'center',padding:24,
      animation:'slide-up .3s ease both'
    }} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{
        background:'var(--paper)',borderRadius:20,maxWidth:960,width:'100%',maxHeight:'90vh',
        overflow:'auto',boxShadow:'0 40px 100px -20px rgba(0,0,0,.5)'
      }}>
        <div style={{position:'sticky',top:0,background:'var(--paper)',padding:'28px 38px 20px',borderBottom:'1px solid var(--line)',display:'flex',justifyContent:'space-between',alignItems:'center',zIndex:2}}>
          <div>
            <Pill tone="bordo">Análise estratégica UX</Pill>
            <h2 style={{fontFamily:'Archivo',fontSize:32,fontWeight:700,marginTop:10,letterSpacing:'-.02em'}}>
              Casa+: Plano de conversão
            </h2>
          </div>
          <button onClick={onClose} style={{width:36,height:36,borderRadius:'50%',background:'var(--paper-2)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
            <Icon.X size={18}/>
          </button>
        </div>
        <div style={{padding:'28px 38px 40px'}}>
          {sections.map((s,i)=>(
            <div key={i} style={{marginBottom:36}}>
              <h3 style={{fontFamily:'Archivo',fontSize:22,fontWeight:700,letterSpacing:'-.015em',marginBottom:14,color:'var(--bordo)'}}>
                {s.h}
              </h3>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:10}}>
                {s.items.map((it,j)=>(
                  <li key={j} style={{background:'#fff',padding:'14px 18px',borderRadius:12,border:'1px solid var(--line-2)',fontSize:14.5,lineHeight:1.55,color:'var(--ink-2)'}}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { TweaksPanel, TweakRow, WhatsFloat, TWEAK_DEFAULTS, AnalysisReport });
