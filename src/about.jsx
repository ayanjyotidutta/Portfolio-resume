function About() {
  return (
    <section className="section container" id="about">
      <div className="section-head">
        <div className="num">— 02 / About</div>
        <h2>A marketer who<br />learned to <em>build</em>.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <Reveal>
            <p>
              I spent three years at HCLTech shaping how a ~$14B IT brand shows up in the world —
              strategy, governance, global campaigns, OOH at Delhi Airport, the <em>unglamorous ops</em> that
              make brands feel intentional.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Then I started <em>coding</em>. SQL, then HTML, CSS, JavaScript. I built five weird little
              browser projects — a color-vision game, a webcam-controlled jigsaw, ASCII art tools — because
              shipping something end-to-end is the fastest way to understand it.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              The next move is <em>Product</em>. I want to sit between the people who make things and the
              people who care about them — which, in one form or another, is what I've been doing all along.
            </p>
          </Reveal>
        </div>
        <div className="about-facts">
          <Reveal className="fact"><div className="k">Name</div><div className="v">Ayan Jyoti Dutta</div></Reveal>
          <Reveal className="fact" delay={60}><div className="k">Based</div><div className="v">Noida · India</div></Reveal>
          <Reveal className="fact" delay={120}><div className="k">Current</div><div className="v">Manager, Corporate Brand — HCLTech</div></Reveal>
          <Reveal className="fact" delay={180}><div className="k">Education</div><div className="v">MBA, IIT Bombay · B.Tech, NIT Durgapur</div></Reveal>
          <Reveal className="fact" delay={240}><div className="k">Writing</div><div className="v">HTML, CSS, JS, SQL · React (learning)</div></Reveal>
          <Reveal className="fact" delay={300}><div className="k">Off-hours</div><div className="v">Singing, painting, graphic design</div></Reveal>
          <Reveal className="fact" delay={360}><div className="k">Open to</div><div className="v">Product Manager · Associate PM roles</div></Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About });
