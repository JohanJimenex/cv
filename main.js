document.documentElement.classList.add('js');

const projects = [
  {
    title: 'Super Charadas',
    kind: 'Juego multijugador · Android & iOS',
    desc: 'Juego de fiesta para adivinar palabras en grupo. Mi app más descargada, con reseñas de familias que la usan en cada reunión.',
    downloads: 180,
    icon: 'assets/apps/app2_icon.png',
    preview: 'assets/apps/app2_preview.png',
    featured: true,
    badge: 'Más descargada',
    links: [
      { name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.ManguGames.SuperCharadas' },
      { name: 'App Store', url: 'https://apps.apple.com/us/app/super-charadas-guessup/id1503858643' }
    ]
  },
  {
    title: 'Cozy Tent',
    kind: 'Juego cozy · Android · pronto iOS, Steam y Meta Quest',
    desc: 'Una noche de lluvia dentro de una tienda de campaña, con un hurón de compañía. Enciende la vela, prepara café, busca una emisora o juega ajedrez: el cielo sigue el reloj real.',
    featured: true,
    badge: 'Lanzamiento más reciente',
    icon: 'assets/apps/cozy_icon.png',
    preview: 'assets/apps/cozy_preview.jpg',
    links: [
      { name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.jopam.cozytent' },
      { name: 'Sitio del juego', url: 'https://johanjimenex.github.io/cozy-tent/' }
    ]
  },
  {
    title: 'Cuidando Dos Corazones',
    kind: 'Plataforma web · Angular',
    desc: 'Programa de formación en cardio-obstetricia para profesionales de la salud: presentación del curso, objetivos, contenido, facilitadores internacionales e inscripción.',
    label: 'Web',
    icon: 'assets/apps/cdc_icon.svg',
    preview: 'assets/apps/cdc_preview.jpg',
    links: [
      { name: 'Visitar sitio', url: 'https://cuidandodoscorazones.com/' }
    ]
  },
  {
    title: "Nolan's Galaxy",
    kind: 'Arcade 2D pixel art · Web, Android & iOS',
    desc: 'Arcade espacial en pixel art donde controlas a un astronauta en misión. Publicado en tres plataformas.',
    downloads: 120,
    icon: 'assets/apps/app5_icon.png',
    preview: 'assets/apps/app5_preview.png',
    links: [
      { name: 'itch.io', url: 'https://johanjimenex.itch.io/nolans-galaxy' },
      { name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.jopamstudio.nolansgalaxy' },
      { name: 'App Store', url: 'https://apps.apple.com/es/app/nolans-galaxy/id6503222887' }
    ]
  },
  {
    title: 'Dominó Apunte y Anota',
    kind: 'Utilidad · Android & iOS',
    desc: 'Anotador de puntos de dominó rápido y organizado, pensado para jugar sin papel ni lápiz.',
    downloads: 90,
    icon: 'assets/apps/app1_icon.png',
    preview: 'assets/apps/app1_preview.png',
    links: [
      { name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.JopamStudios.DominoApunteYAnota' },
      { name: 'App Store', url: 'https://apps.apple.com/us/app/domino-apunte-y-anota/id6742063485' }
    ]
  },
  {
    title: 'Info Movies',
    kind: 'App de consulta · Android & iOS',
    desc: 'Busca películas y consulta tráiler, puntuación, reparto e información, consumiendo una API externa.',
    downloads: 40,
    icon: 'assets/apps/app3_icon.png',
    preview: 'assets/apps/app3_preview.png',
    links: [
      { name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.jopamstudio.estrenosya' },
      { name: 'App Store', url: 'https://apps.apple.com/us/app/info-movies/id6476113841' }
    ]
  },
  {
    title: 'Calculadora de Préstamos',
    kind: 'Finanzas · Android',
    desc: 'Calcula cuotas de un préstamo y genera la tabla de amortización completa.',
    downloads: 30,
    icon: 'assets/apps/app4_icon.png',
    preview: 'assets/apps/app4_preview.png',
    links: [
      { name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.mangugames.calculadoraprestamo' }
    ]
  },
  {
    title: 'STOP',
    kind: 'Juego de palabras · Android & iOS',
    desc: 'Di palabras por tema y letra antes de que se acabe el tiempo. Ideal para jugar en grupo.',
    downloads: null,
    icon: 'assets/apps/app6_icon.png',
    preview: 'assets/apps/app6_preview.png',
    links: [
      { name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.jopamstudio.stopwordsgame' },
      { name: 'App Store', url: 'https://apps.apple.com/es/developer/johan-jimenez/id1503858642' }
    ]
  }
];

function renderProjects() {
  const root = document.getElementById('projects');
  if (!root) return;
  root.innerHTML = projects.map((p, i) => `
    <article class="project reveal${p.featured ? ' project--featured' : ''}" style="--d:${(i % 2) * 0.08}s">
      <div class="project__media">
        <img src="${p.preview}" alt="Captura de ${p.title}" loading="lazy">
      </div>
      <div class="project__body">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <div class="project__top">
          <img class="project__icon" src="${p.icon}" alt="" loading="lazy">
          <div>
            <h3 class="project__title">${p.title}</h3>
            <p class="project__kind">${p.kind}</p>
          </div>
          ${p.downloads
            ? `<p class="project__dl">${p.downloads}K<small>descargas</small></p>`
            : `<p class="project__dl"><small>${p.label || ''}</small></p>`}
        </div>
        <p class="project__desc">${p.desc}</p>
        <div class="project__links">
          ${p.links.map(l => `<a class="chip" href="${l.url}" target="_blank" rel="noopener">${l.name} ↗</a>`).join('')}
        </div>
      </div>
    </article>`).join('');
}
renderProjects();

// Reveal al hacer scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  // pequeño escalonado en el hero
  if (el.closest('.hero') && !el.style.getPropertyValue('--d')) el.style.setProperty('--d', `${i * 0.07}s`);
  io.observe(el);
});

// Contadores
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const counters = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const to = +el.dataset.count;
    const from = +(el.dataset.from || 0);
    counters.unobserve(el);
    if (reduce) { el.textContent = to; return; }
    const dur = 1400, start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = Math.round(from + (to - from) * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counters.observe(el));

// Nav: borde al hacer scroll + sección activa
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const links = [...document.querySelectorAll('.nav__links a')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${e.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
['experiencia', 'stack', 'proyectos', 'contacto'].forEach(id => {
  const s = document.getElementById(id);
  if (s) spy.observe(s);
});

// Tema
document.getElementById('themeBtn').addEventListener('click', () => {
  const root = document.documentElement;
  const current = root.dataset.theme || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Imprimir / PDF
document.getElementById('printBtn').addEventListener('click', () => {
  document.querySelectorAll('details').forEach(d => d.open = true);
  window.print();
});

// Copiar email
const copyBtn = document.getElementById('copyBtn');
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.copy);
    copyBtn.textContent = 'Copiado ✓';
    copyBtn.classList.add('is-done');
    setTimeout(() => { copyBtn.textContent = 'Copiar'; copyBtn.classList.remove('is-done'); }, 1800);
  } catch (e) {
    window.location.href = `mailto:${copyBtn.dataset.copy}`;
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
