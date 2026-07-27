/* ==========================================================================
   TRUTH TELUGU OFFICIAL — PRODUCTION LUXURY TEMPLE CSS (style.css)
   Architecture: Modern CSS Custom Properties, CSS Grid, Flexbox, Glassmorphism
   Theme: Temple Gold, Deep Vedic Stone, Saffron Accents & Warm Ivory
   ========================================================================== */

:root {
  /* Color Palette - Temple Dark Mode (Default) */
  --bg-primary: #0F0E0C;
  --bg-secondary: #151411;
  --bg-tertiary: #1C1A15;
  --bg-card: rgba(21, 20, 17, 0.85);
  --bg-glass: rgba(15, 14, 12, 0.75);
  --bg-glass-card: rgba(28, 26, 21, 0.65);
  
  --text-primary: #FAF8F5;
  --text-secondary: #E0D8C0;
  --text-muted: #A39B88;
  --text-gold: #D4AF37;
  
  --gold-primary: #D4AF37;
  --gold-light: #FFDF73;
  --gold-dark: #AA7C11;
  --gold-border: rgba(212, 175, 55, 0.35);
  --gold-border-hover: rgba(252, 223, 115, 0.8);

  --saffron-accent: #C85A17;
  --saffron-light: #FF9933;

  --border-subtle: rgba(212, 175, 55, 0.18);
  --border-active: rgba(212, 175, 55, 0.6);

  /* Gradients */
  --gradient-gold: linear-gradient(135deg, #D4AF37 0%, #FFDF73 50%, #AA7C11 100%);
  --gradient-gold-subtle: linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(255, 223, 115, 0.05) 100%);
  --gradient-stone: linear-gradient(180deg, #1C1A15 0%, #0F0E0C 100%);
  --gradient-saffron: linear-gradient(135deg, #FF9933 0%, #C85A17 100%);

  /* Typography */
  --font-display: 'Cinzel', 'Noto Serif Telugu', Georgia, serif;
  --font-telugu: 'Noto Serif Telugu', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Shadows & Glass */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.6);
  --shadow-gold: 0 0 25px rgba(212, 175, 55, 0.25);
  --shadow-gold-hover: 0 10px 35px rgba(212, 175, 55, 0.45);
  --glass-blur: blur(16px);
  --glass-border: 1px solid rgba(212, 175, 55, 0.3);

  /* Layout & Spacing */
  --container-max: 1280px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --transition-fast: 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Light Mode Overrides */
@media (prefers-color-scheme: light) {
  :root {
    --bg-primary: #FAF8F5;
    --bg-secondary: #F3EFE6;
    --bg-tertiary: #EAE3D2;
    --bg-card: rgba(250, 248, 245, 0.9);
    --bg-glass: rgba(250, 248, 245, 0.85);
    --bg-glass-card: rgba(243, 239, 230, 0.75);

    --text-primary: #1C1A15;
    --text-secondary: #3D382E;
    --text-muted: #6B6252;
    --text-gold: #8C6D1F;

    --gold-primary: #9B771A;
    --gold-light: #C89C28;
    --gold-dark: #684E0F;
    --gold-border: rgba(155, 119, 26, 0.3);

    --border-subtle: rgba(155, 119, 26, 0.2);
    --shadow-sm: 0 2px 8px rgba(28, 26, 21, 0.08);
    --shadow-md: 0 8px 24px rgba(28, 26, 21, 0.12);
    --shadow-gold: 0 0 20px rgba(155, 119, 26, 0.15);
  }
}

[data-theme="light"] {
  --bg-primary: #FAF8F5;
  --bg-secondary: #F3EFE6;
  --bg-tertiary: #EAE3D2;
  --bg-card: rgba(250, 248, 245, 0.9);
  --bg-glass: rgba(250, 248, 245, 0.85);
  --bg-glass-card: rgba(243, 239, 230, 0.75);

  --text-primary: #1C1A15;
  --text-secondary: #3D382E;
  --text-muted: #6B6252;
  --text-gold: #8C6D1F;

  --gold-primary: #9B771A;
  --gold-border: rgba(155, 119, 26, 0.3);
  --border-subtle: rgba(155, 119, 26, 0.2);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.65;
  letter-spacing: 0.01em;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 15% 15%, rgba(212, 175, 55, 0.04) 0%, transparent 40%),
    radial-gradient(circle at 85% 85%, rgba(200, 90, 23, 0.04) 0%, transparent 40%);
  background-attachment: fixed;
}

a[href="#main-content"] {
  position: absolute;
  top: -100px;
  left: 1rem;
  background: var(--gold-primary);
  color: #0F0E0C;
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  z-index: 1000;
  transition: top var(--transition-fast);
}

a[href="#main-content"]:focus {
  top: 1rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  color: var(--text-primary);
  line-height: 1.2;
  letter-spacing: 0.02em;
}

h1 { font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 900; }
h2 { font-size: clamp(1.5rem, 3.5vw, 2.5rem); font-weight: 700; }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.75rem); font-weight: 600; }

p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 1rem;
}

a {
  color: var(--gold-primary);
  text-decoration: none;
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

a:hover, a:focus {
  color: var(--gold-light);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

main {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

#site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg-glass);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-bottom: var(--glass-border);
  box-shadow: var(--shadow-sm);
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

#brand-identity {
  display: flex;
  flex-direction: column;
}

#brand-identity a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

#brand-identity a img {
  filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.5));
  transition: transform var(--transition-smooth);
}

#brand-identity a:hover img {
  transform: rotate(15deg) scale(1.08);
}

#brand-identity p {
  font-size: 0.725rem;
  color: var(--text-gold);
  margin: 0;
  font-family: var(--font-telugu);
  letter-spacing: 0.03em;
}

#main-navigation ul {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  list-style: none;
  flex-wrap: wrap;
}

#main-navigation a {
  font-size: 0.825rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-secondary);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

#main-navigation a:hover,
#main-navigation a[aria-current="page"] {
  color: var(--gold-primary);
  background: var(--bg-glass-card);
  border-color: var(--gold-border);
  box-shadow: var(--shadow-gold);
}

#hero {
  background: var(--gradient-stone);
  border: var(--glass-border);
  border-radius: var(--radius-lg);
  padding: clamp(2rem, 5vw, 4rem);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

#hero::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%);
  pointer-events: none;
  animation: pulseGlow 8s infinite alternate ease-in-out;
}

#hero header p {
  color: var(--saffron-light);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  margin-bottom: 0.5rem;
}

#hero-title {
  background: var(--gradient-gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

#hero-actions {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

#hero-actions a {
  padding: 0.875rem 2rem;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  border-radius: var(--radius-sm);
  transition: all var(--transition-smooth);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

#hero-actions a:first-child {
  background: var(--gradient-gold);
  color: #0F0E0C;
  box-shadow: var(--shadow-gold);
}

#hero-actions a:first-child:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-gold-hover);
}

#hero-actions a:last-child {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--gold-border);
}

#hero-actions a:last-child:hover {
  border-color: var(--gold-primary);
  background: var(--bg-tertiary);
  color: var(--gold-light);
}

#hero-sloka {
  background: var(--bg-glass-card);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--gold-border);
  border-left: 4px solid var(--gold-primary);
  padding: 1.5rem 2rem;
  border-radius: var(--radius-md);
  margin-top: 1rem;
  position: relative;
}

#hero-sloka blockquote p[lang="sa"] {
  font-family: var(--font-telugu);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--gold-light);
  line-height: 1.8;
  margin-bottom: 0.75rem;
}

#hero-sloka figcaption {
  font-size: 0.875rem;
  color: var(--text-secondary);
  border-top: 1px solid var(--border-subtle);
  padding-top: 0.75rem;
}

#hero-sloka cite {
  font-style: normal;
  font-weight: 700;
  color: var(--gold-primary);
}

#categories header {
  text-align: center;
  margin-bottom: 2.5rem;
}

#categories-title {
  color: var(--text-gold);
  margin-bottom: 0.5rem;
}

#categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
}

#categories-grid article {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 2rem;
  transition: all var(--transition-smooth);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}

#categories-grid article::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--gradient-gold);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

#categories-grid article:hover {
  transform: translateY(-6px);
  border-color: var(--gold-border-hover);
  box-shadow: var(--shadow-gold-hover);
}

#categories-grid article:hover::after {
  opacity: 1;
}

#categories-grid h3 {
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
}

#categories-grid h3 a {
  color: var(--text-primary);
}

#categories-grid article:hover h3 a {
  color: var(--gold-primary);
}

#categories-grid article small {
  color: var(--text-gold);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

#latest-articles header {
  margin-bottom: 2.5rem;
}

#articles-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

#articles-list article {
  background: var(--bg-glass-card);
  backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  transition: all var(--transition-smooth);
  box-shadow: var(--shadow-sm);
}

#articles-list article:hover {
  border-color: var(--gold-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-gold);
}

#articles-list article header p small {
  color: var(--saffron-light);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

#articles-list h3 {
  font-size: 1.2rem;
  line-height: 1.4;
  margin: 0.5rem 0;
}

#articles-list h3 a {
  color: var(--text-primary);
}

#articles-list article:hover h3 a {
  color: var(--gold-light);
}

#articles-list article time {
  font-size: 0.8rem;
  color: var(--text-muted);
}

#articles-list figure {
  background: var(--bg-primary);
  padding: 1rem;
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--gold-primary);
  margin: 0.5rem 0;
}

#articles-list figure blockquote p {
  font-family: var(--font-telugu);
  font-size: 0.95rem;
  color: var(--text-gold);
  margin: 0 0 0.25rem 0;
}

#articles-list figure figcaption {
  font-size: 0.75rem;
  color: var(--text-muted);
}

#articles-list footer a {
  display: inline-block;
  font-size: 0.825rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
}

#articles-list footer a:hover {
  background: var(--gold-primary);
  color: #0F0E0C;
  border-color: var(--gold-primary);
}

#video-gallery {
  background: var(--bg-secondary);
  border: var(--glass-border);
  padding: 3rem 2rem;
  border-radius: var(--radius-lg);
}

#video-gallery header {
  margin-bottom: 2.5rem;
  text-align: center;
}

#video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

#video-grid article {
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-smooth);
}

#video-grid article:hover {
  border-color: var(--gold-border-hover);
  box-shadow: var(--shadow-gold);
}

#video-grid iframe {
  width: 100%;
  aspect-ratio: 16/9;
  border: none;
  background: #000;
}

#video-grid figcaption {
  padding: 1.25rem;
}

#video-grid figcaption h3 {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

#video-grid figcaption p {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin: 0;
}

#timeline header {
  text-align: center;
  margin-bottom: 3rem;
}

#timeline ol {
  list-style: none;
  position: relative;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

#timeline ol::before {
  content: "";
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gradient-gold);
}

#timeline li {
  position: relative;
}

#timeline li::before {
  content: "";
  position: absolute;
  left: -1.85rem;
  top: 0.35rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--gold-primary);
  border: 3px solid var(--bg-primary);
  box-shadow: var(--shadow-gold);
  transition: transform var(--transition-fast);
}

#timeline li:hover::before {
  transform: scale(1.3);
  background: var(--gold-light);
}

#timeline article {
  background: var(--bg-glass-card);
  backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: var(--radius-md);
  padding: 1.75rem 2rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-smooth);
}

#timeline article:hover {
  border-color: var(--gold-primary);
  transform: translateX(6px);
  box-shadow: var(--shadow-gold);
}

#timeline article header {
  text-align: left;
  margin-bottom: 1rem;
}

#timeline article header h3 {
  font-size: 1.25rem;
  color: var(--gold-light);
}

#timeline article header p {
  font-size: 0.85rem;
  color: var(--saffron-light);
  font-weight: 700;
  margin: 0.25rem 0 0 0;
}

#temple-section header {
  margin-bottom: 2.5rem;
}

#temple-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

#temple-grid article {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  transition: all var(--transition-smooth);
}

#temple-grid article:hover {
  border-color: var(--gold-border-hover);
  box-shadow: var(--shadow-gold);
  transform: translateY(-4px);
}

#temple-grid h3 {
  font-size: 1.2rem;
  color: var(--gold-primary);
  margin-bottom: 0.25rem;
}

#temple-grid header p {
  font-size: 0.8rem;
  color: var(--text-muted);
}

#temple-grid ul {
  list-style: none;
  font-size: 0.85rem;
  color: var(--text-secondary);
  border-top: 1px solid var(--border-subtle);
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

#temple-grid ul strong {
  color: var(--text-gold);
}

#faq header {
  margin-bottom: 2.5rem;
  text-align: center;
}

#faq details {
  background: var(--bg-glass-card);
  backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
  border-radius: var(--radius-md);
  margin-bottom: 1.25rem;
  overflow: hidden;
  transition: all var(--transition-fast);
}

#faq details[open] {
  border-color: var(--gold-primary);
  box-shadow: var(--shadow-gold);
}

#faq summary {
  padding: 1.25rem 1.75rem;
  font-size: 1.05rem;
  cursor: pointer;
  color: var(--text-primary);
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  transition: color var(--transition-fast);
}

#faq summary::-webkit-details-marker {
  display: none;
}

#faq summary::after {
  content: "+";
  font-size: 1.5rem;
  color: var(--gold-primary);
  font-weight: bold;
  transition: transform var(--transition-fast);
}

#faq details[open] summary::after {
  content: "−";
  transform: rotate(180deg);
}

#faq summary:hover {
  color: var(--gold-light);
}

#faq details p {
  padding: 0 1.75rem 1.5rem 1.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
}

#newsletter, #contact {
  background: var(--bg-secondary);
  border: var(--glass-border);
  border-radius: var(--radius-lg);
  padding: clamp(2rem, 4vw, 3.5rem);
  box-shadow: var(--shadow-md);
}

#newsletter header, #contact header {
  margin-bottom: 2rem;
}

fieldset {
  border: 1px solid var(--gold-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

legend {
  font-family: var(--font-display);
  color: var(--gold-primary);
  font-weight: 700;
  padding: 0 0.75rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 0.875rem 1rem;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: all var(--transition-fast);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--gold-primary);
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
  background: var(--bg-tertiary);
}

button[type="submit"] {
  background: var(--gradient-gold);
  color: #0F0E0C;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-smooth);
  box-shadow: var(--shadow-gold);
  align-self: flex-start;
}

button[type="submit"]:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-gold-hover);
  filter: brightness(1.1);
}

address {
  font-style: normal;
  background: var(--bg-glass-card);
  border: 1px solid var(--border-subtle);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
}

#newsletter fieldset div:nth-child(2) {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

#newsletter input[type="radio"] {
  accent-color: var(--gold-primary);
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
}

#site-footer {
  background: var(--bg-primary);
  border-top: var(--glass-border);
  padding: 4rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: var(--container-max);
  margin: 0 auto;
}

#site-footer > div:first-child h3 {
  color: var(--gold-primary);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

#site-footer nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  flex-wrap: wrap;
}

#site-footer nav a {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

#site-footer nav a:hover {
  color: var(--gold-primary);
}

#site-footer small {
  color: var(--text-muted);
  font-size: 0.8rem;
  display: block;
  margin-top: 0.25rem;
}

@keyframes pulseGlow {
  0% { transform: scale(1); opacity: 0.4; }
  100% { transform: scale(1.2); opacity: 0.8; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

section {
  animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) ease-out;
}

@media (max-width: 900px) {
  #site-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  #main-navigation ul {
    gap: 0.5rem;
  }

  #main-navigation a {
    padding: 0.35rem 0.6rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 600px) {
  main {
    padding: 1rem;
    gap: 3.5rem;
  }

  #hero {
    padding: 1.5rem;
  }

  #hero-actions {
    flex-direction: column;
    width: 100%;
  }

  #hero-actions a {
    width: 100%;
  }

  #categories-grid, #articles-list, #video-grid, #temple-grid {
    grid-template-columns: 1fr;
  }

  button[type="submit"] {
    width: 100%;
  }
}