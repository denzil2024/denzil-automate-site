import { useEffect } from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { applySeo } from '../seo';
import { CONTACT, EMAIL, EMAIL_LINK } from '../site';

export default function Terms() {
  useEffect(() => {
    applySeo({
      title: 'Terms of Service | Denzil Automations',
      description: 'The terms that govern your use of the Denzil Automations website and content.',
      path: '/terms',
    });
  }, []);

  return (
    <>
      <SiteHeader />

      <section className="bl-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Terms of <span className="bl-hero-grad">Service</span></h1>
          <p>Last updated 13 June 2026</p>
        </div>
      </section>

      <div className="bp-body">
        <div className="bp-prose">
          <p>These Terms of Service ("Terms") govern your use of the Denzil Automations website and the content on it. By visiting or using our website, you agree to these Terms. If you do not agree with them, please do not use the site. These Terms cover the website itself; any automation project we build for you is governed by a separate written agreement.</p>

          <h2>Use of the Website</h2>
          <p>You may use our website for lawful purposes only, to learn about our services and to get in touch with us. You agree not to misuse the site, attempt to disrupt or gain unauthorised access to it, copy it wholesale, or use it in any way that could harm us, our visitors, or the website's operation. We may suspend or limit access if these Terms are broken.</p>

          <h2>Intellectual Property</h2>
          <p>All content on this website, including the text, articles, graphics, logos and design, is owned by Denzil Automations or used with permission, and is protected by intellectual property laws. You are welcome to read and share links to our content, but you may not copy, republish or reuse it for commercial purposes without our written permission.</p>

          <h2>Our Content Is Informational</h2>
          <p>The articles and guides we publish are provided for general information. They reflect our experience and research at the time of writing, but every business is different, and we cannot guarantee that any approach will produce a particular result for you. Nothing on this website is professional, legal or financial advice, and you should use your own judgement before acting on it.</p>

          <h2>Third-Party Links</h2>
          <p>Our website may link to other websites, tools and platforms that we do not own or control. We provide these links for convenience only, and we are not responsible for the content, accuracy or practices of any third-party site. Visiting those links is at your own risk and subject to their own terms.</p>

          <h2>Disclaimer of Warranties</h2>
          <p>Our website is provided on an "as is" and "as available" basis. While we work hard to keep it accurate, secure and available, we make no warranties that it will always be uninterrupted, error-free or free of harmful components. To the fullest extent allowed by law, we disclaim all warranties that are not expressly stated here.</p>

          <h2>Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Denzil Automations will not be liable for any indirect, incidental or consequential loss arising from your use of, or inability to use, this website or its content. Your use of the site is at your own risk, and this clause does not limit any liability that cannot be excluded under applicable law.</p>

          <h2>Changes to These Terms</h2>
          <p>We may update these Terms from time to time as our business or the law changes. When we do, we will revise the date at the top of this page, and your continued use of the website after any change means you accept the updated Terms.</p>

          <h2>Governing Law</h2>
          <p>These Terms are governed by the laws applicable where Denzil Automations operates. Any dispute relating to these Terms or to your use of the website will be handled in accordance with that law. If any part of these Terms is found to be unenforceable, the remaining parts will stay in full effect.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, reach out any time. You can email us at <a href={EMAIL_LINK}>{EMAIL}</a> or message us on <a href={CONTACT} target="_blank" rel="noopener">WhatsApp</a>, and we will be glad to help.</p>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
