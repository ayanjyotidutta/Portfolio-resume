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
        <div className="num">— 07 / Toolbox</div>
        <h2>What I'm<br/><em>good at</em>.</h2>
      </div>
      <MarqueeRow />
      <div className="skill-grid">
        <Reveal className="skill-col">
          <h4>Brand & Marketing</h4>
          <ul>
            <li>Brand Strategy <span className="level">5 yrs</span></li>
            <li>Campaign Management <span className="level">3 yrs</span></li>
            <li>Digital Marketing <span className="level">3 yrs</span></li>
            <li>AI-Led Marketing <span className="level">2 yrs</span></li>
            <li>Stakeholder Management <span className="level">3 yrs</span></li>
            <li>Brand Governance <span className="level">3 yrs</span></li>
          </ul>
        </Reveal>
        <Reveal className="skill-col" delay={120}>
          <h4>Tech & AI</h4>
          <ul>
            <li>Python <span className="level">learning</span></li>
            <li>SQL <span className="level">proficient</span></li>
            <li>HTML / CSS / JS <span className="level">learning</span></li>
            <li>Power BI <span className="level">certified</span></li>
            <li>ChatGPT / Claude / Copilot <span className="level">daily</span></li>
            <li>Generative AI Tools <span className="level">proficient</span></li>
            <li>JIRA <span className="level">proficient</span></li>
          </ul>
        </Reveal>
        <Reveal className="skill-col" delay={240}>
          <h4>Off-hours</h4>
          <ul>
            <li>Singing <span className="level">years</span></li>
            <li>Painting <span className="level">years</span></li>
            <li>Graphic Design <span className="level">years</span></li>
            <li>Music Clubs <span className="level">NIT Durgapur</span></li>
            <li>Marketing Clubs <span className="level">IIT Bombay</span></li>
            <li>Math Olympiad <span className="level">Intl. Rank 3</span></li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Skills, MarqueeRow });
