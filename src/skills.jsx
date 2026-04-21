const MARQUEE = ['Brand Strategy', 'AI-Driven Marketing', 'Campaign Management', 'Generative AI', 'Digital Marketing', 'Python', 'Stakeholder Management', 'Marketing Analytics'];

// Build one "set" as a single inline block so the two copies are identical width
function MarqueeSet({ offset }) {
  return (
    <span className="marquee-set" aria-hidden={offset > 0 ? 'true' : undefined}>
      {MARQUEE.map((m, i) => (
        <React.Fragment key={i}>
          <span className="marquee-item">{m}</span>
          <span className="marquee-sep">✴</span>
        </React.Fragment>
      ))}
    </span>
  );
}

function MarqueeRow() {
  return (
    <div className="marquee">
      {/* Two identical sets: first finishes exactly when second begins */}
      <div className="marquee-track">
        <MarqueeSet offset={0} />
        <MarqueeSet offset={1} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-head">
        <div className="num">— 08 / Toolbox</div>
        <h2>What I am<br /><em>good at</em>.</h2>
      </div>
      <MarqueeRow />
      <div className="skill-grid">
        <Reveal type="scale" className="skill-col">
          <h4>Brand & Marketing</h4>
          <ul>
            <li>Brand Strategy <span className="level">3 yrs</span></li>
            <li>Brand Governance <span className="level">3 yrs</span></li>
            <li>Stakeholder Management <span className="level">3 yrs</span></li>
            <li>Campaign Management <span className="level">3 yrs</span></li>
            <li>Digital Marketing <span className="level">2 yrs</span></li>
            <li>AI-Led Marketing <span className="level">1 yr</span></li>
          </ul>
        </Reveal>
        <Reveal type="scale" className="skill-col" delay={120}>
          <h4>Tech & AI</h4>
          <ul>
            <li>Claude, Gemini and other LLMs <span className="level">proficient</span></li>
            <li>Generative AI Tools <span className="level">proficient</span></li>
            <li>SQL <span className="level">proficient</span></li>
            <li>Python <span className="level">learning</span></li>
            <li>HTML / CSS <span className="level">learning</span></li>
            <li>JavaScript <span className="level">learning</span></li>
            <li>Power BI <span className="level">certified</span></li>
          </ul>
        </Reveal>
        <Reveal type="scale" className="skill-col" delay={240}>
          <h4>Extracurriculars</h4>
          <ul>
            <li>Singing <span className="level">-</span></li>
            <li>Painting <span className="level">-</span></li>
            <li>Graphic Designing <span className="level">-</span></li>
            <li>Music Club <span className="level">NIT Durgapur</span></li>
            <li>Marketing Club <span className="level">IIT Bombay</span></li>
            <li>Math Olympiad <span className="level">Intl. Rank 3</span></li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Skills, MarqueeRow });
