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
        <p className="page-hero-sub">Effective Date: 01/09/2026</p>
      </div>

      <div className="faq-container" style={{ maxWidth: '1000px' }}>
        <div className="legal-content" style={{ color: 'var(--smoke)', lineHeight: '1.8', fontSize: '1rem', fontWeight: '300' }}>
          <p><strong>Audecy AI Technologies Private Limited</strong><br />CIN: U62099KA2026PTC221151<br />Registered office: NITK Science &amp; Technology Entrepreneurs' Park (NITK), Srinivasnagar, Surathkal, Mangalore, Dakshina Kannada 575025, Karnataka, India</p>
          <p style={{ marginTop: '16px' }}><strong>Version 1.0</strong><br />Effective from 01/09/2026<br />Last updated 01/09/2026<br />Next review: 01/01/2027</p>
          <hr style={{ borderColor: 'rgba(184,151,90,0.15)', margin: '40px 0', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>1. About this policy</h2>
          <p>Audecy AI Technologies Private Limited ("Audecy", "we", "us", "our") builds and delivers applied AI, IoT and software products for enterprise and public sector clients. In the course of running our business we handle personal data belonging to our clients' staff, our suppliers and partners, people who visit our website or contact us, people who apply to work with us, and our own employees.</p>
          <p style={{ marginTop: '16px' }}>This policy explains what personal data we collect, why we collect it, what we do with it, who we share it with, how long we keep it and what rights you have. It applies to all of Audecy's operations, including in India, Singapore, the United Kingdom and the countries of the Gulf Cooperation Council.</p>
          <p style={{ marginTop: '16px' }}>This policy sits alongside our Anti Bribery, Anti Corruption and Sanctions Policy. Section 7 below explains the personal data we process specifically to meet the obligations in that policy.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>2. Who is responsible for your data</h2>
          <p>For most of the processing described here, Audecy is the data controller, meaning we decide why and how your personal data is used.</p>
          <p style={{ marginTop: '16px' }}>Where we build, host or operate a system for a client and process personal data on that client's instructions, Audecy acts as a data processor and the client is the controller. In that situation the client's own privacy notice governs, and our obligations are set out in the data processing agreement we sign with them. Section 8 covers this in more detail.</p>
          <p style={{ marginTop: '16px' }}><strong>Grievance Officer and privacy contact</strong><br />Sudeep Vuppalapati, Founder and Chief Executive Officer<br />Audecy AI Technologies Private Limited<br />NITK Science &amp; Technology Entrepreneurs' Park (NITK), Srinivasnagar, Surathkal, Mangalore, Dakshina Kannada 575025, Karnataka, India<br />privacy@audecyai.com</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>3. Laws we work to</h2>
          <p style={{ marginBottom: '16px' }}>Depending on where you are and how we deal with you, one or more of the following will apply:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>the Digital Personal Data Protection Act, 2023 and rules made under it (India)</li>
            <li>the Information Technology Act, 2000 and the rules made under it, to the extent still in force</li>
            <li>the UK General Data Protection Regulation and the Data Protection Act 2018 (United Kingdom)</li>
            <li>the General Data Protection Regulation (European Union), where we offer services to or monitor people in the EU</li>
            <li>the Personal Data Protection Act 2012 (Singapore)</li>
            <li>applicable data protection laws in the GCC states where we operate</li>
          </ul>
          <p>Where two applicable laws differ, we apply the standard that gives you the stronger protection.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>4. Whose data we process</h2>
          <p style={{ marginBottom: '16px' }}>This policy covers personal data relating to:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Website visitors and enquirers.</strong> People who browse audecyai.com, fill in a contact form, subscribe to updates or email us.</li>
            <li><strong>Client and prospective client personnel.</strong> Named contacts at the organisations we work with or pitch to, and their colleagues who take part in meetings, pilots and deployments.</li>
            <li><strong>Supplier, partner and third party intermediary personnel.</strong> Named contacts at our vendors, subcontractors, advisors and channel partners, together with their directors and beneficial owners where we are required to identify them.</li>
            <li><strong>Job applicants.</strong> People who apply to Audecy or are approached by us, whether for employment, an internship or a contract role.</li>
            <li><strong>Employees, contractors and advisors.</strong> Our own people, covered here at a summary level and in full in our internal HR privacy notice.</li>
            <li><strong>Individuals whose data appears in client systems.</strong> Where we act as a processor on a client's behalf. See section 8.</li>
          </ul>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>5. What personal data we collect</h2>
          <p style={{ marginBottom: '16px' }}>We collect only what we need for the purpose in question. Depending on your relationship with us, this may include:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Identity data.</strong> Name, job title, employer, professional profile, and where legally required, date of birth, nationality and government issued identifiers.</li>
            <li><strong>Contact data.</strong> Business email address, telephone number, postal address and the details on a business card you give us.</li>
            <li><strong>Relationship and transaction data.</strong> Meeting notes, correspondence, proposals, contracts, purchase orders, invoices, delivery records and support tickets.</li>
            <li><strong>Technical data.</strong> IP address, device and browser type, operating system, referring page, pages viewed and time spent, collected when you use our website. See section 9 on cookies.</li>
            <li><strong>Recruitment data.</strong> CV, cover letter, work history, education, references, right to work information, interview notes and assessment results.</li>
            <li><strong>Compliance and integrity data.</strong> The results of the sanctions, adverse media and integrity checks described in section 7, which may include information about alleged or actual criminal offences relating to bribery, corruption, fraud or sanctions.</li>
            <li><strong>Employment data.</strong> For our own people, the payroll, benefits, attendance, performance and statutory records needed to employ someone lawfully in the relevant country.</li>
          </ul>
          <p>We do not seek to collect sensitive or special category personal data such as health information, religious or political beliefs, biometric data or caste, except where the law positively requires it of us as an employer in India, or where you volunteer it in an accessibility or accommodation request. Please do not send us sensitive personal data that we have not asked for.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>6. How we collect it and why</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px', marginBottom: '20px', textAlign: 'left', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(184,151,90,0.3)' }}>
                <th style={{ padding: '12px 8px', color: 'var(--paper)' }}>What we do</th>
                <th style={{ padding: '12px 8px', color: 'var(--paper)' }}>Personal data used</th>
                <th style={{ padding: '12px 8px', color: 'var(--paper)' }}>Why we do it</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Respond to an enquiry or a contact form</td>
                <td style={{ padding: '12px 8px' }}>Identity, contact, relationship</td>
                <td style={{ padding: '12px 8px' }}>To answer you and, if it goes further, to take steps towards a contract</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Deliver a project or a support engagement</td>
                <td style={{ padding: '12px 8px' }}>Identity, contact, relationship, transaction</td>
                <td style={{ padding: '12px 8px' }}>To perform our contract with your organisation</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Business development and marketing to business contacts</td>
                <td style={{ padding: '12px 8px' }}>Identity, contact, relationship</td>
                <td style={{ padding: '12px 8px' }}>Our legitimate interest in growing the business, subject to your right to opt out at any time</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Screen a counterparty before onboarding</td>
                <td style={{ padding: '12px 8px' }}>Identity, compliance and integrity</td>
                <td style={{ padding: '12px 8px' }}>Legal obligation under anti bribery and sanctions law, and our legitimate interest in not doing business with high risk parties</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Run a recruitment process</td>
                <td style={{ padding: '12px 8px' }}>Recruitment, identity, contact</td>
                <td style={{ padding: '12px 8px' }}>To take steps at your request before entering a contract, and our legitimate interest in assessing suitability</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Maintain books, records and tax filings</td>
                <td style={{ padding: '12px 8px' }}>Identity, transaction</td>
                <td style={{ padding: '12px 8px' }}>Legal obligation under company, tax and GST law</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Operate, secure and improve our website</td>
                <td style={{ padding: '12px 8px' }}>Technical</td>
                <td style={{ padding: '12px 8px' }}>Our legitimate interest in a secure and functioning site, with consent where the law requires it for non essential cookies</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Defend or bring a legal claim</td>
                <td style={{ padding: '12px 8px' }}>Whatever is relevant</td>
                <td style={{ padding: '12px 8px' }}>Our legitimate interest in establishing or defending legal rights</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '16px' }}>Under Indian law we rely on your consent, or on a legitimate use recognised by the Digital Personal Data Protection Act, whichever applies to the processing in question. Where we rely on consent, you may withdraw it at any time and we will stop that processing, though this does not affect anything done before you withdrew.</p>
          <p style={{ marginTop: '16px' }}>Where we rely on legitimate interests, we have considered whether our interest is overridden by your rights, and you can ask us for a summary of that assessment.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>7. Compliance screening and integrity due diligence</h2>
          <p>Our Anti Bribery, Anti Corruption and Sanctions Policy commits us to screening the parties we do business with. Doing that necessarily involves processing personal data, so we set out here what it means in practice.</p>
          <p style={{ marginTop: '16px' }}><strong>Who we screen.</strong> Prospective and existing clients, suppliers, subcontractors, agents, resellers, introducers and other business partners, together with the directors, officers and beneficial owners of those organisations where identifying them is necessary.</p>
          <p style={{ marginTop: '16px' }}><strong>What we look at.</strong> Sanctions and denied party lists maintained by the United Nations, the Government of India, the United States Office of Foreign Assets Control, the United Kingdom Office of Financial Sanctions Implementation and the European Union; politically exposed person status; public corporate registries; adverse media reporting; and information the counterparty gives us in a due diligence questionnaire.</p>
          <p style={{ marginTop: '16px' }}><strong>Where the data comes from.</strong> From you or your organisation directly, from public registries and the open internet, and from commercial screening and due diligence databases.</p>
          <p style={{ marginTop: '16px' }}><strong>Why we may process criminal offence data.</strong> Screening can surface allegations, investigations, charges or convictions relating to bribery, corruption, fraud, money laundering or sanctions. We process this only where necessary to meet an obligation under anti bribery and sanctions law or to protect Audecy against a serious risk, we keep it separate and access restricted, and we do not use it for any other purpose.</p>
          <p style={{ marginTop: '16px' }}><strong>Automated decisions.</strong> Screening tools produce potential matches, but a person at Audecy reviews every match and makes the decision. We do not reject a counterparty solely on the output of an automated system.</p>
          <p style={{ marginTop: '16px' }}><strong>Your rights here.</strong> If a screening result affects a decision about you or your organisation, you can ask us what the result was and correct it if it is wrong. We will tell you unless doing so would prejudice a legal or regulatory investigation.</p>
          <p style={{ marginTop: '16px' }}><strong>Reciprocity.</strong> Our own clients run equivalent checks on us. When we complete a client's due diligence questionnaire we may have to provide the names, job titles, nationalities and dates of birth of our directors, officers and beneficial owners. We tell those individuals when we do so.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>8. Client systems and AI development</h2>
          <p>A large part of our work involves building systems that process data belonging to our clients. This section explains how we treat that data, because it is the question clients ask us most often.</p>
          <p style={{ marginTop: '16px' }}><strong>We act as a processor.</strong> Where we build, host, integrate or support a system for a client, we process the personal data in that system only on the client's documented instructions and only for the purposes of the engagement. The client remains the controller.</p>
          <p style={{ marginTop: '16px' }}><strong>We do not train on client data by default.</strong> We do not use client data, client documents or the contents of client systems to train, fine tune or improve any general purpose model, and we do not use one client's data to build or improve anything for another client. Where a client wants us to train a model on their own data for their own use, that is agreed specifically in writing in the relevant contract, and the resulting model is used only for that client.</p>
          <p style={{ marginTop: '16px' }}><strong>Third party model providers.</strong> Some of our products call third party AI model providers. Where that happens we tell the client which providers are involved before the engagement starts, we contract on terms that prohibit the provider from training on the data we send, and we use the provider's zero retention or enterprise settings where they are available. The current list of sub-processors is at [SUB-PROCESSOR PAGE URL] and clients are notified before we add a new one.</p>
          <p style={{ marginTop: '16px' }}><strong>Minimisation.</strong> We ask clients for the least data that will make the system work, we prefer anonymised, pseudonymised or synthetic data for development and testing, and we do not copy production data into development environments without a written instruction.</p>
          <p style={{ marginTop: '16px' }}><strong>Human oversight.</strong> Our systems are built to support decisions, not to replace accountable human judgement. Where a client deploys a system of ours in a way that produces legal or similarly significant effects on individuals, we work with the client to ensure a meaningful human review step exists.</p>
          <p style={{ marginTop: '16px' }}><strong>Separation.</strong> Client environments and data are logically separated. Access is granted on a least privilege basis to named individuals for the duration of the engagement and revoked when it ends.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>9. Cookies and website analytics</h2>
          <p>Our website uses cookies and similar technologies. Strictly necessary cookies keep the site working and secure, and we set these without asking, because the site cannot function without them.</p>
          <p style={{ marginTop: '16px' }}>We also use [ANALYTICS PROVIDER] to understand how the site is used, and [OTHER TOOLS, IF ANY]. Where the law requires consent for these, we ask for it through the banner on your first visit, and you can change your choice at any time through [COOKIE SETTINGS LINK]. Most browsers also let you block or delete cookies, though parts of the site may then stop working properly.</p>
          <p style={{ marginTop: '16px' }}>We do not use advertising or cross site tracking cookies.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>10. Who we share personal data with</h2>
          <p>We do not sell personal data, and we do not share it for anyone else's marketing.</p>
          <p style={{ marginTop: '16px', marginBottom: '16px' }}>We share personal data with:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Service providers who work for us, including cloud hosting, communications, email, CRM, accounting, payroll, recruitment and screening providers. They act on our instructions under written contracts.</li>
            <li>AI model providers, as described in section 8, and only where the engagement requires it.</li>
            <li>Professional advisors, including lawyers, auditors, bankers and insurers, where they need it to advise us.</li>
            <li>Clients and prospective clients, where they run due diligence or onboarding checks on Audecy and need details of our directors, officers and beneficial owners.</li>
            <li>Government authorities, regulators, courts and law enforcement, where we are legally obliged to disclose, or where disclosure is necessary to establish or defend a legal claim.</li>
            <li>An acquirer or investor, if we are involved in a merger, acquisition, financing or sale of assets, subject to confidentiality obligations.</li>
          </ul>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>11. International transfers</h2>
          <p>Audecy operates across several countries and uses service providers located outside India. This means your personal data may be transferred to, stored in or accessed from a country other than your own, including India, Singapore, the United Kingdom, the European Union, the United States and the GCC states.</p>
          <p style={{ marginTop: '16px' }}>Where we transfer personal data out of a country whose law restricts such transfers, we put an appropriate safeguard in place. Depending on the transfer this may be an adequacy decision, standard contractual clauses, the UK international data transfer addendum, or binding contractual commitments equivalent to those. We also transfer only within any restrictions notified by the Government of India under the Digital Personal Data Protection Act.</p>
          <p style={{ marginTop: '16px' }}>You can ask us which safeguard applies to a particular transfer by writing to privacy@audecyai.com.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>12. How we protect personal data</h2>
          <p style={{ marginBottom: '16px' }}>We maintain technical and organisational measures appropriate to the risk, including:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>encryption of data in transit and at rest</li>
            <li>role based access control on a least privilege basis, with multi factor authentication on systems that hold personal data</li>
            <li>separation between client environments, and between development and production</li>
            <li>logging and monitoring of access to systems holding personal data</li>
            <li>background appropriate onboarding, confidentiality undertakings and security training for our people</li>
            <li>vendor security assessment before we adopt a new service provider</li>
            <li>a documented incident response process, tested periodically</li>
          </ul>
          <p><strong>Breaches.</strong> If a personal data breach occurs we will investigate, contain it, and notify the Data Protection Board of India and any other competent authority within the time the law allows. Where we act as a processor we will notify the affected client without undue delay so they can meet their own obligations. Where a breach is likely to result in a significant risk to you, we will tell you directly.</p>
          <p style={{ marginTop: '16px' }}>No system is perfectly secure, and we do not claim otherwise. If you believe your data with us has been compromised, contact privacy@audecyai.com immediately.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>13. How long we keep it</h2>
          <p>We keep personal data only as long as we need it, then delete it or anonymise it.</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px', marginBottom: '20px', textAlign: 'left', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(184,151,90,0.3)' }}>
                <th style={{ padding: '12px 8px', color: 'var(--paper)' }}>Category</th>
                <th style={{ padding: '12px 8px', color: 'var(--paper)' }}>Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Enquiries that do not become a relationship</td>
                <td style={{ padding: '12px 8px' }}>[24] months from last contact</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Client and supplier relationship records</td>
                <td style={{ padding: '12px 8px' }}>Duration of the relationship, then [8] years, to match the record keeping period under the Companies Act, 2013</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Books, invoices and tax records</td>
                <td style={{ padding: '12px 8px' }}>[8] years, or longer where GST or income tax law requires</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Compliance and screening records</td>
                <td style={{ padding: '12px 8px' }}>[8] years from the end of the relationship, to evidence the checks we carried out</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Unsuccessful job applications</td>
                <td style={{ padding: '12px 8px' }}>[12] months, unless you ask us to delete sooner or agree to stay on file</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Employee records</td>
                <td style={{ padding: '12px 8px' }}>Duration of employment, then as required by applicable labour, tax and provident fund law</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Website analytics</td>
                <td style={{ padding: '12px 8px' }}>[26] months</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '12px 8px' }}>Client system data where we act as processor</td>
                <td style={{ padding: '12px 8px' }}>As instructed by the client, and returned or deleted at the end of the engagement</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: '16px' }}>Where a legal claim, investigation or audit is live or reasonably anticipated, we keep the relevant records until it concludes.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>14. Your rights</h2>
          <p style={{ marginBottom: '16px' }}>Subject to the law that applies to you, you have the right to:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>be told what personal data of yours we process and why, and get a copy of it</li>
            <li>have it corrected if it is inaccurate, incomplete or out of date</li>
            <li>have it erased, where we no longer have a lawful reason to hold it</li>
            <li>withdraw consent where our processing rests on consent</li>
            <li>restrict or object to processing, including objecting to processing based on our legitimate interests and to direct marketing at any time</li>
            <li>portability, to receive certain data in a structured, commonly used, machine readable format</li>
            <li>nominate another person to exercise your rights on your behalf if you die or become incapacitated, as provided under the Digital Personal Data Protection Act</li>
            <li>not be subject to a decision based solely on automated processing that produces a legal or similarly significant effect on you</li>
          </ul>
          <p>To exercise any of these, write to privacy@audecyai.com. We will respond within the period the applicable law allows, and in any event within 30 days. We may need to verify your identity first. We do not charge for this unless a request is manifestly unfounded or excessive.</p>
          <p style={{ marginTop: '16px' }}>If we act as a processor for a client, we will forward your request to that client and support them in answering it, rather than answering it ourselves.</p>
          <p style={{ marginTop: '16px' }}><strong>Complaints.</strong> If you are unhappy with how we have handled your data, tell our Grievance Officer first and give us the chance to fix it. You also have the right to complain to a supervisory authority: the Data Protection Board of India, the Information Commissioner's Office in the United Kingdom, the Personal Data Protection Commission in Singapore, or the authority in your own country.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>15. Children</h2>
          <p>Our website and services are directed at businesses and are not intended for children. We do not knowingly collect personal data from anyone under 18, and we do not undertake tracking, behavioural monitoring or targeted advertising directed at children. If you believe a child has given us personal data, write to privacy@audecyai.com and we will delete it.</p>
          <p style={{ marginTop: '16px' }}>Where a client engagement involves data relating to children, we process it only as instructed by the client, only where the client has established a lawful basis including verifiable parental consent where required, and under specific contractual terms agreed for that engagement.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>16. Changes to this policy</h2>
          <p>We review this policy at least annually and update it when our practices or the law change. The current version and its effective date are always at the top of this page. Where a change materially affects your rights, we will give notice through the website and, where we hold your contact details and it is appropriate, directly.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>17. Contact us</h2>
          <p><strong>Audecy AI Technologies Private Limited</strong><br />NITK Science &amp; Technology Entrepreneurs' Park (NITK), Srinivasnagar, Surathkal, Mangalore, Dakshina Kannada 575025, Karnataka, India<br />Privacy and data protection: privacy@audecyai.com<br />Grievance Officer: Sudeep Vuppalapati, Founder and Chief Executive Officer, privacy@audecyai.com<br />General business: business@audecyai.com<br />Telephone: +91 91338 65537<br />Website: audecyai.com</p>
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
