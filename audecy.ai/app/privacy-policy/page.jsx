'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Cursor from '../../components/Cursor';
import '../pages.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Cursor />
      <div className="page-hero" style={{ minHeight: '30vh' }}>
        <div className="page-hero-label">Legal</div>
        <h1 className="page-hero-title">Privacy <em>Policy</em></h1>
        <p className="page-hero-sub">Effective Date: June 1, 2026</p>
      </div>

      <div className="faq-container" style={{ maxWidth: '1000px' }}>
        <div className="legal-content" style={{ color: 'var(--smoke)', lineHeight: '1.8', fontSize: '1rem', fontWeight: '300' }}>
          <p><strong>Audecy AI</strong><br/><strong>Effective Date:</strong> June 1, 2026<br/><strong>Last Updated:</strong> June 1, 2026</p>
          <hr style={{ borderColor: 'rgba(184,151,90,0.15)', margin: '40px 0', borderStyle: 'solid', borderWidth: '1px 0 0 0' }}/>
          
          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>1. Introduction</h2>
          <p>Audecy AI ("we," "us," or "our") operates the website audecyai.com and provides custom AI and technology solutions to businesses worldwide. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage our services, or communicate with us.</p>
          <p style={{ marginTop: '16px' }}>By accessing our website or engaging our services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our website and services.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>2. Information We Collect</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>2.1 Information You Provide</h3>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Contact Information:</strong> Name, email address, phone number, company name, and job title when you reach out via our contact form, email (business@audecyai.com), or other channels.</li>
            <li><strong>Project Information:</strong> Business requirements, technical specifications, datasets, documents, and other materials you share with us in connection with a project engagement.</li>
            <li><strong>Payment Information:</strong> Billing details and invoicing information necessary to process payments for our services.</li>
          </ul>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>2.2 Information Collected Automatically</h3>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referring URLs, browser type, device type, and operating system.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to understand site usage and improve your experience. You may disable cookies through your browser settings.</li>
            <li><strong>Log Data:</strong> IP address, access times, and server logs collected automatically when you visit our website.</li>
          </ul>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>2.3 Information from Third Parties</h3>
          <p>We may receive information about you from publicly available sources, referral partners, or third-party platforms you use to contact us (e.g., LinkedIn).</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>3. How We Use Your Information</h2>
          <p style={{ marginBottom: '16px' }}>We use the information we collect to:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Respond to your inquiries and provide the services you request.</li>
            <li>Develop, deliver, and maintain custom AI solutions and technology products.</li>
            <li>Communicate with you about project progress, invoices, and service updates.</li>
            <li>Improve our website, services, and internal operations.</li>
            <li>Comply with legal obligations and enforce our agreements.</li>
            <li>Send occasional updates about Audecy AI's services and capabilities, where you have opted in or where permitted by applicable law.</li>
          </ul>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>4. Data Processing and AI Development</h2>
          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>4.1 Client Data</h3>
          <p>All client data, datasets, and project materials provided to us are processed solely for the purpose of delivering the contracted services. We do not use client data to train general-purpose AI models or for any purpose beyond the scope of the specific engagement, unless explicitly agreed in writing.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>4.2 Confidentiality</h3>
          <p>We treat all project-related information as confidential. Access to client data is restricted to team members directly involved in the engagement.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>5. How We Share Your Information</h2>
          <p style={{ marginBottom: '16px' }}>We do not sell, rent, or trade your personal information. We may share information in the following limited circumstances:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Service Providers:</strong> With trusted third-party vendors (cloud hosting, payment processing, communication tools) who assist in delivering our services, bound by confidentiality obligations.</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, legal process, or governmental request.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice.</li>
            <li><strong>With Your Consent:</strong> When you have given explicit permission to share information with a specified third party.</li>
          </ul>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>6. Data Retention</h2>
          <p>We retain personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related data is retained in accordance with the terms of each client engagement and deleted upon request or at the conclusion of the retention period.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>7. Data Security</h2>
          <p>We implement industry-standard technical and organizational measures to protect your information, including encryption in transit and at rest, access controls, and regular security reviews. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>8. International Data Transfers</h2>
          <p>Audecy AI operates across India, Singapore, the United Kingdom, the GCC, and Southeast Asia. Your information may be transferred to and processed in jurisdictions outside your country of residence. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>9. Your Rights</h2>
          <p style={{ marginBottom: '16px' }}>Depending on your jurisdiction, you may have the right to:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of your personal information.</li>
            <li>Object to or restrict certain processing activities.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Data portability, where applicable.</li>
          </ul>
          <p>To exercise any of these rights, contact us at business@audecyai.com. We will respond within the timeframe required by applicable law.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>10. Children's Privacy</h2>
          <p>Our services are directed at businesses and professionals. We do not knowingly collect personal information from individuals under 18 years of age. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>11. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to review their privacy policies before providing any information.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>12. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our website or services after changes are posted constitutes acceptance of the revised policy.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>13. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy or our data practices, contact us at:</p>
          <p style={{ marginTop: '16px' }}><strong>Audecy AI</strong><br/>Email: business@audecyai.com<br/>Website: audecyai.com</p>
        </div>
      </div>

      <footer className="page-footer">
        <p>© 2026 AUDECY AI. ALL RIGHTS RESERVED.</p>
        <div className="page-footer-links">
          <Link href="/">← Back to Home</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
      </footer>
    </>
  );
}
