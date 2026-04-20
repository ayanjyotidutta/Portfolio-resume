// Top-level app wiring. Apply theme before first paint.
(function applyTheme() {
  const t = (window.AYAN_TWEAKS && window.AYAN_TWEAKS.theme) || 'night';
  document.documentElement.setAttribute('data-theme', t);
})();

function App() {
  return (
    <>
      <Loader />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <LinkStrip />
      <Stats />
      <Work />
      <Campaigns />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
      <Tweaks />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
