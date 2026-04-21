function About() {
  return (
    <section className="section container" id="about">
      <div className="section-head">
        <div className="num">— 02 / About</div>
        <h2>A marketer who<br />speaks <em>AI</em>.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <Reveal>
            <p>
              I spent three years at HCLTech shaping how a ~$14B IT brand shows up in the world - brand strategy, governance, global campaigns, OOH at Delhi Airport, the <em>unglamorous ops</em> that make brands feel intentional.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Then I started <em>coding</em> - SQL, Python, HTML, CSS and JavaScript. I use AI and generative AI daily - not just as a tool, but as a collaborator - to build smarter campaigns, analyze data insights faster, and prototype ideas end-to-end.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              The next move is <em>AI-powered marketing</em>. I want to be the person who bridges brand intuition
              and machine intelligence - turning LLMs, analytics, and automation into stories that actually land.
            </p>
          </Reveal>
        </div>
        <div className="about-facts">
          <Reveal type="left" className="fact"><div className="k">Name</div><div className="v">Ayan Jyoti Dutta</div></Reveal>
          <Reveal type="left" className="fact" delay={60}><div className="k">Based</div><div className="v">Noida · India</div></Reveal>
          <Reveal type="left" className="fact" delay={120}><div className="k">Current</div><div className="v">Manager, Corporate Brand - HCLTech</div></Reveal>
          <Reveal type="left" className="fact" delay={180}><div className="k">Education</div><div className="v">MBA, IIT Bombay · B.Tech, NIT Durgapur</div></Reveal>
          <Reveal type="left" className="fact" delay={240}><div className="k">Tech</div><div className="v">Python · SQL · HTML/CSS · JavaScript · Power BI · JIRA </div></Reveal>
          <Reveal type="left" className="fact" delay={300}><div className="k">AI Tools</div><div className="v">ChatGPT · Claude · Generative AI · LLMs · CoPilot</div></Reveal>
          <Reveal type="left" className="fact" delay={360}><div className="k">Open to</div><div className="v">AI Marketing · Brand Strategy · Growth roles</div></Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
