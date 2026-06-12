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
    slug: 'why-leads-go-cold',
    title: 'Why Most Leads Go Cold, and the Follow-Up System That Wins Them Back',
    excerpt: 'Most businesses do not have a lead problem. They have a follow-up problem, and it quietly costs them most of their sales. Here is the data behind it, why warm leads really go quiet, and the exact follow-up system that brings them back.',
    date: '2026-06-12',
    category: CATEGORIES.followUp,
    cover: '/blog/why-leads-go-cold-cover.jpg',
    author: AUTHOR,
    readTime: '11 min read',
    content: () => (
      <>
        <p>Most businesses are convinced they have a lead problem. They almost never do. What they have is a follow-up problem, and it is quietly costing them the majority of the sales they could be closing right now.</p>

        <p>The evidence is not subtle. Only 2% of deals close on the first contact, yet nearly half of all salespeople give up after a single follow-up. Read those two numbers together and the gap is impossible to ignore: the exact moment most of the selling should begin is the moment most businesses stop. This is the largest and cheapest opportunity hiding in your pipeline, and almost no one is taking it.</p>

        <h2>Lead Generation Is Rarely the Problem. Follow-Up Is.</h2>

        <p>When sales go quiet, the instinct is to buy more leads. More ads, more referrals, more reach. It is the most expensive way to fix the wrong problem. You do not have a hole at the top of the funnel, you have a leak in the middle, between the first conversation and the close, and pouring more leads in simply means more of them drain out the same gap.</p>

        <p>Look closely at what a first contact really is. It is an introduction, not a decision. The customer has just met you. They are weighing the price, the timing, and two or three of your competitors all at once. Expecting them to commit on that first message is like proposing on a first date. The relationship that ends in a sale is built in everything that comes after, and that is precisely the part most businesses never do.</p>

        <blockquote><strong>The expensive belief:</strong> that a good lead buys on the first message. It almost never does, and building your sales process around that fantasy guarantees you hand most of your revenue to whoever follows up better.</blockquote>

        <h2>The Persistence Gap: Where Sales Are Won and Lost</h2>

        <p>Track where deals close and a precise pattern appears. Around 80% of sales are made between the fifth and twelfth contact, and 95% of leads who eventually buy are reached by the sixth attempt. Persistence is not a personality trait in sales. It is the mechanism by which sales happen at all.</p>

        <p>Now set that against how most sellers behave:</p>

        <ul>
          <li><strong>44% give up after a single follow-up.</strong></li>
          <li><strong>92% give up after four attempts or fewer</strong>, one touch short of where the sales begin.</li>
          <li>Top performers, by contrast, average <strong>around 16 touches</strong> per prospect.</li>
        </ul>

        <p>The difference between those two groups is not talent or charm. One keeps going and the other stops too early. When 92% of your competitors quit before the fifth touch, the simple act of politely showing up a sixth time is close to a guaranteed advantage.</p>

        <table>
          <thead>
            <tr><th>Point in the follow-up</th><th>What the data shows</th></tr>
          </thead>
          <tbody>
            <tr><td>First contact</td><td>Only 2% of sales close here</td></tr>
            <tr><td>After 1 follow-up</td><td>44% of sellers have already stopped</td></tr>
            <tr><td>By the 4th attempt</td><td>92% of sellers have given up</td></tr>
            <tr><td>5th to 12th touch</td><td>Where about 80% of sales are made</td></tr>
            <tr><td>By the 6th attempt</td><td>95% of won leads have been reached</td></tr>
          </tbody>
        </table>

        <blockquote><strong>The pattern to remember:</strong> the deals are won in the touches almost nobody sends. Keep showing up past the point where your competitors quit, and you win the business they have already written off.</blockquote>

        <h2>Why Warm Leads Go Quiet, and Why It Is Almost Never Rejection</h2>

        <p>To fix follow-up, you first have to understand silence, because silence is the most misread signal in sales. When a promising lead stops replying, most businesses assume they lost interest or were never serious. The data says otherwise. Roughly <strong>half of all leads are qualified but not ready to buy</strong> on the day they first make contact. The need is real and the budget exists. The timing is simply wrong this week.</p>

        <p>People go quiet because life is loud. They got pulled into a meeting, the message slid down their chat list, payday is next week, or they meant to think it over and forgot. None of that is a no. It is a not right now, and a not right now turns into a yes the moment you are still there when their timing changes.</p>

        <p>Think about your own buying. You ask three plumbers for a quote, get busy, and hire whichever one sends a friendly reminder on the evening you finally have a moment to deal with it. You were always going to hire someone. You hired the one who stayed visible at the right time. Your leads behave exactly the same way, and most of your competitors vanish long before that moment arrives.</p>

        <blockquote><strong>Worth remembering:</strong> a quiet lead is not a rejection, it is a lead with bad timing. Your job is not to convince them harder, it is to still be in the conversation when their timing finally turns.</blockquote>

        <h2>Not All Quiet Leads Are Equal: Segment First</h2>

        <p>Treating every lead identically is the fastest way to either smother the eager ones or lose the patient ones. Before you write a single message, sort your leads into three groups, because each one needs a different rhythm.</p>

        <ul>
          <li><strong>Hot:</strong> they asked about price, availability, or booking. These want a fast, frequent, low-friction nudge while their intent is still high.</li>
          <li><strong>Warm:</strong> they engaged but gave no sign of urgency. These need steady, value-led follow-up that keeps you present without pressure.</li>
          <li><strong>Cold:</strong> they went fully quiet or were never quite ready. These get a slower, lighter touch built to catch them whenever their timing eventually returns.</li>
        </ul>

        <p>Segmentation is what separates a follow-up system from spam. The message that feels helpful to a hot lead feels like pestering to a cold one. Match the cadence to the temperature and every message lands as service instead of noise.</p>

        <h2>What a Follow-Up System Does That No Human Can</h2>

        <p>The real reason manual follow-up fails is not laziness. It is that doing it well, consistently, across dozens of leads, at the right moment for each one, is simply beyond what a busy human can sustain. People forget. They get busy. They feel awkward sending the third message. They lose track of who is owed what. A system has none of those limits.</p>

        <p>A well-built follow-up system does four things people reliably cannot:</p>

        <ul>
          <li><strong>It never forgets.</strong> Every lead that goes quiet gets its next nudge on schedule, whether or not you remembered them.</li>
          <li><strong>It times each touch precisely</strong>, spacing nudges so you stay present without ever tipping into pestering.</li>
          <li><strong>It sounds human and on brand</strong>, varying the wording instead of firing the same "just following up" at everyone.</li>
          <li><strong>It stops the instant someone replies</strong>, handing a warm, re-engaged lead straight to a person with the full history.</li>
        </ul>

        <p>The payoff is not marginal. Nurtured leads make <strong>around 47% larger purchases</strong> than leads left alone, and structured nurture sequences earn several times the response of one-off blasts. Follow-up is not administrative clean-up. It is among the highest-return selling your business can do, and a system lets you do it for every lead at once.</p>

        <CtaCard
          title="Losing deals in the gap after the first reply?"
          sub="We will map where your leads go quiet and build the follow-up that brings them back, on the channel they already use."
          label="Book a call"
        />

        <h2>The Cadence That Keeps You Present Without Becoming a Pest</h2>

        <p>The fear that stops most people following up is the fear of seeming desperate. Cadence is the cure. The right number of messages, spaced the right way, in the right tone, reads as attentive rather than needy. A proven baseline rhythm looks like this:</p>

        <ul>
          <li><strong>Day 0:</strong> the instant first reply, the moment they reach out. Built on the same foundation as <a href="/blog/speed-to-lead">answering within the first five minutes</a>, everything else stacks on top of it.</li>
          <li><strong>Day 2 to 3:</strong> a light first nudge while you are still fresh in their mind.</li>
          <li><strong>Day 7:</strong> a second nudge that adds a reason to act, not just "any update?"</li>
          <li><strong>Day 14:</strong> a final, low-pressure check-in that leaves the door open for later.</li>
        </ul>

        <p>The logic is simple. Early messages sit close together because the lead still remembers you, and later ones space out so you stay present without crowding. Hot leads can be nudged tighter, cold ones looser. The exact days matter far less than the discipline behind them: show up on a schedule, every time, instead of once and never again.</p>

        <blockquote><strong>Rule of thumb:</strong> follow up often enough to be impossible to forget, spaced enough to stay easy to like. Three or four well-timed nudges will always beat ten anxious ones.</blockquote>

        <h2>What to Say in Every Nudge</h2>

        <p>Timing gets your message seen. Content decides whether it earns a reply. The most common mistake in follow-up is the empty nudge: "Hi, just checking in, any update?" It hands all the work back to the customer and gives them nothing to respond to. Every message you send should make replying the easiest thing they do that minute.</p>

        <p>Three principles keep a nudge sharp:</p>

        <ul>
          <li><strong>Lead with value, not a request.</strong> Offer something useful: a relevant example, a quick answer to a likely question, a reminder of the exact outcome they wanted.</li>
          <li><strong>Make the reply one tap.</strong> Ask a single, simple question they can answer in a few words, a yes or no, or a choice between two options.</li>
          <li><strong>Keep it human and short.</strong> Write the way you speak. Two honest lines in your own voice beat a polished paragraph that reads like a template.</li>
        </ul>

        <p>In practice, that means trading "Following up on my quote, let me know your thoughts" for something like "Hi James, still happy to hold that Saturday slot for you. Want me to lock it in, or is next week easier?" The first asks the customer to do the work. The second makes saying yes almost effortless.</p>

        <h2>The Follow-Up Mistakes That Turn Warm Leads Cold</h2>

        <p>Follow-up done badly does not merely fail to help. It actively drives leads away. A poorly timed, impersonal, or relentless sequence can turn a warm lead cold in a single message. The most common and most costly mistakes are worth naming:</p>

        <ul>
          <li><strong>Giving up too early.</strong> The biggest one by far. Most sellers stop at the exact point persistence begins to pay.</li>
          <li><strong>Saying nothing of value.</strong> A run of "any update?" messages trains the customer to ignore you.</li>
          <li><strong>Following up too often.</strong> Daily messages to a cold lead read as desperation and earn you a block.</li>
          <li><strong>Using a channel they ignore.</strong> A follow-up in an inbox they never open is a follow-up that never happened.</li>
          <li><strong>Failing to stop when they reply.</strong> Nothing destroys trust faster than an automated nudge that lands after the customer has already answered.</li>
        </ul>

        <h2>Know Exactly When to Go Silent</h2>

        <p>The mark of a follow-up system worth running is that it knows when to stop talking. The instant a lead replies, books, or asks a real question, the sequence must end and hand the conversation to a person. A customer who just answered and then receives an automated "still interested?" the next morning does not feel followed up with. They feel processed, and the trust you spent weeks earning disappears in one message.</p>

        <p>Done right, the customer never senses the machinery at all. They get a timely, friendly message that happens to arrive exactly when they had a free moment, and the second they engage, a real person takes over holding the whole history of the conversation. The system does the remembering. The human does the closing.</p>

        <h2>Why WhatsApp Is the Highest-Leverage Place to Follow Up</h2>

        <p>A follow-up only works if it is seen, and this is where the channel quietly decides the outcome. An email nudge competes with a hundred unread others and is often never opened. A WhatsApp message lands in the same place the customer talks to their family and closest friends, and it gets read, usually within minutes.</p>

        <p>For re-engaging a quiet lead, that read rate is the whole game. A follow-up system that nudges on WhatsApp, in your voice, and steps aside the moment the customer replies, turns your quietest leads back into live conversations without you sending a single awkward "just checking in" yourself.</p>

        <blockquote><strong>The opportunity:</strong> roughly 79% of leads never convert, and weak follow-up is one of the largest reasons why. Fixing your follow-up does not cost you a shilling more in leads, it rescues the ones you have already paid for.</blockquote>

        <h2>Where to Start</h2>

        <p>You do not need a twelve-step nurture engine on day one. You need to stop letting quiet leads quietly disappear. A sensible first build is deliberately simple:</p>

        <ul>
          <li>Pick the channel your leads already use, almost always WhatsApp, and build one short sequence of three to four nudges.</li>
          <li>Write each message in your real voice, leading with value and asking one easy question, never just "any update?"</li>
          <li>Make the sequence stop automatically the moment a lead replies, and hand that warm lead to a person with the full thread attached.</li>
        </ul>

        <p>That single system, sitting on top of an instant first response, is usually enough to recover a meaningful share of the deals you are currently writing off as dead. Once it pays for itself, you layer on segmentation, longer sequences, and booking from there.</p>

        <h2>Follow-Up Is Not a Task. It Is the Business.</h2>

        <p>Most leads never reject you. They go quiet, then they get forgotten, because doing follow-up by hand is genuinely hard and almost everyone quits too early. The businesses that win are rarely the ones with the slickest opening message. They are the ones still politely present at the fifth and sixth touch, where the overwhelming majority of sales are made.</p>

        <p>Build a system that never forgets a lead, times its nudges with care, says something worth replying to, and goes silent the instant a customer responds, and the revenue you used to lose in the gap starts coming back on its own. That is the system we build, wired into the channel your customers already use, so the follow-up runs whether or not anyone on your team remembers to send it.</p>
      </>
    ),
  },
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
