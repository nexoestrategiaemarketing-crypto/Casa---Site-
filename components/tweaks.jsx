// Botão flutuante do WhatsApp + defaults de tema
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#7A2020",
  "accentFont": "Archivo",
  "density": "comfortable"
}/*EDITMODE-END*/;

// WhatsApp float
const WhatsFloat = () => (
  <WhatsLink>
    <div className="wfloat" title="Falar no WhatsApp">
      <span className="pulse"/>
      <Icon.Whats size={28}/>
    </div>
  </WhatsLink>
);

Object.assign(window, { WhatsFloat, TWEAK_DEFAULTS });
