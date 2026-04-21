const { useEffect: useEffectC, useRef: useRefC } = React;

function GartnerViz() {
  const ref = useRefC(null);
  useEffectC(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    const resize = () => { c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2; ctx.scale(2, 2); };
    resize();
    let t = 0, raf;
    const loop = () => {
      t += 0.008;
      const w = c.offsetWidth, h = c.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      // Rising bars
      const n = 24;
      for (let i = 0; i < n; i++) {
        const x = (i / n) * w;
        const bw = w / n - 2;
        const phase = Math.sin(t * 2 + i * 0.4);
        const bh = 20 + (Math.sin(t + i * 0.3) * 0.5 + 0.5) * (h - 40);
        ctx.fillStyle = i > n * 0.7 ? getComputedStyle(document.documentElement).getPropertyValue('--accent') : getComputedStyle(document.documentElement).getPropertyValue('--fg');
        ctx.globalAlpha = 0.15 + (i / n) * 0.7;
        ctx.fillRect(x + 1, h - bh, bw, bh);
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} style={{ width: '100%', height: '100%' }} />;
}

function AIForceViz() {
  const ref = useRefC(null);
  useEffectC(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2; ctx.scale(2, 2);
    let t = 0, raf;
    const loop = () => {
      t += 0.02;
      const w = c.offsetWidth, h = c.offsetHeight;
      ctx.fillStyle = '#0f0f0f';
      ctx.fillRect(0, 0, w, h);
      // Orbiting dots
      ctx.strokeStyle = 'rgba(244,241,234,0.12)';
      ctx.lineWidth = 1;
      for (let r = 30; r < 120; r += 20) {
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let i = 0; i < 8; i++) {
        const angle = t + i * (Math.PI * 2 / 8);
        const r = 60 + Math.sin(t * 1.5 + i) * 30;
        const x = w / 2 + Math.cos(angle) * r;
        const y = h / 2 + Math.sin(angle) * r;
        ctx.fillStyle = i % 2 === 0 ? '#f4f1ea' : getComputedStyle(document.documentElement).getPropertyValue('--accent');
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} style={{ width: '100%', height: '100%' }} />;
}

function OOHViz() {
  const ref = useRefC(null);
  useEffectC(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2; ctx.scale(2, 2);
    let t = 0, raf;
    const loop = () => {
      t += 0.015;
      const w = c.offsetWidth, h = c.offsetHeight;
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, w, h);
      // Scrolling billboard text
      ctx.font = 'italic 600 42px "Instrument Serif", serif';
      ctx.fillStyle = '#f4f1ea';
      const text = '  AI IMPACT  ·  DELHI  ·  2026  ·';
      const tw = ctx.measureText(text).width;
      const offset = (t * 40) % tw;
      for (let x = -offset; x < w + tw; x += tw) {
        ctx.fillText(text, x, h / 2 + 15);
      }
      // top and bottom bars
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent');
      ctx.fillRect(0, 0, w, 4);
      ctx.fillRect(0, h - 4, w, 4);
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} style={{ width: '100%', height: '100%' }} />;
}

function Campaigns() {
  return (
    <section className="section container" id="campaigns">
      <div className="section-head">
        <div className="num">— 05 / Campaigns</div>
        <h2>Selected brand<br /><em>campaigns</em>.</h2>
      </div>
      <div className="campaigns">
        <Reveal className="campaign">
          <div className="viz viz-gartner"><GartnerViz /></div>
          <div className="tag">Global · 2025-26</div>
          <h3>Gartner VOC</h3>
          <div className="metrics">
            <div className="m"><div className="v">15.6M</div><div className="k">Impressions</div></div>
            <div className="m"><div className="v">30+</div><div className="k">Leads</div></div>
            <div className="m"><div className="v">+25%</div><div className="k">Conversions</div></div>
          </div>
          <p>Global Voice-of-Customer campaign with AI-driven targeting. Lifted conversions 25% by aligning creative to account-based intent signals.</p>
        </Reveal>
        <Reveal className="campaign" delay={120}>
          <div className="viz viz-aiforce"><AIForceViz /></div>
          <div className="tag">Multi-country · 2025</div>
          <h3>AI Force</h3>
          <div className="metrics">
            <div className="m"><div className="v">1M+</div><div className="k">Impressions</div></div>
            <div className="m"><div className="v">+20%</div><div className="k">Market reach</div></div>
          </div>
          <p>Multi-country launch campaign for HCLTech's AI Force platform. Orchestrated across markets and media types to expand reach &gt;20%.</p>
        </Reveal>
        <Reveal className="campaign" delay={240}>
          <div className="viz viz-ooh"><OOHViz /></div>
          <div className="tag">OOH · Feb 2026</div>
          <h3>Delhi Airport</h3>
          <div className="metrics">
            <div className="m"><div className="v">₹50L</div><div className="k">Spend</div></div>
            <div className="m"><div className="v">1.2M+</div><div className="k">Impressions</div></div>
          </div>
          <p>Out-of-home takeover at Delhi Airport during AI Impact Summit. End-to-end management — creative, vendor, placement, measurement.</p>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Campaigns });
