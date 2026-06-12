import { useEffect } from 'react';

const CONTACT = 'https://wa.me/254729456805';

/* ---------------- Workflow diagram (the signature visual) ---------------- */

const GLYPHS = {
  bolt: <path d="M17 7 L11 17 L16 17 L15 25 L21 14 L16 14 Z" />,
  spark: <path d="M16 8 L17.7 14.3 L24 16 L17.7 17.7 L16 24 L14.3 17.7 L8 16 L14.3 14.3 Z" />,
  chat: <g fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="10" width="14" height="9" rx="3" /><path d="M13.5 19 L13.5 22.5 L17 19" /></g>,
  check: <path fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 16.5 L14 20.5 L22 11.5" />,
  calendar: <g fill="none" strokeWidth="1.8" strokeLinecap="round"><rect x="9" y="10.5" width="14" height="11.5" rx="2" /><path d="M9 14.5 H23 M13 8.5 V12 M19 8.5 V12" /></g>,
};

const TINTS = {
  green: ['#e7f7f0', '#15b881'],
  accent: ['#f0effe', '#5b54f0'],
  blue: ['#e8f2ff', '#2e90fa'],
  amber: ['#fef3e0', '#f5a524'],
};

function WFNode({ x, y, w = 214, h = 78, big, glyph, tint, title, sub }) {
  const [bg, fg] = TINTS[tint];
  const chipY = (h - 32) / 2;
  return (
    <g transform={`translate(${x} ${y})`} filter="url(#nodeShadow)">
      <rect className={`wf-card${big ? ' big' : ''}`} width={w} height={h} rx="15" />
      <g transform={`translate(16 ${chipY})`}>
        <rect width="32" height="32" rx="10" fill={bg} />
        <g fill={fg} stroke={fg}>{glyph}</g>
      </g>
      <text className="wf-title" x="64" y={h / 2 - 2}>{title}</text>
      <text className="wf-sub" x="64" y={h / 2 + 17}>{sub}</text>
    </g>
  );
}

function FlowDot({ path, dur, begin = '0s' }) {
  return (
    <circle className="wf-dot" r="4">
      <animateMotion dur={dur} begin={begin} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
        <mpath href={path} />
      </animateMotion>
      <animate attributeName="opacity" dur={dur} begin={begin} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.8;1" />
    </circle>
  );
}

function WorkflowCanvas() {
  return (
    <svg className="wf" viewBox="0 0 1040 520" role="img" aria-label="Automation workflow: a new lead flows into an AI agent that replies, logs the lead, and books a call.">
      <defs>
        <filter id="nodeShadow" x="-20%" y="-30%" width="140%" height="170%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#1a2240" floodOpacity="0.10" />
        </filter>
      </defs>

      {/* edges */}
      <path id="e0" className="wf-edge" d="M250 260 C 331 260, 333 260, 414 260" />
      <path id="e1" className="wf-edge" d="M626 260 C 709 260, 709 130, 792 130" />
      <path id="e2" className="wf-edge" d="M626 260 C 709 260, 709 260, 792 260" />
      <path id="e3" className="wf-edge" d="M626 260 C 709 260, 709 390, 792 390" />

      {/* flowing data */}
      <FlowDot path="#e0" dur="2.2s" />
      <FlowDot path="#e1" dur="2.4s" begin="0.9s" />
      <FlowDot path="#e2" dur="2.4s" begin="1.2s" />
      <FlowDot path="#e3" dur="2.4s" begin="1.5s" />

      {/* nodes */}
      <WFNode x="36" y="221" tint="green" glyph={GLYPHS.bolt} title="New lead" sub="WhatsApp · email · web" />
      <WFNode x="414" y="212" h="96" big tint="accent" glyph={GLYPHS.spark} title="AI agent" sub="Understands & decides" />
      <WFNode x="792" y="92" tint="blue" glyph={GLYPHS.chat} title="Instant reply" sub="In your brand voice" />
      <WFNode x="792" y="221" tint="green" glyph={GLYPHS.check} title="Log the lead" sub="Captured, never lost" />
      <WFNode x="792" y="352" tint="amber" glyph={GLYPHS.calendar} title="Book a call" sub="Calendar + reminder" />
    </svg>
  );
}

/* ---------------- Page sections ---------------- */

function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr-inner">
        <a className="brand" href="/"><span className="brand-mark">D</span>Denzil Automations</a>
        <nav>
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Engagements</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="hdr-cta"><a className="btn btn-primary" href={CONTACT}>Book a call</a></div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">AI automation studio</span>
        <h1>We build the systems that <span className="grad">run the work you keep meaning to do.</span></h1>
        <p className="lede">
          Done-for-you automations that capture leads, reply instantly, follow up, book, bill and support,
          wired into the tools you already use. Built in days. You own it.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href={CONTACT}>Book a call</a>
          <a className="btn btn-ghost btn-lg" href="#how">See how it works</a>
        </div>
        <p className="hero-micro">Done-for-you · Built in days · No lock-in</p>
        <div className="canvas-frame"><WorkflowCanvas /></div>
      </div>
    </section>
  );
}

const SERVICES = [
  { no: '01', t: 'Lead capture & instant reply', b: 'Every inbound message, from any channel, is answered in seconds, qualified, and logged. Nobody waits, nothing slips.', ex: 'First reply in under 60 seconds' },
  { no: '02', t: 'Follow-up that does not quit', b: 'Quiet leads are re-engaged on a schedule until they reply or buy, so deals stop dying in silence.', ex: 'Recovers leads you would have lost' },
  { no: '03', t: 'Self-serve booking', b: 'Customers book themselves into your calendar and get reminders that cut no-shows, with zero back-and-forth.', ex: 'Fewer no-shows' },
  { no: '04', t: 'Quotes, invoices & payments', b: 'Documents go out and payments get chased automatically, on time, without anyone remembering to.', ex: 'Paid faster, hands-off' },
  { no: '05', t: 'AI customer support', b: 'Common questions answered instantly and accurately in your brand voice, around the clock.', ex: '24/7, on-brand' },
  { no: '06', t: 'One source of truth', b: 'Every lead, deal and task flows into one live view your team actually trusts and acts on.', ex: 'Always current' },
];

function Services() {
  return (
    <section className="block" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What we build</span>
          <h2>Pick the busywork. We turn it into a system.</h2>
          <p>We do not sell software you have to learn. We build the automation around how your business already runs, then hand it over working.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc" key={s.no}>
              <div className="no">{s.no}</div>
              <h3>{s.t}</h3>
              <p>{s.b}</p>
              <span className="ex">{s.ex}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { no: 'Step 01', t: 'We map it', b: 'We sit with your workflow and pinpoint exactly what is draining your time and leaking revenue.' },
  { no: 'Step 02', t: 'We build it', b: 'We design and build the automation around your existing tools, then test it on your real cases.' },
  { no: 'Step 03', t: 'We hand it over', b: 'It goes live documented and yours, running on your accounts, with support while you settle in.' },
];

function HowItWorks() {
  return (
    <section className="block alt" id="how">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From a messy manual process to a system, in days.</h2>
          <p>The same approach we use to run our own pipeline, applied to yours.</p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="pstep" key={s.no}>
              <div className="no">{s.no}</div>
              <h3>{s.t}</h3>
              <p>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="block">
      <div className="wrap metrics">
        <div className="metric"><div className="num">&lt; 60s</div><div className="lbl">To the first response, every time</div></div>
        <div className="metric"><div className="num">24/7</div><div className="lbl">Running while you sleep</div></div>
        <div className="metric"><div className="num">Days</div><div className="lbl">To go live, not months</div></div>
      </div>
    </section>
  );
}

const TIERS = [
  { tier: 'Starter', sub: 'One high-impact workflow, built and shipped.', feat: false, items: ['We scope your single biggest time-sink', 'Built, tested on real cases', 'Documented and handed over', 'Runs on your own accounts'] },
  { tier: 'Growth', sub: 'Several workflows, wired into one system.', feat: true, items: ['Multiple processes automated', 'Integrations across your stack', 'A live dashboard of everything', 'Priority build and support'] },
  { tier: 'Partner', sub: 'Ongoing automation as you scale.', feat: false, items: ['Continuous build of new automations', 'Monitoring and maintenance', 'A standing automation roadmap', 'Direct line to the team'] },
];

function Engagements() {
  return (
    <section className="block alt" id="pricing">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Engagements</span>
          <h2>Start with one win. Scale into a system.</h2>
          <p>Every build is scoped to your business, so pricing is too. Book a call and we will map it and send a clear quote.</p>
        </div>
        <div className="eng">
          {TIERS.map((t) => (
            <div className={`eng-card${t.feat ? ' feat' : ''}`} key={t.tier}>
              {t.feat && <span className="feat-pill">Most chosen</span>}
              <div className="tier">{t.tier}</div>
              <div className="tier-sub">{t.sub}</div>
              <ul>{t.items.map((i) => <li key={i}><span className="tick">✓</span>{i}</li>)}</ul>
              <a className={`btn ${t.feat ? 'btn-primary' : 'btn-ghost'}`} href={CONTACT} style={{ width: '100%' }}>Book a call</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: 'What can you actually automate?', a: 'If it is repetitive and lives in software, we can likely automate it: lead handling, follow-ups, bookings, quotes, invoicing, support, reporting, and the glue between your tools.' },
  { q: 'Do I have to switch tools?', a: 'No. We build around what you already use, your messaging, email, CRM, calendar and spreadsheets, and connect them so they work as one.' },
  { q: 'How long until it is live?', a: 'Most first builds go live in days, not months. We start with the highest-impact workflow and expand from there.' },
  { q: 'Do I own it afterwards?', a: 'Yes. It runs on your own accounts and we hand over the documentation. No lock-in, no hostage software.' },
  { q: 'How much does it cost?', a: 'Every system is scoped to your business, so the price is specific to you. Book a call and we will map it and send a clear quote.' },
];

function Faq() {
  return (
    <section className="block" id="faq">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">FAQ</span>
          <h2>The questions we get most.</h2>
        </div>
        <div className="faq">
          {FAQS.map((f) => (
            <div className="faq-item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="cta">
          <h2>Tell us what is slowing you down.</h2>
          <p>Book a short call and we will show you exactly what we would automate first.</p>
          <a className="btn btn-primary btn-lg" href={CONTACT}>Book a call</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <span className="brand"><span className="brand-mark">D</span>Denzil Automations</span>
        <span>AI automation studio · Worldwide · {new Date().getFullYear()}</span>
        <a href={CONTACT} style={{ color: 'var(--accent-ink)', fontWeight: 600 }}>Book a call</a>
      </div>
    </footer>
  );
}

export default function Landing() {
  useEffect(() => {
    document.title = 'Denzil Automations | AI automation agency for growing businesses';
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Metrics />
        <Engagements />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
