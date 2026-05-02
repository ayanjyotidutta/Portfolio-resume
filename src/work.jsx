const { useState: useStateW } = React;

const WORK = [
  {
    year: '2023 — Present',
    role: 'Manager, Corporate Brand',
    co: 'HCLTech',
    desc: 'Leading brand strategy, global campaigns and governance for a ~$14B IT services brand.',
    bullets: [
      { b: 'Gartner VOC global integrated marketing campaign', t: ' — 20M+ impressions, high quality leads, 25% conversion lift via AI-driven audience segmentation and cross-functional stakeholder management.' },
      { b: '₹50L Delhi Airport OOH campaign', t: ' (AI Impact Summit, Feb 2026) — 1.5M+ impressions; budget management, asset creation & placement and end-to-end vendor coordination.' },
      { b: 'DP World Tour sports partnership', t: ' — led creative and website track for digital activations; Figma wireframe and coordinated microsite delivery across design and digital teams.' },
      { b: 'AI Force global campaigns', t: ' in France, Germany and Japan — 1M+ impressions; expanded GTM reach 20%+ via performance and AB marketing.' },
      { b: 'MetLife stadium "Official AI Partner"', t: ' — implemented webpage restructuring, creative refreshes and content updates (+ New York Giants and Jets).' },
      { b: 'Brand value +15.9% YoY', t: ' — drove strategic brand valuation agency partnerships (Brand Finance, Interbrand, Kantar) making HCLTech the fastest-growing IT Services brand globally.' },
      { b: 'B2Bi perception survey', t: ' converted into 12 geo and vertical sub-decks for CXOs and sales leaders — saving ₹70L+ in agency fees; drove Germany brand familiarity +15% and informed GTM strategies across 8 markets and 4 verticals.' },
      { b: '\'About Us\' webpage revamp', t: ' — UX-informed content strategy from wireframe to quarterly updates, increasing average dwell time by 12%.' },
      { b: 'Customer Experience Center (CEC)', t: ' — introduced dedicated Brand Zone Experience for client visits across all HCLTech CECs globally.' },
      { b: 'Three-agent AI pipeline', t: ' — built with Copilot automating competitive screening across 20+ IT peers and brand naming governance for 500+ JIRA entries.' },
      { b: 'Brand governance programme', t: ' — misalignment reduced 40%, compliance improved 25%; streamlined 100+ offering naming requests annually.' },
      { b: 'Pan-India rebranding of 100,000+ lanyard assets', t: ' (₹40L) in partnership with GWS team, driving brand transformation across all India campuses.' },
    ]
  },
  {
    year: 'May — Jul 2022',
    role: 'Summer Intern',
    co: 'Sun Pharma',
    desc: 'Sustainability & Operations - built a vendor-compliance framework from scratch.',
    bullets: [
      { b: 'Sun–KPMG sustainability compliance framework', t: ' — mapped 5 parameters, 17 indicators, 23 evaluation questions across 18 vendors.' },
      { b: 'Cross-functional stakeholder communications', t: ' — organised rounds to refine and scale the compliance framework for broader vendor rollout.' },
    ]
  }
];

function WorkItem({ item, idx }) {
  const [open, setOpen] = useStateW(idx === 0);
  return (
    <div className={`work-item ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="year">{item.year}</div>
      <div className="role">
        {item.role}
        <span className="co">{item.co}</span>
      </div>
      <div className="desc">
        {item.desc}
        {open && (
          <div className="details">
            <ul>
              {item.bullets.map((b, i) => (
                <li key={i}><span><b>{b.b}</b>{b.t}</span></li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="plus">+</div>
    </div>
  );
}

function Work() {
  return (
    <section className="section container" id="work">
      <Reveal as="div" className="section-head">
        <div className="num">— 04 / Experience</div>
        <h2>Where I have<br /><em>worked</em>.</h2>
      </Reveal>
      <div className="work-list">
        {WORK.map((w, i) => (
          <Reveal key={i} type="left" delay={i * 100}>
            <WorkItem item={w} idx={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Work });
