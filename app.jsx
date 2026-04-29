// Main App
const { useState, useEffect } = React;

const App = () => {
  const [state, setState] = useState(window.TWEAK_DEFAULTS);
  const [simValues, setSimValues] = useState({price: 220000, income: 1621});

  // Apply tweaks
  useEffect(()=>{
    const root = document.documentElement;
    const c = state.primaryColor;
    root.style.setProperty('--bordo', c);
    root.style.setProperty('--bordo-dark', shade(c, -0.15));
    root.style.setProperty('--bordo-light', shade(c, 0.12));
    root.style.setProperty('--bordo-soft', shade(c, 0.55));

    document.querySelectorAll('h1,h2,h3,h4,h5,blockquote').forEach(el=>{
      if(!el.closest('[data-sans]')) el.style.fontFamily = `'${state.accentFont}', Georgia, serif`;
    });
  }, [state.primaryColor, state.accentFont]);

  return (
    <div data-density={state.density}>
      <Navbar state={state} setState={setState}/>
      <Hero state={state} simValues={simValues} setSimValues={setSimValues}/>
      <PainSection/>
      <HousesSection/>
      <ProcessSection/>
      <BenefitsStrip/>
      <FullSimulator simValues={simValues} setSimValues={setSimValues}/>
      <TeamSection/>
      <DeliveriesSection/>
      <FAQ/>
      <FinalCTA/>
      <Footer/>
      <WhatsFloat/>
      <TweaksPanel state={state} setState={setState}/>
      {state.showAnalysis && <AnalysisReport onClose={()=>setState(s=>({...s,showAnalysis:false}))}/>}
    </div>
  );
};

// tiny hex shade helper
function shade(hex, amt){
  const h = hex.replace('#','');
  const n = parseInt(h.length===3?h.split('').map(x=>x+x).join(''):h,16);
  let r = (n>>16)&255, g = (n>>8)&255, b = n&255;
  if(amt>=0){ r = Math.round(r + (255-r)*amt); g = Math.round(g + (255-g)*amt); b = Math.round(b + (255-b)*amt); }
  else { r = Math.round(r*(1+amt)); g = Math.round(g*(1+amt)); b = Math.round(b*(1+amt)); }
  return '#'+[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('');
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
