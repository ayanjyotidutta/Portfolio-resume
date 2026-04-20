// Small shared atoms
const { useEffect: useEffectA, useRef: useRefA, useState: useStateA } = React;

function Reveal({ children, delay = 0, as: As = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView();
  return (
    <As
      ref={ref}
      className={`reveal-up ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </As>
  );
}

function Cursor() {
  const dotRef = useRefA(null);
  const ringRef = useRefA(null);
  useEffectA(() => {
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;
    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };
    const raf = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    window.addEventListener('mousemove', onMove);

    // Hover targets
    const hoverables = 'a, button, .work-item, .project, .campaign, .avatar, .swatch, .big a';
    const onOver = (e) => { if (e.target.closest(hoverables)) document.body.classList.add('cursor-hover'); };
    const onOut = (e) => { if (e.target.closest(hoverables)) document.body.classList.remove('cursor-hover'); };
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);
  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
}

function Clock() {
  const [t, setT] = useStateA('');
  useEffectA(() => {
    const fmt = () => {
      const d = new Date();
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false
      }).formatToParts(d);
      const h = parts.find(p => p.type === 'hour').value;
      const m = parts.find(p => p.type === 'minute').value;
      return `${h}:${m} IST`;
    };
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="time">{t}</span>;
}

function useTheme() {
  const initial = (window.AYAN_TWEAKS && window.AYAN_TWEAKS.theme) || 'night';
  const [theme, setTheme] = useStateA(initial);
  useEffectA(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return [theme, setTheme];
}

// Shared theme state (singleton via window)
if (!window.__themeState) {
  window.__themeState = { listeners: [], theme: (window.AYAN_TWEAKS && window.AYAN_TWEAKS.theme) || 'night' };
  document.documentElement.setAttribute('data-theme', window.__themeState.theme);
}

function useSharedTheme() {
  const [theme, setThemeLocal] = useStateA(window.__themeState.theme);
  useEffectA(() => {
    const listener = (t) => setThemeLocal(t);
    window.__themeState.listeners.push(listener);
    return () => {
      window.__themeState.listeners = window.__themeState.listeners.filter(l => l !== listener);
    };
  }, []);
  const setTheme = (t) => {
    window.__themeState.theme = t;
    document.documentElement.setAttribute('data-theme', t);
    window.__themeState.listeners.forEach(l => l(t));
  };
  return [theme, setTheme];
}

function ThemeToggle() {
  const [theme, setTheme] = useSharedTheme();
  const isLight = theme === 'light';
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isLight ? 'night' : 'light')}
      title={isLight ? 'Switch to Night' : 'Switch to Light'}
    >
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${isLight ? 'light' : 'night'}`}></span>
      </span>
      <span className="theme-toggle-label">{isLight ? 'Light' : 'Night'}</span>
    </button>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useStateA(false);
  useEffectA(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="brand"><span className="dot"></span>Ayan Jyoti Dutta</div>
      <div className="links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#campaigns">Campaigns</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#awards">Awards</a>
        <a href="#contact">Contact</a>
        <a href="External files/Ayan_Jyoti_Dutta_Resume.pdf" download className="resume-btn">Resume ↓</a>
      </div>
      <div className="nav-right">
        <ThemeToggle />
        <Clock />
      </div>
    </nav>
  );
}

function Loader() {
  const [hidden, setHidden] = useStateA(false);
  useEffectA(() => {
    const t = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`}>
      <div className="count">AYAN — LOADING PORTFOLIO</div>
      <div className="line"></div>
    </div>
  );
}

Object.assign(window, { Reveal, Cursor, Clock, Nav, Loader, ThemeToggle, useSharedTheme });
