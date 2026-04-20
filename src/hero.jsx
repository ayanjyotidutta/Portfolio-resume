const { useEffect: useEffectH, useState: useStateH, useRef: useRefH } = React;

function Avatar() {
  const ref = useRefH(null);
  useEffectH(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / 20, dy = (e.clientY - cy) / 20;
      el.style.transform = `translate(${Math.max(-8, Math.min(8, dx))}px, ${Math.max(-8, Math.min(8, dy))}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <div className="avatar" ref={ref}>
      <span className="sheen"></span>
      <img src="External files/profile Image.png" alt="Ayan Jyoti Dutta" className="avatar-img" />
    </div>
  );
}

function TypeCode() {
  const full = 'Code';
  const [displayed, setDisplayed] = useStateH('');
  const [phase, setPhase] = useStateH('wait'); // wait → type → pause → erase → gap → type ...

  useEffectH(() => {
    const waitId = setTimeout(() => setPhase('type'), 1200);
    return () => clearTimeout(waitId);
  }, []);

  useEffectH(() => {
    let id;
    if (phase === 'type') {
      if (displayed.length >= full.length) {
        id = setTimeout(() => setPhase('pause'), 1800);
      } else {
        const delay = displayed.length === 0 ? 0 : 220 + Math.random() * 160;
        id = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), delay);
      }
    } else if (phase === 'pause') {
      id = setTimeout(() => setPhase('erase'), 600);
    } else if (phase === 'erase') {
      if (displayed.length === 0) {
        id = setTimeout(() => setPhase('type'), 500);
      } else {
        id = setTimeout(() => setDisplayed(full.slice(0, displayed.length - 1)), 80 + Math.random() * 60);
      }
    }
    return () => clearTimeout(id);
  }, [phase, displayed]);

  const showCursor = phase !== 'pause';
  return (
    <span className="type-code">
      <span className="type-bracket">&lt;</span>
      <span className="type-word">{displayed}</span>
      <span className="type-bracket"> /&gt;</span>
      {showCursor && <span className="type-cursor">|</span>}
    </span>
  );
}

function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-eyebrow">
        <span className="dash"></span>
        <span>Portfolio · 2026 · Based in Noida, India</span>
      </div>

      <h1>
        <span className="row"><span className="reveal r1"><em>Brand Manager,</em></span></span>
        <span className="row"><span className="reveal r2">MBA, &amp;&nbsp; now</span></span>
        <span className="row"><span className="reveal r3">I <TypeCode /></span></span>
      </h1>

      <div className="hero-bottom">
        <div>
          <div className="tag">About me · 01</div>
          <p className="blurb">
            I'm a marketer who got curious, started shipping code, and never really stopped. Now aiming at product.
          </p>
        </div>
        <Avatar />
        <div className="meta" style={{ textAlign: 'right' }}>
          <div className="tag">Currently</div>
          <p>Manager, Corporate Brand at <b>HCLTech</b>. MBA from <b>SJMSOM, IIT Bombay</b>. Open to Product Manager roles.</p>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <span className="arrow"></span>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Avatar, TypeCode });
