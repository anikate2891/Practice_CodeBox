/* ============================================================
   MAIN.JS — Portfolio Interactions
   GSAP 3D Tilt | Typewriter | Parallax | Scroll Reveals
   ============================================================ */

'use strict';

/* ================== HOME PAGE ONLY SCRIPTS: START ================== */

// ── Wait for DOM ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // ── Register GSAP plugins ─────────────────────────────────
  gsap.registerPlugin(ScrollTrigger);

  // ── GSAP defaults ─────────────────────────────────────────
  gsap.defaults({ ease: 'power3.out', duration: 0.8 });

  /* ==========================================================
     1. NAV — scroll shadow + active link highlight
     ========================================================== */
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Smooth active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--white)'
            : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ==========================================================
     2. HERO — entrance animation
     ========================================================== */
  const heroTl = gsap.timeline({ delay: 0.2 });

  heroTl
    .from('#hero-status', {
      opacity: 0, y: -20, duration: 0.6
    })
    .from('.hero-title .line-1', {
      opacity: 0, y: 80, skewY: 6, duration: 0.9
    }, '-=0.2')
    .from('.hero-title .line-2', {
      opacity: 0, y: 80, skewY: 6, duration: 0.9
    }, '-=0.7')
    .from('#hero-subtitle', {
      opacity: 0, y: 30, duration: 0.7
    }, '-=0.5')
    .from('#hero-ctas .btn-primary, #hero-ctas .btn-glass', {
      opacity: 0, y: 30, stagger: 0.15, duration: 0.7
    }, '-=0.4')
    .from('.scroll-indicator', {
      opacity: 0, y: 10, duration: 0.6
    }, '-=0.2');

  /* ==========================================================
     3. TYPEWRITER EFFECT
     ========================================================== */
  const ROLES = [
    'Full Stack Developer',
    'Creative Coder',
    'UI/UX Enthusiast',
    'Anime Fan 🎌',
    'Open Source Contributor',
    'Problem Solver',
  ];

  const typingEl = document.getElementById('typing-text');
  let roleIdx  = 0;
  let charIdx  = 0;
  let isDeleting = false;
  let typingTimeout;

  const TYPE_SPEED   = 80;
  const DELETE_SPEED = 40;
  const PAUSE_DONE   = 2000;
  const PAUSE_EMPTY  = 400;

  function typeWriter() {
    const currentRole = ROLES[roleIdx];

    if (!isDeleting) {
      // Typing forward
      typingEl.textContent = currentRole.slice(0, charIdx + 1);
      charIdx++;

      if (charIdx === currentRole.length) {
        // Finished typing — pause then delete
        isDeleting = true;
        typingTimeout = setTimeout(typeWriter, PAUSE_DONE);
        return;
      }
    } else {
      // Deleting
      typingEl.textContent = currentRole.slice(0, charIdx - 1);
      charIdx--;

      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % ROLES.length;
        typingTimeout = setTimeout(typeWriter, PAUSE_EMPTY);
        return;
      }
    }

    typingTimeout = setTimeout(typeWriter, isDeleting ? DELETE_SPEED : TYPE_SPEED);
  }

  // Start typewriter after hero anim settles
  setTimeout(typeWriter, 1800);

  /* ==========================================================
     4. PARALLAX — floating background spheres
     ========================================================== */
  const spheres = document.querySelectorAll('.bg-sphere');

  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;  // -1 to +1
    const dy = (e.clientY - cy) / cy;

    spheres.forEach(sphere => {
      const depth = parseFloat(sphere.dataset.depth || 0.2);
      const moveX = dx * depth * 60;
      const moveY = dy * depth * 40;

      gsap.to(sphere, {
        x: moveX,
        y: moveY,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  }, { passive: true });

  /* ==========================================================
     5. 3D TILT CARDS
     ========================================================== */
  const MAX_ROTATION = 20;
  const PERSPECTIVE  = 1000;

  function initTiltCard(el) {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;

      // Normalise -1 to +1
      const dx = (e.clientX - cx) / (rect.width  / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      const rotY =  dx * MAX_ROTATION;
      const rotX = -dy * MAX_ROTATION;

      gsap.to(el, {
        rotationY: rotY,
        rotationX: rotX,
        transformPerspective: PERSPECTIVE,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        rotationY: 0,
        rotationX: 0,
        duration: 1.4,
        ease: 'elastic.out(1, 0.3)',
        overwrite: 'auto',
      });
    });

    el.addEventListener('mousedown', () => {
      gsap.to(el, { scale: 0.95, duration: 0.15, ease: 'power2.in' });
    });

    el.addEventListener('mouseup', () => {
      gsap.to(el, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.4)' });
    });
  }

  // Init all tilt cards
  document.querySelectorAll('.gs-hover-3d').forEach(initTiltCard);

  /* ==========================================================
     6. SCROLL REVEAL — staggered reveal-up animations
     ========================================================== */
  // Batch all .reveal-up elements with ScrollTrigger
  gsap.utils.toArray('.reveal-up').forEach((el, i) => {
    // Check if element is part of a stagger group
    const parent = el.closest('.skills-grid, .projects-grid, .info-cards');

    gsap.fromTo(el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        // Stagger within skill/project grids
        delay: parent ? (Array.from(parent.children).indexOf(el) * 0.12) : 0,
      }
    );
  });

  /* ==========================================================
   7. SKILLS — 3D Hallway Scroll Experience
   ========================================================== */
  (function initSkillsHallway() {
    const sentinel   = document.getElementById('skills-sentinel');
    const wrap       = document.getElementById('skills-hallway-wrap');
    const track      = document.getElementById('sk-hallway-track');
    const progressEl = document.getElementById('sk-depth-progress');
    const counterEl  = document.getElementById('sk-counter');

    if (!sentinel || !track) return;

    const MAX_Z      = 2200;   // 3 pairs × 700px spacing × ~83% travel
    const TOTAL_PAIRS = 3;

    let currentZ = 0;
    let targetZ  = 0;
    let rafId    = null;
    let active   = false;

    function tick() {
      currentZ += (targetZ - currentZ) * 0.075;
      track.style.transform = `translateZ(${currentZ.toFixed(2)}px)`;

      const pct = (currentZ / MAX_Z) * 100;
      progressEl.style.width = `${Math.min(pct, 100).toFixed(2)}%`;

      // Counter: which pair is closest
      const pairIdx = Math.min(
        TOTAL_PAIRS,
        Math.floor((currentZ / MAX_Z) * TOTAL_PAIRS) + 1
      );
      counterEl.textContent =
        String(pairIdx).padStart(2,'0') + ' / ' +
        String(TOTAL_PAIRS).padStart(2,'0');

      rafId = requestAnimationFrame(tick);
    }

    function startLoop() {
      if (!rafId) tick();
    }

    function stopLoop() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    // Scroll handler
    function onWheel(e) {
      const sentRect = sentinel.getBoundingClientRect();
      // Sentinel visible matlab skills section active hai
      const inView = sentRect.top <= 0 && sentRect.bottom >= window.innerHeight;

      if (!inView) return;

      if (targetZ <= 0 && e.deltaY < 0) return;
      if (targetZ >= MAX_Z && e.deltaY > 0) return;

      e.preventDefault();
      startLoop();
      const speed = e.deltaMode === 1 ? e.deltaY * 24 : e.deltaY;
      targetZ = Math.max(0, Math.min(MAX_Z, targetZ + speed * 0.55));
    }

    window.addEventListener('wheel', onWheel, { passive: false });

    // Mouse tilt on frames
    document.querySelectorAll('.sk-frame').forEach(frame => {
      const inner = frame.querySelector('.sk-frame-inner');
      if (!inner) return;

      frame.addEventListener('mousemove', e => {
        const rect = inner.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2))  / (rect.width  / 2);
        const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
        inner.style.transform = `perspective(600px) rotateY(${dx*6}deg) rotateX(${-dy*6}deg)`;
      });

      frame.addEventListener('mouseleave', () => {
        inner.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
        inner.style.transform  = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
        setTimeout(() => { inner.style.transition = ''; }, 600);
      });
    });

  }());

  /* ==========================================================
     8. PROJECT CARDS — visual depth shift
     ========================================================== */
  document.querySelectorAll('.project-card').forEach(card => {
    const visual = card.querySelector('.proj-visual-inner');
    if (!visual) return;

    card.addEventListener('mouseenter', () => {
      gsap.to(visual, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(visual, { scale: 1, duration: 0.6, ease: 'power2.out' });
    });
  });

  /* ==========================================================
     9. CONTACT — email button pulse
     ========================================================== */
  const emailBtn = document.getElementById('email-btn');
  if (emailBtn) {
    // Periodic attention-grab pulse
    gsap.to(emailBtn, {
      boxShadow: '0 0 60px rgba(168,85,247,0.6)',
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }

  /* ==========================================================
     10. MASCOT — inject extra floating GSAP layer (on top
         of CSS animation for cursor-aware hover)
     ========================================================== */
  const mascotWrapper = document.getElementById('mascot-wrapper');
  if (mascotWrapper) {
    // Subtle continuous rotation oscillation (supplements CSS float)
    gsap.to(mascotWrapper, {
      rotate: 2,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }

  /* ==========================================================
     11. PAGE LOADER FADE-IN
     ========================================================== */
  gsap.from('body', {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
  });

  /* ==========================================================
     12. SECTION HEADING parallax on scroll
     ========================================================== */
  gsap.utils.toArray('.section-head h2').forEach(h => {
    gsap.fromTo(h,
      { backgroundPositionX: '0%' },
      {
        backgroundPositionX: '100%',
        scrollTrigger: {
          trigger: h,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        ease: 'none',
      }
    );
  });

  /* ==========================================================
     13. ABOUT SECTION CARD — border glow on reveal
     ========================================================== */
  ScrollTrigger.create({
    trigger: '#mascot-card',
    start: 'top 80%',
    onEnter: () => {
      gsap.to('#mascot-card', {
        boxShadow: '0 0 60px rgba(168,85,247,0.25)',
        duration: 1.5,
        ease: 'power2.out',
      });
    },
    once: true,
  });

  /* ==========================================================
     14. FOOTER — stagger socials
     ========================================================== */
  gsap.utils.toArray('.social-item').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      y: 20,
      delay: i * 0.08,
      duration: 0.6,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.social-row',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });

  /* ==========================================================
     15. CURSOR GLOW — subtle purple cursor follower
     ========================================================== */
  const cursorGlow = document.createElement('div');
  cursorGlow.id = 'cursor-glow';
  Object.assign(cursorGlow.style, {
    position: 'fixed',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: '0',
    transform: 'translate(-50%,-50%)',
    transition: 'opacity 0.3s',
    top: '0',
    left: '0',
  });
  document.body.appendChild(cursorGlow);

  window.addEventListener('mousemove', (e) => {
    gsap.to(cursorGlow, {
      left: e.clientX,
      top: e.clientY,
      duration: 0.8,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  }, { passive: true });

  /* ==========================================================
     END
     ========================================================== */
  console.log('%c✦ Portfolio loaded. Kon\'nichiwa! ✦', [
    'color: #A855F7',
    'font-size: 14px',
    'font-weight: bold',
    'font-family: Montserrat, sans-serif',
  ].join(';'));

});

/* =================== HOME PAGE ONLY SCRIPTS: END =================== */