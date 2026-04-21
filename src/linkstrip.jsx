// Contact strip that appears right after the About section —
// mirrors the grid used at the bottom of the page.
function LinkStrip() {
  return (
    <section className="container" aria-label="Quick links" style={{ marginBottom: 60 }}>
      <div className="contact-bottom" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
        <div className="col">
          <div className="k">Phone</div>
          <div className="v"><a href="tel:+918638378703">+91 · 8638378703 ↗</a></div>
        </div>
        <div className="col">
          <div className="k">Email</div>
          <div className="v"><a href="mailto:ayanjyotidutta@gmail.com">ayanjyotidutta@gmail.com ↗</a></div>
        </div>
        <div className="col">
          <div className="k">LinkedIn</div>
          <div className="v"><a href="https://www.linkedin.com/in/ayanjyotidutta/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ayanjyotidutta ↗</a></div>
        </div>
        <div className="col">
          <div className="k">GitHub</div>
          <div className="v"><a href="https://github.com/ayanjyotidutta" target="_blank" rel="noreferrer">github.com/ayanjyotidutta ↗</a></div>
        </div>
        <div className="col">
          <div className="k">Projects</div>
          <div className="v"><a href="https://ayan-small-projects.vercel.app/" target="_blank" rel="noreferrer">ayan-small-projects ↗</a></div>
        </div>
        <div className="col">
          <div className="k">Resume</div>
          <div className="v"><a href="External files/Ayan_Jyoti_Dutta_Resume.pdf" download>Download ↓</a></div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { LinkStrip });
