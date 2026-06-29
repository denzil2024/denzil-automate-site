import { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import DeckNav from '../components/DeckNav';
import DeckFooter from '../components/DeckFooter';
import { applySeo } from '../seo';
import { CONTACT } from '../site';
import { posts, formatPostDate } from '../blog/posts.jsx';
import '../landing-deck.css';

const PIPE = [
  { ic: '📥', lbl: 'Trigger' },
  { ic: '🧠', lbl: 'AI Logic' },
  { ic: '⚡', lbl: 'n8n', active: true },
  { ic: '📲', lbl: 'WhatsApp' },
  { ic: '📊', lbl: 'CRM / Sheets' },
  { ic: '✅', lbl: 'Done', active: true, result: 'Lead Closed' },
];

const BUILT = ['n8n Workflows', 'Claude AI', 'WhatsApp Business', 'Google Workspace', 'Railway', 'FastAPI', 'React', 'Make / Zapier'];

const SERVICES = [
  { ic: '🤖', t: 'WhatsApp AI Lead Pipelines', d: 'End-to-end lead capture, qualification, and follow-up over WhatsApp. Built on Baileys, Claude AI, and n8n, with every conversation logged to your CRM or Google Sheets.', tag: 'Most Popular' },
  { ic: '⚡', t: 'n8n Workflow Automation', d: 'Custom workflows that connect your forms, CRM, email, spreadsheets, and APIs. Triggers, conditions, and actions mapped exactly to how your business already runs.', tag: 'Core Service' },
  { ic: '📊', t: 'CRM & Sales Automation', d: 'Automatic lead routing, owner assignment, stall detection, and follow-up reminders. Your pipeline keeps moving without anyone babysitting it.', tag: 'Revenue Critical' },
  { ic: '📧', t: 'Email & Outreach Automation', d: 'Drip sequences, outreach at scale, newsletters, and transactional flows, personalized with AI-written copy and sent on autopilot.', tag: 'High ROI' },
  { ic: '🌐', t: 'Full Digital Infrastructure', d: 'Website, blog, WhatsApp presence, and email domain, built and connected as one system. We run the full stack, not isolated tools.', tag: 'Full Package' },
  { ic: '🧩', t: 'Custom API Integrations', d: 'We connect tools that were never meant to talk to each other. FastAPI middleware, webhook bridges, and custom automation logic built precisely to your spec.', tag: 'Technical' },
];

const TOOLS = [
  { ic: '⚡', nm: 'n8n', rl: 'Workflow engine' },
  { ic: '🧠', nm: 'Claude AI', rl: 'Intelligence layer' },
  { ic: '📱', nm: 'Baileys', rl: 'WhatsApp API' },
  { ic: '🚀', nm: 'Railway', rl: 'Cloud deployment' },
  { ic: '⚙️', nm: 'FastAPI', rl: 'Backend services' },
  { ic: '📊', nm: 'Google Sheets', rl: 'CRM / data layer' },
  { ic: '📬', nm: 'Make / Zapier', rl: 'Integration bridges' },
  { ic: '🌐', nm: 'Cloudflare', rl: 'DNS / edge' },
];

const STEPS = [
  { n: '01', t: 'Discovery Call', d: 'We map your current process, identify the manual bottlenecks, and agree on exactly what gets automated first.', active: true },
  { n: '02', t: 'Architecture Design', d: 'We design the workflow logic, triggers, conditions, actions, and fallbacks. You approve it before we write a single line.' },
  { n: '03', t: 'Build & Test', d: 'We build on Railway-hosted infrastructure, test every edge case, and send you a working demo before go-live.' },
  { n: '04', t: 'Deploy & Support', d: 'We go live, monitor the first week of runs, and stay available for tuning. Most clients add a second workflow within 30 days.', active: true },
];

export default function Landing() {
  useEffect(() => {
    applySeo({
      title: 'AI Automation Agency for Growing Businesses | Denzil Automations',
      description: 'We build done-for-you AI automations for lead response, follow-ups, bookings and billing, wired into your existing tools. Built in days. You own it.',
      path: '/',
    });
    const reveals = document.querySelectorAll('.deck .reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el) => obs.observe(el));
    const fallback = setTimeout(() => reveals.forEach((el) => el.classList.add('vis')), 2200);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);

  const latest = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  return (
    <div className="deck">
      {/* NAV */}
      <DeckNav />

      {/* HERO */}
      <section className="hero">
        <div className="h-grid" /><div className="h-glow" /><div className="h-glow2" />
        <div className="h-content">
          <div className="h-badge"><span className="status-dot" /><span className="h-badge-t">Serving clients worldwide — 2026</span></div>
          <h1 className="h-headline"><span className="w">We automate the</span><span className="b">work you shouldn&rsquo;t</span><span className="c">be doing.</span></h1>
          <p className="h-sub">n8n workflows, WhatsApp AI pipelines, CRM automation, and custom integrations. Built for businesses that are ready to scale without adding headcount.</p>
          <div className="h-btns">
            <a className="btn-p" href="#services">See Our Services</a>
            <a className="btn-o" href="#stack">Our Tech Stack</a>
          </div>
          <div className="pipeline">
            {PIPE.map((p, i) => (
              <Fragment key={p.lbl}>
                <div className="pipe-node">
                  <div className={`pipe-icon${p.active ? ' active' : ''}`}>{p.ic}</div>
                  <div className={`pipe-lbl${p.active ? ' active' : ''}`}>{p.lbl}</div>
                  {p.result && <div className="pipe-result">{p.result}</div>}
                </div>
                {i < PIPE.length - 1 && <div className="pipe-conn"><span className="pipe-pulse" /><span className="pipe-pulse" /><span className="pipe-pulse" /></div>}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <div className="bstrip">
        <span className="bstrip-lbl">Built With</span>
        <div className="bstrip-pills">{BUILT.map((b) => <span className="bstrip-pill" key={b}>{b}</span>)}</div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">Who We Are</div>
            <h2 className="headline"><strong>Built by a founder.</strong><br />Trusted by <span className="acc">businesses worldwide.</span></h2>
            <div className="rule-b" />
          </div>
          <div className="about-cols">
            <div className="reveal">
              <p className="about-desc">Denzil Automations is a focused technical practice that builds, deploys, and manages intelligent automation systems for growth-stage businesses across every industry.</p>
              <p className="about-desc">We don&rsquo;t sell generic templates. Every workflow is engineered from scratch around your real operations, your sales process, your customer communication, and your internal handoffs. The result is automation that works like a team member, not a script.</p>
              <p className="about-desc"><strong>Remote-first by design</strong>, we serve clients globally through async communication and always-on, Railway-hosted infrastructure that runs 24/7 regardless of timezone.</p>
              <div className="values">
                <div className="val"><div className="val-n">Principle</div><div className="val-v">No fluff delivery</div></div>
                <div className="val"><div className="val-n">Approach</div><div className="val-v">Custom-first always</div></div>
                <div className="val"><div className="val-n">Delivery</div><div className="val-v">Remote, global</div></div>
                <div className="val"><div className="val-n">Support</div><div className="val-v">Long-term partner</div></div>
              </div>
            </div>
            <div className="reveal">
              <div className="founder-card">
                <div className="fc-tag">Founder &amp; Automation Engineer</div>
                <div className="fc-name">Denzil Otieno</div>
                <div className="fc-title">Full-Stack Developer · Business Automation Specialist</div>
                <p className="fc-bio">Full-stack developer building SaaS products and automation systems for businesses worldwide. Founder of ytgrowth.io, Vendli, and Denzil Automations, with a background in supply chain and operations that shapes how every workflow is engineered.</p>
                <div className="fc-creds">
                  <div className="fc-cred">n8n · Claude API · Baileys WhatsApp · Railway infrastructure</div>
                  <div className="fc-cred">SaaS founder across multiple products</div>
                  <div className="fc-cred">Coached freelancers into global careers</div>
                  <div className="fc-cred">automations.workwithdenzil.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="hrule" /></div>

      {/* SERVICES */}
      <section id="services">
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">What We Build</div>
            <h2 className="headline"><strong>Six automation systems.</strong><br /><span className="bacc">One consistent result:</span> time back.</h2>
            <div className="rule-b" />
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="srv reveal" key={s.t}>
                <div className="srv-ico">{s.ic}</div>
                <div className="srv-t">{s.t}</div>
                <p className="srv-d">{s.d}</p>
                <span className="srv-tag">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap"><div className="hrule" /></div>

      {/* STACK */}
      <section id="stack">
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">Technology</div>
            <h2 className="headline">Production-grade tools.<br /><span className="acc">No shortcuts.</span></h2>
            <div className="rule-b" />
          </div>
          <div className="stack-intro">
            <div className="reveal">
              <p className="sub">We build on the same infrastructure powering funded startups and enterprise products. Every automation runs on Railway-hosted, always-on infrastructure with real monitoring and real uptime.</p>
              <p className="sub" style={{ marginTop: 14 }}>No Zapier duct tape. No IFTTT. Proper engineering with version control, environment management, and production deployment.</p>
            </div>
            <div className="stack-stat-row reveal">
              <div className="stk-stat"><div className="stk-n">24/7</div><span className="stk-l">Always-on infrastructure</span></div>
              <div className="stk-stat"><div className="stk-n">∞</div><span className="stk-l">Workflow executions / mo</span></div>
              <div className="stk-stat"><div className="stk-n">0</div><span className="stk-l">Hours your team wastes</span></div>
            </div>
          </div>
          <div className="stack-tools reveal">
            {TOOLS.map((t) => (
              <div className="tool" key={t.nm}><div className="tool-ico">{t.ic}</div><div className="tool-nm">{t.nm}</div><div className="tool-rl">{t.rl}</div></div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap"><div className="hrule" /></div>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">How We Work</div>
            <h2 className="headline">From conversation<br />to <span className="acc">live automation</span> in days.</h2>
            <div className="rule-b" />
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step reveal" key={s.n}>
                <div className={`step-num${s.active ? ' active' : ''}`}>{s.n}</div>
                <div className="step-t">{s.t}</div>
                <p className="step-d">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FROM THE BLOG */}
      {latest.length > 0 && (
        <>
          <div className="wrap"><div className="hrule" /></div>
          <section className="blogsec">
            <div className="wrap">
              <div className="reveal">
                <div className="eyebrow">From The Blog</div>
                <h2 className="headline">Playbooks for turning more<br />leads into <span className="acc">customers.</span></h2>
                <div className="rule-b" />
              </div>
              <div className="dblog-grid">
                {latest.map((p) => (
                  <Link className="dblog-card reveal" key={p.slug} to={`/blog/${p.slug}`}>
                    <div className="dblog-cover">{p.cover && <img src={p.cover} alt={p.title} loading="lazy" />}</div>
                    <div className="dblog-body">
                      <div className="dblog-cat">{p.category.label}</div>
                      <div className="dblog-t">{p.title}</div>
                      <div className="dblog-meta">{`${formatPostDate(p.date)} · ${p.readTime}`}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="dblog-more"><Link className="btn-o" to="/blog">Read the Blog</Link></div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <div className="cta-card reveal">
            <h2>Tell us what is <strong>slowing you down.</strong></h2>
            <p>Book a short call and we will show you exactly what we would automate first. No obligation.</p>
            <div className="h-btns" style={{ justifyContent: 'center', marginBottom: 0 }}>
              <a className="btn-p" href={CONTACT} target="_blank" rel="noopener">Book a Call</a>
              <Link className="btn-o" to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <DeckFooter />
    </div>
  );
}
