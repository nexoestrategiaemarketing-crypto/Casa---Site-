// GERADO AUTOMATICAMENTE por build.js — nao edite este arquivo.
// Edite os componentes em components/*.jsx e rode: npm run build
/* components/icons.jsx */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const IconBase = ({
  size = 20,
  stroke = 2,
  children,
  ...p
}) => React.createElement("svg", _extends({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, p), children);
const Icon = {
  Phone: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"
  })),
  Whats: p => React.createElement(IconBase, _extends({}, p, {
    stroke: 0,
    fill: "currentColor"
  }), React.createElement("path", {
    d: "M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.5 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.3 3.3.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3Z"
  }), React.createElement("path", {
    d: "M22 12a10 10 0 0 1-15 8.7L2 22l1.3-4.7A10 10 0 1 1 22 12Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    fill: "none"
  })),
  Arrow: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  })),
  Check: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  CheckCircle: p => React.createElement(IconBase, p, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "m8.5 12 2.5 2.5 4.5-5"
  })),
  Calc: p => React.createElement(IconBase, p, React.createElement("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2"
  }), React.createElement("path", {
    d: "M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h8"
  })),
  Pin: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  Bed: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6M2 18h20M2 18v2M22 18v2M6 10V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
  })),
  Ruler: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M21 3 3 21l-1-1L20 2l1 1ZM7 11l2 2M10 8l2 2M13 5l2 2M5 17l2 2M2 20l1 1"
  })),
  Bath: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M4 12V6a2 2 0 0 1 4 0M2 12h20M5 22l1-4M19 22l-1-4M4 18h16a0 0 0 0 0 0 0c2 0 2-6 0-6H4s-2 0 0 6Z"
  })),
  Car: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M19 17h2v-5l-2-5H5L3 12v5h2M7 17v2M17 17v2"
  }), React.createElement("circle", {
    cx: "7",
    cy: "17",
    r: "2"
  }), React.createElement("circle", {
    cx: "17",
    cy: "17",
    r: "2"
  })),
  Star: p => React.createElement(IconBase, _extends({}, p, {
    fill: "currentColor",
    stroke: "currentColor"
  }), React.createElement("path", {
    d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z"
  })),
  Plus: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  Minus: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M5 12h14"
  })),
  Menu: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18"
  })),
  X: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })),
  Instagram: p => React.createElement(IconBase, p, React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "0.6",
    fill: "currentColor"
  })),
  Mail: p => React.createElement(IconBase, p, React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), React.createElement("path", {
    d: "m2 6 10 7 10-7"
  })),
  Shield: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M12 2 4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5l-8-3Z"
  }), React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  Heart: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1A5.5 5.5 0 0 0 3 13L12 22l9-9a5.5 5.5 0 0 0 0-7.4Z"
  })),
  Key: p => React.createElement(IconBase, p, React.createElement("circle", {
    cx: "7",
    cy: "17",
    r: "3"
  }), React.createElement("path", {
    d: "m9.5 14.5 9-9 3 3-2 2-2-2-2 2 2 2-3 3"
  })),
  Clock: p => React.createElement(IconBase, p, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  Doc: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
  }), React.createElement("path", {
    d: "M14 2v6h6M9 13h6M9 17h4"
  })),
  Wallet: p => React.createElement(IconBase, p, React.createElement("rect", {
    x: "2",
    y: "6",
    width: "20",
    height: "14",
    rx: "2"
  }), React.createElement("path", {
    d: "M2 10h20M16 14h2"
  })),
  Hammer: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "m15 12-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9M18 15l3-3-6-6-3 3M14 7l6 6"
  })),
  Users: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"
  })),
  Spark: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"
  })),
  Home: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "m3 11 9-8 9 8v9a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2v-9Z"
  })),
  Tag: p => React.createElement(IconBase, p, React.createElement("path", {
    d: "M20.6 13.6 13 21.2 2.8 11V2.8H11l10.2 10.2a1.4 1.4 0 0 1 0 2v-.4Z"
  }), React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "1",
    fill: "currentColor"
  })),
  Zap: p => React.createElement(IconBase, _extends({}, p, {
    fill: "currentColor"
  }), React.createElement("path", {
    d: "M13 2 3 14h7l-1 8 10-12h-7l1-8Z"
  })),
  Google: p => React.createElement(IconBase, _extends({}, p, {
    stroke: 0
  }), React.createElement("path", {
    fill: "#4285F4",
    d: "M22 12.2c0-.7 0-1.3-.2-2H12v4h5.6a4.8 4.8 0 0 1-2 3.2v2.6h3.3c2-1.8 3.1-4.5 3.1-7.8Z"
  }), React.createElement("path", {
    fill: "#34A853",
    d: "M12 22c2.7 0 5-.9 6.7-2.4L15.4 17a6 6 0 0 1-9-3.2H3v2.6A10 10 0 0 0 12 22Z"
  }), React.createElement("path", {
    fill: "#FBBC05",
    d: "M6.4 13.8a6 6 0 0 1 0-3.6V7.6H3a10 10 0 0 0 0 8.8l3.4-2.6Z"
  }), React.createElement("path", {
    fill: "#EA4335",
    d: "M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3 7.6l3.4 2.6A6 6 0 0 1 12 6.1Z"
  })),
  Logo: ({
    size = 40,
    color = 'currentColor',
    withText = false,
    inverted = false,
    ...p
  }) => React.createElement("img", _extends({
    src: "assets/logo-casamais-oficial.png",
    alt: "Casa+",
    style: {
      height: size,
      width: 'auto',
      filter: inverted ? 'brightness(0) invert(1)' : 'none',
      display: 'block'
    }
  }, p)),
  LogoMark: ({
    size = 40,
    inverted = false,
    ...p
  }) => React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none"
  }, p), React.createElement("path", {
    d: "M20 20 H70 A10 10 0 0 1 80 30 V80 A0 0 0 0 1 80 80 H30 A10 10 0 0 1 20 70 Z",
    stroke: inverted ? '#fff' : 'var(--bordo)',
    strokeWidth: "8",
    fill: "none",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M32 58 L50 40 L68 58 V72 H32 Z",
    fill: inverted ? '#fff' : 'var(--bordo)'
  }))
};
window.Icon = Icon;

/* components/shared.jsx */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WHATSAPP_URL = "https://wa.me/5563992324571?text=Olá, vim pelo site do Casa+ e quero sair do aluguel.";
const PHONE_DISPLAY = "(63) 99232-4571";
const fmtBRL = v => v.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0
});
const fmtBRLd = v => v.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
function estimateParcel({
  price,
  income,
  fgts = 0,
  age = 35
}) {
  let faixa, juros, subsidyMax, imovelMax;
  if (income <= 3200) {
    faixa = 1;
    juros = 0.04;
    subsidyMax = 49500;
    imovelMax = 255000;
  } else if (income <= 5000) {
    faixa = 2;
    juros = 0.05;
    subsidyMax = 30000;
    imovelMax = 255000;
  } else if (income <= 9600) {
    faixa = 3;
    juros = 0.0791;
    subsidyMax = 0;
    imovelMax = 400000;
  } else {
    faixa = 4;
    juros = 0.10;
    subsidyMax = 0;
    imovelMax = 600000;
  }
  let subsidy = 0;
  if (faixa === 1) subsidy = Math.round(49500 * (1 - Math.max(0, income - 2000) / 1400));else if (faixa === 2) subsidy = Math.round(30000 * (1 - (income - 3200) / 1800));
  subsidy = Math.max(0, Math.min(subsidy, subsidyMax, price * 0.40));
  const n = Math.max(60, Math.min(420, (80 - age) * 12));
  const prazoReduzido = n < 360;
  const valorLiq = Math.max(0, price - subsidy);
  const entrada20 = valorLiq * 0.20;
  const fgtsEntrada = Math.min(fgts, entrada20);
  const fgtsExtra = Math.max(0, fgts - entrada20);
  const entradaCash = Math.max(0, entrada20 - fgtsEntrada);
  let financiado = Math.max(0, valorLiq * 0.80 - fgtsExtra);
  const i = juros / 12;
  const pow = Math.pow(1 + i, n);
  const pmtFactor = i > 0 ? i * pow / (pow - 1) : 1 / n;
  const segTaxa = 0.00028;
  const calcTotal = f => f * pmtFactor + f * segTaxa + 25;
  const parcelaMax = Math.floor(income * 0.30);
  const totalBase = calcTotal(financiado);
  let entradaExtra = 0;
  if (totalBase > parcelaMax && financiado > 0) {
    const financiadoMax = Math.max(0, (parcelaMax - 25) / (pmtFactor + segTaxa));
    entradaExtra = Math.round(Math.max(0, financiado - financiadoMax));
    financiado = Math.max(0, financiado - entradaExtra);
  }
  const totalFinal = calcTotal(financiado);
  const capped = entradaExtra > 0;
  const comprometido = totalFinal / income;
  const viavel = comprometido <= 0.30 && income >= 1621 && price <= imovelMax && financiado > 0;
  const parcelaMax30 = parcelaMax;
  return {
    faixa,
    juros: +(juros * 100).toFixed(2),
    imovelMax,
    subsidy: Math.round(subsidy),
    financiado: Math.round(financiado),
    entrada: Math.round(entradaCash),
    entradaExtra,
    entradaTotal: Math.round(entradaCash + entradaExtra),
    parcela: Math.round(totalFinal),
    parcelaMax: parcelaMax30,
    capped,
    n,
    prazoReduzido,
    comprometido: Math.round(comprometido * 100),
    viavel
  };
}
function minFaixaIncome(price) {
  if (price <= 255000) return 1621;
  if (price <= 400000) return 5001;
  return 9601;
}
const Btn = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  children,
  className = '',
  style = {},
  ...p
}) => {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'Inter',
    fontWeight: 600,
    borderRadius: size === 'sm' ? 10 : 12,
    transition: 'all .18s ease',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
    ...(size === 'sm' && {
      padding: '8px 14px',
      fontSize: 13
    }),
    ...(size === 'md' && {
      padding: '12px 20px',
      fontSize: 14
    }),
    ...(size === 'lg' && {
      padding: '15px 24px',
      fontSize: 15
    }),
    ...(size === 'xl' && {
      padding: '18px 28px',
      fontSize: 16
    })
  };
  const styles = {
    primary: {
      background: 'var(--bordo)',
      color: '#fff',
      boxShadow: '0 4px 14px -4px oklch(0.42 0.13 25 / .4)'
    },
    dark: {
      background: 'var(--ink)',
      color: 'var(--paper)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid var(--line)'
    },
    whats: {
      background: 'var(--whats)',
      color: '#fff',
      boxShadow: '0 4px 14px -4px rgba(37,211,102,.5)'
    },
    outline: {
      background: '#fff',
      color: 'var(--bordo)',
      border: '1.5px solid var(--bordo)'
    },
    invert: {
      background: '#fff',
      color: 'var(--bordo)'
    },
    paper: {
      background: 'var(--paper-2)',
      color: 'var(--ink)'
    }
  };
  return React.createElement("button", _extends({}, p, {
    className: className,
    style: {
      ...base,
      ...styles[variant],
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.filter = 'brightness(1.05)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.filter = '';
    }
  }), icon, children, iconRight);
};
const WhatsLink = ({
  children,
  msg,
  ...p
}) => {
  const url = msg ? `https://wa.me/5563992324571?text=${encodeURIComponent(msg)}` : WHATSAPP_URL;
  return React.createElement("a", _extends({
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, p), children);
};
const Pill = ({
  tone = 'bordo',
  children,
  style = {}
}) => {
  const map = {
    bordo: {
      bg: 'oklch(0.95 0.03 25)',
      color: 'var(--bordo)'
    },
    success: {
      bg: 'oklch(0.95 0.03 155)',
      color: 'var(--success)'
    },
    ink: {
      bg: 'oklch(0.18 0.01 40 / .08)',
      color: 'var(--ink)'
    },
    paper: {
      bg: 'var(--paper-2)',
      color: 'var(--ink)'
    }
  };
  const s = map[tone];
  return React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 11px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.01em',
      background: s.bg,
      color: s.color,
      fontFamily: 'Inter',
      ...style
    }
  }, children);
};
const ImgPh = ({
  label,
  ratio = '16/10',
  style = {}
}) => React.createElement("div", {
  style: {
    aspectRatio: ratio,
    background: 'repeating-linear-gradient(45deg, oklch(0.90 0.02 50), oklch(0.90 0.02 50) 10px, oklch(0.93 0.02 50) 10px, oklch(0.93 0.02 50) 20px)',
    color: 'var(--ink-3)',
    fontFamily: 'ui-monospace,monospace',
    fontSize: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'inherit',
    ...style
  }
}, label);
const RevealDiv = ({
  children,
  delay = 0,
  style = {},
  className = '',
  ...props
}) => {
  const ref = React.useRef();
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in-view');
        obs.disconnect();
      }
    }, {
      threshold: 0.12
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return React.createElement("div", _extends({
    ref: ref,
    className: `reveal-on-scroll${className ? ' ' + className : ''}`,
    style: {
      transitionDelay: `${delay}s`,
      ...style
    }
  }, props), children);
};
Object.assign(window, {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  fmtBRL,
  fmtBRLd,
  estimateParcel,
  minFaixaIncome,
  Btn,
  WhatsLink,
  Pill,
  ImgPh,
  RevealDiv
});

/* components/nav-hero.jsx */
const Navbar = ({
  state,
  setState
}) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    label: 'Casas',
    href: '#casas'
  }, {
    label: 'Como funciona',
    href: '#processo'
  }, {
    label: 'Simular',
    href: '#simulador'
  }, {
    label: 'Nosso time',
    href: '#time'
  }, {
    label: 'Entregas',
    href: '#entregas'
  }, {
    label: 'Dúvidas',
    href: '#faq'
  }, {
    label: 'Contato',
    href: '#contato'
  }];
  return React.createElement("header", {
    "data-screen-label": "nav",
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(250,247,242,.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-2)' : '1px solid transparent',
      transition: 'all .25s ease'
    }
  }, React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72
    }
  }, React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement(Icon.Logo, {
    size: 44,
    inverted: !scrolled
  })), React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      alignItems: 'center'
    },
    className: "nav-links"
  }, links.map(l => React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      fontSize: 13.5,
      fontWeight: 500,
      letterSpacing: '.01em',
      color: scrolled ? 'var(--ink-2)' : 'rgba(255,255,255,.86)',
      transition: 'color .15s'
    },
    onMouseEnter: e => e.currentTarget.style.color = scrolled ? 'var(--bordo)' : '#fff',
    onMouseLeave: e => e.currentTarget.style.color = scrolled ? 'var(--ink-2)' : 'rgba(255,255,255,.86)'
  }, l.label))), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement("a", {
    href: `tel:+5563992324571`,
    className: "nav-phone",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 13,
      fontWeight: 600,
      color: scrolled ? 'var(--ink)' : '#fff'
    }
  }, React.createElement(Icon.Phone, {
    size: 15
  }), " ", PHONE_DISPLAY), React.createElement(Btn, {
    variant: "primary",
    size: "sm",
    onClick: () => document.getElementById('simulador')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    }),
    iconRight: React.createElement(Icon.Arrow, {
      size: 14
    })
  }, "Simular gr\xE1tis"))), React.createElement("style", null, `
        @media (max-width: 960px){
          .nav-links{display:none !important}
          .nav-phone{display:none !important}
        }
      `));
};
const Hero = ({
  state,
  simValues,
  setSimValues
}) => {
  const price = simValues.price;
  const income = simValues.income;
  const setPrice = v => setSimValues(s => ({
    ...s,
    price: v
  }));
  const setIncome = v => setSimValues(s => ({
    ...s,
    income: v
  }));
  const est = estimateParcel({
    price,
    income,
    fgts: 0
  });
  return React.createElement("section", {
    "data-screen-label": "hero",
    id: "top",
    style: {
      position: 'relative',
      minHeight: 'min(100vh, 860px)',
      paddingTop: 72,
      color: '#fff',
      overflow: 'hidden',
      background: 'var(--ink)',
      paddingBottom: 0
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, React.createElement("img", {
    src: "assets/hero-house.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'scale(1.02)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(100deg, oklch(0.18 0.02 30 / .92) 0%, oklch(0.18 0.02 30 / .78) 38%, oklch(0.18 0.02 30 / .35) 70%, oklch(0.18 0.02 30 / 0) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10,10,10,.4) 0%, transparent 20%, transparent 70%, var(--paper) 100%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .08,
      mixBlendMode: 'overlay',
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`
    }
  })), React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 2,
      paddingTop: 80,
      paddingBottom: 80,
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 60,
      alignItems: 'center',
      minHeight: 'calc(100vh - 72px)'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.75)'
    }
  }, React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: 'rgba(255,255,255,.5)'
    }
  }), "Programa Minha Casa Minha Vida \xB7 Caixa"), React.createElement("h1", {
    style: {
      fontSize: 'clamp(40px, 5.6vw, 82px)',
      fontWeight: 800,
      marginTop: 22,
      letterSpacing: '-.04em',
      lineHeight: 0.94,
      animation: 'reveal .9s cubic-bezier(.2,.7,.2,1) both'
    }
  }, "Pare de pagar", React.createElement("br", null), "aluguel. Comece", React.createElement("br", null), "a pagar ", React.createElement("span", {
    style: {
      color: 'var(--bordo-light)'
    }
  }, "a sua\xA0casa.")), React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 18,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,.78)',
      maxWidth: 520,
      fontWeight: 400
    }
  }, "Casas prontas ou na planta em Palmas com parcela que cabe no bolso, subs\xEDdio do governo e atendimento humano do primeiro clique at\xE9 a chave na m\xE3o."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    onClick: () => document.getElementById('simulador')?.scrollIntoView({
      behavior: 'smooth'
    }),
    iconRight: React.createElement(Icon.Arrow, {
      size: 16
    })
  }, "Simular minha parcela"), React.createElement(WhatsLink, null, React.createElement(Btn, {
    variant: "whats",
    size: "lg",
    icon: React.createElement(Icon.Whats, {
      size: 18
    })
  }, "Falar no WhatsApp"))), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 44,
      flexWrap: 'wrap'
    }
  }, [{
    k: '+100',
    v: 'famílias atendidas'
  }, {
    k: '6 anos',
    v: 'construindo em Palmas'
  }, {
    k: '100%',
    v: 'atendimento humano'
  }].map((s, i) => React.createElement("div", {
    key: s.k,
    style: {
      animation: `count-up .6s cubic-bezier(.2,.7,.2,1) ${0.4 + i * 0.12}s both`
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.03em'
    }
  }, s.k), React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .65,
      marginTop: 2,
      letterSpacing: '.02em'
    }
  }, s.v))))), React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,.97)',
      color: 'var(--ink)',
      borderRadius: 20,
      padding: '28px 30px 26px',
      boxShadow: '0 40px 80px -20px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.1)',
      backdropFilter: 'blur(20px)',
      position: 'relative',
      animation: 'reveal 1s cubic-bezier(.2,.7,.2,1) .3s both'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--bordo)',
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, "Simulador r\xE1pido"), React.createElement(Pill, {
    tone: "success",
    style: {
      fontSize: 10
    }
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--success)',
      display: 'inline-block'
    }
  }), "AO VIVO")), React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      margin: '2px 0 18px',
      letterSpacing: '-.025em'
    }
  }, "Sua parcela em 30 segundos"), React.createElement(Slider, {
    label: "Valor da casa",
    value: price,
    min: 220000,
    max: 600000,
    step: 5000,
    onChange: setPrice,
    format: fmtBRL
  }), React.createElement(Slider, {
    label: "Sua renda familiar",
    value: income,
    min: 1621,
    max: 13000,
    step: 1,
    onChange: v => {
      const s = v <= 1621 ? 1621 : v >= 13000 ? 13000 : Math.round(v / 100) * 100;
      setIncome(s);
    },
    format: fmtBRL
  }), React.createElement("div", {
    style: {
      marginTop: 20,
      padding: '18px 20px',
      background: 'var(--paper-2)',
      borderRadius: 14,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 11,
      color: est.capped ? 'oklch(0.45 0.15 30)' : 'var(--ink-3)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, est.capped ? 'Limite aprovável' : 'Parcela a partir de'), React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 36,
      fontWeight: 800,
      color: 'var(--bordo)',
      letterSpacing: '-.035em',
      lineHeight: 1,
      marginTop: 4
    }
  }, fmtBRL(est.parcela), React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      fontWeight: 500,
      fontFamily: 'Inter'
    }
  }, "/m\xEAs")), est.capped && React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'oklch(0.45 0.15 30)',
      marginTop: 4,
      fontWeight: 500
    }
  }, "+", fmtBRL(est.entradaExtra), " entrada adicional necess\xE1ria")), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, est.subsidy > 0 ? 'Subsídio estimado' : 'Entrada estimada'), React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 22,
      fontWeight: 800,
      color: est.subsidy > 0 ? 'var(--success)' : 'var(--ink)',
      letterSpacing: '-.025em',
      marginTop: 4,
      lineHeight: 1.1
    }
  }, est.subsidy > 0 ? fmtBRL(est.subsidy) : fmtBRL(est.entrada)), React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, est.subsidy > 0 ? 'do governo' : `+ ${fmtBRL(est.financiado)} financiados`))), React.createElement("div", {
    style: {
      marginTop: 12,
      padding: '12px 14px',
      borderRadius: 10,
      background: 'var(--paper)',
      border: '1px solid var(--line-2)',
      fontSize: 13,
      lineHeight: 1.45
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      marginBottom: price > est.imovelMax ? 8 : 0
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      background: 'var(--bordo)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 800,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Archivo'
    }
  }, "F", est.faixa), "Faixa ", est.faixa, " \xB7 juros ", est.juros, "% a.a."), React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "Im\xF3vel at\xE9 ", fmtBRL(est.imovelMax))), price > est.imovelMax && React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      color: 'oklch(0.45 0.15 30)',
      fontWeight: 500
    }
  }, React.createElement(Icon.Clock, {
    size: 14,
    style: {
      marginTop: 2,
      flexShrink: 0
    }
  }), React.createElement("span", null, "Com renda de ", fmtBRL(income), " (Faixa ", est.faixa, "), o valor m\xE1ximo do im\xF3vel \xE9 ", React.createElement("strong", null, fmtBRL(est.imovelMax)), ". Ajuste o valor da casa ou fale com a gente."))), React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%',
      marginTop: 14
    },
    onClick: () => document.getElementById('simulador')?.scrollIntoView({
      behavior: 'smooth'
    }),
    iconRight: React.createElement(Icon.Arrow, {
      size: 16
    })
  }, "Receber proposta completa"), React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      textAlign: 'center',
      marginTop: 10,
      lineHeight: 1.5
    }
  }, "Estimativa aproximada \xB7 Valores podem variar \xB7 Sem consulta ao SPC"))), React.createElement("style", null, `
        @media (max-width: 960px){
          #top .wrap{grid-template-columns:1fr !important;gap:40px !important}
        }
      `));
};
const Slider = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format
}) => {
  const pct = (value - min) / (max - min) * 100;
  return React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6
    }
  }, React.createElement("label", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)',
      fontWeight: 500
    }
  }, label), React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-.015em'
    }
  }, format(value))), React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value)),
    style: {
      width: '100%',
      height: 8,
      appearance: 'none',
      WebkitAppearance: 'none',
      background: `linear-gradient(to right, var(--bordo) 0%, var(--bordo) ${pct}%, var(--line) ${pct}%, var(--line) 100%)`,
      borderRadius: 10,
      outline: 'none',
      cursor: 'pointer'
    }
  }), React.createElement("style", null, `
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:3px solid var(--bordo);cursor:grab;box-shadow:0 2px 8px rgba(0,0,0,.15)}
        input[type=range]::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid var(--bordo);cursor:grab}
      `));
};
Object.assign(window, {
  Navbar,
  Hero,
  Slider
});

/* components/middle.jsx */
const TrustBar = () => {
  const items = [{
    label: 'Habilitada',
    sub: 'CAIXA'
  }, {
    label: 'Programa',
    sub: 'Minha Casa Minha Vida'
  }, {
    label: 'Governo',
    sub: 'Federal'
  }, {
    label: 'CRECI-TO',
    sub: 'J-1127'
  }, {
    label: 'Selo',
    sub: 'Construtor Responsável'
  }];
  return React.createElement("section", {
    "data-screen-label": "trust",
    style: {
      background: 'var(--paper)',
      borderBottom: '1px solid var(--line-2)',
      padding: '22px 0'
    }
  }, React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--ink-3)',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      flexShrink: 0
    }
  }, "Credenciamentos"), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      alignItems: 'center',
      flexWrap: 'wrap',
      flex: 1,
      justifyContent: 'space-around'
    }
  }, items.map((it, i) => React.createElement(RevealDiv, {
    key: i,
    delay: i * 0.08
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      opacity: .72
    }
  }, React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, it.label), React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink)',
      letterSpacing: '-.01em'
    }
  }, it.sub)))))));
};
const PainSection = () => {
  const dores = [{
    n: '01',
    t: '10 anos pagando aluguel',
    d: 'Mais de R$ 100 mil que foram embora. Você poderia ter pago boa parte da casa.'
  }, {
    n: '02',
    t: '"Não vai ser aprovado"',
    d: 'A burocracia assusta, mas a gente resolve os papéis no seu lugar.'
  }, {
    n: '03',
    t: 'Medo de não caber no bolso',
    d: 'Parcela fixa, sem surpresas. Cabe no orçamento de quem ganha desde 1 salário.'
  }];
  return React.createElement("section", {
    "data-screen-label": "pain",
    style: {
      padding: '100px 0 80px',
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 60,
      alignItems: 'end'
    },
    className: "pain-grid"
  }, React.createElement(RevealDiv, null, React.createElement(Pill, {
    tone: "bordo"
  }, "Para quem quer sair do aluguel"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(34px, 4vw, 58px)',
      fontWeight: 500,
      marginTop: 18,
      letterSpacing: '-.025em',
      lineHeight: 1.02
    }
  }, "Todo m\xEAs, o aluguel", React.createElement("br", null), "leva um ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--bordo)'
    }
  }, "peda\xE7o"), " do", React.createElement("br", null), "seu sonho.")), React.createElement(RevealDiv, {
    delay: 0.15
  }, React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: 'var(--ink-2)',
      maxWidth: 540,
      justifySelf: 'end'
    }
  }, "A boa not\xEDcia: em Palmas, fam\xEDlias com renda familiar de at\xE9 ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "R$ 13.000"), " podem financiar a casa pr\xF3pria pelo Minha Casa Minha Vida, com subs\xEDdio do governo e parcela ", React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "menor que o aluguel"), " que pagam hoje."))), React.createElement("div", {
    style: {
      marginTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 0,
      border: '1px solid var(--line)',
      borderRadius: 20,
      overflow: 'hidden',
      background: '#fff'
    },
    className: "pain-cards"
  }, dores.map((d, i) => React.createElement(RevealDiv, {
    key: i,
    delay: i * 0.13,
    style: {
      padding: '34px 30px',
      borderRight: i < 2 ? '1px solid var(--line)' : 'none',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 40,
      fontWeight: 600,
      color: 'var(--bordo)',
      opacity: .25,
      letterSpacing: '-.02em',
      lineHeight: 1
    }
  }, d.n), React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      margin: '14px 0 10px',
      letterSpacing: '-.015em'
    }
  }, d.t), React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 14.5,
      lineHeight: 1.55
    }
  }, d.d))))), React.createElement("style", null, `
        @media (max-width: 880px){
          .pain-grid{grid-template-columns:1fr !important;gap:28px !important}
          .pain-cards{grid-template-columns:1fr !important}
          .pain-cards > div{border-right:none !important;border-bottom:1px solid var(--line)}
          .pain-cards > div:last-child{border-bottom:none}
        }
      `));
};
const SHEETS_CSV_URL = "https://docs.google.com/spreadsheets/d/1CENbQit0jypRI6z1dCTgYuiyj6ChwIXa/export?format=csv&gid=1597742939";
const FALLBACK_HOUSES = [{
  projeto: 'Morada do Sol – Sucupira',
  capa: 'assets/house-1.jpg',
  bairro: 'Morada do Sol',
  nome: 'Casa 2',
  valor: 220000,
  area: 59,
  terreno: 150,
  quartos: 2,
  banheiros: 2,
  vagas: 1,
  tag: 'Pronta para morar',
  destaque: true,
  imagem: 'assets/house-1.jpg'
}, {
  projeto: 'Morada do Sol – Sucupira',
  capa: 'assets/house-1.jpg',
  bairro: 'Morada do Sol',
  nome: 'Casa 3',
  valor: 220000,
  area: 59,
  terreno: 150,
  quartos: 2,
  banheiros: 2,
  vagas: 1,
  tag: 'Pronta para morar',
  destaque: false,
  imagem: 'assets/house-2.jpg'
}, {
  projeto: 'Morada do Sol – Sucupira',
  capa: 'assets/house-1.jpg',
  bairro: 'Morada do Sol',
  nome: 'Casa 4',
  valor: 220000,
  area: 59,
  terreno: 150,
  quartos: 2,
  banheiros: 2,
  vagas: 1,
  tag: 'Últimas unidades',
  destaque: false,
  imagem: 'assets/house-3.jpg'
}];
function parseCSV(text) {
  const [header, ...rows] = text.trim().split('\n');
  const keys = header.split(',').map(k => k.trim().replace(/^"|"$/g, '').toLowerCase());
  return rows.map(row => {
    const vals = row.match(/(".*?"|[^,]+|(?<=,)(?=,)|(?<=,)$|^(?=,))/g) || [];
    const obj = {};
    keys.forEach((k, i) => {
      let v = (vals[i] || '').trim().replace(/^"|"$/g, '');
      if (['valor', 'area', 'terreno', 'quartos', 'banheiros', 'vagas'].includes(k)) v = Number(String(v).replace(/\./g, '').replace(',', '.')) || 0;
      if (k === 'destaque') v = v === 'true' || v === '1' || v === 'sim';
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
const ProjectCard = ({
  projeto,
  casas
}) => {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const capa = driveThumb(casas[0]?.capa || casas[0]?.imagem);
  const bairro = casas[0]?.bairro || '';
  const maps = casas[0]?.maps || '';
  const minValor = Math.min(...casas.map(c => c.valor));
  const minParcela = Math.min(...casas.map(c => estimateParcel({
    price: c.valor,
    income: minFaixaIncome(c.valor),
    fgts: 0
  }).parcela));
  const disponiveis = casas.length;
  return React.createElement("article", {
    style: {
      borderRadius: 20,
      overflow: 'hidden',
      border: '1px solid var(--line)',
      background: '#fff',
      transition: 'all .25s ease',
      transform: hover && !open ? 'translateY(-3px)' : 'none',
      boxShadow: open ? 'var(--shadow-lg)' : hover ? 'var(--shadow-md)' : 'var(--shadow-sm)'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: '16/9'
    }
  }, React.createElement("img", {
    src: capa,
    alt: projeto,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform .5s ease',
      transform: hover ? 'scale(1.04)' : 'scale(1)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(10,8,6,.7) 0%, transparent 55%)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: 18,
      right: 18,
      color: '#fff'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .75,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      fontWeight: 600,
      marginBottom: 4
    }
  }, bairro, " \xB7 Palmas/TO"), React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: '-.02em',
      lineHeight: 1.1
    }
  }, projeto)), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      background: 'rgba(255,255,255,.18)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,.3)',
      borderRadius: 30,
      padding: '5px 12px',
      fontSize: 12,
      fontWeight: 700,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--success)',
      display: 'inline-block'
    }
  }), disponiveis, " ", disponiveis === 1 ? 'unidade' : 'unidades', " dispon\xEDveis")), React.createElement("div", {
    style: {
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      borderBottom: open ? '1px solid var(--line-2)' : 'none'
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, "Parcelas a partir de"), React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 24,
      fontWeight: 800,
      color: 'var(--bordo)',
      letterSpacing: '-.025em',
      lineHeight: 1.1,
      marginTop: 2
    }
  }, fmtBRL(minParcela), React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      fontWeight: 500,
      fontFamily: 'Inter'
    }
  }, "/m\xEAs")), React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "ou ", fmtBRL(minValor), " \xE0 vista"), maps && React.createElement("a", {
    href: maps,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 8,
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      background: 'var(--paper-2)',
      border: '1px solid var(--line)',
      borderRadius: 20,
      padding: '5px 12px',
      textDecoration: 'none'
    }
  }, React.createElement(Icon.Pin, {
    size: 12
  }), " Ver localiza\xE7\xE3o")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 16px',
      borderRadius: 30,
      background: open ? 'var(--bordo)' : 'var(--paper-2)',
      color: open ? '#fff' : 'var(--ink)',
      fontSize: 13,
      fontWeight: 700,
      transition: 'all .2s ease',
      flexShrink: 0,
      border: '1px solid',
      borderColor: open ? 'var(--bordo)' : 'var(--line)'
    }
  }, open ? 'Fechar' : 'Ver casas', React.createElement("span", {
    style: {
      display: 'inline-block',
      transition: 'transform .25s ease',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      fontSize: 10
    }
  }, "\u25BC")))), open && React.createElement("div", {
    style: {
      padding: '0 0 4px'
    }
  }, casas.map((c, i) => {
    const est = estimateParcel({
      price: c.valor,
      income: minFaixaIncome(c.valor),
      fgts: 0
    });
    return React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 14,
        alignItems: 'center',
        padding: '14px 20px',
        borderBottom: i < casas.length - 1 ? '1px solid var(--line-2)' : 'none'
      }
    }, React.createElement("div", null, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, React.createElement("span", {
      style: {
        fontFamily: 'Archivo',
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: '-.01em'
      }
    }, c.nome), c.destaque && React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        background: 'var(--bordo)',
        color: '#fff',
        borderRadius: 20,
        padding: '2px 8px'
      }
    }, "Destaque"), React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        background: 'var(--paper-2)',
        color: 'var(--ink-2)',
        borderRadius: 20,
        padding: '2px 8px',
        border: '1px solid var(--line)'
      }
    }, c.tag)), React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 5,
        color: 'var(--ink-3)',
        fontSize: 12,
        flexWrap: 'wrap'
      }
    }, React.createElement("span", null, React.createElement(Icon.Ruler, {
      size: 11
    }), " \xC1rea ", c.area, "m\xB2"), c.terreno > 0 && React.createElement("span", null, React.createElement(Icon.Ruler, {
      size: 11
    }), " Terreno ", c.terreno, "m\xB2"), React.createElement("span", null, React.createElement(Icon.Bed, {
      size: 11
    }), " ", c.quartos, " qtos"), React.createElement("span", null, React.createElement(Icon.Bath, {
      size: 11
    }), " ", c.banheiros, " ban."), React.createElement("span", null, React.createElement(Icon.Car, {
      size: 11
    }), " ", c.vagas, " vaga", c.vagas !== 1 ? 's' : '')), c.previsao && React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        marginTop: 6,
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--bordo)',
        background: 'var(--bordo-soft)',
        borderRadius: 20,
        padding: '3px 10px'
      }
    }, React.createElement(Icon.Clock, {
      size: 11
    }), " Previs\xE3o: ", c.previsao)), React.createElement("div", {
      style: {
        textAlign: 'right',
        flexShrink: 0
      }
    }, React.createElement("div", {
      style: {
        fontFamily: 'Archivo',
        fontSize: 18,
        fontWeight: 800,
        color: 'var(--bordo)',
        letterSpacing: '-.02em',
        lineHeight: 1
      }
    }, fmtBRL(est.parcela), React.createElement("span", {
      style: {
        fontFamily: 'Inter',
        fontSize: 10,
        fontWeight: 500,
        color: 'var(--ink-3)'
      }
    }, "/m\xEAs")), React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 2,
        marginBottom: 8
      }
    }, fmtBRL(c.valor), " \xE0 vista"), React.createElement(WhatsLink, {
      msg: `Olá, tenho interesse na ${c.nome} do projeto ${projeto} em ${c.bairro}.`
    }, React.createElement(Btn, {
      variant: "primary",
      size: "sm",
      icon: React.createElement(Icon.Whats, {
        size: 13
      })
    }, "Quero essa"))));
  })));
};
const HousesSection = () => {
  const [houses, setHouses] = React.useState(FALLBACK_HOUSES);
  const [loading, setLoading] = React.useState(!!SHEETS_CSV_URL);
  const [showAll, setShowAll] = React.useState(false);
  const INITIAL_COUNT = 3;
  React.useEffect(() => {
    if (!SHEETS_CSV_URL) return;
    fetch(SHEETS_CSV_URL).then(r => r.text()).then(text => {
      setHouses(parseCSV(text));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);
  const projetos = groupBy(houses, 'projeto');
  const nomes = Object.keys(projetos);
  const nomesVisiveis = showAll ? nomes : nomes.slice(0, INITIAL_COUNT);
  const temMais = nomes.length > INITIAL_COUNT;
  return React.createElement("section", {
    "data-screen-label": "casas",
    id: "casas",
    style: {
      padding: '100px 0',
      background: '#fff'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      marginBottom: 44,
      gap: 24,
      flexWrap: 'wrap'
    }
  }, React.createElement(RevealDiv, {
    style: {
      maxWidth: 580
    }
  }, React.createElement(Pill, {
    tone: "bordo"
  }, "Dispon\xEDveis agora"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(32px, 3.8vw, 52px)',
      fontWeight: 500,
      marginTop: 14,
      letterSpacing: '-.025em',
      lineHeight: 1.04
    }
  }, "Casas prontas.", React.createElement("br", null), "Parcela que ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--bordo)'
    }
  }, "cabe"), ".")), React.createElement(RevealDiv, {
    delay: 0.15
  }, React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 16,
      maxWidth: 380
    }
  }, "Todas financi\xE1veis pelo MCMV. Sua parcela real pode ser menor com subs\xEDdio e FGTS."))), loading ? React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 0',
      color: 'var(--ink-3)'
    }
  }, "Carregando obras\u2026") : React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    },
    className: "projects-grid"
  }, nomesVisiveis.map((nome, i) => React.createElement(RevealDiv, {
    key: nome,
    delay: i * 0.12
  }, React.createElement(ProjectCard, {
    projeto: nome,
    casas: projetos[nome]
  })))), temMais && React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 36
    }
  }, React.createElement(Btn, {
    variant: "ghost",
    size: "lg",
    onClick: () => setShowAll(s => !s),
    iconRight: React.createElement("span", {
      style: {
        display: 'inline-block',
        transition: 'transform .3s ease',
        transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)',
        fontSize: 13
      }
    }, "\u25BC")
  }, showAll ? 'Mostrar menos' : `Mostrar todas as ${nomes.length} casas disponíveis`))), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40,
      padding: '22px 28px',
      background: 'var(--paper-2)',
      borderRadius: 18,
      flexWrap: 'wrap',
      gap: 16
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.015em'
    }
  }, "Quer ver outras op\xE7\xF5es?"), React.createElement("div", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 14,
      marginTop: 2
    }
  }, "Fale com a gente e veja o cat\xE1logo completo.")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement(WhatsLink, {
    msg: "Ol\xE1, quero ver o cat\xE1logo completo de obras da Casa+"
  }, React.createElement(Btn, {
    variant: "outline",
    size: "md",
    icon: React.createElement(Icon.Whats, {
      size: 16
    })
  }, "Pedir cat\xE1logo")), React.createElement(Btn, {
    variant: "dark",
    size: "md",
    iconRight: React.createElement(Icon.Arrow, {
      size: 14
    }),
    onClick: () => document.getElementById('simulador')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, "Simular parcela")))), React.createElement("style", null, `
        @media (max-width: 980px){ .projects-grid{grid-template-columns:repeat(2,1fr) !important} }
        @media (max-width: 640px){ .projects-grid{grid-template-columns:1fr !important} }
      `));
};
const HouseCard = ({
  imagem,
  nome,
  bairro,
  valor,
  area,
  terreno,
  quartos,
  banheiros,
  vagas,
  tag,
  destaque,
  projeto
}) => {
  const [hover, setHover] = React.useState(false);
  const parcela = estimateParcel({
    price: valor,
    income: 3500,
    fgts: 0
  }).parcela;
  return React.createElement("article", {
    style: {
      borderRadius: 18,
      overflow: 'hidden',
      background: '#fff',
      border: '1px solid var(--line)',
      transition: 'all .25s ease',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      position: 'relative'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, destaque && React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      zIndex: 2
    }
  }, React.createElement(Pill, {
    tone: "bordo",
    style: {
      background: 'var(--bordo)',
      color: '#fff'
    }
  }, React.createElement(Icon.Zap, {
    size: 10
  }), " Mais procurada")), React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: '4/3'
    }
  }, React.createElement("img", {
    src: imagem,
    alt: nome || bairro,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform .5s ease',
      transform: hover ? 'scale(1.06)' : 'scale(1)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, React.createElement(Pill, {
    tone: "paper",
    style: {
      background: 'rgba(255,255,255,.95)',
      backdropFilter: 'blur(6px)'
    }
  }, React.createElement(Icon.CheckCircle, {
    size: 12
  }), " ", tag))), React.createElement("div", {
    style: {
      padding: '20px 22px 22px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--ink-3)',
      fontSize: 13,
      fontWeight: 500
    }
  }, React.createElement(Icon.Pin, {
    size: 13
  }), " ", bairro, " \xB7 Palmas/TO"), React.createElement("h3", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 24,
      fontWeight: 700,
      margin: '6px 0 14px',
      letterSpacing: '-.02em',
      lineHeight: 1.1
    }
  }, nome || `Casa ${quartos} quartos`), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      paddingBottom: 16,
      borderBottom: '1px dashed var(--line)',
      color: 'var(--ink-2)',
      fontSize: 13
    }
  }, React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, React.createElement(Icon.Ruler, {
    size: 14
  }), "\xC1rea ", area, "m\xB2"), terreno > 0 && React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, React.createElement(Icon.Ruler, {
    size: 14
  }), "Terreno ", terreno, "m\xB2"), React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, React.createElement(Icon.Bed, {
    size: 14
  }), quartos, " qtos"), React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, React.createElement(Icon.Bath, {
    size: 14
  }), banheiros, " ban."), React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, React.createElement(Icon.Car, {
    size: 14
  }), vagas, " vaga", vagas !== 1 ? 's' : '')), React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'space-between',
      gap: 10
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, "A partir de"), React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--bordo)',
      letterSpacing: '-.02em',
      lineHeight: 1.05,
      marginTop: 2
    }
  }, fmtBRL(parcela), React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      fontWeight: 500,
      fontFamily: 'Inter'
    }
  }, "/m\xEAs")), React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "ou ", fmtBRL(valor), " \xE0 vista")), React.createElement(WhatsLink, {
    msg: `Olá, quero saber mais sobre a ${nome || 'casa'} no ${bairro} (${projeto})`
  }, React.createElement(Btn, {
    variant: "primary",
    size: "sm",
    icon: React.createElement(Icon.Whats, {
      size: 14
    })
  }, "Quero essa")))));
};
const ProcessSection = () => {
  const [active, setActive] = React.useState(0);
  const steps = [{
    icon: Icon.Doc,
    t: 'Pré-cadastro',
    desc: 'Você preenche um formulário de 2 minutos. A gente responde no WhatsApp em breve.',
    tempo: '2 min'
  }, {
    icon: Icon.Calc,
    t: 'Simulação real',
    desc: 'Calculamos sua parcela, subsídio e FGTS. Você vê exatamente o que vai pagar.',
    tempo: 'mesmo dia'
  }, {
    icon: Icon.CheckCircle,
    t: 'Aprovação Caixa',
    desc: 'Cuidamos da documentação com você. Sem correr em banco.',
    tempo: '5 a 20 dias'
  }, {
    icon: Icon.Home,
    t: 'Escolha da casa',
    desc: 'Você visita as casas prontas e escolhe a que combina com a família.',
    tempo: '1 semana'
  }, {
    icon: Icon.Key,
    t: 'Chave na mão',
    desc: 'Assinatura, entrega e registro. Mudança na semana seguinte.',
    tempo: 'até 45 dias'
  }];
  return React.createElement("section", {
    "data-screen-label": "processo",
    id: "processo",
    style: {
      padding: '100px 0',
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(RevealDiv, {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 56px'
    }
  }, React.createElement(Pill, {
    tone: "bordo"
  }, "Como funciona"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(32px, 3.8vw, 52px)',
      fontWeight: 500,
      marginTop: 14,
      letterSpacing: '-.025em',
      lineHeight: 1.04
    }
  }, "5 passos. ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--bordo)'
    }
  }, "Sem mist\xE9rio.")), React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 17,
      marginTop: 14
    }
  }, "Da primeira conversa at\xE9 o dia da mudan\xE7a, a Casa+ faz o caminho com voc\xEA.")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 0,
      position: 'relative'
    },
    className: "process-grid"
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: 34,
      left: '10%',
      right: '10%',
      height: 2,
      background: `linear-gradient(to right, var(--bordo) 0%, var(--bordo) ${active * 25}%, var(--line) ${active * 25}%, var(--line) 100%)`,
      transition: 'all .4s ease',
      zIndex: 0
    }
  }), steps.map((s, i) => {
    const isActive = i <= active;
    return React.createElement("button", {
      key: i,
      onClick: () => setActive(i),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        padding: '0 10px',
        cursor: 'pointer',
        textAlign: 'center',
        background: 'transparent',
        border: 0,
        position: 'relative',
        zIndex: 1,
        color: 'inherit'
      }
    }, React.createElement("div", {
      style: {
        width: 68,
        height: 68,
        borderRadius: 20,
        background: isActive ? 'var(--bordo)' : '#fff',
        color: isActive ? '#fff' : 'var(--ink-3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        borderColor: isActive ? 'var(--bordo)' : 'var(--line)',
        transition: 'all .25s ease',
        boxShadow: isActive ? '0 10px 30px -8px oklch(0.42 0.13 25 / .4)' : 'none'
      }
    }, React.createElement(s.icon, {
      size: 26
    })), React.createElement("div", {
      style: {
        fontSize: 10,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-3)',
        fontWeight: 700
      }
    }, "Passo ", String(i + 1).padStart(2, '0'), " \xB7 ", s.tempo), React.createElement("h3", {
      style: {
        fontFamily: 'Archivo',
        fontSize: 19,
        fontWeight: 700,
        letterSpacing: '-.015em',
        color: active === i ? 'var(--bordo)' : 'var(--ink)'
      }
    }, s.t));
  })), React.createElement("div", {
    className: "process-mobile",
    style: {
      display: 'none',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      marginBottom: 8
    }
  }, React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 22,
      background: 'var(--bordo)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 10px 30px -8px oklch(0.42 0.13 25 / .4)'
    }
  }, React.createElement(steps[active].icon, {
    size: 30
  })), React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      fontWeight: 700,
      marginBottom: 4
    }
  }, "Passo ", String(active + 1).padStart(2, '0'), " de 05 \xB7 ", steps[active].tempo), React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--bordo)',
      letterSpacing: '-.015em'
    }
  }, steps[active].t)), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, steps.map((_, i) => React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    style: {
      width: i === active ? 22 : 8,
      height: 8,
      borderRadius: 4,
      background: i <= active ? 'var(--bordo)' : 'var(--line)',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      transition: 'all .35s ease'
    }
  })))), React.createElement("div", {
    style: {
      marginTop: 32,
      padding: '28px 28px',
      background: '#fff',
      borderRadius: 18,
      border: '1px solid var(--line)',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 30,
      alignItems: 'center'
    },
    className: "process-detail"
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--bordo)',
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, steps[active].t), React.createElement("p", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 24,
      fontWeight: 600,
      marginTop: 8,
      letterSpacing: '-.015em',
      lineHeight: 1.25,
      maxWidth: 620
    }
  }, steps[active].desc)), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement(Btn, {
    variant: "ghost",
    size: "md",
    onClick: () => setActive(Math.max(0, active - 1)),
    style: {
      opacity: active === 0 ? .4 : 1,
      pointerEvents: active === 0 ? 'none' : 'auto'
    }
  }, "\u2190 Anterior"), React.createElement(Btn, {
    variant: "dark",
    size: "md",
    onClick: () => setActive(active === 4 ? 0 : Math.min(4, active + 1))
  }, active === 4 ? 'Reiniciar' : 'Próximo →')))), React.createElement("style", null, `
        @media (max-width: 880px){
          .process-grid{display:none !important}
          .process-mobile{display:flex !important}
          .process-detail{grid-template-columns:1fr !important;padding:24px 20px !important}
          .process-detail p{font-size:20px !important}
        }
      `));
};
const BenefitsStrip = () => {
  const b = [{
    i: Icon.Wallet,
    t: 'Subsídio até R$ 49.500',
    d: 'Do governo federal, sem pagar de volta.'
  }, {
    i: Icon.Tag,
    t: 'FGTS como entrada',
    d: 'Use seu saldo. Não precisa ter dinheiro na poupança.'
  }, {
    i: Icon.Shield,
    t: 'Parcelas fixas por 35 anos',
    d: 'Sem surpresa. Sem correção pelo IPCA.'
  }, {
    i: Icon.Spark,
    t: 'Taxa a partir de 4% a.a.',
    d: 'A menor do mercado habitacional, disponível na Faixa 1 do programa.'
  }];
  return React.createElement("section", {
    "data-screen-label": "beneficios",
    style: {
      padding: '60px 0',
      background: 'var(--ink)',
      color: '#fff'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 28
    },
    className: "benefit-grid"
  }, b.map((x, i) => React.createElement(RevealDiv, {
    key: i,
    delay: i * 0.1,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      background: 'rgba(255,255,255,.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--bordo-light)',
      flexShrink: 0,
      border: '1px solid rgba(255,255,255,.1)'
    }
  }, React.createElement(x.i, {
    size: 20
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, x.t), React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.65)',
      marginTop: 4,
      lineHeight: 1.45
    }
  }, x.d)))))), React.createElement("style", null, `
        @media (max-width: 880px){ .benefit-grid{grid-template-columns:repeat(2,1fr) !important} }
        @media (max-width: 500px){ .benefit-grid{grid-template-columns:1fr !important} }
      `));
};
const TeamCard = ({
  pessoa: p,
  delay = 0
}) => {
  const [hover, setHover] = React.useState(false);
  return React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 20,
      overflow: 'hidden',
      position: 'relative',
      aspectRatio: '3/4',
      background: '#111',
      cursor: 'default',
      animation: `reveal .7s cubic-bezier(.2,.7,.2,1) ${delay}s both`,
      boxShadow: hover ? '0 28px 56px -14px rgba(0,0,0,.45)' : '0 8px 24px -8px rgba(0,0,0,.25)',
      transition: 'box-shadow .45s ease, transform .45s ease',
      transform: hover ? 'translateY(-7px)' : 'translateY(0)'
    }
  }, p.foto && React.createElement("img", {
    src: p.foto,
    alt: p.nome,
    className: "team-photo",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center',
      display: 'block',
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform .6s cubic-bezier(.2,.7,.2,1)'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '32%',
      background: 'linear-gradient(to top, rgba(4,2,2,1) 0%, rgba(4,2,2,.85) 40%, transparent 100%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '22px 22px',
      color: '#fff'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.02em',
      lineHeight: 1.1
    }
  }, p.nome), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 7
    }
  }, React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: 'var(--bordo-light)',
      borderRadius: 2,
      flexShrink: 0
    }
  }), React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.65)'
    }
  }, p.cargo))));
};
const TeamSection = () => {
  const team = [{
    nome: 'Edson Júnior',
    cargo: 'Diretor Administrativo',
    formacao: ['Eng. Civil — IFTO', 'Pós-Grad. Gerenciamento de Obras — IPOG', 'MBA Produtividade e Tecnologia da Construção'],
    foto: 'assets/team-edson.jpg?v=5'
  }, {
    nome: 'José Victor',
    cargo: 'Diretor de Operações',
    formacao: ['Eng. Civil — IFTO', 'Pós-Grad. Perícias, Avaliações e Orçamentos — UNIMAIS'],
    foto: 'assets/team-jose-victor.jpg?v=5'
  }, {
    nome: 'Railton Pires',
    cargo: 'Diretor de Operações',
    formacao: ['Eng. Civil'],
    foto: 'assets/team-railton.jpg?v=5'
  }];
  return React.createElement("section", {
    "data-screen-label": "time",
    id: "time",
    style: {
      padding: '100px 0',
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(RevealDiv, {
    style: {
      textAlign: 'center',
      maxWidth: 580,
      margin: '0 auto 56px'
    }
  }, React.createElement(Pill, {
    tone: "bordo"
  }, "Quem faz acontecer"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(32px,3.8vw,52px)',
      fontWeight: 500,
      marginTop: 14,
      letterSpacing: '-.025em',
      lineHeight: 1.04
    }
  }, "Pessoas reais.", React.createElement("br", null), React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--bordo)'
    }
  }, "Comprometidas"), " com voc\xEA."), React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 16,
      marginTop: 14,
      lineHeight: 1.6
    }
  }, "A Casa+ \xE9 formada por um time local que conhece Palmas e entende o que uma fam\xEDlia precisa para conquistar a casa pr\xF3pria.")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    },
    className: "team-grid"
  }, team.map((p, i) => React.createElement(TeamCard, {
    key: i,
    pessoa: p,
    delay: i * 0.12
  })))), React.createElement("style", null, `
        @media (max-width:860px){ .team-grid{grid-template-columns:1fr !important} }
      `));
};
const DeliveriesSection = () => {
  const fotos = [{
    src: 'assets/entrega-1.jpg?v=5',
    alt: 'Família recebendo a chave da casa nova com a equipe Casa+'
  }, {
    src: 'assets/entrega-2.jpg?v=5',
    alt: 'Casal comemorando a entrega das chaves com a equipe Casa+'
  }, {
    src: 'assets/entrega-3.jpg?v=5',
    alt: 'Momento de entrega de chave — Casa+'
  }, {
    src: 'assets/entrega-4.jpg?v=5',
    alt: 'Família feliz na entrega da casa própria'
  }, {
    src: 'assets/entrega-5.jpg?v=5',
    alt: 'Entrega de chave — conquista da casa própria'
  }];
  const spans = [4, 2, 2, 2, 2];
  return React.createElement("section", {
    "data-screen-label": "entregas",
    id: "entregas",
    style: {
      padding: '100px 0',
      background: '#fff'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(RevealDiv, {
    style: {
      textAlign: 'center',
      maxWidth: 580,
      margin: '0 auto 52px'
    }
  }, React.createElement(Pill, {
    tone: "bordo"
  }, "Momentos reais"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(32px,3.8vw,52px)',
      fontWeight: 500,
      marginTop: 14,
      letterSpacing: '-.025em',
      lineHeight: 1.04
    }
  }, "Fam\xEDlias que j\xE1", React.createElement("br", null), React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--bordo)'
    }
  }, "realizaram"), " o sonho."), React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 16,
      marginTop: 14,
      lineHeight: 1.6
    }
  }, "Cada chave entregue \xE9 uma hist\xF3ria que muda. Essas s\xE3o algumas das nossas favoritas.")), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 10
    },
    className: "deliveries-grid"
  }, fotos.map((f, i) => React.createElement(RevealDiv, {
    key: i,
    delay: i * 0.1,
    className: "delivery-tile",
    style: {
      gridColumn: `span ${spans[i]}`,
      borderRadius: 16,
      overflow: 'hidden',
      aspectRatio: i === 0 ? '16/10' : '4/5',
      background: 'var(--paper-2)',
      position: 'relative'
    }
  }, React.createElement("img", {
    src: f.src,
    alt: f.alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 20%',
      willChange: 'transform',
      backfaceVisibility: 'hidden'
    }
  }), React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(10,6,4,.35) 0%, transparent 50%)',
      pointerEvents: 'none'
    }
  })))), React.createElement(RevealDiv, {
    delay: 0.2,
    style: {
      marginTop: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      flexWrap: 'wrap',
      padding: '22px 28px',
      background: 'var(--paper-2)',
      borderRadius: 18
    }
  }, React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-.015em'
    }
  }, "Voc\xEA pode ser o pr\xF3ximo."), React.createElement("div", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 14,
      marginTop: 2
    }
  }, "Simule sua parcela em 2 minutos.")), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexShrink: 0
    }
  }, React.createElement(Btn, {
    variant: "primary",
    size: "md",
    iconRight: React.createElement(Icon.Arrow, {
      size: 14
    }),
    onClick: () => document.getElementById('simulador')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, "Simular agora"), React.createElement(WhatsLink, null, React.createElement(Btn, {
    variant: "whats",
    size: "md",
    icon: React.createElement(Icon.Whats, {
      size: 16
    })
  }, "WhatsApp"))))), React.createElement("style", null, `
        .delivery-tile{transition:box-shadow .35s ease, opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)}
        .delivery-tile img{transition:transform .6s cubic-bezier(.2,.7,.2,1)}
        .delivery-tile.in-view:hover{box-shadow:0 22px 44px -16px rgba(10,6,4,.45)}
        .delivery-tile.in-view:hover img{transform:scale(1.05)}
        @media (max-width:860px){
          .deliveries-grid{grid-template-columns:repeat(2,1fr) !important}
          .deliveries-grid > div{grid-column:span 1 !important;aspect-ratio:4/5 !important}
        }
        @media (max-width:520px){
          .deliveries-grid{grid-template-columns:1fr !important}
        }
      `));
};
Object.assign(window, {
  TrustBar,
  PainSection,
  HousesSection,
  HouseCard,
  ProcessSection,
  BenefitsStrip,
  TeamSection,
  DeliveriesSection
});

/* components/form-faq.jsx */
const FullSimulator = ({
  simValues,
  setSimValues
}) => {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    nome: '',
    whatsapp: '',
    cidade: 'Palmas',
    preco: simValues?.price || 220000,
    renda: simValues?.income || 1621,
    fgts: 5000,
    idade: 35
  });
  React.useEffect(() => {
    if (step === 1 && simValues) {
      setForm(f => ({
        ...f,
        preco: simValues.price,
        renda: simValues.income
      }));
    }
  }, [simValues?.price, simValues?.income]);
  const [sent, setSent] = React.useState(false);
  const est = estimateParcel({
    price: form.preco,
    income: form.renda,
    fgts: form.fgts,
    age: form.idade
  });
  const update = (k, v) => {
    setForm(s => ({
      ...s,
      [k]: v
    }));
    if (k === 'preco' && setSimValues) setSimValues(s => ({
      ...s,
      price: v
    }));
    if (k === 'renda' && setSimValues) setSimValues(s => ({
      ...s,
      income: v
    }));
  };
  const canStep2 = form.renda >= 1621 && form.preco <= est.imovelMax;
  const canSend = form.nome.length > 2 && form.whatsapp.length >= 10;
  const precoExcede = form.preco > est.imovelMax;
  const [sending, setSending] = React.useState(false);
  const onSubmit = async e => {
    e.preventDefault();
    if (!canSend || sending) return;
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
      viavel: est.viavel ? 'Sim' : 'Verificar'
    };
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (_) {}
    setSending(false);
    setSent(true);
  };
  return React.createElement("section", {
    "data-screen-label": "simulador",
    id: "simulador",
    style: {
      padding: '100px 0',
      background: `linear-gradient(135deg, var(--bordo) 0%, var(--bordo-dark) 100%)`,
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: -100,
      right: -100,
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: 'oklch(0.52 0.11 25 / .4)',
      filter: 'blur(80px)'
    }
  }), React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 60,
      alignItems: 'start'
    },
    className: "sim-grid"
  }, React.createElement("div", null, React.createElement(Pill, {
    tone: "bordo",
    style: {
      background: 'rgba(255,255,255,.14)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.2)'
    }
  }, "Gratuito \xB7 Sem consulta ao SPC"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(34px, 4vw, 56px)',
      fontWeight: 500,
      marginTop: 18,
      letterSpacing: '-.025em',
      lineHeight: 1.04
    }
  }, "Simule sua parcela", React.createElement("br", null), "em ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--bordo-soft)'
    }
  }, "2 minutos"), "."), React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.82)',
      marginTop: 22,
      maxWidth: 440
    }
  }, "Resposta no WhatsApp ", React.createElement("strong", null, "em breve"), ". Sem consulta ao SPC. Sem compromisso."), React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, ['Descobre sua parcela exata e subsídio disponível', 'Consultor dedicado ajuda com toda a papelada', 'Aprovação na Caixa em 5 a 20 dias úteis'].map((t, i) => React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginTop: 1
    }
  }, React.createElement(Icon.Check, {
    size: 13
  })), React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,.9)'
    }
  }, t)))), React.createElement("div", {
    style: {
      marginTop: 34,
      padding: '18px 22px',
      background: 'rgba(0,0,0,.18)',
      borderRadius: 14,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--whats)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement(Icon.Whats, {
    size: 22
  })), React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.4
    }
  }, React.createElement("strong", null, "Prefere falar no WhatsApp?"), React.createElement("br", null), React.createElement(WhatsLink, null, React.createElement("span", {
    style: {
      color: 'var(--bordo-soft)',
      textDecoration: 'underline'
    }
  }, PHONE_DISPLAY, " \xB7 falar agora"))))), React.createElement("div", {
    style: {
      background: '#fff',
      color: 'var(--ink)',
      borderRadius: 22,
      overflow: 'hidden',
      boxShadow: '0 40px 80px -20px rgba(0,0,0,.35)'
    }
  }, React.createElement("div", {
    style: {
      padding: '22px 30px 0'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, [1, 2, 3].map(n => React.createElement(React.Fragment, {
    key: n
  }, React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: step >= n ? 'var(--bordo)' : 'var(--line)',
      color: step >= n ? '#fff' : 'var(--ink-3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700
    }
  }, step > n ? React.createElement(Icon.Check, {
    size: 12
  }) : n), n < 3 && React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: step > n ? 'var(--bordo)' : 'var(--line)',
      borderRadius: 2
    }
  }))))), React.createElement("div", {
    style: {
      padding: '6px 34px 32px'
    }
  }, !sent && step === 1 && React.createElement("div", {
    style: {
      animation: 'slide-up .3s ease both'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--bordo)',
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "Passo 1 de 3"), React.createElement("h3", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 26,
      fontWeight: 700,
      marginTop: 6,
      letterSpacing: '-.02em'
    }
  }, "Simule sua compra"), React.createElement("p", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 14,
      marginTop: 6
    }
  }, "Preencha os valores para ver sua estimativa real."), React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, React.createElement(Slider, {
    label: "Valor do im\xF3vel",
    value: form.preco,
    min: 220000,
    max: 600000,
    step: 5000,
    onChange: v => update('preco', v),
    format: fmtBRL
  }), React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, React.createElement(Slider, {
    label: "Renda familiar",
    value: form.renda,
    min: 1621,
    max: 13000,
    step: 1,
    onChange: v => {
      const s = v <= 1621 ? 1621 : v >= 13000 ? 13000 : Math.round(v / 100) * 100;
      update('renda', s);
    },
    format: fmtBRL
  })), React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, React.createElement(Slider, {
    label: "Saldo de FGTS (aproximado)",
    value: form.fgts,
    min: 0,
    max: 60000,
    step: 500,
    onChange: v => update('fgts', v),
    format: fmtBRL
  })), React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, React.createElement(Slider, {
    label: "Sua idade",
    value: form.idade,
    min: 18,
    max: 70,
    step: 1,
    onChange: v => update('idade', v),
    format: v => `${v} anos`
  }), est.prazoReduzido && React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: 'oklch(0.45 0.12 40)',
      fontWeight: 500,
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, React.createElement(Icon.Clock, {
    size: 13
  }), "Prazo reduzido para ", est.n, " meses (", Math.round(est.n / 12), " anos) \u2014 financiamento at\xE9 os 80 anos"))), form.renda < 1621 && React.createElement("div", {
    style: {
      marginTop: 20,
      padding: '12px 16px',
      background: 'oklch(0.95 0.04 60)',
      borderRadius: 10,
      fontSize: 13,
      color: 'oklch(0.4 0.1 60)',
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, React.createElement(Icon.Clock, {
    size: 15,
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), React.createElement("span", null, React.createElement("strong", null, "Aten\xE7\xE3o:"), " a renda m\xEDnima para o MCMV \xE9 R$ 1.621 (1 sal\xE1rio m\xEDnimo). Fale com a gente para compor renda com c\xF4njuge se necess\xE1rio.")), precoExcede && React.createElement("div", {
    style: {
      marginTop: 20,
      padding: '14px 16px',
      background: 'oklch(0.96 0.03 25)',
      border: '1.5px solid oklch(0.85 0.06 25)',
      borderRadius: 12,
      fontSize: 13,
      color: 'oklch(0.38 0.12 25)',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, React.createElement(Icon.Clock, {
    size: 16,
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), React.createElement("div", {
    style: {
      lineHeight: 1.55
    }
  }, React.createElement("strong", null, "Valor do im\xF3vel acima do limite para sua renda."), React.createElement("br", null), "Com renda de ", fmtBRL(form.renda), ", voc\xEA se enquadra na ", React.createElement("strong", null, "Faixa ", est.faixa), " do MCMV, cujo im\xF3vel m\xE1ximo \xE9 ", React.createElement("strong", null, fmtBRL(est.imovelMax)), ".", React.createElement("br", null), React.createElement("span", {
    style: {
      marginTop: 4,
      display: 'block'
    }
  }, "Ajuste o valor do im\xF3vel para prosseguir ou fale com a gente para mais op\xE7\xF5es."))), React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    style: {
      width: '100%',
      marginTop: 26,
      opacity: canStep2 ? 1 : .45,
      pointerEvents: canStep2 ? 'auto' : 'none'
    },
    onClick: () => setStep(2),
    iconRight: React.createElement(Icon.Arrow, {
      size: 16
    })
  }, "Ver minha simula\xE7\xE3o"), React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      textAlign: 'center',
      marginTop: 10,
      lineHeight: 1.5
    }
  }, "Simula\xE7\xE3o de car\xE1ter estimativo. Os valores s\xE3o aproximados e podem variar conforme an\xE1lise da Caixa.")), !sent && step === 2 && React.createElement("div", {
    style: {
      animation: 'slide-up .3s ease both'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--bordo)',
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "Passo 2 de 3"), React.createElement("h3", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 26,
      fontWeight: 700,
      marginTop: 6,
      letterSpacing: '-.02em'
    }
  }, "Sua estimativa"), React.createElement("div", {
    style: {
      marginTop: 20,
      background: 'var(--paper)',
      borderRadius: 16,
      padding: '22px 24px',
      border: '1px solid var(--line-2)'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, React.createElement(MetricBig, {
    label: "Parcela a partir de",
    value: fmtBRL(est.parcela),
    sub: `${est.n} meses · ${Math.round(est.n / 12)} anos`,
    tone: "bordo"
  }), React.createElement(MetricBig, {
    label: "Subs\xEDdio do governo",
    value: `até ${fmtBRL(est.subsidy)}`,
    sub: "n\xE3o precisa devolver",
    tone: "success"
  })), React.createElement("div", {
    className: "sim-metrics-3",
    style: {
      borderTop: '1px dashed var(--line)',
      marginTop: 18,
      paddingTop: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12
    }
  }, React.createElement(Metric, {
    label: "Valor financiado",
    value: fmtBRL(est.financiado)
  }), React.createElement(Metric, {
    label: "Entrada em dinheiro",
    value: fmtBRL(est.entradaTotal)
  }), React.createElement(Metric, {
    label: "Comprometido",
    value: `${est.comprometido}%`,
    ok: est.comprometido <= 30
  }))), est.capped && React.createElement("div", {
    style: {
      marginTop: 12,
      padding: '14px 16px',
      background: 'oklch(0.96 0.04 55)',
      border: '1px solid oklch(0.88 0.08 55)',
      borderRadius: 12,
      fontSize: 13,
      color: 'oklch(0.38 0.12 40)',
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, React.createElement(Icon.Clock, {
    size: 16,
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), React.createElement("div", {
    style: {
      lineHeight: 1.6
    }
  }, React.createElement("strong", null, "Entrada adicional necess\xE1ria: ", fmtBRL(est.entradaExtra)), React.createElement("br", null), "Com a entrada m\xEDnima de 20%, a parcela ficaria acima de 30% da sua renda. Para se enquadrar na regra da Caixa, voc\xEA precisa dar mais ", React.createElement("strong", null, fmtBRL(est.entradaExtra)), " de entrada, totalizando ", React.createElement("strong", null, fmtBRL(est.entradaTotal)), ".")), est.prazoReduzido && React.createElement("div", {
    style: {
      marginTop: 8,
      padding: '10px 14px',
      background: 'oklch(0.96 0.02 240)',
      borderRadius: 10,
      fontSize: 12,
      color: 'oklch(0.4 0.08 240)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, React.createElement(Icon.Clock, {
    size: 13
  }), "Prazo de ", est.n, " meses \u2014 reduzido pela sua idade (", form.idade, " anos). Financiamento vai at\xE9 os 80 anos."), React.createElement("div", {
    style: {
      marginTop: 16,
      padding: '14px 16px',
      borderRadius: 12,
      background: est.viavel ? 'oklch(0.95 0.04 155)' : 'oklch(0.95 0.04 60)',
      color: est.viavel ? 'oklch(0.35 0.12 155)' : 'oklch(0.4 0.1 60)',
      fontSize: 14,
      fontWeight: 500,
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, est.viavel ? React.createElement(Icon.CheckCircle, {
    size: 18
  }) : React.createElement(Icon.Clock, {
    size: 18
  }), est.viavel ? React.createElement("span", null, React.createElement("strong", null, "Boa not\xEDcia!"), " Seu perfil \xE9 compat\xEDvel. Avance para receber a proposta.") : React.createElement("span", null, "Vamos avaliar juntos. Existem caminhos mesmo assim.")), React.createElement("div", {
    className: "sim-actions",
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22
    }
  }, React.createElement(Btn, {
    variant: "ghost",
    size: "lg",
    onClick: () => setStep(1)
  }, "\u2190 Ajustar"), React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => setStep(3),
    iconRight: React.createElement(Icon.Arrow, {
      size: 16
    })
  }, "Receber proposta personalizada"))), !sent && step === 3 && React.createElement("form", {
    onSubmit: onSubmit,
    style: {
      animation: 'slide-up .3s ease both'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--bordo)',
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "Passo 3 de 3"), React.createElement("h3", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 26,
      fontWeight: 700,
      marginTop: 6,
      letterSpacing: '-.02em'
    }
  }, "Como podemos te chamar?"), React.createElement("p", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 14,
      marginTop: 6
    }
  }, "Nosso consultor vai entrar em contato pelo seu WhatsApp em breve."), React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement(Field, {
    label: "Seu nome",
    value: form.nome,
    onChange: v => update('nome', v),
    placeholder: "Maria Silva"
  }), React.createElement(Field, {
    label: "WhatsApp",
    value: form.whatsapp,
    onChange: v => update('whatsapp', v),
    placeholder: "(63) 99999-9999"
  }), React.createElement(Field, {
    label: "Cidade",
    value: form.cidade,
    onChange: v => update('cidade', v),
    placeholder: "Palmas"
  })), React.createElement("div", {
    className: "sim-actions",
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22
    }
  }, React.createElement(Btn, {
    variant: "ghost",
    size: "lg",
    type: "button",
    onClick: () => setStep(2)
  }, "\u2190 Voltar"), React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      flex: 1,
      opacity: canSend ? 1 : .5,
      pointerEvents: canSend ? 'auto' : 'none'
    },
    iconRight: React.createElement(Icon.Arrow, {
      size: 16
    })
  }, "Enviar e falar com consultor")), React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      textAlign: 'center',
      marginTop: 14,
      lineHeight: 1.5
    }
  }, "Ao enviar voc\xEA concorda em receber contato da Casa+. Seus dados s\xE3o 100% protegidos (LGPD).")), sent && React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0 10px',
      animation: 'slide-up .3s ease both'
    }
  }, React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'oklch(0.95 0.04 155)',
      color: 'var(--success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, React.createElement(Icon.CheckCircle, {
    size: 34
  })), React.createElement("h3", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-.02em'
    }
  }, "Recebemos, ", form.nome.split(' ')[0], "!"), React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 15,
      marginTop: 10,
      maxWidth: 360,
      margin: '10px auto 0'
    }
  }, "Em breve nosso consultor vai te chamar no WhatsApp ", React.createElement("strong", null, form.whatsapp), " com a proposta completa."), React.createElement(WhatsLink, {
    msg: `Olá! Acabei de preencher o simulador rápido da Casa+ e gostaria de adiantar a conversa.`
  }, React.createElement(Btn, {
    variant: "whats",
    size: "lg",
    icon: React.createElement(Icon.Whats, {
      size: 18
    }),
    style: {
      marginTop: 22
    }
  }, "Adiantar conversa no WhatsApp"))))))), React.createElement("style", null, `
        @media (max-width: 960px){ .sim-grid{grid-template-columns:1fr !important;gap:40px !important} }
        @media (max-width: 520px){
          .sim-actions{flex-direction:column !important}
          .sim-actions > *{width:100% !important; flex:none !important}
          .sim-metrics-3{grid-template-columns:1fr 1fr !important}
        }
      `));
};
const Metric = ({
  label,
  value,
  ok
}) => React.createElement("div", null, React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--ink-3)',
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    fontWeight: 600
  }
}, label), React.createElement("div", {
  style: {
    fontFamily: 'Archivo',
    fontSize: 17,
    fontWeight: 700,
    marginTop: 3,
    letterSpacing: '-.01em',
    color: ok === false ? 'oklch(0.55 0.15 30)' : 'var(--ink)'
  }
}, value));
const MetricBig = ({
  label,
  value,
  sub,
  tone
}) => React.createElement("div", null, React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--ink-3)',
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    fontWeight: 600
  }
}, label), React.createElement("div", {
  style: {
    fontFamily: 'Archivo',
    fontSize: 28,
    fontWeight: 700,
    marginTop: 4,
    letterSpacing: '-.02em',
    lineHeight: 1.05,
    color: tone === 'bordo' ? 'var(--bordo)' : 'var(--success)'
  }
}, value), React.createElement("div", {
  style: {
    fontSize: 11,
    color: 'var(--ink-3)',
    marginTop: 3
  }
}, sub));
const Field = ({
  label,
  value,
  onChange,
  placeholder
}) => React.createElement("div", null, React.createElement("label", {
  style: {
    fontSize: 12,
    color: 'var(--ink-2)',
    fontWeight: 600,
    letterSpacing: '.02em',
    marginBottom: 6,
    display: 'block'
  }
}, label), React.createElement("input", {
  value: value,
  onChange: e => onChange(e.target.value),
  placeholder: placeholder,
  style: {
    width: '100%',
    padding: '13px 16px',
    borderRadius: 11,
    border: '1.5px solid var(--line)',
    background: '#fff',
    fontSize: 15,
    transition: 'border-color .15s ease'
  },
  onFocus: e => e.target.style.borderColor = 'var(--bordo)',
  onBlur: e => e.target.style.borderColor = 'var(--line)'
}));
const Testimonials = () => {
  const deps = [{
    nome: 'Ana Paula S.',
    local: 'Morada do Sol · Palmas/TO',
    texto: 'Achei que nunca ia conseguir sair do aluguel. A Casa+ resolveu tudo em menos de dois meses — documentação, aprovação na Caixa e entrega da chave. Hoje pago menos do que pagava de aluguel.'
  }, {
    nome: 'Carlos e Fernanda M.',
    local: 'Taquaralto · Palmas/TO',
    texto: 'Meu marido é autônomo e tínhamos muito medo de não ser aprovados. O time da Casa+ nos orientou em cada etapa e deu tudo certo. O subsídio foi uma surpresa enorme.'
  }, {
    nome: 'Rodrigo A.',
    local: 'Aureny III · Palmas/TO',
    texto: 'Processo muito transparente. Sabia exatamente o valor da parcela desde o início, sem surpresas. Recebi a chave no prazo combinado. Recomendo sem hesitar.'
  }, {
    nome: 'Márcia L.',
    local: 'Sul de Palmas · Palmas/TO',
    texto: 'Não acreditava que meu FGTS ia cobrir a entrada inteira. Acabei não precisando tirar nada do bolso na assinatura. Atendimento nota 10, muito humano e paciente.'
  }, {
    nome: 'Família Pereira',
    local: 'Jardim Palmas · Palmas/TO',
    texto: 'Sonho realizado! Sempre tivemos receio pela burocracia, mas foi muito mais simples do que esperávamos. A equipe da Casa+ esteve presente em cada passo.'
  }, {
    nome: 'Josilene R.',
    local: 'Palmas · TO',
    texto: 'Fui indicada por uma amiga e não me arrependo. Atendimento rápido, honesto e sem enrolação. Em 60 dias saí do aluguel e entrei na minha casa.'
  }];
  const Stars = () => React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      marginBottom: 16
    }
  }, [1, 2, 3, 4, 5].map(i => React.createElement("svg", {
    key: i,
    width: "15",
    height: "15",
    viewBox: "0 0 20 20",
    fill: "var(--bordo)"
  }, React.createElement("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  }))));
  const DepCard = ({
    d
  }) => React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 20,
      border: '1px solid var(--line)',
      padding: '28px 26px 26px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxShadow: 'var(--shadow-sm)'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'Georgia,serif',
      fontSize: 64,
      lineHeight: .8,
      color: 'var(--bordo-soft)',
      fontWeight: 700,
      marginBottom: 8,
      userSelect: 'none'
    }
  }, "\""), React.createElement(Stars, null), React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--ink-2)',
      flex: 1,
      marginBottom: 20
    }
  }, d.texto), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingTop: 18,
      borderTop: '1px solid var(--line-2)'
    }
  }, React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--bordo)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Archivo',
      fontSize: 16,
      fontWeight: 700
    }
  }, d.nome[0]), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-.01em',
      color: 'var(--ink)'
    }
  }, d.nome), React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, d.local))));
  return React.createElement("section", {
    "data-screen-label": "depoimentos",
    id: "depoimentos",
    style: {
      padding: '100px 0',
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      marginBottom: 52,
      flexWrap: 'wrap',
      gap: 20
    }
  }, React.createElement(RevealDiv, null, React.createElement(Pill, {
    tone: "bordo"
  }, "Depoimentos"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(32px, 3.8vw, 52px)',
      fontWeight: 500,
      marginTop: 14,
      letterSpacing: '-.025em',
      lineHeight: 1.04
    }
  }, "O que dizem", React.createElement("br", null), "nossas ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--bordo)'
    }
  }, "fam\xEDlias"), ".")), React.createElement(RevealDiv, {
    delay: 0.1,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'linear-gradient(135deg,#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, React.createElement(Icon.Instagram, {
    size: 22,
    style: {
      color: '#fff'
    }
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, "@casamais.to"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "Acompanhe no Instagram")))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    },
    className: "deps-grid"
  }, deps.map((d, i) => React.createElement(RevealDiv, {
    key: i,
    delay: i * 0.08
  }, React.createElement(DepCard, {
    d: d
  }))))), React.createElement("style", null, `
        @media (max-width:960px){ .deps-grid{grid-template-columns:repeat(2,1fr) !important} }
        @media (max-width:600px){ .deps-grid{grid-template-columns:1fr !important} }
      `));
};
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  const items = [{
    q: 'Eu posso financiar mesmo sendo autônomo ou MEI?',
    a: 'Sim. A Caixa aceita renda de autônomo, MEI e trabalhador informal. Para comprovar, são usados extratos bancários dos últimos 3 meses, declaração do imposto de renda, DAS (MEI) ou declaração de renda feita por contador. A gente te orienta em cada documento.'
  }, {
    q: 'Preciso ter nome limpo?',
    a: 'Sim, ter o nome limpo é fundamental. A Caixa realiza consulta ao CPF no SPC/Serasa e no Cadastro Informativo (CADIN). Dívidas ativas em aberto impedem a aprovação. Antes de qualquer consulta formal, fazemos uma pré-análise gratuita e sigilosa para avaliar sua situação.'
  }, {
    q: 'Qual o valor da entrada?',
    a: 'A entrada mínima é de 20% do valor do imóvel. O FGTS pode ser usado para cobrir total ou parcialmente esse valor — se o saldo for suficiente, você não precisa ter dinheiro em caixa. O subsídio do governo é abatido antes do cálculo, reduzindo ainda mais o que precisa ser financiado.'
  }, {
    q: 'Quanto tempo leva do cadastro até a chave?',
    a: 'Em média 45 a 90 dias para casas prontas. A aprovação de crédito na Caixa leva de 5 a 20 dias úteis; depois vem a assinatura do contrato, vistoria e registro em cartório. A Casa+ acompanha cada etapa para que não haja atrasos desnecessários.'
  }, {
    q: 'Posso pagar mais barato que o aluguel que pago hoje?',
    a: 'Na maioria dos casos para quem está nas Faixas 1 e 2, sim. Com subsídio de até R$ 49.500 do governo federal e juros a partir de 4% ao ano, a parcela costuma ser igual ou menor que o aluguel que você paga hoje — e cada pagamento é um passo para a casa ser sua. Simule agora para ver seu número real.'
  }, {
    q: 'E se depois eu quiser vender o imóvel?',
    a: 'Você pode vender o imóvel, mas existem regras importantes: na Faixa 1, há um período de carência — durante o financiamento ativo você não pode vender sem quitar ou obter autorização da Caixa. Nas Faixas 2, 3 e 4 é possível transferir o financiamento para o comprador com aprovação da Caixa. Importante: alugar o imóvel é proibido enquanto o financiamento estiver ativo em qualquer faixa — a casa deve ser usada como residência própria.'
  }];
  return React.createElement("section", {
    "data-screen-label": "faq",
    id: "faq",
    style: {
      padding: '100px 0',
      background: 'var(--paper)'
    }
  }, React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: 980
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 60,
      alignItems: 'start'
    },
    className: "faq-grid"
  }, React.createElement(RevealDiv, {
    style: {
      position: 'sticky',
      top: 100
    }
  }, React.createElement(Pill, {
    tone: "bordo"
  }, "Perguntas frequentes"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(32px, 3.6vw, 48px)',
      fontWeight: 500,
      marginTop: 14,
      letterSpacing: '-.025em',
      lineHeight: 1.05
    }
  }, "Antes de voc\xEA ", React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--bordo)'
    }
  }, "perguntar"), "."), React.createElement("p", {
    style: {
      color: 'var(--ink-2)',
      fontSize: 16,
      marginTop: 18,
      lineHeight: 1.55
    }
  }, "Se sua d\xFAvida n\xE3o estiver aqui, chama a gente no WhatsApp. Nenhuma pergunta \xE9 boba, a gente responde todas."), React.createElement(WhatsLink, null, React.createElement(Btn, {
    variant: "whats",
    size: "md",
    icon: React.createElement(Icon.Whats, {
      size: 16
    }),
    style: {
      marginTop: 20
    }
  }, "Tirar d\xFAvida no WhatsApp"))), React.createElement("div", null, items.map((it, i) => {
    const isOpen = open === i;
    return React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--line)',
        padding: '4px 0'
      }
    }, React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0',
        gap: 16,
        background: 'transparent',
        cursor: 'pointer',
        color: 'var(--ink)'
      }
    }, React.createElement("div", {
      style: {
        fontFamily: 'Archivo',
        fontSize: 19,
        fontWeight: 700,
        letterSpacing: '-.015em',
        lineHeight: 1.35,
        flex: 1
      }
    }, it.q), React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: isOpen ? 'var(--bordo)' : 'var(--paper-2)',
        color: isOpen ? '#fff' : 'var(--ink)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all .2s ease'
      }
    }, isOpen ? React.createElement(Icon.Minus, {
      size: 16
    }) : React.createElement(Icon.Plus, {
      size: 16
    }))), isOpen && React.createElement("p", {
      style: {
        color: 'var(--ink-2)',
        fontSize: 15,
        lineHeight: 1.6,
        paddingBottom: 22,
        maxWidth: 580,
        animation: 'slide-up .25s ease both'
      }
    }, it.a));
  })))), React.createElement("style", null, `@media (max-width:860px){ .faq-grid{grid-template-columns:1fr !important;gap:32px !important} .faq-grid > div:first-child{position:static !important} }`));
};
const FinalCTA = () => React.createElement("section", {
  "data-screen-label": "cta-final",
  id: "contato",
  style: {
    padding: '120px 0',
    background: 'var(--ink)',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden'
  }
}, React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url(assets/family-keys.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
    opacity: .25,
    filter: 'grayscale(30%)'
  }
}), React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, var(--ink) 40%, transparent 80%)'
  }
}), React.createElement("div", {
  className: "wrap",
  style: {
    position: 'relative'
  }
}, React.createElement(RevealDiv, {
  style: {
    maxWidth: 720
  }
}, React.createElement(Pill, {
  tone: "bordo",
  style: {
    background: 'rgba(255,255,255,.12)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.2)'
  }
}, "\xDAltima chamada para 2026"), React.createElement("h2", {
  style: {
    fontSize: 'clamp(40px, 5vw, 72px)',
    fontWeight: 500,
    marginTop: 22,
    letterSpacing: '-.028em',
    lineHeight: .98
  }
}, "Daqui a 12 meses", React.createElement("br", null), "voc\xEA pode estar", React.createElement("br", null), React.createElement("em", {
  style: {
    fontStyle: 'italic',
    color: 'var(--bordo-light)'
  }
}, "na sua casa")), React.createElement("p", {
  style: {
    fontSize: 19,
    lineHeight: 1.5,
    color: 'rgba(255,255,255,.78)',
    marginTop: 24,
    maxWidth: 520
  }
}, "Ou pagando mais 12 meses de aluguel. A decis\xE3o come\xE7a com uma conversa de 10 minutos."), React.createElement("div", {
  style: {
    display: 'flex',
    gap: 12,
    marginTop: 36,
    flexWrap: 'wrap'
  }
}, React.createElement(Btn, {
  variant: "invert",
  size: "xl",
  onClick: () => document.getElementById('simulador')?.scrollIntoView({
    behavior: 'smooth'
  }),
  iconRight: React.createElement(Icon.Arrow, {
    size: 18
  })
}, "Simular minha casa agora"), React.createElement(WhatsLink, null, React.createElement(Btn, {
  variant: "whats",
  size: "xl",
  icon: React.createElement(Icon.Whats, {
    size: 20
  })
}, "WhatsApp direto"))))));
const Footer = () => React.createElement("footer", {
  style: {
    background: '#0d0807',
    color: 'rgba(255,255,255,.7)',
    padding: '70px 0 28px'
  }
}, React.createElement("div", {
  className: "wrap"
}, React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
    gap: 40,
    marginBottom: 50
  },
  className: "footer-grid"
}, React.createElement(RevealDiv, null, React.createElement(Icon.Logo, {
  size: 44,
  inverted: true
}), React.createElement("ul", {
  style: {
    listStyle: 'none',
    padding: 0,
    margin: '16px 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontSize: 13,
    color: 'rgba(255,255,255,.65)'
  }
}, ['A casa que muda sua história', 'Especialistas em Minha Casa Minha Vida', 'Palmas · Tocantins · 6 anos de mercado', 'Habilitada pela Caixa Econômica Federal'].map((item, i) => React.createElement("li", {
  key: i,
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 8
  }
}, React.createElement("span", {
  style: {
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: 'var(--bordo-light)',
    flexShrink: 0,
    display: 'inline-block'
  }
}), item))), React.createElement("div", {
  style: {
    marginTop: 22,
    display: 'flex',
    gap: 10
  }
}, React.createElement("a", {
  href: "https://instagram.com/casamais.to",
  target: "_blank",
  rel: "noopener",
  style: {
    width: 38,
    height: 38,
    borderRadius: '50%',
    background: 'rgba(255,255,255,.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  }
}, React.createElement(Icon.Instagram, {
  size: 16
})), React.createElement(WhatsLink, null, React.createElement("span", {
  style: {
    width: 38,
    height: 38,
    borderRadius: '50%',
    background: 'var(--whats)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  }
}, React.createElement(Icon.Whats, {
  size: 17
}))))), React.createElement(RevealDiv, {
  delay: 0.1
}, React.createElement("h4", {
  style: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    marginBottom: 16
  }
}, "Navegar"), React.createElement("ul", {
  style: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    fontSize: 14
  }
}, React.createElement("li", null, React.createElement("a", {
  href: "#casas"
}, "Casas dispon\xEDveis")), React.createElement("li", null, React.createElement("a", {
  href: "#processo"
}, "Como funciona")), React.createElement("li", null, React.createElement("a", {
  href: "#simulador"
}, "Simular financiamento")), React.createElement("li", null, React.createElement("a", {
  href: "#entregas"
}, "Entregas")), React.createElement("li", null, React.createElement("a", {
  href: "#time"
}, "Nosso time")), React.createElement("li", null, React.createElement("a", {
  href: "#faq"
}, "Perguntas frequentes")))), React.createElement(RevealDiv, {
  delay: 0.2
}, React.createElement("h4", {
  style: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    marginBottom: 16
  }
}, "Contato"), React.createElement("ul", {
  style: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    fontSize: 14
  }
}, React.createElement("li", null, React.createElement("a", {
  href: "https://maps.app.goo.gl/mLRBaXd5W54hVti7A",
  target: "_blank",
  rel: "noopener",
  style: {
    display: 'flex',
    gap: 9,
    alignItems: 'center'
  }
}, React.createElement(Icon.Pin, {
  size: 14
}), "Palmas \xB7 TO")), React.createElement("li", null, React.createElement(WhatsLink, {
  style: {
    display: 'flex',
    gap: 9,
    alignItems: 'center'
  }
}, React.createElement(Icon.Phone, {
  size: 14
}), "(63) 99232-4571")), React.createElement("li", null, React.createElement("a", {
  href: "mailto:casamais.incorp@gmail.com",
  style: {
    display: 'flex',
    gap: 9,
    alignItems: 'center'
  }
}, React.createElement(Icon.Mail, {
  size: 14
}), "casamais.incorp@gmail.com")), React.createElement("li", {
  style: {
    display: 'flex',
    gap: 9,
    alignItems: 'center'
  }
}, React.createElement(Icon.Clock, {
  size: 14
}), "Seg-Sex \xB7 8h \xE0s 18h"))), React.createElement(RevealDiv, {
  delay: 0.3
}, React.createElement("h4", {
  style: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '.1em',
    textTransform: 'uppercase',
    marginBottom: 16
  }
}, "Credenciamentos"), React.createElement("ul", {
  style: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    fontSize: 13,
    color: 'rgba(255,255,255,.55)'
  }
}, React.createElement("li", null, "Habilitada pela CAIXA"), React.createElement("li", null, "Programa MCMV \xB7 Governo Federal"), React.createElement("li", null, "CNPJ 62.420.863/0001-75")))), React.createElement("div", {
  style: {
    paddingTop: 24,
    borderTop: '1px solid rgba(255,255,255,.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 12
  }
}, React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " Casa+. Todos os direitos reservados."), React.createElement("div", {
  style: {
    display: 'flex',
    gap: 22,
    color: 'rgba(255,255,255,.4)'
  }
}, React.createElement("span", null, "Pol\xEDtica de privacidade"), React.createElement("span", null, "Termos de uso"), React.createElement("span", null, "LGPD")), React.createElement("div", {
  style: {
    color: 'rgba(255,255,255,.25)',
    fontSize: 11,
    letterSpacing: '.04em'
  }
}, "Desenvolvido por ", React.createElement("a", {
  href: "https://nexolinks.framer.ai/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnl5somnVilsXLqIlS-2TIAwpMI7GZOUGC-mY7Bar6UXXrH2feQWIirnwqoOc_aem_bIh-ZMjzdsV8LS17J6ly9Q",
  target: "_blank",
  rel: "noopener noreferrer",
  style: {
    color: 'rgba(255,255,255,.4)',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'color .2s'
  },
  onMouseEnter: e => e.currentTarget.style.color = 'rgba(255,255,255,.75)',
  onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,.4)'
}, "Nexo")))), React.createElement("style", null, `@media (max-width:880px){ .footer-grid{grid-template-columns:1fr 1fr !important} } @media (max-width:520px){ .footer-grid{grid-template-columns:1fr !important} }`));
Object.assign(window, {
  FullSimulator,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer
});

/* components/tweaks.jsx */
const TWEAK_DEFAULTS = {
  "primaryColor": "#7A2020",
  "accentFont": "Archivo",
  "heroStyle": "image",
  "density": "comfortable",
  "showAnalysis": false
};
const TweaksPanel = ({
  state,
  setState
}) => {
  const [tweakOn, setTweakOn] = React.useState(false);
  React.useEffect(() => {
    const onMsg = e => {
      if (e.data?.type === '__activate_edit_mode') setTweakOn(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweakOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const set = (k, v) => {
    setState(s => ({
      ...s,
      [k]: v
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: {
        [k]: v
      }
    }, '*');
  };
  if (!tweakOn) return null;
  const colors = [{
    name: 'Bordô (original)',
    v: '#7A2020'
  }, {
    name: 'Terracota',
    v: '#B65445'
  }, {
    name: 'Verde floresta',
    v: '#2F5D4A'
  }, {
    name: 'Azul marinho',
    v: '#1E3A5F'
  }, {
    name: 'Grafite',
    v: '#2B2B2B'
  }];
  const fonts = ['Archivo', 'Space Grotesk', 'Manrope', 'Inter'];
  const heroes = [{
    v: 'image',
    l: 'Foto + simulador'
  }, {
    v: 'split',
    l: 'Split imagem/cor'
  }, {
    v: 'minimal',
    l: 'Minimal branco'
  }];
  const densities = [{
    v: 'comfortable',
    l: 'Confortável'
  }, {
    v: 'compact',
    l: 'Compacto'
  }, {
    v: 'airy',
    l: 'Arejado'
  }];
  return React.createElement("div", {
    style: {
      position: 'fixed',
      right: 22,
      bottom: 110,
      zIndex: 70,
      width: 320,
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 30px 60px -20px rgba(0,0,0,.3)',
      border: '1px solid var(--line)',
      padding: '18px 20px',
      fontFamily: 'Inter',
      fontSize: 13
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
      paddingBottom: 12,
      borderBottom: '1px solid var(--line-2)'
    }
  }, React.createElement("div", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-.01em'
    }
  }, "Tweaks"), React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, "ao vivo")), React.createElement(TweakRow, {
    label: "Cor prim\xE1ria"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, colors.map(c => React.createElement("button", {
    key: c.v,
    onClick: () => set('primaryColor', c.v),
    title: c.name,
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: c.v,
      cursor: 'pointer',
      border: state.primaryColor === c.v ? '2px solid var(--ink)' : '2px solid var(--line)'
    }
  })))), React.createElement(TweakRow, {
    label: "Tipografia (t\xEDtulos)"
  }, React.createElement("select", {
    value: state.accentFont,
    onChange: e => set('accentFont', e.target.value),
    style: {
      width: '100%',
      padding: '8px 10px',
      borderRadius: 8,
      border: '1px solid var(--line)',
      fontSize: 13
    }
  }, fonts.map(f => React.createElement("option", {
    key: f,
    value: f
  }, f)))), React.createElement(TweakRow, {
    label: "Estilo do hero"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, heroes.map(h => React.createElement("button", {
    key: h.v,
    onClick: () => set('heroStyle', h.v),
    style: {
      textAlign: 'left',
      padding: '7px 10px',
      borderRadius: 7,
      fontSize: 13,
      background: state.heroStyle === h.v ? 'var(--bordo-soft)' : 'transparent',
      color: state.heroStyle === h.v ? 'var(--bordo)' : 'var(--ink)',
      border: '1px solid',
      borderColor: state.heroStyle === h.v ? 'var(--bordo)' : 'var(--line)',
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, h.l)))), React.createElement(TweakRow, {
    label: "Densidade"
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, densities.map(d => React.createElement("button", {
    key: d.v,
    onClick: () => set('density', d.v),
    style: {
      flex: 1,
      padding: '7px 6px',
      borderRadius: 7,
      fontSize: 12,
      background: state.density === d.v ? 'var(--bordo)' : 'transparent',
      color: state.density === d.v ? '#fff' : 'var(--ink)',
      border: '1px solid',
      borderColor: state.density === d.v ? 'var(--bordo)' : 'var(--line)',
      cursor: 'pointer',
      fontWeight: 500
    }
  }, d.l)))), React.createElement(TweakRow, {
    label: "An\xE1lise estrat\xE9gica"
  }, React.createElement("button", {
    onClick: () => set('showAnalysis', !state.showAnalysis),
    style: {
      width: '100%',
      padding: '8px 10px',
      borderRadius: 8,
      background: state.showAnalysis ? 'var(--ink)' : 'transparent',
      color: state.showAnalysis ? '#fff' : 'var(--ink)',
      border: '1px solid var(--ink)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, state.showAnalysis ? '✓ Mostrando relatório' : 'Ver relatório UX')));
};
const TweakRow = ({
  label,
  children
}) => React.createElement("div", {
  style: {
    marginBottom: 14
  }
}, React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 600,
    color: 'var(--ink-3)',
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    marginBottom: 6
  }
}, label), children);
const WhatsFloat = () => React.createElement(WhatsLink, null, React.createElement("div", {
  className: "wfloat",
  title: "Falar no WhatsApp"
}, React.createElement("span", {
  className: "pulse"
}), React.createElement(Icon.Whats, {
  size: 28
})));
const AnalysisReport = ({
  onClose
}) => {
  const sections = [{
    h: 'Diagnóstico do site atual',
    items: ['❌ Hero genérico: três CTAs concorrendo (Ver casas / Simular / WhatsApp) diluem a ação principal: todos no mesmo peso visual.', '❌ Ausência de simulador inline: usuário precisa navegar para outra página antes de ver qualquer número. Abandono alto.', '❌ Falta de FAQ: maiores objeções do MCMV (nome sujo, autônomo, entrada) não são respondidas: gera atrito.', '❌ Cards de casa mostram só preço à vista (R$ 185.000): parcela real (o que importa) não aparece.', '❌ Formulário abre e-mail (mailto:): fricção enorme em mobile; muitos não finalizam.', '❌ Logos de benefícios (Caixa, MCMV) ausentes do header/trust bar: credibilidade subutilizada.', '❌ Depoimentos sem foto, sem números (antes × depois), sem profissão: parecem inventados.', '❌ Seção "Sobre" genérica: 4 ícones (Segurança/Cuidado/Qualidade/Atendimento) que servem para qualquer empresa: zero diferenciação.', '❌ Sem quebra de objeção explícita ("e se eu for autônomo?", "nome sujo?"): a pessoa sai para tirar dúvida no Google.']
  }, {
    h: 'Mudanças que este redesign implementa',
    items: ['✓ Hero dividido com SIMULADOR AO VIVO: user vê sua parcela em 10 segundos antes de rolar o site. Queda imediata na resistência.', '✓ CTA único dominante: "Simular minha parcela" (bordô) + WhatsApp (verde). Secundários viram links. Foco.', '✓ Trust bar logo abaixo do hero: Caixa, MCMV, CRECI, 4,9/5 Google: credibilidade em 1 segundo.', '✓ Seção de DOR ("12 anos pagando aluguel = R$ 144 mil embora"): gatilho emocional específico + numérico, não genérico.', '✓ Cards de casa com PARCELA destacada (R$ 890/mês), não preço total. O cérebro do comprador compara com o aluguel atual.', '✓ Stepper interativo do processo (5 passos clicáveis) com TEMPO estimado: transparência reduz ansiedade.', '✓ Simulador completo em 3 etapas (Renda → Estimativa → Contato) com feedback visual em cada passo. Taxa de conclusão 3-5x maior que form único.', '✓ Depoimentos COM "antes × depois" (aluguel R$ 1.130 → parcela R$ 890). Prova social quantitativa.', '✓ FAQ com 6 objeções reais: autônomo, nome sujo, entrada, prazo, custo vs aluguel, venda futura. Responde antes da pergunta.', '✓ CTA final de urgência emocional ("daqui 12 meses você pode estar na sua casa"): não genérico.', '✓ Floating WhatsApp com pulse animation + mensagens contextuais (cada CTA manda msg específica pro atendente).']
  }, {
    h: 'Priorização (o que fazer primeiro no site real)',
    items: ['🔴 P0: Trocar mailto: por form com API real (integrar com Make/Zapier → Planilha + WhatsApp do consultor). Maior ganho de conversão, de longe.', '🔴 P0: Colocar parcela nos cards de casa (não só preço). Troca de copy, 30 min.', '🔴 P0: Adicionar simulador no hero. É o elemento que mais converte no setor imobiliário popular.', '🟠 P1: Trust bar com logos Caixa + MCMV + Google Reviews. Pegue os PNGs oficiais, coloque em linha.', '🟠 P1: Criar FAQ com pelo menos 6 objeções. SEO de cauda longa + quebra de dúvida.', '🟠 P1: Depoimentos com fotos reais (mesmo que simples, do celular) + números antes/depois.', '🟡 P2: Google Tag Manager + Pixel Meta. Sem isso, não há otimização.', '🟡 P2: Integrar WhatsApp com mensagens contextuais (já previsto aqui).', '🟡 P2: Schema.org para RealEstateListing (SEO local Palmas).']
  }, {
    h: 'O que remover do site atual',
    items: ['× AboutSection (4 cards genéricos). Absorver em Trust Bar + depoimentos.', '× DreamSection e HeroSection separados: duplicam o tema "sair do aluguel". Consolidar em 1 hero forte.', '× BenefitsSection com 4 cards redundantes aos passos do processo. Virou strip horizontal compacta.', '× Iframe do Google Maps em seção própria: gasta viewport. Movido para footer.', '× Três botões no CTA final: reduzir pra 2 (ação principal + WhatsApp).']
  }, {
    h: 'Performance & conversão: próximos passos',
    items: ['Rodar Hotjar ou Clarity (grátis) pra ver heatmap e gravações. Vai mostrar exatamente onde o usuário trava.', 'A/B test no botão do hero: "Simular minha parcela" vs "Quero sair do aluguel".', 'Landing dedicada por bairro (/casas/taquaralto, /casas/aureny): SEO local + anúncio Google.', 'Remarketing Meta: quem chegou até o simulador mas não enviou → anúncio específico no Instagram.', 'Lead magnet: "Guia gratuito: como sair do aluguel em 2026" em PDF para capturar email de quem não converte.', 'Velocidade: comprimir hero-house.jpg (~300KB → 80KB com WebP). Core Web Vitals impacta Google Ads.']
  }];
  return React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(20,12,8,.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      animation: 'slide-up .3s ease both'
    },
    onClick: onClose
  }, React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--paper)',
      borderRadius: 20,
      maxWidth: 960,
      width: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      boxShadow: '0 40px 100px -20px rgba(0,0,0,.5)'
    }
  }, React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      background: 'var(--paper)',
      padding: '28px 38px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 2
    }
  }, React.createElement("div", null, React.createElement(Pill, {
    tone: "bordo"
  }, "An\xE1lise estrat\xE9gica UX"), React.createElement("h2", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 32,
      fontWeight: 700,
      marginTop: 10,
      letterSpacing: '-.02em'
    }
  }, "Casa+: Plano de convers\xE3o")), React.createElement("button", {
    onClick: onClose,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--paper-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, React.createElement(Icon.X, {
    size: 18
  }))), React.createElement("div", {
    style: {
      padding: '28px 38px 40px'
    }
  }, sections.map((s, i) => React.createElement("div", {
    key: i,
    style: {
      marginBottom: 36
    }
  }, React.createElement("h3", {
    style: {
      fontFamily: 'Archivo',
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.015em',
      marginBottom: 14,
      color: 'var(--bordo)'
    }
  }, s.h), React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, s.items.map((it, j) => React.createElement("li", {
    key: j,
    style: {
      background: '#fff',
      padding: '14px 18px',
      borderRadius: 12,
      border: '1px solid var(--line-2)',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--ink-2)'
    }
  }, it))))))));
};
Object.assign(window, {
  TweaksPanel,
  TweakRow,
  WhatsFloat,
  TWEAK_DEFAULTS,
  AnalysisReport
});

/* app.jsx */
const {
  useState,
  useEffect
} = React;
const App = () => {
  const [state, setState] = useState(window.TWEAK_DEFAULTS);
  const [simValues, setSimValues] = useState({
    price: 220000,
    income: 1621
  });
  useEffect(() => {
    const root = document.documentElement;
    const c = state.primaryColor;
    root.style.setProperty('--bordo', c);
    root.style.setProperty('--bordo-dark', shade(c, -0.15));
    root.style.setProperty('--bordo-light', shade(c, 0.12));
    root.style.setProperty('--bordo-soft', shade(c, 0.55));
    document.querySelectorAll('h1,h2,h3,h4,h5,blockquote').forEach(el => {
      if (!el.closest('[data-sans]')) el.style.fontFamily = `'${state.accentFont}', Georgia, serif`;
    });
  }, [state.primaryColor, state.accentFont]);
  return React.createElement("div", {
    "data-density": state.density
  }, React.createElement(Navbar, {
    state: state,
    setState: setState
  }), React.createElement(Hero, {
    state: state,
    simValues: simValues,
    setSimValues: setSimValues
  }), React.createElement(PainSection, null), React.createElement(HousesSection, null), React.createElement(ProcessSection, null), React.createElement(BenefitsStrip, null), React.createElement(FullSimulator, {
    simValues: simValues,
    setSimValues: setSimValues
  }), React.createElement(TeamSection, null), React.createElement(DeliveriesSection, null), React.createElement(FAQ, null), React.createElement(FinalCTA, null), React.createElement(Footer, null), React.createElement(WhatsFloat, null), React.createElement(TweaksPanel, {
    state: state,
    setState: setState
  }), state.showAnalysis && React.createElement(AnalysisReport, {
    onClose: () => setState(s => ({
      ...s,
      showAnalysis: false
    }))
  }));
};
function shade(hex, amt) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(x => x + x).join('') : h, 16);
  let r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  if (amt >= 0) {
    r = Math.round(r + (255 - r) * amt);
    g = Math.round(g + (255 - g) * amt);
    b = Math.round(b + (255 - b) * amt);
  } else {
    r = Math.round(r * (1 + amt));
    g = Math.round(g * (1 + amt));
    b = Math.round(b * (1 + amt));
  }
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));