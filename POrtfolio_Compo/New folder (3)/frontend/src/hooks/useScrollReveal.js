import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = el.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Also observe the ref itself if it has the class
    if (el.classList.contains('reveal')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
