const { useEffect: useEffectP, useRef: useRefP } = React;

/* Live mini-previews — one per project, pure canvas. */

function OpticAIPreview() {
  const ref = useRefP(null);
  useEffectP(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2; ctx.scale(2, 2);
    let t = 0, raf;
    const loop = () => {
      t += 0.01;
      const w = c.offsetWidth, h = c.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const hue = (t * 40) % 360;
      // 3 swatches
      for (let i = 0; i < 3; i++) {
        const x = (w / 3) * i + 6;
        const bw = w / 3 - 12;
        const delta = i === 1 ? 0 : (i === 0 ? -6 : 8);
        ctx.fillStyle = `oklch(0.62 0.18 ${hue + delta})`;
        ctx.fillRect(x, 8, bw, h - 16);
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} />;
}

function AsciiPreview() {
  const ref = useRefP(null);
  useEffectP(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2; ctx.scale(2, 2);
    let t = 0, raf;
    const chars = '@%#*+=-:. ';
    const loop = () => {
      t += 0.04;
      const w = c.offsetWidth, h = c.offsetHeight;
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--card');
      ctx.fillRect(0, 0, w, h);
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--fg');
      const cols = Math.floor(w / 7);
      const rows = Math.floor(h / 10);
      for (let r = 0; r < rows; r++) {
        for (let col = 0; col < cols; col++) {
          const dx = col - cols / 2, dy = r - rows / 2;
          const d = Math.sqrt(dx * dx + dy * dy);
          const v = (Math.sin(d * 0.5 - t * 2) + 1) / 2;
          const idx = Math.floor(v * (chars.length - 1));
          ctx.fillText(chars[idx], col * 7, r * 10 + 8);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} />;
}

function PuzzlePreview() {
  const ref = useRefP(null);
  useEffectP(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2; ctx.scale(2, 2);
    let t = 0, raf;
    const loop = () => {
      t += 0.015;
      const w = c.offsetWidth, h = c.offsetHeight;
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--card');
      ctx.fillRect(0, 0, w, h);
      const cols = 4, rows = 3;
      const pw = w / cols, ph = h / rows;
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--fg-muted');
      ctx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        for (let col = 0; col < cols; col++) {
          const phase = t + (r + col) * 0.4;
          const ox = Math.sin(phase) * 3;
          const oy = Math.cos(phase) * 3;
          ctx.strokeRect(col * pw + 3 + ox, r * ph + 3 + oy, pw - 6, ph - 6);
        }
      }
      // pinch dot
      const px = w / 2 + Math.cos(t) * 30;
      const py = h / 2 + Math.sin(t) * 20;
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent');
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI * 2);
      ctx.fill();
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} />;
}

function AntigravityPreview() {
  const ref = useRefP(null);
  useEffectP(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2; ctx.scale(2, 2);
    const blobs = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * 400, y: Math.random() * 120,
      vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6,
      r: 20 + Math.random() * 30,
      h: 20 + i * 40
    }));
    let raf;
    const loop = () => {
      const w = c.offsetWidth, h = c.offsetHeight;
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--card');
      ctx.globalAlpha = 0.2;
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = 0.5;
      for (const b of blobs) {
        b.x += b.vx; b.y += b.vy;
        if (b.x < 0 || b.x > w) b.vx *= -1;
        if (b.y < 0 || b.y > h) b.vy *= -1;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `oklch(0.7 0.2 ${b.h})`);
        g.addColorStop(1, `oklch(0.7 0.2 ${b.h} / 0)`);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} />;
}

function PiSpiralPreview() {
  const ref = useRefP(null);
  useEffectP(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2; ctx.scale(2, 2);
    const digits = '3141592653589793238462643383279502884197169399375105820974944592307816406286';
    let t = 0, raf;
    const loop = () => {
      t += 0.006;
      const w = c.offsetWidth, h = c.offsetHeight;
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--card');
      ctx.fillRect(0, 0, w, h);
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(t);
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--fg');
      for (let i = 0; i < digits.length; i++) {
        const angle = i * 0.35;
        const r = 4 + i * 0.7;
        if (r > Math.min(w, h) / 2 - 6) break;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        ctx.globalAlpha = 0.3 + (i / digits.length) * 0.7;
        ctx.fillText(digits[i], x, y);
      }
      ctx.restore();
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} />;
}

const PROJECTS = [
  { num: '01', title: 'OpticAI', desc: 'Color vision benchmark. Identify which swatch is closer to a target. Live global leaderboard via Supabase.', tools: ['React', 'Tailwind', 'Supabase'], preview: OpticAIPreview, href: 'https://opticalgame.vercel.app/' },
  { num: '02', title: 'ASCII Studio', desc: 'Draw, convert, capture. Turn images and webcam frames into ASCII, or draw on a character canvas.', tools: ['HTML', 'CSS', 'JS'], preview: AsciiPreview, href: 'https://ayan-ascii.vercel.app/' },
  { num: '03', title: 'Puzzle Pinch', desc: 'Jigsaw puzzle controlled entirely by pinching with your webcam. MediaPipe Hands + leaderboard.', tools: ['MediaPipe', 'Canvas', 'Supabase'], preview: PuzzlePreview, href: 'https://puzzle-pinch.vercel.app/' },
  { num: '04', title: 'Antigravity', desc: 'Particle simulation of colorful blobs drifting and blending across the screen. Light / dark toggle.', tools: ['Canvas', 'Vanilla JS'], preview: AntigravityPreview, href: 'https://ayan-small-projects.vercel.app/' },
  { num: '05', title: 'Pi Spiral', desc: '3D-ish visualization of π digits plotted as a minimalist spiral with an interactive digit-count slider.', tools: ['Canvas', 'Math'], preview: PiSpiralPreview, href: 'https://ayan-small-projects.vercel.app/' },
];

function Project({ p }) {
  const Preview = p.preview;
  return (
    <a className="project" href={p.href} target="_blank" rel="noreferrer">
      <div className="idx">{p.num}</div>
      <div>
        <h4>{p.title}</h4>
        <div className="tools">{p.tools.map(t => <span key={t}>{t}</span>)}</div>
      </div>
      <div className="desc">{p.desc}</div>
      <div className="preview"><Preview /></div>
      <div className="arrow">↗</div>
    </a>
  );
}

function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-head">
        <div className="num">— 06 / Code</div>
        <h2>Things I have<br /><em>built</em>.</h2>
      </div>
      <div className="projects">
        {PROJECTS.map(p => <Project key={p.num} p={p} />)}
      </div>
      <div style={{ marginTop: 32, fontFamily: 'var(--ff-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--fg-muted)' }}>
        ↗ All five live at <a href="https://ayan-small-projects.vercel.app/" target="_blank" rel="noreferrer" style={{ borderBottom: '1px solid var(--line)', color: 'var(--fg)' }}>ayan-small-projects.vercel.app</a>
      </div>
    </section>
  );
}

Object.assign(window, { Projects });
