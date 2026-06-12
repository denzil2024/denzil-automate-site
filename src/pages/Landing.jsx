import { useEffect } from 'react';

const WHATSAPP = 'https://wa.me/254729456805';

function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr-inner">
        <a className="brand" href="/">
          <span className="brand-mark">D</span>
          Denzil Automations
        </a>
        <nav>
          <a href="#what">What we automate</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="hdr-cta">
          <a className="btn btn-primary" href={WHATSAPP}>Talk to us</a>
        </div>
      </div>
    </header>
  );
}

function LiveFlow() {
  return (
    <div className="flow" aria-hidden="true">
      <div className="flow-top">
        <span className="flow-dot" style={{ background: '#ff5f57' }} />
        <span className="flow-dot" style={{ background: '#febc2e' }} />
        <span className="flow-dot" style={{ background: '#28c840' }} />
        <span className="flow-title">WhatsApp · live</span>
      </div>
      <div className="bubble in" style={{ animationDelay: '.1s' }}>Hi, do you automate bookings for a salon?</div>
      <div className="typing" style={{ animationDelay: '.5s' }}><span /><span /><span /></div>
      <div className="bubble out" style={{ animationDelay: '1s' }}>
        Yes we do. Clients book themselves, get reminders, and you never lose a slot. Want a quick call to set it up?
      </div>
      <div className="bubble in" style={{ animationDelay: '1.5s' }}>Yes please, am free at 4pm</div>
      <div className="bubble out" style={{ animationDelay: '2s' }}>Perfect, you are booked for 4pm. Talk soon.</div>
      <span className="flow-tag" style={{ animation: 'rise .5s ease 2.4s both' }}>
        ● Lead captured · Call booked · Logged automatically
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">● Built for Kenyan businesses</span>
          <h1>
            Your business replies, <span className="grad">even when you don't.</span>
          </h1>
          <p className="lede">
            We build automations that catch every WhatsApp lead, reply instantly in your voice,
            follow up on their own, and book the customer, all while you focus on the work.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={WHATSAPP}>Automate my business</a>
            <a className="btn btn-ghost" href="#how">See how it works</a>
          </div>
          <div className="hero-trust">
            <span><b>Instant</b> WhatsApp replies</span>
            <span><b>24/7</b> never misses a lead</span>
            <span>Setup from <b>Ksh 35,000</b></span>
          </div>
        </div>
        <LiveFlow />
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: '💬', title: 'WhatsApp lead capture', body: 'Every person who messages your business is answered in seconds and saved automatically. No lead ever goes cold.' },
  { icon: '🔁', title: 'Follow-ups on autopilot', body: 'Quiet leads get gently nudged at the right time, so deals that would have died quietly come back to life.' },
  { icon: '📅', title: 'Bookings & reminders', body: 'Customers book themselves into your calendar and get reminders, cutting no-shows and back-and-forth.' },
  { icon: '🧾', title: 'Quotes & invoicing', body: 'Send quotations and invoices automatically, and chase payments without lifting a finger.' },
  { icon: '🎧', title: 'Customer support', body: 'Common questions get answered instantly and accurately, day or night, in your brand voice.' },
  { icon: '📊', title: 'Lead tracking', body: 'Every customer lands in one clean sheet with their status, so your team always knows who to call next.' },
];

function WhatWeAutomate() {
  return (
    <section className="block" id="what">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What we automate</span>
          <h2>Anything repetitive in your business, handled for you.</h2>
          <p>We do not sell software you have to learn. We build the automation around how your business already works, then hand it over running.</p>
        </div>
        <div className="cards">
          {SERVICES.map((s) => (
            <div className="card" key={s.title}>
              <div className="card-ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { h: 'A lead messages', p: 'A customer reaches your WhatsApp from an advert or referral.' },
  { h: 'AI replies instantly', p: 'They get a friendly, on-brand answer in seconds, any hour of the day.' },
  { h: 'It follows up', p: 'If they go quiet, the system nudges them and books a call when they are ready.' },
  { h: 'You close', p: 'Your team gets the lead and the full context, then steps in to win the deal.' },
];

function HowItWorks() {
  return (
    <section className="block" id="how" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)' }}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From first message to booked customer, automatically.</h2>
          <p>The same pipeline we run for ourselves, set up for your business in days, not months.</p>
        </div>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.h}>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="block">
      <div className="wrap stats">
        <div className="stat"><div className="num">24/7</div><div className="lbl">Always-on responses</div></div>
        <div className="stat"><div className="num">&lt; 1 min</div><div className="lbl">To first reply</div></div>
        <div className="stat"><div className="num">0</div><div className="lbl">Leads left unanswered</div></div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="block" id="pricing">
      <div className="wrap">
        <div className="section-head" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
          <span className="eyebrow">Pricing</span>
          <h2>Simple, one-time setup.</h2>
          <p>No confusing monthly fees. You pay once to have it built and running, tailored to your business.</p>
        </div>
        <div className="price-card">
          <span className="eyebrow">Done-for-you build</span>
          <div className="amount"><small>from</small> Ksh 35,000</div>
          <p style={{ color: 'var(--text-2)' }}>One-time. Final figure depends on how much you want automated.</p>
          <ul className="price-list">
            <li><span className="tick">✓</span> Instant WhatsApp replies in your brand voice</li>
            <li><span className="tick">✓</span> Automatic lead capture and tracking sheet</li>
            <li><span className="tick">✓</span> Smart follow-ups and booking handover</li>
            <li><span className="tick">✓</span> Built, tested and handed over running</li>
          </ul>
          <a className="btn btn-primary" href={WHATSAPP} style={{ width: '100%' }}>Get a quote on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="cta-band">
          <h2>Stop answering the same messages by hand.</h2>
          <p>Tell us what slows your business down and we will show you exactly what we can automate.</p>
          <a className="btn btn-primary" href={WHATSAPP}>Chat with us on WhatsApp</a>
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
        <span>Nairobi, Kenya · {new Date().getFullYear()}</span>
        <a href={WHATSAPP} style={{ color: 'var(--accent)' }}>WhatsApp us</a>
      </div>
    </footer>
  );
}

export default function Landing() {
  useEffect(() => {
    document.title = 'Denzil Automations | WhatsApp & business automation in Kenya';
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeAutomate />
        <HowItWorks />
        <Stats />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
