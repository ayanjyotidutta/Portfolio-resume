function Awards() {
  const edu = [
    { y: '2021-23', t: 'MBA · SJMSOM, IIT Bombay', s: 'CGPA 8.58 / 10 · Top 10% (4 Merit Scholarships)' },
    { y: '2015-19', t: 'B.Tech · Mechanical Engineering, NIT Durgapur', s: 'CGPA 8.88 / 10 · Nitya Gopal & Hiramoti Saha Memorial Award' },
    { y: '2015', t: 'Class XII · Delhi Public School, Duliajan', s: '93%' },
    { y: '2013', t: 'Class X · Delhi Public School, Duliajan', s: '10 / 10 CGPA' },
  ];
  const awards = [
    { y: '2025', t: 'Fast Growing Brand Manager of the Year', s: 'HCLTech — for partnerships with valuation agencies driving brand growth' },
    { y: '2025', t: 'Q3 Performance Recognition', s: 'Amongst 400+ marketers — for leading the Gartner VOC campaign' },
    { y: '2022', t: 'National Finalist · Tally BizWiz', s: 'Top finalist out of 2,000 teams in India' },
    { y: '2022', t: 'Summer Course: Europe Inside Out', s: 'Katholieke Universiteit Leuven, Belgium' },
    { y: '2015', t: 'Intl. Rank 3 · Maths Olympiad', s: 'International Olympiad of Mathematics, final level' },
    { y: '—', t: 'Google PM Certificate · Google Digital Marketing', s: 'Plus Power BI Data Analytics certification' },
  ];
  return (
    <section className="section container" id="awards">
      <div className="section-head">
        <div className="num">— 08 / Credentials</div>
        <h2>Education &<br/><em>recognition</em>.</h2>
      </div>
      <div className="split">
        <div>
          <h3>Education</h3>
          {edu.map((e,i) => (
            <Reveal key={i} className="list-item" delay={i*60}>
              <div className="y">{e.y}</div>
              <div>
                <div className="t">{e.t}</div>
                <div className="s">{e.s}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div>
          <h3>Awards & distinctions</h3>
          {awards.map((e,i) => (
            <Reveal key={i} className="list-item" delay={i*60}>
              <div className="y">{e.y}</div>
              <div>
                <div className="t">{e.t}</div>
                <div className="s">{e.s}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Awards });
