import { CONTACT } from '../site';

/* ------------------------------------------------------------------ *
 * Blog data. One file, no CMS. Each post is an object with a
 * content() that returns JSX rendered inside .bp-prose (typography is
 * styled globally in index.css, so post bodies stay clean).
 *
 * House style (hard rules):
 *   - No em-dashes or en-dashes anywhere. Use commas, colons or periods.
 *   - No decorative italics. Bold sparingly for key facts only.
 *   - Subheads in Title Case.
 *   - Clean, short slugs. Around 1,600 words, deeply researched, never generic.
 *
 * To publish a new post: add an object to POSTS, give it a unique slug,
 * and it is picked up automatically by the /blog and /blog/:slug routes.
 * ------------------------------------------------------------------ */

export const CATEGORIES = {
  leadResponse:   { slug: 'lead-response',   label: 'Lead response' },
  followUp:       { slug: 'follow-up',       label: 'Follow-up' },
  whatsapp:       { slug: 'whatsapp',        label: 'WhatsApp' },
  aiAgents:       { slug: 'ai-agents',       label: 'AI agents' },
  gettingStarted: { slug: 'getting-started', label: 'Getting started' },
  booking:        { slug: 'booking',         label: 'Booking' },
};

const AUTHOR = 'The Denzil Automations team';

/* Mid-article promo block authors can drop into any post body. */
export function CtaCard({ title, sub, label = 'Book a call' }) {
  return (
    <a className="bp-cta-card-link" href={CONTACT}>
      <span className="bp-cta-card-text">
        <span className="bp-cta-card-title">{title}</span>
        <span className="bp-cta-card-sub">{sub}</span>
      </span>
      <span className="bp-cta-card-pill">{label}</span>
    </a>
  );
}

export const POSTS = [
  {
    slug: 'speed-to-lead',
    title: 'Speed to Lead: Why the First Five Minutes Decide the Sale',
    excerpt: 'A lead who hears back within five minutes is up to 21 times more likely to qualify than one who waits half an hour. Here is what the research says, why almost nobody acts on it, and how to close the gap for good.',
    date: '2026-06-12',
    category: CATEGORIES.leadResponse,
    cover: '/blog/speed-to-lead-cover.jpg',
    author: AUTHOR,
    readTime: '9 min read',
    content: () => (
      <>
        <p>Someone fills in your form, taps your WhatsApp link, or sends "Hi, are you available?" at 9:47pm. In that moment they are as warm as they will ever be. They have a clear need, they have your name in front of them, and they are almost certainly messaging two or three of your competitors in the same breath.</p>

        <p>What happens in the next five minutes quietly decides whether that person becomes a paying customer or a missed notification you find the next morning. It is the single most under-measured number in most businesses, and once you understand what the research says about it, you cannot unsee it.</p>

        <h2>The Five-Minute Window Is Not a Marketing Myth</h2>

        <p>The most cited research on this comes from a Harvard Business Review study titled "The Short Life of Online Sales Leads," which examined more than 100,000 web-generated leads across 2,241 United States companies. Its central finding is blunt. Businesses that responded to a new lead within five minutes were 100 times more likely to connect with that lead, and 21 times more likely to qualify them, than businesses that waited just 30 minutes.</p>

        <p>Thirty minutes. Not thirty hours. The gap between a five-minute reply and a half-hour reply is the gap between a live conversation and a voicemail nobody returns.</p>

        <p>The supporting numbers are just as stark:</p>

        <ul>
          <li>Responding within one minute has been shown to lift conversions by as much as <strong>391%</strong> compared with slower replies.</li>
          <li><strong>78% of customers buy from the first business that responds</strong> to them. Not the cheapest, not the best reviewed, the fastest.</li>
          <li><strong>82% of consumers</strong> say an immediate response, within ten minutes, is important or very important when they have a sales question.</li>
        </ul>

        <p>Lay the same finding on a single timeline and it becomes impossible to miss:</p>

        <table>
          <thead>
            <tr><th>First-response time</th><th>What the data shows</th></tr>
          </thead>
          <tbody>
            <tr><td>Under 1 minute</td><td>Conversions up to 391% higher than slower replies</td></tr>
            <tr><td>Under 5 minutes</td><td>21 times more likely to qualify the lead</td></tr>
            <tr><td>30 minutes</td><td>The slow benchmark the 21x figure is measured against</td></tr>
            <tr><td>Over 5 minutes</td><td>Odds of qualifying the lead fall by around 10 times</td></tr>
            <tr><td>47 hours</td><td>What the average business does in practice</td></tr>
          </tbody>
        </table>

        <p>Read those again, because together they describe a market that rewards speed above almost everything else. Your price can be a little higher and your reviews a little thinner, and you will still win the job if you are the one who replies while the customer is still holding their phone.</p>

        <blockquote><strong>The uncomfortable truth:</strong> most buyers are not carefully comparing you against three competitors on a spreadsheet. They give the job to whoever answers first and makes the next step easy.</blockquote>

        <h2>Almost Nobody Does It</h2>

        <p>Here is where the opportunity hides. If speed wins this decisively, you would expect every serious business to have solved it. They have not.</p>

        <p>The software company Drift ran a now famous audit. They submitted enquiries to 433 businesses and timed the replies. Only <strong>7%</strong> responded within the first five minutes. More than half took five working days to respond or never replied at all, and the average response time was a staggering 47 hours. Drift chose the five-minute mark for a simple reason: after five minutes, the odds of qualifying a lead fall by ten times.</p>

        <p>Sit with that for a second. Roughly nine out of ten businesses are too slow to claim the single biggest advantage sitting in their pipeline. Which means speed to lead is not only important, it is one of the few places where a small business can out-compete a much larger one today, without spending another shilling on advertising.</p>

        <h2>The Cost, in Plain Numbers</h2>

        <p>It is easy to wave this away as a handful of lost messages, so make it concrete. Say you receive 100 enquiries a month and you currently reply, on average, within a few hours. If even a third of those leads have already booked with a faster competitor by the time you answer, you are not losing 33 messages. You are losing 33 customers, every single month, before you ever got the chance to make your case.</p>

        <p>Now multiply that by your average job value. For most businesses, the revenue leaking out through slow response is larger than the entire marketing budget bringing those leads in. You pay for ads, referrals and time to generate enquiries, then lose a share of them out the back door because nobody could answer in time.</p>

        <p>This is what makes speed to lead such an unusual lever. Improving it costs you nothing in extra ad spend. You are not buying more leads, you are refusing to waste the ones you already paid for, which is almost always the cheapest growth a business can buy.</p>

        <blockquote><strong>Reality check:</strong> for most businesses, the revenue lost to slow replies each month is larger than the entire budget spent attracting those leads in the first place. You are rarely short of leads, you are losing the ones you already paid good money to win.</blockquote>

        <h2>Why Almost Every Business Misses It</h2>

        <p>If the prize is this clear, why do nine in ten businesses still miss it? Because the way most businesses are set up makes a five-minute reply nearly impossible.</p>

        <p>Enquiries arrive at 11pm, on a Sunday, in the middle of a job, or while you are driving. They land in three or four different places at once: a website form, an Instagram message, an email, a WhatsApp chat. No single person is watching all of them all of the time. By the time someone sits down, opens the right inbox and types a reply, the window has closed and the lead has gone quiet. Not because the reply was bad, but because it was late.</p>

        <p>This is the part worth being honest about. It is not a discipline problem you can fix by telling your team to be faster. A human cannot watch every channel every minute of every day, and they should not have to. It is a systems problem, and systems problems have systems solutions.</p>

        <CtaCard
          title="Not sure how fast your business replies?"
          sub="We will look at where your enquiries land and how long they really wait, then show you exactly where leads are leaking."
          label="Get a free look"
        />

        <h2>You Cannot Out-Hustle the Clock, but You Can Automate It</h2>

        <p>The fix is not to hire someone to stare at a phone all day. It is to make the first response automatic, instant, and good enough to hold the conversation until a human can take over.</p>

        <p>A well-built lead-response automation does four things the moment a message lands, day or night:</p>

        <ul>
          <li><strong>Replies in seconds</strong>, in your brand voice, acknowledging the person and answering the obvious first question instead of making them wait.</li>
          <li><strong>Qualifies gently</strong>, asking what they need, when and where, so you walk into the conversation already knowing the basics.</li>
          <li><strong>Captures the lead</strong> in one place automatically, so nothing depends on someone remembering to write it down later.</li>
          <li><strong>Books the next step or hands off</strong> to a real person with the full context, the moment the conversation calls for a human.</li>
        </ul>

        <p>Notice that none of this replaces your sales conversation. It protects it. The automation buys back the five-minute window, so that when your team picks up, the lead is still warm, already qualified, and quietly impressed that you replied faster than anyone else they messaged.</p>

        <blockquote><strong>The shift:</strong> you stop asking a person to be available every minute of every day, which no one can keep up for long. You start asking a system to catch the first reply every single time, so your team only steps in once the lead is warm and worth their attention.</blockquote>

        <h2>Where Your Leads Already Are: WhatsApp</h2>

        <p>For most businesses we work with, the highest-intent enquiries do not arrive through a polished web form. They come through WhatsApp. It is where customers already spend their day, and a message there feels personal and immediate in a way email never will. When someone messages your business on WhatsApp, they expect a conversation, not a support ticket.</p>

        <p>That is exactly why speed matters even more there. On WhatsApp, a reply that takes hours feels like being ignored, while a reply that takes seconds feels like genuine service. An automation that watches your WhatsApp, answers instantly in your tone, and only escalates to a human when the conversation is ready, turns your busiest and messiest channel into your most reliable one, without you hiring a night shift to sit on it.</p>

        <h2>Will an Instant Reply Feel Robotic?</h2>

        <p>It is the right question to ask, and the honest answer is that it only feels robotic if it is built badly. A clunky "Thank you for your enquiry, an agent will be with you shortly" auto-reply is worse than silence. Everyone recognises the template and switches off.</p>

        <p>A good one is a different thing entirely. It sounds like you, it answers what was asked, it varies its wording instead of repeating a script, and, crucially, it knows when to stop talking and let a person step in. Done well, most customers never realise the first reply was automated. They simply notice that this business answered immediately and made the next step easy. The goal is not to trick anyone into thinking a robot is human. The goal is to make sure nobody is left waiting.</p>

        <h2>What "Good" Looks Like</h2>

        <p>If you are going to put an automated first response in front of customers, it has to clear a real bar. In practice, a system worth running:</p>

        <ul>
          <li>Replies in <strong>under a minute</strong>, every time, including nights, weekends and public holidays.</li>
          <li>Speaks in your <strong>brand voice</strong> and answers the actual question, rather than deflecting.</li>
          <li><strong>Logs every lead</strong> the instant it arrives, so even the ones that never reply again are captured and can be followed up.</li>
          <li><strong>Hands off cleanly</strong> to a human with the full conversation, so the customer never has to repeat themselves.</li>
          <li>Knows <strong>when to go quiet</strong>. Once a call is booked or a person has taken over, it stops, instead of talking over your team.</li>
        </ul>

        <p>Anything short of that bar tends to do more harm than good. The difference between a system that wins leads and one that annoys them is entirely in how carefully it is built.</p>

        <blockquote><strong>Rule of thumb:</strong> a first reply should sound like your sharpest receptionist on her best day, never like a support ticket. If a customer cannot tell whether a person or a system answered, you have built it well.</blockquote>

        <h2>How to Start Without Boiling the Ocean</h2>

        <p>You do not need to automate your entire business to win here. You need to win the first five minutes. A sensible first build looks like this:</p>

        <ul>
          <li>Pick your highest-volume channel, usually WhatsApp, and make the first response there instant.</li>
          <li>Make sure every enquiry is logged automatically, so even the leads that go quiet are never truly lost.</li>
          <li>Hand off to a human with full context the moment the lead is qualified or asks for something only a person should handle.</li>
        </ul>

        <p>That single workflow, instant reply, captured lead and clean hand-off, is usually enough to recover a meaningful share of the leads you are currently losing to faster competitors. Everything else, from follow-up sequences to booking, reminders and reporting, builds on top of it later, once the foundation is paying for itself.</p>

        <h2>The Bottom Line</h2>

        <p>Speed to lead is the cheapest competitive advantage available to almost any business. The research is unambiguous. The fastest responder wins a wildly disproportionate share of the work, and roughly nine in ten businesses are too slow to claim it. You do not need a bigger ad budget to fix this. You need the first reply to happen in seconds instead of hours, automatically, every time, on the channel your customers already use.</p>

        <p>That is the exact problem we build for. If you want to see where your enquiries are leaking today and how an instant-response system would plug the gap, it is a short conversation away.</p>
      </>
    ),
  },
];

/* ---------- helpers ---------- */
export function formatPostDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}

export function getRelatedPosts(slug, n = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCat = POSTS.filter((p) => p.slug !== slug && p.category.slug === current.category.slug);
  const rest = POSTS.filter((p) => p.slug !== slug && p.category.slug !== current.category.slug);
  return [...sameCat, ...rest].slice(0, n);
}

export const posts = POSTS;
