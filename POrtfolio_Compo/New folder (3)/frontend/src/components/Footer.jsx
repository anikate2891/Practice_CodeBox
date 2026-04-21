export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 mt-8 border-t-[3px] border-dashed border-ink/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-0 w-full">

        {/* Brand */}
        <div className="font-kalam font-bold text-xl text-ink">
          <span className="text-accent-orange">{`{`}</span>
          Anikate.dev
          <span className="text-accent-orange">{`}`}</span>
        </div>

        {/* Copyright */}
        <p className="font-patrick text-base text-ink/50 text-center">
          © {year} · Built with code, logic, and a lot of debugging ☕
        </p>

        {/* Tech stack */}
        <div className="flex items-center gap-3">
          <span className="font-patrick text-sm text-ink/40">Built with</span>
          {['React', 'Node.js', 'MongoDB', '❤️'].map((item) => (
            <span
              key={item}
              className="font-patrick text-sm bg-accent-yellow border-2 border-ink wobbly px-2 py-0.5 shadow-hard-sm"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </footer>
  );
}