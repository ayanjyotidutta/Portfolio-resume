const { useState: useStateSt } = React;

function Stat({ target, suffix = '', unit = '', label, decimals = 0 }) {
  const [ref, inView] = useInView();
  const v = useCountUp(target, inView);
  const format = (n) => {
    if (decimals > 0) return n.toFixed(decimals);
    return Math.round(n).toLocaleString('en-US');
  };
  return (
    <div className="stat" ref={ref}>
      <div className="num">
        {format(v)}{suffix}
        {unit && <span className="unit">{unit}</span>}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="section container" id="impact" style={{ paddingBottom: 60 }}>
      <div className="section-head">
        <div className="num">— 03 / Impact</div>
        <h2>Numbers that<br /><em>matter</em>.</h2>
      </div>
      <div className="stats-grid">
        <Stat target={15.9} decimals={1} suffix="%" label="YoY brand value growth at HCLTech — making it the fastest-growing IT services brand" />
        <Stat target={20} decimals={1} unit="M" label="Impressions on the global Gartner VOC campaign, plus 30+ inbound leads" />
        <Stat target={1.5} decimals={1} unit="M+" label="Impressions from a ₹50L Delhi Airport OOH campaign during AI Impact Summit 2026" />
        <Stat target={100000} suffix="+" label="Lanyard assets rebranded pan-India, worth ₹40L+, to align campus brand experience" />
      </div>
    </section>
  );
}

Object.assign(window, { Stat, Stats });
