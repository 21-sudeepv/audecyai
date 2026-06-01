'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Cursor from '../../components/Cursor';
import '../pages.css';

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Cursor />
      <div className="page-hero" style={{ minHeight: '30vh' }}>
        <div className="page-hero-label">Legal</div>
        <h1 className="page-hero-title">Terms &amp; <em>Conditions</em></h1>
        <p className="page-hero-sub">Effective Date: June 1, 2026</p>
      </div>

      <div className="faq-container" style={{ maxWidth: '1000px' }}>
        <div className="legal-content" style={{ color: 'var(--smoke)', lineHeight: '1.8', fontSize: '1rem', fontWeight: '300' }}>
          <p><strong>Audecy AI</strong><br/><strong>Effective Date:</strong> June 1, 2026<br/><strong>Last Updated:</strong> June 1, 2026</p>
          <hr style={{ borderColor: 'rgba(184,151,90,0.15)', margin: '40px 0', borderStyle: 'solid', borderWidth: '1px 0 0 0' }}/>
          
          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>1. Introduction</h2>
          <p>These Terms and Conditions ("Terms") govern your use of the website audecyai.com ("Website") and all services provided by Audecy AI ("Company," "we," "us," or "our"). By accessing our Website or engaging our services, you agree to be bound by these Terms. If you do not agree, do not use our Website or services.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>2. About Our Services</h2>
          <p>Audecy AI is an AI solutions agency that designs, develops, and deploys custom AI and technology products for startups and enterprises. Our services include, but are not limited to, AI product development, computer vision systems, predictive maintenance solutions, natural language processing applications, data analytics platforms, and technology consulting.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>3. Engagement and Scope of Work</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>3.1 Proposals and Agreements</h3>
          <p>All service engagements are governed by a separate Statement of Work (SOW), proposal, or service agreement that specifies the scope, deliverables, timelines, pricing, and payment terms. These Terms apply in addition to any project-specific agreements. In the event of a conflict, the project-specific agreement shall prevail.</p>
          
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>3.2 Client Responsibilities</h3>
          <p>You agree to provide timely access to required data, systems, personnel, and feedback necessary for us to deliver the agreed-upon services. Delays caused by your failure to provide required inputs may result in adjusted timelines and, where applicable, additional costs.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>3.3 Change Requests</h3>
          <p>Any changes to the agreed scope of work must be documented in writing and mutually agreed upon. Changes may impact timelines and pricing.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>4. Intellectual Property</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>4.1 Deliverables</h3>
          <p>Unless otherwise specified in the project agreement, upon full payment, you receive ownership of the final deliverables (custom code, models, and documentation) created specifically for your engagement.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>4.2 Pre-Existing IP and Tools</h3>
          <p>Audecy AI retains ownership of all pre-existing intellectual property, proprietary tools, frameworks, libraries, methodologies, and general-purpose components used in the delivery of services. Where such components are incorporated into deliverables, we grant you a non-exclusive, perpetual, royalty-free license to use them solely as part of the delivered solution.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>4.3 Knowledge and Expertise</h3>
          <p>Nothing in these Terms restricts Audecy AI from using general knowledge, skills, techniques, and experience gained during an engagement, provided we do not disclose your confidential information.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>5. Confidentiality</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>5.1 Obligations</h3>
          <p>Each party agrees to keep confidential all non-public information received from the other party in connection with an engagement, including business plans, technical specifications, data, pricing, and trade secrets ("Confidential Information").</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>5.2 Exceptions</h3>
          <p>Confidentiality obligations do not apply to information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was known to the receiving party before disclosure; (c) is independently developed without use of the disclosing party's confidential information; or (d) is required to be disclosed by law.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>5.3 Duration</h3>
          <p>Confidentiality obligations survive the termination of any engagement for a period of three (3) years, unless a longer period is specified in the project agreement.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>6. Payment Terms</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>6.1 Fees</h3>
          <p>Fees for services are as set out in the applicable SOW or proposal. Unless stated otherwise, all fees are quoted in Indian Rupees (INR) or US Dollars (USD) and are exclusive of applicable taxes.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>6.2 Payment Schedule</h3>
          <p>Payment milestones are defined in each project agreement. Standard terms require an advance payment before work commences, with remaining payments tied to milestone deliveries.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>6.3 Late Payments</h3>
          <p>Invoices not paid within the agreed timeframe may accrue interest at 1.5% per month or the maximum rate permitted by law, whichever is lower. We reserve the right to suspend work on overdue accounts.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>7. Warranties and Disclaimers</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>7.1 Service Warranty</h3>
          <p>We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards. If a deliverable contains material defects relative to the agreed specifications, we will correct such defects at no additional cost within thirty (30) days of written notice, provided notice is given within fourteen (14) days of delivery.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>7.2 No Guarantee of Results</h3>
          <p>AI and machine learning systems are inherently probabilistic. While we design our solutions to meet agreed performance benchmarks, we do not guarantee specific accuracy rates, business outcomes, or results unless explicitly committed to in writing within the project agreement.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>7.3 Disclaimer</h3>
          <p>Except as expressly stated herein, our services are provided "as is." To the maximum extent permitted by law, we disclaim all other warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>8. Limitation of Liability</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>8.1 Cap on Liability</h3>
          <p>To the maximum extent permitted by law, Audecy AI's total aggregate liability arising out of or in connection with any engagement shall not exceed the total fees paid by you for the specific engagement giving rise to the claim.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>8.2 Exclusion of Damages</h3>
          <p>In no event shall Audecy AI be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, data, business opportunities, or goodwill, even if advised of the possibility of such damages.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>8.3 Exceptions</h3>
          <p>Nothing in these Terms excludes or limits liability for fraud, willful misconduct, or any liability that cannot be excluded by law.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>9. Data and Privacy</h2>
          <p>Your use of our Website and services is also governed by our Privacy Policy, available at audecyai.com/privacy-policy. By engaging our services, you consent to the data practices described therein.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>10. Termination</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>10.1 By Either Party</h3>
          <p>Either party may terminate an engagement by providing thirty (30) days' written notice, unless the project agreement specifies otherwise.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>10.2 For Cause</h3>
          <p>Either party may terminate immediately upon written notice if the other party: (a) commits a material breach and fails to cure it within fifteen (15) days of written notice; or (b) becomes insolvent or enters into bankruptcy proceedings.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>10.3 Effect of Termination</h3>
          <p>Upon termination, you shall pay for all services rendered and expenses incurred up to the date of termination. We will deliver all completed and in-progress work product for which payment has been received.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>11. Indemnification</h2>
          <p>You agree to indemnify and hold harmless Audecy AI, its founders, employees, and contractors from any claims, damages, or expenses arising from: (a) your breach of these Terms; (b) your misuse of deliverables; or (c) any third-party claim arising from data or materials you provided to us.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>12. Website Use</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>12.1 Permitted Use</h3>
          <p>You may access our Website for informational purposes and to inquire about our services. You may not use the Website to distribute malware, conduct unauthorized data collection, or engage in any activity that disrupts the Website's functionality.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>12.2 Content</h3>
          <p>All content on the Website, including text, graphics, logos, and design, is the property of Audecy AI and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without written permission.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>13. Force Majeure</h2>
          <p>Neither party shall be liable for delays or failures in performance resulting from causes beyond their reasonable control, including natural disasters, pandemics, war, government actions, power outages, or internet disruptions.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>14. Governing Law and Disputes</h2>
          <p>These Terms are governed by the laws of India. Any dispute arising out of or in connection with these Terms shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to binding arbitration in Bengaluru, India, in accordance with the Arbitration and Conciliation Act, 1996.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>15. General Provisions</h2>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy and any applicable project agreement, constitute the entire agreement between the parties.</li>
            <li><strong>Severability:</strong> If any provision is found invalid or unenforceable, the remaining provisions shall continue in full force.</li>
            <li><strong>Waiver:</strong> Failure to enforce any provision shall not constitute a waiver of that provision.</li>
            <li><strong>Assignment:</strong> You may not assign your rights under these Terms without our written consent. We may assign our rights to a successor entity.</li>
            <li><strong>Notices:</strong> All notices should be sent to business@audecyai.com.</li>
          </ul>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>16. Contact Us</h2>
          <p>For questions about these Terms, contact us at:</p>
          <p style={{ marginTop: '16px' }}><strong>Audecy AI</strong><br/>Email: business@audecyai.com<br/>Website: audecyai.com</p>
        </div>
      </div>

      <footer className="page-footer">
        <p>© 2026 AUDECY AI. ALL RIGHTS RESERVED.</p>
        <div className="page-footer-links">
          <Link href="/">← Back to Home</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
}
