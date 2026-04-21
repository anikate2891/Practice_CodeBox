import { useEffect, useRef, useState } from 'react';





export default function Contact() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto" ref={sectionRef}>
      <hr className="divider-dashed mb-20" />

      {/* Heading */}
      <div className="text-center mb-12">
        <div className="reveal inline-block bg-accent-yellow border-2 border-ink wobbly px-5 py-1.5 font-patrick text-base mb-4 dark:text-[#1a1a1a]">
          ✉️ Get In Touch
        </div>
        <h2 className="reveal font-kalam font-bold text-5xl md:text-6xl text-ink leading-tight" style={{ transitionDelay: '0.1s' }}>
          Let&apos;s make something{' '}
          <span className="text-accent-orange relative inline-block">
            great
            <span className="absolute bottom-0 left-0 right-0 h-2 bg-accent-yellow opacity-50 rounded" aria-hidden="true" />
          </span>
          .
        </h2>
        <p className="reveal font-patrick text-xl text-ink/60 mt-4 max-w-lg mx-auto" style={{ transitionDelay: '0.2s' }}>
          Have a project in mind or an opportunity to discuss? Feel free to reach out — I’d be glad to connect. 
        </p>
      </div>

      {/* Sticky note form container */}
      <div
        className="reveal relative bg-[#fef9c3] border-ink border-[3px] wobbly shadow-hard p-10 md:p-14"
        style={{ transitionDelay: '0.25s' }}
      >
        {/* Tape on top */}
        {/* <div
          className="tape"
          style={{ top: '-12px', left: '50%', transform: 'translateX(-50%) rotate(-1.5deg)' }}
          aria-hidden="true"
        /> */}
        {/* Thumbtacks */}
        <div className="thumbtack" style={{ top: '-8px', left: '30px' }} aria-hidden="true" />
        <div className="thumbtack" style={{ top: '-8px', right: '30px' }} aria-hidden="true" />

        {submitted ? (
          /* Success state */
          <div className="text-center py-10 flex flex-col items-center gap-4">
            <div className="text-7xl animate-bounce-in">🎉</div>
            <h3 className="font-kalam font-bold text-4xl text-ink">Message sent!</h3>
            <p className="font-patrick text-xl text-ink/70 max-w-sm">
              Got it! I&apos;ll get back to you faster than you can say &ldquo;responsive design&rdquo;.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
              className="font-kalam font-bold text-lg bg-ink text-paper px-8 py-3 wobbly border-ink border-[3px] shadow-hard btn-press mt-4"
            >
              Send Another ✏️
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            {/* Row: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="font-kalam font-bold text-lg text-ink dark:text-[#1a1a1a]">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-surface border-ink-2 border-2 wobbly px-4 py-3 font-patrick text-lg text-ink placeholder:text-ink/30 outline-none focus:shadow-hard-sm transition-shadow duration-150"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="font-kalam font-bold text-lg text-ink dark:text-[#1a1a1a]">
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-surface border-ink-2 border-2 wobbly px-4 py-3 font-patrick text-lg text-ink placeholder:text-ink/30 outline-none focus:shadow-hard-sm transition-shadow duration-150"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="font-kalam font-bold text-lg text-ink dark:text-[#1a1a1a]">
                Your Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Hey! I have a wild idea for a project..."
                value={form.message}
                onChange={handleChange}
                className="bg-surface border-ink-2 border-2 wobbly px-4 py-3 font-patrick text-lg text-ink placeholder:text-ink/30 outline-none focus:shadow-hard-sm transition-shadow duration-150 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="contact-submit"
              className="w-full font-kalam font-bold text-2xl bg-ink text-paper py-4 wobbly border-ink border-[3px] shadow-hard btn-press hover:-translate-y-1 hover:shadow-hard transition-all duration-150 mt-2"
            >
              Send Message 🚀
            </button>
          </form>
        )}
      </div>

      {/* Social links */}
      <div className="reveal flex flex-wrap justify-center gap-4 mt-10">
  {[
    { label: 'GitHub', href: 'https://github.com/anikate2891', emoji: '🐙', color: 'bg-surface' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anikatekanoo', emoji: '💼', color: 'bg-accent-yellow' },
    { label: 'Email', href: 'mailto:anikate955@gmail.com', emoji: '📧', color: 'bg-accent-blue/30' },
  ].map((social) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${social.color} border-ink border-[3px] wobbly shadow-hard-sm px-5 py-2 font-patrick text-lg font-semibold card-hover inline-flex items-center gap-2`}
    >
      {social.emoji} {social.label}
    </a>
  ))}
      </div>
    </section>
  );
}
