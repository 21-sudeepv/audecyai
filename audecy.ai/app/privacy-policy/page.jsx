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
        <p className="page-hero-sub">Anti Bribery, Anti Corruption and Sanctions Policy</p>
      </div>

      <div className="faq-container" style={{ maxWidth: '1000px' }}>
        <div className="legal-content" style={{ color: 'var(--smoke)', lineHeight: '1.8', fontSize: '1rem', fontWeight: '300' }}>
          <p><strong>Audecy AI Technologies Private Limited</strong><br />CIN: U62099KA2026PTC221151<br />Registered office: NITK Science & Technology Entrepreneurs' Park (NITK), Srinivasnagar, Surathkal, Mangalore, Dakshina Kannada 575025, Karnataka, India</p>
          <p style={{ marginTop: '16px' }}><strong>Version 1.0</strong><br />Approved by the Board of Directors on 01/09/2026<br />Effective from 01/09/2026<br />Next review: 01/01/2027</p>
          <hr style={{ borderColor: 'rgba(184,151,90,0.15)', margin: '40px 0', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>1. Purpose</h2>
          <p>Audecy AI Technologies Private Limited ("Audecy", "the Company") builds and delivers applied AI, IoT and software products for enterprise and public sector clients. Much of our work involves procurement processes, tenders and long term supplier relationships where the integrity of how business is won matters as much as the quality of what is delivered.</p>
          <p style={{ marginTop: '16px' }}>This policy sets out the standard Audecy holds itself to. We do not offer, give, request or accept bribes, and we do not do business with parties or in places where doing so would breach applicable sanctions. This is not a matter of commercial preference. It is a condition of working here and a condition of doing business with us.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>2. Scope</h2>
          <p style={{ marginBottom: '16px' }}>This policy applies to:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>all directors and officers of Audecy</li>
            <li>all employees, whether permanent, probationary, temporary or on internship</li>
            <li>contractors, consultants, secondees and interns working for or on behalf of Audecy</li>
            <li>agents, resellers, distributors, introducers, subcontractors and any other third party acting for Audecy or in its name</li>
          </ul>
          <p>Throughout this policy these are referred to collectively as "Audecy Personnel". Where a third party acts on our behalf, we remain accountable for what is done in our name.</p>
          <p style={{ marginTop: '16px' }}>This policy applies to all of Audecy's operations, including in India, Singapore, the United Kingdom and the countries of the Gulf Cooperation Council.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>3. Laws we comply with</h2>
          <p style={{ marginBottom: '16px' }}>Audecy complies with all anti bribery and anti corruption laws applicable to its business, including but not limited to:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>the Prevention of Corruption Act, 1988 (India), as amended</li>
            <li>the Bharatiya Nyaya Sanhita, 2023 (India), in respect of related offences</li>
            <li>the Prevention of Money Laundering Act, 2002 (India)</li>
            <li>the UK Bribery Act 2010, which applies to organisations carrying on business in the United Kingdom</li>
            <li>the US Foreign Corrupt Practices Act 1977, where applicable</li>
            <li>the Prevention of Corruption Act 1960 (Singapore), where applicable</li>
            <li>anti bribery laws in force in any other jurisdiction where we operate</li>
          </ul>
          <p>Where the requirements of two applicable laws differ, Audecy applies the stricter standard.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>4. What is prohibited</h2>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>4.1 Bribery</h3>
          <p style={{ marginBottom: '16px' }}>Audecy Personnel must not, directly or through any intermediary:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>offer, promise, give, authorise or provide anything of value to any person in order to obtain or retain business or to secure an improper advantage</li>
            <li>request, agree to receive or accept anything of value in return for acting improperly in the performance of their duties</li>
            <li>do anything that would cause another person to act improperly, or reward them for having done so</li>
          </ul>
          <p>"Anything of value" is read broadly. It includes cash and cash equivalents, gifts, hospitality, travel, discounts, loans, favours, employment or internship offers for a person's relatives, charitable or political contributions made at someone's request, and the provision of Audecy's products or services free of charge or below cost where the purpose is to secure an improper advantage.</p>
          <p style={{ marginTop: '16px' }}>The prohibition applies whether the counterparty is a public official or a private commercial party. It applies whether the benefit is offered to the person themselves or to a family member, associate or nominated third party. It applies regardless of local custom and regardless of whether a competitor is believed to be doing the same thing.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>4.2 Facilitation payments</h3>
          <p>Audecy prohibits facilitation payments, meaning small unofficial payments made to secure or speed up a routine government action to which the Company is already entitled, such as issuing a permit, clearing goods or providing a utility connection.</p>
          <p style={{ marginTop: '16px' }}>The only exception is where a person's life, health or physical safety is under immediate threat. In that case the payment may be made, and must then be reported to the Compliance Officer as soon as it is safe to do so and recorded accurately in the Company's books.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>4.3 Kickbacks and improper commissions</h3>
          <p>Audecy does not pay or receive kickbacks. All commissions, fees and discounts must reflect genuine services rendered at a rate that is commercially reasonable, must be documented in a written agreement, and must be paid to the contracting party by traceable bank transfer in the country where the services were performed.</p>

          <h3 style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: '24px', marginBottom: '12px', textTransform: 'uppercase' }}>4.4 Extortion</h3>
          <p>Audecy Personnel are not required to give in to demands for improper payments. Where a demand is made, the individual should decline, remove themselves from the situation and report it. No one will be penalised for losing business as a result of refusing to pay a bribe.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>5. Gifts and hospitality</h2>
          <p>Audecy does not prohibit gifts and hospitality outright. Modest, occasional and transparent business courtesies are a normal part of commercial life. They become a problem when they are frequent, extravagant, concealed, in cash, or timed to coincide with a decision that affects Audecy.</p>
          <p style={{ marginTop: '16px', marginBottom: '16px' }}>Gifts and hospitality are permitted only where all of the following are true:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>the purpose is genuine relationship building or the ordinary conduct of business, not the securing of an advantage</li>
            <li>the value is modest and proportionate, and the item would not embarrass either party if it became public</li>
            <li>it is not cash or a cash equivalent such as a voucher, gift card or prepaid instrument</li>
            <li>it is permitted under the recipient organisation's own rules</li>
            <li>it is given openly, in the Company's name, and recorded accurately</li>
          </ul>
          <p><strong>Thresholds.</strong> Any single gift or instance of hospitality with a value above INR 5,000, or a cumulative value above INR 15,000 to or from the same person in any financial year, requires prior written approval from the Compliance Officer. All gifts and hospitality above INR 2,000 must be recorded in the Gifts and Hospitality Register.</p>
          <p style={{ marginTop: '16px' }}><strong>Public officials.</strong> Gifts and hospitality to public officials require prior written approval from the Compliance Officer in every case, irrespective of value. This includes meals, travel and conference attendance.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>6. Public officials and political activity</h2>
          <p>A public official includes any officer or employee of a central, state or local government, any government department or agency, any state owned or state controlled enterprise, any public university or research institution, any public international organisation, and any political party, party official or candidate for office.</p>
          <p style={{ marginTop: '16px' }}>Several of Audecy's target sectors involve state owned enterprises and public procurement. Audecy Personnel dealing with these counterparties must take particular care and must route any gift, hospitality, sponsorship or offer of employment through the Compliance Officer before it is made.</p>
          <p style={{ marginTop: '16px' }}>Audecy does not make political contributions of any kind, in cash or in kind, in any jurisdiction. Employees are free to participate in political activity in their personal capacity, in their own time and at their own expense, and must not do so in a way that suggests Audecy endorsement.</p>
          <p style={{ marginTop: '16px' }}>Charitable donations and sponsorships are permitted where the recipient is a genuine registered organisation, the donation is not requested by or routed through a person in a position to award business to Audecy, and it is approved in advance by the Compliance Officer.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>7. Conflicts of interest</h2>
          <p>Audecy Personnel must declare any personal, financial or family interest that could conflict, or reasonably appear to conflict, with their duties to the Company. This includes a financial interest in a client, supplier or competitor, an outside role or directorship, and a close personal relationship with a person on the other side of a transaction Audecy is involved in.</p>
          <p style={{ marginTop: '16px' }}>Declarations are made in writing to the Compliance Officer. A declared conflict is not itself a breach. Failing to declare one is.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>8. Sanctions and export controls</h2>
          <p>Audecy complies with economic and trade sanctions and export control laws applicable to its business, including measures administered by the United Nations Security Council, the Government of India, the United States Office of Foreign Assets Control, the United Kingdom Office of Financial Sanctions Implementation, and the European Union.</p>
          <p style={{ marginTop: '16px', marginBottom: '16px' }}>Audecy will not, directly or indirectly:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>enter into a business relationship with any person or entity that is designated on an applicable sanctions list, or that is owned or controlled by such a person or entity</li>
            <li>conduct business in or with any country or territory subject to comprehensive sanctions</li>
            <li>supply, export, re-export or transfer any product, software, technology or technical data in breach of applicable export control laws</li>
            <li>take any action to evade, circumvent or assist another party in evading sanctions, including through routing, relabelling, ownership structures or intermediaries</li>
          </ul>
          <p><strong>Screening.</strong> Before onboarding, Audecy screens prospective clients, suppliers, agents, subcontractors and business partners, together with their known beneficial owners and directors, against applicable sanctions and denied party lists. Screening is repeated periodically for continuing relationships and whenever the Company becomes aware of a material change in ownership or control.</p>
          <p style={{ marginTop: '16px' }}><strong>Escalation.</strong> Any potential match, any request that appears designed to obscure the end user or end use of an Audecy product, and any proposed transaction touching a sanctioned jurisdiction must be escalated to the Compliance Officer before the Company proceeds. Where a match is confirmed, the transaction is stopped and, where required, reported to the relevant authority.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>9. Third parties</h2>
          <p>Audecy can be held liable for bribery committed by third parties acting on its behalf. Before engaging any agent, reseller, distributor, introducer, consultant or subcontractor who will interact with clients, public officials or regulators on Audecy's behalf, the Company will:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>carry out risk based due diligence proportionate to the country, sector and role involved, including sanctions and adverse media screening and identification of beneficial owners</li>
            <li>satisfy itself that the third party has the genuine capability and resources to perform the services and that the proposed remuneration is commercially reasonable for those services</li>
            <li>record the outcome of the due diligence in writing</li>
            <li>put a written agreement in place containing anti bribery, sanctions, records, audit and termination provisions</li>
            <li>re-assess the relationship periodically and on any material change</li>
          </ul>
          <p>Audecy will not use a third party to do anything the Company could not lawfully do itself. A relationship will be terminated where a third party breaches these obligations.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>10. Books, records and internal controls</h2>
          <p>Audecy maintains accurate and complete books, accounts, invoices and records that fairly reflect its transactions and the disposition of its funds. No account, fund or asset may be maintained off the books for any purpose.</p>
          <p style={{ marginTop: '16px' }}>No entry may be false, misleading or deliberately vague as to the true nature of a payment. Payments are made to the contracting counterparty, into a bank account in that counterparty's name, in the country where the services were rendered or where the counterparty is registered. Cash payments are not made other than through documented petty cash for routine low value expenses.</p>
          <p style={{ marginTop: '16px' }}>Expense claims must identify who was present, what the business purpose was and what was provided. Financial authority is exercised on a documented approvals matrix with segregation of duties between the person who commits the Company, the person who approves and the person who pays.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>11. Roles and responsibilities</h2>
          <p><strong>The Board of Directors</strong> owns this policy, approves it, reviews it at least annually and is responsible for setting the tone from the top.</p>
          <p style={{ marginTop: '16px' }}><strong>The Compliance Officer</strong> is responsible for day to day administration of the policy, for maintaining the Gifts and Hospitality Register, the Conflicts of Interest Register and the due diligence records, for approving escalations, for training, and for reporting to the Board on the operation of the policy at least once a year. The Compliance Officer for Audecy is the Chief Executive Officer until the Board appoints a separate officer, and can be reached at compliance@audecyai.com.</p>
          <p style={{ marginTop: '16px' }}><strong>Managers</strong> are responsible for ensuring that people reporting to them understand this policy and for escalating concerns rather than resolving them informally.</p>
          <p style={{ marginTop: '16px' }}><strong>All Audecy Personnel</strong> are responsible for reading this policy, completing the training assigned to them, and reporting concerns.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>12. Training</h2>
          <p>All new joiners receive anti bribery and sanctions training as part of induction and confirm in writing that they have read and understood this policy. Refresher training is provided annually, with additional targeted training for those in sales, business development, procurement and any role that interacts with public officials.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>13. Raising a concern</h2>
          <p>Anyone who suspects that a breach of this policy has occurred, is occurring or may occur must report it. A concern can be raised with a line manager, with the Compliance Officer, or in writing to compliance@audecyai.com. Reports may be made anonymously.</p>
          <p style={{ marginTop: '16px' }}>You are expected to raise a concern based on a reasonable suspicion. You do not need proof, and you will not be criticised for raising a concern that turns out on investigation to be unfounded.</p>
          <p style={{ marginTop: '16px' }}><strong>Non retaliation.</strong> Audecy will not tolerate retaliation of any kind against a person who raises a concern in good faith or who refuses to participate in conduct prohibited by this policy. This holds even where the refusal costs the Company business. Retaliation is itself a disciplinary offence.</p>
          <p style={{ marginTop: '16px' }}>All reports are treated confidentially so far as is possible consistent with a proper investigation and with any legal obligation to disclose.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>14. Consequences of breach</h2>
          <p>A breach of this policy by an employee is a serious disciplinary matter and may result in dismissal for gross misconduct. A breach by a third party is grounds for immediate termination of the engagement.</p>
          <p style={{ marginTop: '16px' }}>Bribery is a criminal offence. Individuals convicted may face imprisonment and fines, and the Company may face unlimited fines, debarment from public procurement and lasting damage to its ability to trade.</p>

          <h2 style={{ color: 'var(--paper)', fontFamily: 'var(--serif)', fontSize: '2rem', marginTop: '40px', marginBottom: '20px', fontWeight: '300' }}>15. Review</h2>
          <p>This policy is reviewed by the Board at least annually and whenever there is a material change to Audecy's business, geographic footprint or the applicable legal framework. The current version is published at audecyai.com and is made available to clients, suppliers and partners on request.</p>

          <hr style={{ borderColor: 'rgba(184,151,90,0.15)', margin: '40px 0', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
          <p><em>Approved by the Board of Directors of Audecy AI Technologies Private Limited.</em></p>
          <p style={{ marginTop: '8px' }}><em>Sudeep V, Founder and Chief Executive Officer, Director</em></p>
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
