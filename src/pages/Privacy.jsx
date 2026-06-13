import { useEffect } from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { applySeo } from '../seo';
import { CONTACT, EMAIL, EMAIL_LINK } from '../site';

export default function Privacy() {
  useEffect(() => {
    applySeo({
      title: 'Privacy Policy | Denzil Automations',
      description: 'How Denzil Automations collects, uses and protects your information when you visit our website or get in touch with us.',
      path: '/privacy',
    });
  }, []);

  return (
    <>
      <SiteHeader />

      <section className="bl-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Privacy <span className="bl-hero-grad">Policy</span></h1>
          <p>Last updated 13 June 2026</p>
        </div>
      </section>

      <div className="bp-body">
        <div className="bp-prose">
          <p>This Privacy Policy explains how Denzil Automations ("we", "us" or "our") collects, uses and protects your information when you visit our website or contact us. We keep this simple on purpose, because we collect very little and we never sell your data. By using our website or reaching out to us, you agree to the practices described here.</p>

          <h2>Information We Collect</h2>
          <p>We only collect what we genuinely need to respond to you and to keep our website running well. In practice, this falls into two groups:</p>
          <ul>
            <li><strong>Information you give us.</strong> When you message us on WhatsApp, send an email, or otherwise get in touch, we receive whatever you choose to share, such as your name, phone number, email address and the details of your enquiry. We use this only to reply to you and to understand how we can help.</li>
            <li><strong>Information collected automatically.</strong> Like most websites, our hosting and security providers record basic technical details when you visit, such as your IP address, browser type, device, and the pages you view. This is standard server and security logging, used to keep the site secure, stable and fast.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information above to reply to your enquiries and provide the services you ask about, to operate, maintain and improve our website, and to keep our systems secure and protect against abuse. We may also use it to send you information you have requested from us. We do not use your details for unrelated marketing without your clear agreement.</p>

          <h2>Cookies and Tracking</h2>
          <p>Our website does not use advertising or cross-site tracking cookies. Any cookies or similar technologies present are limited to those needed for the site and our security provider to function properly. You can control or clear cookies through your browser settings at any time, and the site will continue to work.</p>

          <h2>How We Share Information</h2>
          <p>We do not sell or rent your personal information to anyone. We share it only with the trusted service providers that help us run the business, and only so far as they need it to do their job. These include our website host, our content delivery and security provider, and the messaging platforms we use to talk with you, such as WhatsApp. We may also disclose information where we are required to by law.</p>

          <h2>Data Retention</h2>
          <p>We keep your information only for as long as it is needed for the purposes described in this policy, or for as long as the law requires. When we no longer need it, we delete it or remove anything that could identify you. Conversation history on third-party platforms such as WhatsApp is also governed by that platform's own retention rules.</p>

          <h2>Your Rights</h2>
          <p>You can ask us to see the personal information we hold about you, to correct it if it is wrong, or to delete it. You can also ask us to stop using it for a particular purpose. To make any of these requests, contact us using the details below, and we will respond within a reasonable time and in line with applicable law.</p>

          <h2>Third-Party Links</h2>
          <p>Our website and our messages may link to other websites and services that we do not control, such as social media platforms. This policy does not cover those services, so we encourage you to read the privacy policy of any third-party site before sharing your information with it.</p>

          <h2>Children's Privacy</h2>
          <p>Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children. If you believe a child has provided us with their information, please contact us and we will remove it.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time as our business or the law changes. When we do, we will revise the date at the top of this page. We encourage you to review it occasionally so you stay informed about how we protect your information.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this policy or about how we handle your information, reach out any time. You can email us at <a href={EMAIL_LINK}>{EMAIL}</a> or message us on <a href={CONTACT} target="_blank" rel="noopener">WhatsApp</a>, and we will be glad to help.</p>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
