// Simple stroke icons: monoline, consistent
const IconBase = ({size=20,stroke=2,children,...p}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    {children}
  </svg>
);

const Icon = {
  Phone: (p)=><IconBase {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></IconBase>,
  Whats: (p)=><IconBase {...p} stroke={0} fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.5 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.3 3.3.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3Z"/><path d="M22 12a10 10 0 0 1-15 8.7L2 22l1.3-4.7A10 10 0 1 1 22 12Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></IconBase>,
  Arrow: (p)=><IconBase {...p}><path d="M5 12h14M13 5l7 7-7 7"/></IconBase>,
  Check: (p)=><IconBase {...p}><path d="M20 6 9 17l-5-5"/></IconBase>,
  CheckCircle: (p)=><IconBase {...p}><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/></IconBase>,
  Calc: (p)=><IconBase {...p}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h8"/></IconBase>,
  Pin: (p)=><IconBase {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></IconBase>,
  Bed: (p)=><IconBase {...p}><path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6M2 18h20M2 18v2M22 18v2M6 10V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></IconBase>,
  Ruler: (p)=><IconBase {...p}><path d="M21 3 3 21l-1-1L20 2l1 1ZM7 11l2 2M10 8l2 2M13 5l2 2M5 17l2 2M2 20l1 1"/></IconBase>,
  Bath: (p)=><IconBase {...p}><path d="M4 12V6a2 2 0 0 1 4 0M2 12h20M5 22l1-4M19 22l-1-4M4 18h16a0 0 0 0 0 0 0c2 0 2-6 0-6H4s-2 0 0 6Z"/></IconBase>,
  Car: (p)=><IconBase {...p}><path d="M19 17h2v-5l-2-5H5L3 12v5h2M7 17v2M17 17v2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></IconBase>,
  Star: (p)=><IconBase {...p} fill="currentColor" stroke="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"/></IconBase>,
  Plus: (p)=><IconBase {...p}><path d="M12 5v14M5 12h14"/></IconBase>,
  Minus: (p)=><IconBase {...p}><path d="M5 12h14"/></IconBase>,
  Menu: (p)=><IconBase {...p}><path d="M3 6h18M3 12h18M3 18h18"/></IconBase>,
  X: (p)=><IconBase {...p}><path d="M18 6 6 18M6 6l12 12"/></IconBase>,
  Instagram: (p)=><IconBase {...p}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></IconBase>,
  Mail: (p)=><IconBase {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></IconBase>,
  Shield: (p)=><IconBase {...p}><path d="M12 2 4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></IconBase>,
  Heart: (p)=><IconBase {...p}><path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1A5.5 5.5 0 0 0 3 13L12 22l9-9a5.5 5.5 0 0 0 0-7.4Z"/></IconBase>,
  Key: (p)=><IconBase {...p}><circle cx="7" cy="17" r="3"/><path d="m9.5 14.5 9-9 3 3-2 2-2-2-2 2 2 2-3 3"/></IconBase>,
  Clock: (p)=><IconBase {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></IconBase>,
  Doc: (p)=><IconBase {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></IconBase>,
  Wallet: (p)=><IconBase {...p}><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20M16 14h2"/></IconBase>,
  Hammer: (p)=><IconBase {...p}><path d="m15 12-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9M18 15l3-3-6-6-3 3M14 7l6 6"/></IconBase>,
  Users: (p)=><IconBase {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></IconBase>,
  Spark: (p)=><IconBase {...p}><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></IconBase>,
  Home: (p)=><IconBase {...p}><path d="m3 11 9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9Z"/></IconBase>,
  Tag: (p)=><IconBase {...p}><path d="M20.6 13.6 13 21.2 2.8 11V2.8H11l10.2 10.2a1.4 1.4 0 0 1 0 2v-.4Z"/><circle cx="7" cy="7" r="1" fill="currentColor"/></IconBase>,
  Zap: (p)=><IconBase {...p} fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></IconBase>,
  Google: (p)=><IconBase {...p} stroke={0}><path fill="#4285F4" d="M22 12.2c0-.7 0-1.3-.2-2H12v4h5.6a4.8 4.8 0 0 1-2 3.2v2.6h3.3c2-1.8 3.1-4.5 3.1-7.8Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4L15.4 17a6 6 0 0 1-9-3.2H3v2.6A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.4 13.8a6 6 0 0 1 0-3.6V7.6H3a10 10 0 0 0 0 8.8l3.4-2.6Z"/><path fill="#EA4335" d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3 7.6l3.4 2.6A6 6 0 0 1 12 6.1Z"/></IconBase>,
  Logo: ({size=40, color='currentColor', withText=false, inverted=false, ...p})=>(
    <img src="assets/logo-casamais-oficial.png" alt="Casa+"
      style={{
        height: size,
        width:'auto',
        filter: inverted ? 'brightness(0) invert(1)' : 'none',
        display:'block'
      }} {...p}/>
  ),
  LogoMark: ({size=40, inverted=false, ...p})=>(
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...p}>
      <path d="M20 20 H70 A10 10 0 0 1 80 30 V80 A0 0 0 0 1 80 80 H30 A10 10 0 0 1 20 70 Z"
        stroke={inverted?'#fff':'var(--bordo)'} strokeWidth="8" fill="none" strokeLinejoin="round"/>
      <path d="M32 58 L50 40 L68 58 V72 H32 Z" fill={inverted?'#fff':'var(--bordo)'}/>
    </svg>
  )
};

window.Icon = Icon;
