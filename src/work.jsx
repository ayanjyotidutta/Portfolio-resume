const { useState: useStateW } = React;

const WORK = [
  {
    year: '2023 — Present',
    role: 'Manager, Corporate Brand',
    co: 'HCLTech',
    desc: 'Leading brand strategy, global campaigns and governance for a ~$14B IT services brand.',
    bullets: [
      { b: 'Gartner VOC campaign', t: ' delivered 15.6M impressions, 30+ leads, and lifted conversions 25% through AI-driven targeting.' },
      { b: 'Awarded "Project of the Year"', t: ' For Gartner VOC Campaign among 20+ submissions from different teams across marketing.' },
      { b: 'Brand value +15.9% YoY', t: ', making HCLTech the fastest-growing IT services brand - driven by partnerships with valuation agencies.' },
      { b: 'Germany brand familiarity +15%', t: ' - turned perception surveys into geo strategies that guided annual marketing plans.' },
      { b: '₹50L Delhi Airport OOH', t: ' during AI Impact Summit 2026 - 1.2M+ impressions, coordinated end-to-end.' },
      { b: 'Brand governance', t: ' - reduced misalignment by 40%, improved compliance 25%, approved 100+ naming requests/yr.' },
      { b: 'Awarded "Fast Growing Brand Manager of the Year"', t: ' and recognized amongst 400+ marketers for Q3 2025 performance.' },
    ]
  },
  {
    year: 'May — Jul 2022',
    role: 'Summer Intern',
    co: 'Sun Pharma',
    desc: 'Sustainability & Operations - built a vendor-compliance framework from scratch.',
    bullets: [
      { b: 'Framework for 18 vendors', t: ' - 5 parameters → 17 indicators → 23 questions, aligned with Sun-KPMG partnership.' },
      { b: '82.31% compliance', t: ' achieved with the drafted checklist, after refining through stakeholder rounds.' },
      { b: 'Analyzed packaging vendors', t: ' via a 6% sample to systematically evaluate sustainability compliance.' },
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
