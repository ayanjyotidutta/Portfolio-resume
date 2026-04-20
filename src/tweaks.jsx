const { useEffect: useEffectT, useState: useStateT } = React;

function Tweaks() {
  const [open, setOpen] = useStateT(false);
  const [theme, setThemeShared] = useSharedTheme();

  // Edit mode protocol
  useEffectT(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setOpen(true);
      if (d.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const setT = (t) => {
    setThemeShared(t);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { theme: t } }, '*');
  };

  if (!open) return null;
  return (
    <div className="tweaks-panel">
      <h5>Tweaks · Theme</h5>
      <div className="theme-row">
        <button className={`swatch terminal ${theme==='terminal'?'active':''}`} onClick={() => setT('terminal')} title="Terminal (dark)"></button>
        <button className={`swatch daylight ${theme==='daylight'?'active':''}`} onClick={() => setT('daylight')} title="Daylight (light)"></button>
        <button className={`swatch night ${theme==='night'?'active':''}`} onClick={() => setT('night')} title="Night (black + neon)"></button>
        <button className={`swatch light ${theme==='light'?'active':''}`} onClick={() => setT('light')} title="Light (white + green)"></button>
      </div>
      <div style={{ marginTop: 12, fontFamily: 'var(--ff-mono)', fontSize: 10, color: 'var(--fg-muted)', letterSpacing: '0.1em' }}>
        Terminal · Daylight · Night · Light
      </div>
    </div>
  );
}

Object.assign(window, { Tweaks });
