// Compila os arquivos JSX em um único bundle pronto para o navegador.
// Roda localmente (npm run build) e também na Netlify a cada deploy.
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

// Ordem importa: mesma sequência que o antigo loader do index.html
const FILES = [
  'components/icons.jsx',
  'components/shared.jsx',
  'components/nav-hero.jsx',
  'components/middle.jsx',
  'components/form-faq.jsx',
  'components/tweaks.jsx',
  'app.jsx',
];

const OUT = 'app.bundle.js';

const parts = [];
for (const file of FILES) {
  const src = fs.readFileSync(path.join(__dirname, file), 'utf8');
  const { code } = babel.transform(src, {
    presets: ['@babel/preset-react'],
    filename: file,
    compact: false,
    comments: false,
  });
  parts.push(`/* ${file} */\n${code}`);
}

const banner = `// GERADO AUTOMATICAMENTE por build.js — nao edite este arquivo.\n// Edite os componentes em components/*.jsx e rode: npm run build\n`;
fs.writeFileSync(path.join(__dirname, OUT), banner + parts.join('\n\n'), 'utf8');

const kb = (fs.statSync(path.join(__dirname, OUT)).size / 1024).toFixed(1);
console.log(`✓ ${OUT} gerado (${kb} KB) a partir de ${FILES.length} arquivos`);
