/* ─────────────────────────────────────────
   HALLWAY.JS — 3D Spatial Gallery Engine
   ───────────────────────────────────────── */

'use strict';

// ── Project Data ──────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    badge: 'Visual Systems',
    title: 'Chromatic Architecture',
    desc: 'A generative visual system exploring color relationships through computational geometry. Each render is unique — produced by a rule-set that interprets ambient data.',
    year: '2025', role: 'Creative Developer', stack: 'p5.js, WebGL, GLSL',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      'https://images.unsplash.com/photo-1608501821300-4f99e58bba77?w=400&q=80',
      'https://images.unsplash.com/photo-1559087867-ce4c91325525?w=400&q=80'
    ]
  },
  {
    badge: 'Motion Design',
    title: 'Kinetic Resonance',
    desc: 'Motion graphics series exploring the intersection of sound frequencies and visual patterns. Each piece is scored by a different composer and animated frame-by-frame.',
    year: '2024', role: 'Motion Designer', stack: 'After Effects, Cinema 4D',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80',
      'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=400&q=80'
    ]
  },
  {
    badge: 'Interface Design',
    title: 'Retro Futures Vol. II',
    desc: 'A design system for a retro-futurist gaming platform. Built on constraints from 1980s terminal interfaces while remaining fully functional on modern displays.',
    year: '2025', role: 'UI/UX Designer', stack: 'Figma, React, CSS',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80'
    ]
  },
  {
    badge: '3D & Render',
    title: 'Spatial Dimensions',
    desc: 'Architectural visualizations pushing photorealism through Cycles rendering and custom shader networks. Projects spanning residential to speculative urban environments.',
    year: '2024', role: '3D Artist', stack: 'Blender, Cycles, Photoshop',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80'
    ]
  },
  {
    badge: 'Development',
    title: 'Code as Canvas',
    desc: 'Full-stack applications where the interface itself is the art. Building functional tools that challenge the boundary between software utility and visual poetry.',
    year: '2025', role: 'Full Stack Developer', stack: 'TypeScript, Next.js, Three.js',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80'
    ]
  },
  {
    badge: 'Brand Identity',
    title: 'Mark & Signal',
    desc: 'Identity systems for emerging brands in the creative and technology sectors. From logotype construction to full visual brand guidelines and implementation.',
    year: '2024', role: 'Brand Designer', stack: 'Illustrator, Figma, InDesign',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80',
      'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&q=80'
    ]
  },
  {
    badge: 'Photography',
    title: 'Light & Geometry',
    desc: 'Documentary photography series examining the interplay of natural light and architectural geometry across cities in Europe and Southeast Asia.',
    year: '2024', role: 'Photographer', stack: 'Sony A7IV, Lightroom',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
      'https://images.unsplash.com/photo-1470163395405-d57b3a5bd26e?w=400&q=80',
      'https://images.unsplash.com/photo-1481141383435-bdd8b0c56488?w=400&q=80'
    ]
  },
  {
    badge: 'Typography',
    title: 'Letters in Space',
    desc: 'Experimental typographic compositions blending editorial layout with three-dimensional spatial thinking. Published in three independent design magazines.',
    year: '2025', role: 'Typographer & Art Director', stack: 'InDesign, Illustrator, Blender',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1601513237763-10aaaa60fbcf?w=800&q=80',
      'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=400&q=80',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80'
    ]
  },
  {
    badge: 'Data Vis',
    title: 'Structure of Information',
    desc: 'Interactive data visualizations for research institutions and think tanks. Translating complex datasets into coherent, beautiful narratives accessible to broad audiences.',
    year: '2025', role: 'Data Artist', stack: 'D3.js, Observable, Svelte',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1575908539614-ff89490f4a78?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
    ]
  },
  {
    badge: 'Generative',
    title: 'Algorithmic Dreams',
    desc: 'Long-form generative artwork exploring emergence, chaos theory, and biological simulation. Minted as an on-chain series with live rendering from block data.',
    year: '2025', role: 'Generative Artist', stack: 'JavaScript, Canvas API, Solidity',
    link: '#',
    imgs: [
      'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=800&q=80',
      'https://images.unsplash.com/photo-1548048026-5a1a941d93d3?w=400&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80'
    ]
  }
];

// ── State ─────────────────────────────────────────────────────────────────────
const state = {
  hasEntered: false,
  currentZ: 0,
  targetZ: 0,
  maxZ: 3500,
  scrollAccum: 0,
  isModalOpen: false,
  animFrame: null
};

// ===== Navbar Section =====
// ── DOM References ────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const hallwayTrack  = $('hallway-track');
const depthProgress = $('depth-progress');
const entryScreen   = $('entry-screen');
const entryBtn      = $('entry-btn');
const endScreen     = $('end-screen');
const modalOverlay  = $('modal-overlay');
const modalClose    = $('modal-close');

// ── Particle System ───────────────────────────────────────────────────────────
(function initParticles() {
  const canvas = $('particle-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkParticle() {
    return {
      x:    Math.random() * W,
      y:    Math.random() * H,
      r:    Math.random() < 0.5 ? 0.6 : 0.9,
      o:    Math.random() * 0.12 + 0.02,
      gold: Math.random() < 0.3,
      vx:   (Math.random() - 0.5) * 0.12,
      vy:  -Math.random() * 0.18 - 0.04,
      life: 0,
      maxL: Math.random() * 600 + 300
    };
  }

  function initParticlePool() {
    particles = Array.from({ length: 80 }, mkParticle);
  }

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.life++;
      if (p.life > p.maxL || p.y < -5) Object.assign(p, mkParticle(), { y: H + 5 });

      const alpha = p.o * Math.sin((p.life / p.maxL) * Math.PI);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? `rgba(212,175,55,${alpha})`
        : `rgba(255,255,255,${alpha * 0.7})`;
      ctx.fill();
    }
    requestAnimationFrame(drawParticles);
  }

  resize();
  initParticlePool();
  drawParticles();
  window.addEventListener('resize', () => { resize(); });
}());

// ===== About Section =====
// ── Entry Flow ────────────────────────────────────────────────────────────────
entryBtn.addEventListener('click', enterGallery);
entryScreen.addEventListener('keydown', e => { if (e.key === 'Enter') enterGallery(); });

function enterGallery() {
  entryScreen.classList.add('hidden');
  state.hasEntered = true;
  startRenderLoop();
}

// ===== Project Section =====
// ── Scroll Handling ───────────────────────────────────────────────────────────
window.addEventListener('wheel', onWheel, { passive: false });

function onWheel(e) {
  if (!state.hasEntered || state.isModalOpen) return;
  e.preventDefault();

  const speed = e.deltaMode === 1 ? e.deltaY * 24 : e.deltaY;
  state.scrollAccum += speed * 0.55;
  state.targetZ = Math.max(0, Math.min(state.maxZ, state.scrollAccum));
}

// Touch support
let touchStartY = 0;
window.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
window.addEventListener('touchmove', e => {
  if (!state.hasEntered || state.isModalOpen) return;
  const delta = (touchStartY - e.touches[0].clientY) * 2.2;
  touchStartY = e.touches[0].clientY;
  state.scrollAccum += delta;
  state.targetZ = Math.max(0, Math.min(state.maxZ, state.scrollAccum));
}, { passive: true });

// Keyboard navigation
window.addEventListener('keydown', e => {
  if (!state.hasEntered) return;
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    state.scrollAccum += 350;
    state.targetZ = Math.min(state.maxZ, state.scrollAccum);
  }
  if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    state.scrollAccum -= 350;
    state.targetZ = Math.max(0, state.scrollAccum);
  }
  if (e.key === 'Escape' && state.isModalOpen) closeModal();
});

// ===== Contact Section =====
// End-screen visibility is driven by gallery depth progress.

// ── Main Render Loop ──────────────────────────────────────────────────────────
function startRenderLoop() {
  function tick() {
    // Physics-based easing: lerp toward target
    const ease = 0.075;
    state.currentZ += (state.targetZ - state.currentZ) * ease;

    // Update 3D transform
    hallwayTrack.style.transform = `translateZ(${state.currentZ.toFixed(2)}px)`;

    // Update depth progress
    const pct = (state.currentZ / state.maxZ) * 100;
    depthProgress.style.width = `${pct.toFixed(2)}%`;

    // End screen logic
    if (pct >= 95) {
      endScreen.classList.add('visible');
    } else {
      endScreen.classList.remove('visible');
    }

    state.animFrame = requestAnimationFrame(tick);
  }
  tick();
}

// ── Art Frame Interaction ─────────────────────────────────────────────────────
document.querySelectorAll('.art-frame').forEach(frame => {
  frame.addEventListener('click', () => {
    const idx = parseInt(frame.dataset.modal, 10);
    openModal(idx);
  });
});

// ── Modal System ──────────────────────────────────────────────────────────────
function openModal(idx) {
  const p = PROJECTS[idx];
  if (!p) return;

  state.isModalOpen = true;

  // Populate content
  $('modal-badge').textContent   = p.badge;
  $('modal-num').textContent     = String(idx + 1).padStart(2, '0');
  $('modal-title').textContent   = p.title;
  $('modal-desc').textContent    = p.desc;
  $('modal-year').textContent    = p.year;
  $('modal-role').textContent    = p.role;
  $('modal-stack').textContent   = p.stack;
  $('modal-link').href           = p.link;

  const [img1, img2, img3] = p.imgs;
  const s1 = $('modal-img-1-src');
  const s2 = $('modal-img-2-src');
  const s3 = $('modal-img-3-src');
  s1.src = img1; s1.alt = p.title;
  s2.src = img2; s2.alt = p.title;
  s3.src = img3; s3.alt = p.title;

  modalOverlay.setAttribute('aria-hidden', 'false');
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  state.isModalOpen = false;
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

// ── Cursor glow & tilt on frames ─────────────────────────────────────────────
document.querySelectorAll('.art-frame').forEach(frame => {
  const inner = frame.querySelector('.frame-inner');

  frame.addEventListener('mousemove', e => {
    const rect  = inner.getBoundingClientRect();
    const cx    = rect.left + rect.width  / 2;
    const cy    = rect.top  + rect.height / 2;
    const dx    = (e.clientX - cx) / (rect.width  / 2);
    const dy    = (e.clientY - cy) / (rect.height / 2);
    const maxTilt = 6;

    inner.style.transform = `
      perspective(600px)
      rotateY(${dx * maxTilt}deg)
      rotateX(${-dy * maxTilt}deg)
    `;
  });

  frame.addEventListener('mouseleave', () => {
    inner.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
    inner.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => { inner.style.transition = ''; }, 600);
  });
});

// ── Custom Cursor Trail (subtle) ──────────────────────────────────────────────
(function initCursorTrail() {
  const trail = document.createElement('div');
  trail.style.cssText = `
    position: fixed;
    width: 6px; height: 6px;
    background: rgba(212,175,55,0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(trail);

  let mx = 0, my = 0, tx = 0, ty = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animTrail() {
    tx += (mx - tx) * 0.18;
    ty += (my - ty) * 0.18;
    trail.style.left = `${tx}px`;
    trail.style.top  = `${ty}px`;
    requestAnimationFrame(animTrail);
  }
  animTrail();

  // Scale up on hover over frames
  document.querySelectorAll('.art-frame').forEach(f => {
    f.addEventListener('mouseenter', () => {
      trail.style.width  = '40px';
      trail.style.height = '40px';
      trail.style.background = 'rgba(212,175,55,0.12)';
      trail.style.border = '1px solid rgba(212,175,55,0.3)';
    });
    f.addEventListener('mouseleave', () => {
      trail.style.width  = '6px';
      trail.style.height = '6px';
      trail.style.background = 'rgba(212,175,55,0.5)';
      trail.style.border = 'none';
    });
  });
}());

// ── Ambient light shift on mouse ──────────────────────────────────────────────
document.addEventListener('mousemove', e => {
  if (!state.hasEntered) return;
  const px = (e.clientX / window.innerWidth  - 0.5) * 8;
  const py = (e.clientY / window.innerHeight - 0.5) * 4;
  hallwayTrack.style.transform = `
    translateZ(${state.currentZ.toFixed(2)}px)
    rotateY(${px * 0.05}deg)
    rotateX(${-py * 0.05}deg)
  `;
});
