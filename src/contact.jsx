function Contact() {
  return (
    <section className="contact container" id="contact">
      <div className="section-head" style={{ borderTop: 'none', paddingTop: 0 }}>
        <div className="num">— 09 / Say hi</div>
        <h2 style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>Looking for a <em>Marketer</em>?<br />Let's talk.</h2>
      </div>
      <Reveal className="big">
        Write to me at{' '}
        <a href="mailto:ayanjyotidutta@gmail.com"><em>ayanjyotidutta</em><br />@gmail.com ↗</a>
      </Reveal>
      <div className="contact-bottom">
        <Reveal type="scale" className="col">
          <div className="k">Phone</div>
          <div className="v"><a href="tel:+918638378703">+91 · 8638378703 ↗</a></div>
        </Reveal>
        <Reveal type="scale" className="col" delay={60}>
          <div className="k">LinkedIn</div>
          <div className="v"><a href="https://www.linkedin.com/in/ayanjyotidutta/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ayanjyotidutta ↗</a></div>
        </Reveal>
        <Reveal type="scale" className="col" delay={120}>
          <div className="k">GitHub</div>
          <div className="v"><a href="https://github.com/ayanjyotidutta" target="_blank" rel="noreferrer">github.com/ayanjyotidutta ↗</a></div>
        </Reveal>
        <Reveal type="scale" className="col" delay={180}>
          <div className="k">Projects</div>
          <div className="v"><a href="https://ayan-small-projects.vercel.app/" target="_blank" rel="noreferrer">ayan-small-projects ↗</a></div>
        </Reveal>
        <Reveal type="scale" className="col" delay={240}>
          <div className="k">Resume</div>
          <div className="v"><a href="External files/Ayan_Jyoti_Dutta_Resume.pdf" download>Download ↓</a></div>
        </Reveal>
        <Reveal type="scale" className="col" delay={300}>
          <div className="k">Based</div>
          <div className="v">Noida · India<br />Open to Hybrid &amp; relocation</div>
        </Reveal>
      </div>

      <div className="footer-mini" style={{ marginTop: 72 }}>
        <span>© 2026 Ayan Jyoti Dutta</span>
        <span>Designed & coded from scratch · Instrument Serif + Inter</span>
      </div>
    </section>
  );
}

Object.assign(window, { Contact });
