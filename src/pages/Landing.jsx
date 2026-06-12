import { useEffect, useState } from 'react';

const CONTACT = 'https://wa.me/254781246345';

/* ---------- logo: a crafted "rising automation" mark + two-tone wordmark ---------- */
function Logo({ id }) {
  return (
    <svg className="mk" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <defs><linearGradient id={`bm${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6d5efc" /><stop offset="1" stopColor="#a575ff" /></linearGradient></defs>
      <rect width="34" height="34" rx="10" fill={`url(#bm${id})`} />
      <g fill="#fff">
        <rect x="12.1" y="6.4" width="1.7" height="5.6" rx="0.85" /><circle cx="12.95" cy="5.9" r="1.6" />
        <rect x="20.2" y="6.4" width="1.7" height="5.6" rx="0.85" /><circle cx="21.05" cy="5.9" r="1.6" />
        <rect x="6.5" y="14.8" width="4.1" height="7.2" rx="2.05" /><rect x="23.4" y="14.8" width="4.1" height="7.2" rx="2.05" />
        <rect x="8.9" y="10.8" width="16.2" height="15.7" rx="7" />
      </g>
      <rect x="11.3" y="16.3" width="11.4" height="5.7" rx="2.85" fill="#2c2658" />
      <ellipse cx="15" cy="19.15" rx="1.3" ry="2.05" fill="#fff" /><ellipse cx="19" cy="19.15" rx="1.3" ry="2.05" fill="#fff" />
    </svg>
  );
}
function Brand({ id }) {
  return <a className="brand" href="/"><Logo id={id} /><span className="bword">Denzil <span>Automations</span></span></a>;
}

/* ---------- hero workflow (long horizontal pipeline) ---------- */
const G = {
  bolt: <path d="M17 7 L11 17 L16 17 L15 25 L21 14 L16 14 Z" />,
  spark: <path d="M16 8 L17.7 14.3 L24 16 L17.7 17.7 L16 24 L14.3 17.7 L8 16 L14.3 14.3 Z" />,
  chat: <g fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="10" width="14" height="9" rx="3" /><path d="M13.5 19 L13.5 22.5 L17 19" /></g>,
  check: <path fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 16.5 L14 20.5 L22 11.5" />,
  cal: <g fill="none" strokeWidth="1.8" strokeLinecap="round"><rect x="9" y="10.5" width="14" height="11.5" rx="2" /><path d="M9 14.5 H23 M13 8.5 V12 M19 8.5 V12" /></g>,
  bell: <g fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16A6 6 0 0 0 11 16c0 6-2.6 7.5-2.6 7.5h15.2S21 22 21 16" transform="translate(-0 -2)" /><path d="M14.4 24a1.8 1.8 0 0 1-2.8 0" /></g>,
  doc: <g fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 8h6l5 5v11a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" /><path d="M13 16h6M13 19h5" /></g>,
  card: <g fill="none" strokeWidth="1.8" strokeLinecap="round"><rect x="7.5" y="11" width="17" height="11" rx="2" /><path d="M7.5 15h17" /></g>,
  chart: <g fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 9v15h15" /><path d="M13 19v-3M17 19v-6M21 19v-9" /></g>,
};
const NTINT = { green: ['#0f3b2e', '#2bd4a0'], accent: ['#241f4d', '#b9b1ff'], blue: ['#10324f', '#4aa3ff'], amber: ['#3d2c0e', '#ffb340'] };
function Node({ x, y, w = 200, h = 76, big, glyph, tint, title, sub }) {
  const [bg, fg] = NTINT[tint]; const cy = (h - 32) / 2;
  return (
    <g transform={`translate(${x} ${y})`} filter="url(#ns)">
      <rect className={`wf-card${big ? ' big' : ''}`} width={w} height={h} rx="14" />
      <g transform={`translate(15 ${cy})`}><rect width="32" height="32" rx="10" fill={bg} /><g fill={fg} stroke={fg}>{glyph}</g></g>
      <text className="wf-title" x="62" y={h / 2 - 2}>{title}</text>
      <text className="wf-sub" x="62" y={h / 2 + 16}>{sub}</text>
    </g>
  );
}
function Dot({ p, dur, begin = '0s' }) {
  return (
    <circle className="wf-dot" r="4">
      <animateMotion dur={dur} begin={begin} repeatCount="indefinite"><mpath href={p} /></animateMotion>
      <animate attributeName="opacity" dur={dur} begin={begin} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.12;0.82;1" />
    </circle>
  );
}
const HERO_NODES = [
  { id: 'h1', tint: 'green', glyph: 'bolt', role: 'Trigger', label: 'New lead' },
  { id: 'h2', tint: 'accent', glyph: 'spark', role: 'AI agent', label: 'Understands & decides' },
  { id: 'h3', tint: 'blue', glyph: 'chat', role: 'Output', label: 'Instant reply' },
  { id: 'h4', tint: 'amber', glyph: 'cal', role: 'Output', label: 'Book a call' },
  { id: 'h5', tint: 'green', glyph: 'check', role: 'Output', label: 'Log the lead' },
  { id: 'h6', tint: 'blue', glyph: 'bell', role: 'Output', label: 'Reminder sent' },
];
function MobileFlow({ nodes }) {
  return (
    <div className="mflow">
      {nodes.map((n, i) => {
        const [bg, fg] = NTINT[n.tint];
        return (
          <div key={n.id || i}>
            <div className="mflow-node">
              <span className="mflow-ic" style={{ background: bg, color: fg }}>
                <svg width="20" height="20" viewBox="0 0 32 32" fill={fg} stroke={fg}>{G[n.glyph]}</svg>
              </span>
              <span className="mflow-tx"><b>{n.label}</b><small>{n.role}</small></span>
            </div>
            {i < nodes.length - 1 && <div className="mflow-conn" />}
          </div>
        );
      })}
    </div>
  );
}
function WorkflowCanvas() {
  return (
    <>
    <svg className="wf" viewBox="0 0 1260 420" role="img" aria-label="A new lead flows into an AI agent that replies, books, reminds and logs the lead.">
      <defs><filter id="ns" x="-20%" y="-30%" width="140%" height="170%"><feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" /></filter></defs>
      <path id="p0" className="wf-edge" d="M236 205 C 291 205, 291 205, 346 205" />
      <path id="p1" className="wf-edge" d="M546 205 C 626 205, 626 110, 706 110" />
      <path id="p2" className="wf-edge" d="M546 205 C 626 205, 626 205, 706 205" />
      <path id="p3" className="wf-edge" d="M546 205 C 626 205, 626 338, 706 338" />
      <path id="p4" className="wf-edge" d="M906 205 C 961 205, 961 205, 1016 205" />
      <Dot p="#p0" dur="2.1s" /><Dot p="#p1" dur="2.5s" begin="0.7s" /><Dot p="#p2" dur="2.5s" begin="1.0s" /><Dot p="#p3" dur="2.5s" begin="1.3s" /><Dot p="#p4" dur="1.8s" begin="1.9s" />
      <Node x="36" y="167" tint="green" glyph={G.bolt} title="New lead" sub="WhatsApp · email · web" />
      <Node x="346" y="157" h="96" big tint="accent" glyph={G.spark} title="AI agent" sub="Understands & decides" />
      <Node x="706" y="72" tint="blue" glyph={G.chat} title="Instant reply" sub="In your brand voice" />
      <Node x="706" y="167" tint="amber" glyph={G.cal} title="Book a call" sub="Calendar synced" />
      <Node x="706" y="300" tint="green" glyph={G.check} title="Log the lead" sub="Captured, never lost" />
      <Node x="1016" y="167" tint="blue" glyph={G.bell} title="Reminder sent" sub="Cuts no-shows" />
    </svg>
    <MobileFlow nodes={HERO_NODES} />
    </>
  );
}

/* ---------- automations mini-workflow (a unique branching graph per type) ---------- */
const NW = 204, NH = 76;
function ExNode({ n }) {
  const [bg, fg] = NTINT[n.tint];
  return (
    <g transform={`translate(${n.x} ${n.y})`} filter="url(#exns)">
      <rect className={`exn-card ${n.cls || ''}`} width={NW} height={NH} rx="14" />
      <g transform="translate(15 22)"><rect width="32" height="32" rx="9" fill={bg} /><g fill={fg} stroke={fg}>{G[n.glyph]}</g></g>
      <text className="exn-sub" x="59" y="34">{n.role}</text>
      <text className="exn-title" x="59" y="53">{n.label}</text>
    </g>
  );
}
function MiniFlow({ graph }) {
  const by = {};
  graph.nodes.forEach((n) => { by[n.id] = n; });
  const edge = (a, b) => {
    const s = by[a], t = by[b];
    const sx = s.x + NW, sy = s.y + NH / 2, tx = t.x, ty = t.y + NH / 2;
    const c = Math.max(28, (tx - sx) / 2);
    return `M ${sx} ${sy} C ${sx + c} ${sy}, ${tx - c} ${ty}, ${tx} ${ty}`;
  };
  return (
    <>
    <svg className="ex-svg" viewBox="0 0 1160 460" role="img" aria-label="Automation workflow">
      <defs><filter id="exns" x="-20%" y="-30%" width="140%" height="170%"><feDropShadow dx="0" dy="6" stdDeviation="9" floodColor="#000" floodOpacity="0.5" /></filter></defs>
      {graph.edges.map((e, i) => <path key={i} id={`eg${i}`} className="wf-edge" d={edge(e[0], e[1])} />)}
      {graph.edges.map((e, i) => <Dot key={`d${i}`} p={`#eg${i}`} dur={`${(2 + (i % 3) * 0.3).toFixed(1)}s`} begin={`${(0.35 * i).toFixed(2)}s`} />)}
      {graph.nodes.map((n) => <ExNode key={n.id} n={n} />)}
    </svg>
    <MobileFlow nodes={graph.nodes} />
    </>
  );
}

/* ---------- mocks ---------- */
function Frag({ children }) { return <>{children}</>; }
function ChatMock() {
  return (
    <div className="m-chat">
      <div className="m-chat-hd"><div className="av">N</div><div className="who">New enquiry<small>● replying now</small></div></div>
      <div className="m-chat-bd">
        <div className="m-row"><div className="m-bub in">Hi, are you open Saturday? Could I book a cut?</div><div className="m-t">11:47 PM</div></div>
        <div className="m-row r"><div className="m-bub out">Yes, Saturday is open. I can do 10am or 2pm, which suits you better?</div><div className="m-t">11:47 PM</div></div>
        <div className="m-row"><div className="m-bub in">10am works</div><div className="m-t">11:48 PM</div></div>
        <div className="m-row r"><div className="m-bub out">Perfect, you are booked for 10am Saturday. See you then.</div><div className="m-t">11:48 PM</div></div>
        <div className="m-chip">Lead saved · Booked · And you were asleep</div>
      </div>
    </div>
  );
}
function TimelineMock() {
  const rows = [
    { d: 'Monday', t: 'Asked for a quote, then went quiet.' },
    { d: '', t: 'No reply for three days.', cls: 'mute', dot: 'mute' },
    { d: 'Thursday', t: 'Auto follow-up: "Still keen? Happy to help you get started."' },
    { d: 'Friday', t: 'Replied: "Yes, let us do it." Deal won.', cls: 'win', dot: 'win', last: true },
  ];
  return (
    <div className="m-tl">
      <div className="m-tl-h">Lead activity <span className="tag">Recovered</span></div>
      {rows.map((r, i) => (
        <div className="m-tl-row" key={i}>
          <div className="m-mk"><span className={`m-d ${r.dot || ''}`} />{!r.last && <span className="m-l" />}</div>
          <div className={`m-c ${r.cls || ''}`}>{r.d && <div className="dy">{r.d}</div>}<div className="tx">{r.t}</div></div>
        </div>
      ))}
    </div>
  );
}
function TableMock() {
  const rows = [
    { n: 'Amara K.', c: 'WhatsApp', s: 'New', sc: 'new', nx: 'Auto-reply sent' },
    { n: 'James O.', c: 'Website', s: 'Follow-up', sc: 'fu', nx: 'Nudge in 2h' },
    { n: 'Priya S.', c: 'Email', s: 'Booked', sc: 'book', nx: 'Call at 4:00pm' },
    { n: 'Daniel M.', c: 'WhatsApp', s: 'Won', sc: 'won', nx: 'Onboard' },
    { n: 'Sara L.', c: 'WhatsApp', s: 'Follow-up', sc: 'fu', nx: 'Nudge tomorrow' },
  ];
  return (
    <div className="m-tb">
      <div className="m-tb-hd"><span className="ttl">Leads</span><span className="cnt">28 active · live</span></div>
      <div className="m-grid">
        <div className="m-th">Lead</div><div className="m-th">Status</div><div className="m-th">Next</div>
        {rows.map((r, i) => (
          <Frag key={i}>
            <div className="m-td"><span><span className="nm">{r.n}</span><br /><span className="ch">{r.c}</span></span></div>
            <div className="m-td"><span className={`st ${r.sc}`}>{r.s}</span></div>
            <div className="m-td">{r.nx}</div>
          </Frag>
        ))}
      </div>
    </div>
  );
}
function InvoiceMock() {
  return (
    <div className="m-inv">
      <div className="m-inv-hd"><div><div className="no">INVOICE #1042</div><div className="amt">$450.00</div></div><div className="to">Acme Co.<br />Net 7</div></div>
      <div className="m-inv-steps">
        <div className="m-step"><div className="ic">✓</div><div className="lb">Sent</div></div><div className="m-step-line" />
        <div className="m-step"><div className="ic">✓</div><div className="lb">Reminder</div></div><div className="m-step-line" />
        <div className="m-step"><div className="ic">✓</div><div className="lb">Paid</div></div>
      </div>
      <div className="m-paid">Paid in 3 days, without a single awkward message</div>
    </div>
  );
}

function Show({ id, bg, flip, eye, scene, copy, pts, visual }) {
  return (
    <section id={id} className={`show${bg ? ` ${bg}` : ''}${flip ? ' flip' : ''}`}>
      <div className="wrap">
        <div className="show-text">
          <div className="show-eye">{eye}</div>
          <h2 className="show-scene">{scene}</h2>
          <p>{copy}</p>
          <ul className="show-pts">{pts.map((p) => <li key={p}><span className="tk">✓</span>{p}</li>)}</ul>
        </div>
        <div className="show-visual">{visual}</div>
      </div>
    </section>
  );
}

/* ---------- page ---------- */
function Hero() {
  const [menu, setMenu] = useState(false);
  return (
    <section className="hero">
      <div className="wrap">
        <nav className="nav">
          <Brand id="nav" />
          <div className="nav-links"><a href="#work">What we build</a><a href="#automations">Automations</a><a href="#how">How it works</a><a href="#faq">FAQ</a></div>
          <a className="btn btn-primary nav-cta" href={CONTACT}>Book a call</a>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setMenu((o) => !o)}>
            {menu
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>}
          </button>
        </nav>
        {menu && (
          <div className="nav-menu">
            <a href="#work" onClick={() => setMenu(false)}>What we build</a>
            <a href="#automations" onClick={() => setMenu(false)}>Automations</a>
            <a href="#how" onClick={() => setMenu(false)}>How it works</a>
            <a href="#faq" onClick={() => setMenu(false)}>FAQ</a>
            <a className="btn btn-primary" href={CONTACT} onClick={() => setMenu(false)}>Book a call</a>
          </div>
        )}
        <div className="hero-inner">
          <h1>Put your busywork <span className="grad">on autopilot.</span></h1>
          <p className="hero-lede">We design and build the automations that quietly run your business, capturing leads, replying, following up, booking and billing, so you spend your time on the work that grows it.</p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={CONTACT}>Book a call</a>
            <a className="btn btn-outline btn-lg" href="#work">See what we build</a>
          </div>
        </div>
        <div className="wf-panel">
          <div className="wf-bar">
            <span className="d" style={{ background: '#ff5f57' }} /><span className="d" style={{ background: '#febc2e' }} /><span className="d" style={{ background: '#28c840' }} />
            <span className="name">lead-engine.flow</span><span className="run"><span className="ping" />Running</span>
          </div>
          <div className="wf-canvas"><WorkflowCanvas /></div>
        </div>
      </div>
    </section>
  );
}

const COL = [40, 326, 612, 898];
const ROW = { t: 78, m: 210, b: 342 };
const nd = (id, c, r, role, label, tint, glyph, cls = '') => ({ id, x: COL[c], y: ROW[r], role, label, tint, glyph, cls });
const AUTOS = [
  { t: 'Lead capture & response', tg: 'Answer every enquiry the second it lands', graph: {
    nodes: [nd('a', 0, 'm', 'Trigger', 'New message', 'green', 'bolt', 'trig'), nd('b', 1, 'm', 'AI agent', 'Reads & acts', 'accent', 'spark', 'ai'), nd('c', 2, 't', 'Output', 'Instant reply', 'blue', 'chat'), nd('d', 2, 'b', 'Output', 'Lead saved', 'green', 'check'), nd('e', 3, 'b', 'Action', 'Team alerted', 'amber', 'bell')],
    edges: [['a', 'b'], ['b', 'c'], ['b', 'd'], ['d', 'e']] } },
  { t: 'Follow-up & nurture', tg: 'Re-engage quiet leads until they buy', graph: {
    nodes: [nd('a', 0, 'm', 'Trigger', 'Goes quiet', 'amber', 'bell', 'trig'), nd('b', 1, 'm', 'Wait', 'Wait 2 days', 'blue', 'cal'), nd('c', 2, 'm', 'AI agent', 'Smart nudge', 'accent', 'spark', 'ai'), nd('d', 3, 't', 'Output', 'They reply', 'green', 'check'), nd('e', 3, 'b', 'Output', 'Still quiet', 'amber', 'bell')],
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd'], ['c', 'e']] } },
  { t: 'Booking & scheduling', tg: 'Customers book themselves, with reminders', graph: {
    nodes: [nd('a', 0, 'm', 'Trigger', 'Picks a time', 'green', 'bolt', 'trig'), nd('b', 1, 'm', 'Action', 'Calendar', 'blue', 'cal'), nd('c', 2, 'm', 'Output', 'Slot booked', 'green', 'check'), nd('d', 3, 't', 'Output', 'Confirmed', 'blue', 'chat'), nd('e', 3, 'b', 'Output', 'Reminder set', 'amber', 'bell')],
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd'], ['c', 'e']] } },
  { t: 'Quotes & proposals', tg: 'Tailored quotes out in minutes, not days', graph: {
    nodes: [nd('a', 0, 'm', 'Trigger', 'New request', 'green', 'bolt', 'trig'), nd('b', 1, 'm', 'AI agent', 'Reads needs', 'accent', 'spark', 'ai'), nd('c', 2, 'm', 'Action', 'Quote built', 'blue', 'doc'), nd('d', 3, 'm', 'Output', 'Sent', 'green', 'check')],
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd']] } },
  { t: 'Invoicing & payments', tg: 'Invoices and reminders that chase themselves', graph: {
    nodes: [nd('a', 0, 'm', 'Trigger', 'Job complete', 'green', 'bolt', 'trig'), nd('b', 1, 'm', 'Action', 'Invoice sent', 'blue', 'doc'), nd('c', 2, 'm', 'Wait', 'Not paid?', 'amber', 'cal'), nd('d', 3, 't', 'Action', 'Reminder', 'amber', 'bell'), nd('e', 3, 'b', 'Output', 'Marked paid', 'green', 'card')],
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd'], ['c', 'e']] } },
  { t: 'Customer support', tg: 'Instant, on-brand answers around the clock', graph: {
    nodes: [nd('a', 0, 'm', 'Trigger', 'Question in', 'green', 'bolt', 'trig'), nd('b', 1, 'm', 'AI agent', 'AI answers', 'accent', 'spark', 'ai'), nd('c', 2, 't', 'Output', 'Resolved', 'green', 'check'), nd('d', 2, 'b', 'Output', 'Needs human', 'amber', 'bell'), nd('e', 3, 'b', 'Action', 'Agent alerted', 'blue', 'chat')],
    edges: [['a', 'b'], ['b', 'c'], ['b', 'd'], ['d', 'e']] } },
  { t: 'Reminders & alerts', tg: 'Nudge customers and your team on time', graph: {
    nodes: [nd('a', 0, 'm', 'Trigger', 'Trigger time', 'green', 'bolt', 'trig'), nd('b', 1, 'm', 'Action', 'Scheduler', 'blue', 'cal'), nd('c', 2, 't', 'Output', 'Customer', 'accent', 'chat'), nd('d', 2, 'b', 'Output', 'Team alerted', 'amber', 'bell'), nd('e', 3, 't', 'Output', 'Confirmed', 'green', 'check')],
    edges: [['a', 'b'], ['b', 'c'], ['b', 'd'], ['c', 'e']] } },
  { t: 'Reporting & dashboards', tg: 'A live view of leads, deals and next steps', graph: {
    nodes: [nd('a', 0, 'm', 'Trigger', 'New activity', 'green', 'bolt', 'trig'), nd('b', 1, 'm', 'Action', 'Auto-logged', 'blue', 'doc'), nd('c', 2, 'm', 'Process', 'Dashboard', 'accent', 'chart', 'ai'), nd('d', 3, 't', 'Output', 'Weekly report', 'blue', 'doc'), nd('e', 3, 'b', 'Output', 'Alert if off', 'amber', 'bell')],
    edges: [['a', 'b'], ['b', 'c'], ['c', 'd'], ['c', 'e']] } },
];
function Automations() {
  const [on, setOn] = useState(0);
  const a = AUTOS[on];
  const slug = a.t.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
  return (
    <section className="block" id="automations">
      <div className="wrap">
        <div className="shead"><span className="eyebrow">What we automate</span><h2>If it is repetitive, we can build it.</h2><p>The workflows businesses ask us for most. Pick any one to watch it run. Every build is shaped around your tools and goals, never a fixed template.</p></div>
        <div className="ex-tabs">
          {AUTOS.map((x, i) => (
            <button key={x.t} className={`ex-tab${i === on ? ' on' : ''}`} onMouseEnter={() => setOn(i)} onFocus={() => setOn(i)} onClick={() => setOn(i)}>{x.t}</button>
          ))}
        </div>
        <div className="ex-stage">
          <div className="wf-bar">
            <span className="d" style={{ background: '#ff5f57' }} /><span className="d" style={{ background: '#febc2e' }} /><span className="d" style={{ background: '#28c840' }} />
            <span className="name">{slug}.flow</span><span className="run"><span className="ping" />Running</span>
          </div>
          <div className="ex-body2"><MiniFlow graph={a.graph} /></div>
        </div>
        <p className="ex-cap">{a.tg}.</p>
      </div>
    </section>
  );
}

function ProcessProof() {
  const steps = [
    { n: '1', h: 'We map it', p: 'We sit with your day and pinpoint exactly what is draining your time and leaking revenue.' },
    { n: '2', h: 'We build it', p: 'We build the automation around the tools you already use and test it on your real cases.' },
    { n: '3', h: 'We hand it over', p: 'It goes live, documented and yours, running on your own accounts, with support behind it.' },
  ];
  return (
    <section className="block dark" id="how">
      <div className="wrap">
        <div className="shead center"><span className="eyebrow dark">How it works</span><h2>A manual mess becomes a system, in days.</h2><p>No long projects, no software to learn. We do the building, you watch the work start happening.</p></div>
        <div className="flowsteps">{steps.map((s) => <div className="fstep" key={s.n}><div className="dot">{s.n}</div><h3>{s.h}</h3><p>{s.p}</p></div>)}</div>
        <div className="metrics proof">
          <div className="metric"><div className="num">&lt;60s</div><div className="lbl">To the first response, every time</div></div>
          <div className="metric"><div className="num">24/7</div><div className="lbl">Working while you sleep</div></div>
          <div className="metric"><div className="num">Days</div><div className="lbl">To go live, not months</div></div>
        </div>
      </div>
    </section>
  );
}
function Faq() {
  const faqs = [
    { q: 'What can you actually automate for my business?', a: 'If a task is repetitive and lives in software, it is a candidate: replying to enquiries, qualifying and routing leads, follow-ups, booking and reminders, quotes, invoicing and payment chasing, support answers, reporting, and the hand-offs between all your tools. On a short call we map your day and point at what is worth automating first.' },
    { q: 'I am not technical. Will this be complicated for me?', a: 'No, and that is the whole point of done-for-you. We design, build and test everything, then hand it over already running with simple documentation. You never touch code or settings. You just watch the work happen and step in where a human should.' },
    { q: 'Will this replace my team or make us feel robotic?', a: 'It replaces the busywork, not the relationship. The automation handles the instant, repetitive part so your people spend their time on real conversations and closing. Replies go out in your voice, and a human takes over the moment it actually matters.' },
    { q: 'Do I have to switch the tools I already use?', a: 'No. We build around your existing setup, your messaging number, email, CRM, calendar and spreadsheets, and wire them together. Nothing gets ripped out. It simply starts working as one connected system.' },
    { q: 'What happens if something breaks?', a: 'We build with safeguards and keep an eye on what we run. If something needs attention we catch it and fix it, and on our ongoing engagements that monitoring and maintenance is included, so it keeps running quietly in the background.' },
    { q: 'How much does it cost, and how fast is it live?', a: 'Every build is scoped to your business, so pricing is custom rather than a fixed package. Most first builds go live in days, starting with your highest-impact workflow. Book a short call, we map it, and you get a clear quote with no obligation.' },
  ];
  return (
    <section className="block soft" id="faq">
      <div className="wrap">
        <div className="shead"><span className="eyebrow">Good questions</span><h2>The things owners ask us first.</h2></div>
        <div className="faq">{faqs.map((f, i) => <div className="faq-item" key={f.q}><div className="qn">{String(i + 1).padStart(2, '0')}</div><div><h3>{f.q}</h3><p>{f.a}</p></div></div>)}</div>
      </div>
    </section>
  );
}
function Cta() {
  return (
    <section className="block">
      <div className="wrap"><div className="cta"><h2>Tell us what is slowing you down.</h2><p>Book a short call and we will show you exactly what we would automate first.</p><a className="btn btn-light btn-lg" href={CONTACT}>Book a call</a></div></div>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Brand id="foot" />
            <p>We design and build the automations that quietly run your business, so you can spend your time on the work that grows it.</p>
          </div>
          <div className="foot-col"><h4>Explore</h4><a href="#work">What we build</a><a href="#automations">Automations</a><a href="#how">How it works</a></div>
          <div className="foot-col"><h4>Company</h4><a href="#faq">FAQ</a><a href={CONTACT}>Contact</a><a href={CONTACT}>Book a call</a></div>
          <div className="foot-col"><h4>Get started</h4><a href={CONTACT}>WhatsApp us</a><a href={CONTACT}>Request a quote</a></div>
        </div>
        <div className="foot-bottom"><span>© {new Date().getFullYear()} Denzil Automations</span><span>Built to run while you sleep.</span></div>
      </div>
    </footer>
  );
}

export default function Landing() {
  useEffect(() => { document.title = 'Denzil Automations | AI automation agency for growing businesses'; }, []);
  return (
    <>
      <Hero />
      <Show id="work" bg="soft" eye="When they reach out" scene="It is 11pm. A customer messages. You are asleep. You still win the job."
        copy="The moment someone messages you, on WhatsApp, email or your site, they get an instant, on-brand reply that answers them, qualifies them, and books them in. No lead waits until morning, and none goes cold."
        pts={['Answers in seconds, day or night', 'Sounds like you, not a robot', 'Books the meeting before you wake up']} visual={<ChatMock />} />
      <Show bg="dark" flip eye="When they go quiet" scene="The deal did not die. It just went quiet, and you forgot to chase it."
        copy="Most leads never get a second message, and that is where the money leaks. We build follow-up that runs itself, nudging quiet leads at the right moment in the right tone, until they reply or buy. The deals you would have written off come back."
        pts={['Perfectly-timed, human-sounding nudges', 'Stops the instant they reply', 'Recovers revenue you were losing']} visual={<TimelineMock />} />
      <Show bg="soft" eye="When you need to know" scene="Stop digging through chats to work out who to call next."
        copy="Every lead, deal and task flows into one live board that updates itself. Who is new, who is waiting, who is booked, who has gone cold, all at a glance. Your team finally works from one source of truth instead of scattered notes and memory."
        pts={['Updates itself in real time', 'A clear next action on every lead', 'Nothing slips through the cracks']} visual={<TableMock />} />
      <Show bg="dark" flip eye="When it is time to get paid" scene="Get paid without the awkward 'just following up on payment' message."
        copy="Quotes go out the moment they are needed, invoices send themselves, and polite reminders chase late payers on their own, so you get paid faster without lifting a finger or feeling pushy about it."
        pts={['Quotes and invoices on autopilot', 'Reminders that never feel awkward', 'Paid days sooner']} visual={<InvoiceMock />} />
      <Automations />
      <ProcessProof />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
