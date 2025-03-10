import {Metadata} from "next";

import {Container} from "../components/layout/Container";
import {LandingSection} from "../components/home/LandingSection";
import {LandingHeader} from "../components/home/LandingHeader";
import type {JSX} from "react";
import {Navbar} from "../components/layout/Navbar";
import {JoinUsWrapper} from "../components/home/JoinUsWrapper";

type ListItem = {
  para: string | JSX.Element;
};

export const metadata: Metadata = {
  title: "Finnoto - Terms & Conditions",
  openGraph: {
    type: "website",
    title: "Finnoto - Terms & Conditions",
    url: "https://finnoto.com/terms-and-condition",
    images: [
      {
        url: "https://finnoto.com/_next/image?url=%2Fimages%2Fspend-management.webp&w=1080&q=75",
        alt: "img",
      },
    ],
    description:
      "Our terms and conditions outline the rules and regulations governing your use of our website. By accessing and using our site, you agree to comply with these terms, ensuring a fair and safe online environment for all users.",
  },
  description:
    "Our terms and conditions outline the rules and regulations governing your use of our website. By accessing and using our site, you agree to comply with these terms, ensuring a fair and safe online environment for all users.",
};

const listData = [
  {
    title: "Introduction",
    items: [
      {
        para: "Finnoto, a Company incorporated under the Companies Act, 2013.",
      },
      {
        para: `Finnoto, a Company incorporated under the Companies Act, 2013, is
referred to in this TOB as “Finnoto”, “us”, “we” or “our” which, 
where appropriate, includes our successor and predecessor entities 
and our staff. References in TOB to “the Company” or “you” or 
“your” are to the persons or entities who are our clients for the 
Engagement.`,
      },
    ],
  },
  {
    title: "Usage of certain terms",
    items: [
      {
        para: "The following definitions are used in this TOB:",
      },
      {
        para: `Capitalized terms used in the TOB, and not defined, shall have the 
meaning ascribed to such terms in the letter of engagement signed 
by you (“Letter”). In addition to the terms defined in the Letter, the 
following words and terms, whenever used in this TOB, unless 
repugnant to the meaning or context thereof, shall have the 
respective meanings set forth below:`,
      },
      {
        para: `Finnoto Affiliates” means other businesses we are connected with 
and which include ‘Finnoto’ in their title.
Engagement” means the Services which we provide pursuant to the 
Letter.`,
      },
      {
        para: `Letter” means to include the schedules, appendices and enclosures 
(including this TOB) which set out the basis of our contract with you.
Loss” means any loss, damage, costs or interest.
staff” means member, consultant, employee, director, officer, 
representative or agent of Finnoto. The term ‘partner’ used in the 
Letter does not mean to include a person being a partner in a 
partnership firm. Accordingly, legally the partners do not have a 
joint and several personal liability to you. With the exception of 
liabilities arising from gross professional negligence, staff of Finnoto,
in their individual capacity will not be liable to you.`,
      },
    ],
  },
  {
    title: "Entire agreement",
    items: [
      {
        para: `Unless otherwise specifically agreed in the Letter, the Letter 
replaces any previous agreements between us in relation to or in 
contemplation of the Engagement and shall apply to any future 
engagements we carry out on your behalf unless varied or replaced.
The Letter (which includes the TOB) constitutes the entire 
agreement between us. In entering into this Letter you acknowledge
that you have not relied on, and shall have no right or remedy in 
respect of, any statement, representation, assurance or warranty 
(whether made negligently or innocently) other than as expressly 
set out in the Letter.`,
      },
    ],
  },
  {
    title: "Fees and invoicing.",
    subListItems: [
      {
        para: `The fees are based on Finnoto’s preliminary review of the 
nature and quantum of work involved. Should Finnoto’s 
assumption with respect to these matters be incorrect, 
Finnoto may adjust its fees and the planned completion date.`,
      },
      {
        para: `Fees and expenses for any additional or unplanned work other
than those agreed will be agreed to and billed separately. 
Finnoto will discuss any changes in the Services with the 
Company prior to performing additional or unplanned work.`,
      },
      {
        para: `The taxes including Goods and Service Tax, charges, cess and 
other outgoings, if any, whether existing or 
imposed/imposable in future, by any governmental authority 
will be charged separately as applicable. It is clarified that the 
taxes, cess, charges and other outgoings, if any to be paid by 
Finnoto, will be reimbursed to Finnoto by the Company. The 
Company shall indemnify and hold Finnoto harmless for any 
failure or delay to remit any such payment to the appropriate 
tax authority and/or Finnoto and consequent penalties, 
interest and expenses incurred and/or assessed against 
Finnoto. Out of pocket expenses on conveyance, external 
disbursements, photocopying, printing, outstation travel, 
lodging & boarding, long distance telephone usage, facsimile, 
appointing third party service providers with your prior 
approval and other incidental expenses are reimbursable on 
actual basis.`,
      },
      {
        para: `para: Finnoto shall bill the Company for its fees together with, 
expenses and applicable taxes, if any, as they are incurred, in 
accordance with the terms specified in the Letter. Any queries 
on invoices must be raised in writing within 3 (three) working 
days of invoice date. We reserve the right to request 
prepayment of fees and disbursements. Our invoices shall be 
settled within 7 (seven) working days of its presentation to the
Company. We reserve the right to charge interest on any 
outstanding balance thereafter at 3% above the base rate of 
Finnoto’s principal banker. The Company shall remit the fees 
into the Finnoto’s account as may be indicated in the invoice 
by way of electronic transfer and/or RTGS.`,
      },
      {
        para: `The Company’s obligation to pay Finnoto’s professional fees 
and expenses is not contingent upon any results or outcomes 
arising out of the Services rendered by Finnoto. If Finnoto is 
required by the government regulation, or other legal process 
to produce documents or personnel as witnesses with respect 
to the Services or this Letter, the Company shall, so long as 
Finnoto is not a party to the proceeding in which the 
information is sought, reimburse Finnoto for its professional 
time and expenses, as well as reasonable attorneys’ fees and 
expenses, including the allocable cost of in-house counsel, 
incurred in responding to such requests.`,
      },
    ],
  },
  {
    title: "Company’s responsibilities",
    subListItems: [
      {
        para: `It is your responsibility to provide us with complete, accurate 
and timely instructions or information relevant to our 
Engagement. We will not be responsible for any consequences
that may arise from your failure to do so. Such failures may 
also result in additional fees being charged.`,
      },
      {
        para: `No reliance should be placed on any oral advice or 
representations we may make or any draft reports, unless and
until we confirm that advice to you in final form in writing.`,
      },
      {
        para: `Where it is envisaged that reports, letters, information, 
opinions or advice given by us to you will be provided to or 
used by a third party we reserve the right to agree with you 
the terms on which such reports, letters, information, opinions
or advice will be provided or used by such third party, or to 
require the third party to enter into a direct relationship with 
us.`,
      },
    ],
  },
  {
    title: "Prohibited Conduct",
    items: [
      {
        para: `Company agree that it shall not use service of our Finnoto solutions, in order
to host, display, upload, modify, publish, transmit, update, distribute, share,
store or destroy material:`,
      },
    ],
    subListItems: [
      {
        para: `In violation of any applicable law or regulation;`,
      },
      {
        para: `In a manner that will infringe the copyright, trademark, trade secret or
other intellectual property or proprietary rights of others or violate the
privacy, publicity or other personal rights of others;`,
      },
      {
        para: `That   is   grossly   harmful,   harassing,   blasphemous,   defamatory,
obscene,   pornographic,   pedophilic,   libelous,   invasive   of   another’s
privacy,   threatening,   abusive   or   hateful   or   racially,   ethnically
objectionable, disparaging, relating encouraging money laundering or
gambling or otherwise unlawful in any manner whatsoever;`,
      },
      {
        para: `Deceives or misleads the addressee about the origin of such message
or   communicates   any   information   which   is   grossly   offensive   or
menacing in nature;`,
      },
      {
        para: `That belongs to another person and to which you do not have any
right to;`,
      },
      {
        para: `Harm minors in any way; Impersonate another person or entity;`,
      },
      {
        para: `Contains   software   viruses   or   any   other   computer   code,   files   or
programs designed to interrupt, destroy or limit the functionality of the
Company’s   computer   systems   or   site   or   the   Company’s   users,
customer’s computer systems or site;`,
      },
      {
        para: `Threatens the unity, integrity, defense, security or sovereignty of India,
friendly relations`,
      },
      {
        para: `With foreign states or of public order or causes incitement to the
commission of any cognizable offence or prevents investigation of any
offence or insulting any other nation;`,
      },
      {
        para: `Any content which is non-compliant with the Information Technology
Act, 2020 & 2021, Rules and regulations, guidelines made thereunder,
including   Rule   3   of   The   Information   Technology   (Intermediaries
Guidelines)   Rules,   2011,   Terms   of   Use   or   Privacy   Policy,   as
amended/re- enacted from time to time.`,
      },
      {
        para: ` If Company becomes aware of misuse of Finnoto physical or
intellectual   property,   by   any   means,   please   inform legal@finnoto.com`,
      },
    ],
  },
  {
    title: "Preservation/Disclosure",
    items: [
      {
        para: `Company acknowledge, consent and agree that the Finnoto may access, preserve 
and disclose your account information if required to do so by law or in a good faith 
belief that such access, preservation or disclosure is reasonably necessary to:`,
      },
    ],
    subListItems: [
      {
        para: "Comply with legal process nationally or internationally;",
      },
      {
        para: "Enforce these Terms and the Privacy Policy;",
      },
      {
        para: "Respond to claims that any Content violates the rights of third parties;",
      },
      {
        para: `Protect the rights, property or personal safety of the Company, its Users and the
public;`,
      },
      {
        para: `Pursuant to terms of the Privacy Policy`,
      },
    ],
  },
  {
    title: "Security Components",
    items: [
      {
        para: `Company understands that Finnoto and the software / App hosted at finno.com may
include security components that permit digital materials to be protected, and that
use of these digital materials is subject to usage rules set by the Finnoto. You shall
not   attempt   to   override,   disable,   or   otherwise   interfere   with   any   such   security
components and usage rules embedded.`,
      },
    ],
  },
  {
    title: "Circulation of reports",
    items: [
      {
        para: `Finnoto’s Deliverables including any drafts thereof are private and 
confidential and are prepared for the addressees’ only. Deliverables 
and draft Deliverables should not be used, reproduced or circulated 
for any other purpose and to any third party, whether in whole or in 
part without the prior written consent of Finnoto, which consent may
be given only after consideration of the circumstance existing at the
time and may include the provision of an indemnity.`,
      },
    ],
  },
  {
    title: "Disclaimer of Warranties and Liability",
    subListItems: [
      {
        para: "The use of the Services is at your sole risk.",
      },
      {
        para: `To the fullest extent permissible under applicable law, the Finnoto expressly
disclaims   all   warranties   of   any   kind,   express   or   implied,   arising   out   of   the
Services, including warranties of merchantability, fitness for a particular purpose,
satisfactory   quality,   accuracy,   title   and   non-infringement,   compatibility,
applicability, usability, appropriateness, and any warranty that may arise out of
course of performance, course of dealing, or usage of trade.`,
      },
      {
        para: `Company hereby accept full responsibility for any consequences that may arise
from your use of the Services, and expressly agree and acknowledge that the
Finnoto shall have absolutely no liability with respect to the same.`,
      },
      {
        para: (
          <div className="flex flex-col">
            To the fullest extent permissible by law, the Company, its
            affiliates, and its related parties each disclaim all liability to
            you for any loss or damage arising out of or due to:
            <div className="mt-2 ml-4 flex flex-col">
              <li>
                Company’s use of, inability to use, or availability or
                unavailability of the Services, including any Third-Party
                Services;
              </li>
              <li>
                the occurrence or existence of any defect, interruption, or
                delays in the operation or transmission of information to, from,
                or through the Services, communications failure, theft,
                destruction or unauthorized access to the Finnoto’s records,
                programs, services, server, or other infrastructure relating to
                the Services; or
              </li>
              <li>
                the failure of the Services to remain operational for any period
                of time.
              </li>
            </div>
          </div>
        ),
      },
      {
        para: `Notwithstanding anything to the contrary contained herein, neither the Finnoto nor
any of its affiliates or related parties shall have any liability to you or any third party
for any indirect, incidental, special or consequential damages or any loss of revenue
or profits arising under, directly or indirectly, or relating, in any manner whatsoever, to
these Terms or the Services. To the maximum extent permitted by law, you agree to
waive,   release,   discharge,   and   hold   harmless   the   Company,   its   affiliated   and
subsidiary companies, its parent companies, and each of their directors, officers,
employees,   and   agents,   from   any   and   all   claims,   losses,   damages,   liabilities,
expenses and causes of action arising out of the Services.`,
      },
      {
        para: `Company warrant that all information supplied by you for accessing the Website,
including   without   limitation   your   name,   e-mail   address,   mobile   number   and
transactions related to it thereto, are correct and accurate, and belong to Company.
Company shall be financially responsible for your use of Finnoto (App / Website).,
Company undertake to supervise and be responsible for accessing the Website
under company’s account and absolve Finnoto from any liability on this account.`,
      },
      {
        para: `Finnoto shall not be held responsible for any reason whatsoever, for any losses or
damages incurred by you due to the use of Finnoto app/website.,`,
      },
      {
        para: `The   information   and   views   contained   on   Finnoto   app/website.,   are   based   on
information available and believed to be correct to the best of our knowledge and we
do not assume responsibility for the accuracy or for any loss arising out of any
information contained herein.`,
      },
      {
        para: `We will use our best efforts to protect the security and integrity of Finnoto app,
However,   considering   the   inherent   vulnerabilities   of   the   internet,   if   there   is   a
compromise to our systems, or if any unauthorized person hacks into or gains access
to Finnoto app/website, your accounts, you must understand that we will not be
liable. We will address any such incident in the best and most reasonable manner.`,
      },

      {
        para: (
          <div className="flex flex-col">
            To the extent permitted by applicable law, the Services are provided
            on an “as is” and “as available” basis. Finnoto does not warrant
            that operation of the Services will be uninterrupted or error free
            or that the functions contained in the Services will meet your
            requirements. Without prejudice to the foregoing paragraph, we do
            not warrant that:
            <div className="mt-2 ml-4 flex flex-col">
              <li>
                Finnoto’s services will be constantly available, or available at
                all, or is error- free;
              </li>
              <li>
                The information on Finnoto app/website, is complete, true,
                accurate or non- misleading;
              </li>
              <li>
                The quality of any services, content, information, or other
                Content on Finnoto app./website, will meet your expectations or
                requirements; or
              </li>
              <li>
                Any software used and/or licensed in connection with Finnoto
                app/website, will be compatible with other third-party software
                or devices nor that operation of Finnoto app/website and the
                associated software will not damage or disrupt other software or
                hardware. Finnoto shall not be responsible or liable for any of
                the aforesaid risks.
              </li>
            </div>
          </div>
        ),
      },
      {
        para: `All warranties including without limitation, the implied warranties of merchantability,
fitness for a particular purpose, for the title and non-infringement are disclaimed and
excluded.`,
      },
      {
        para: `We will not be liable to you in any way or in relation to the Content, or use of, or
otherwise, in connection with Finnoto app/website, we do not warrant that Finnoto
app/website, information, Content, product (including software) or services included
on   or   otherwise   made   available   to   you   are   free   of   viruses   or   other   harmful
components.`,
      },
      {
        para: `Our affiliates, respective investors, directors, employees, agents, suppliers, and Us
shall not be liable, at any time for any, direct, indirect, punitive, incidental, special,
consequential, damages arising out of or in any way connected with the use of
Finnoto app/website, whether based in contract, tort, strict liability, or other theory.`,
      },
      {
        para: `Subject to applicable laws, in no event will we, our employees’, agents, partners,
contractors’, aggregate liability arising from or related to the aforesaid services shall
exceed the payments actually received and retained by us from you in the last three
months of any claims having arisen, for any and all causes of action brought by you
or your agents.`,
      },
    ],
  },
  {
    title: "Mode of instructions",
    subListItems: [
      {
        para: `You authorise us to act from time to time on instructions given
in any manner (including but not limited to verbal and 
electronic instructions) in circumstances where we reasonably
believe those instructions have emanated from you or any 
person with authority to act on your behalf.`,
      },
      {
        para: `You understand and acknowledge that the electronic 
transmission of information via the internet or otherwise, has 
inherent risks (particularly the risk of access by unauthorised 
parties). Unless otherwise agreed, despite the inherent risks 
you authorise us to communicate electronically with you and 
all third parties on all matters related to the Engagement. 
Accordingly, you agree that we shall have no liability to you 
for any Loss arising directly from the use of electronic 
communications, except where caused by our own 
negligence.`,
      },
    ],
  },
  {
    title: "Limitation of liability",
    subListItems: [
      {
        para: `Finnoto may use personnel from across its group including 
Finnoto affiliates for the performance of the Services or 
otherwise for performance of its obligations under this Letter. 
In all circumstances Finnoto shall be solely responsible for the 
performance of the Services and the Company shall be 
entitled to rely on Finnoto for performance of such Services. 
The Company shall have no recourse and shall bring no claim 
against any staff or any of their personal assets directly 
(whether the claim is based on breach of contract, strict 
liability, tort, breach of warranty, negligence etc. or 
otherwise). This exclusion shall not apply to fraud.`,
      },
      {
        para: `In no circumstances Finnoto shall be responsible for any 
consequential, special, direct, indirect, punitive or incidental 
loss, damages or expenses (including loss of profits, data, 
business, opportunity cost, goodwill or indemnification) in 
connection with the performance of the Services whether such
damages are based on breach of contract, tort, strict liability, 
breach of warranty, negligence, or otherwise) even if the 
Company had contemplated and communicated to Finnoto the
likelihood of such damages. Any decision to act upon the 
Deliverables is to be made by the Company and no 
communication by Finnoto should be treated as an invitation 
or inducement to engage the Company to act upon the 
Deliverable.`,
      },
      {
        para: `The aggregate liability in respect of performance of the 
Service or otherwise under this Letter shall be limited to the 
actual professional fees paid (excluding out of pocket 
expenses and taxes if any paid) for the Services rendered by 
Finnoto regardless of whether the liability is based on breach 
of contract, tort, strict liability, breach of warranty, negligence
etc. or otherwise.`,
      },
    ],
  },
  {
    title: "Provision of specialised services",
    subListItems: [
      {
        para: `We may, with your consent refer you to Finnoto affiliates for 
the provision of specialised services. They will send you 
separate engagement letters if you choose to use their 
services. We do not accept any liability for work carried out by
any Finnoto affiliates.`,
      },
    ],
  },
  {
    title: "Confidentiality",
    subListItems: [
      {
        para: `Finnoto agrees to keep confidential all information received 
from the Company during the course of this engagement and 
for a period of one (1) year from the date of submission of the 
final Deliverables (“Confidential Information”) and not to make
unwarranted copies of any Confidential Information, and to 
use the Confidential Information only for the purpose for which
it has been disclosed to us.`,
      },
      {
        para: `Confidential Information means any information given or 
provided by the Company to Finnoto in any written form or 
through e-mails or fax or any other electronic means. 
Confidential Information shall include, but not be limited to, 
the, product specifications, analytical methodology, safety and
efficacy data, testing data and financial data, know-how, trade
secrets, internal policies whether published or not, ideas and 
other information of a technical, scientific or economic nature.`,
      },
      {
        para: `Confidential Information shall not include any information or 
documents previously known to Finnoto; or independently 
developed by Finnoto and/or Finnoto affiliates in the course of 
execution of this or any other engagement; or acquired by 
Finnoto from a third party without breaching the provisions of 
this Letter; or which is or becomes publicly available through 
no breach by Finnoto of this Letter; or special permission was 
obtained by Finnoto in writing from the Company.`,
      },
      {
        para: `In the event Finnoto receives a validly issued administrative or
judicial process requiring disclosure of the Confidential 
Information, Finnoto shall, if possible, provide prompt notice 
to the Company of such receipt and thereafter be entitled to 
disclose any Confidential Information in order to comply with 
such administrative or judicial process.`,
      },
      {
        para: `At any time upon the Company’s request or on the 
termination of this Letter, Finnoto shall, subject to paragraph 
15.6 of the TOB, immediately return all tangible Confidential 
Information provided by the Company and its affiliates 
including, without limitation, all notes and other writings 
prepared by Finnoto or its deployed staff containing or 
reflecting such Confidential Information and destroy all 
information developed there from which the Confidential 
Information is revealed or could be ascertained except in so 
far as such information is required to be retained under any 
applicable law or statute, whether permanently or otherwise.`,
      },
      {
        para: `Subject to paragraph 15.6 of the TOB, Finnoto shall not take 
any copy, extract or abstract or otherwise prepare any details 
based on and in relation to the Confidential Information 
without express and written prior consent from the Company.`,
      },
      {
        para: `Subject to confidentiality restrictions set forth herein, Finnoto 
and its affiliates shall have the right to render similar Services 
to any third parties, even if such parties are in competition 
with the Company.`,
      },
      {
        para: `Further, except as provided elsewhere in this Letter, neither 
party shall make any announcements to the public or to any 
third party regarding the arrangement contemplated by this 
Letter without prior written consent of the other party, 
provided that none of the aforesaid parties shall be liable for 
making such announcements if the same are made in the 
course of business and/or as required to be disclosed by law 
or regulation or pursuant to the legal process.`,
      },
    ],
  },
  {
    title: "Intellectual property rights and document ownership",
    subListItems: [
      {
        para: `Finnoto retains all Copyright and other intellectual property 
rights in everything developed by it both before and during 
the course of the Engagement, including rights in all 
Deliverables provided by Finnoto, although the fees you pay 
us under this Engagement will give you a licence to use these 
materials for the purposes for which they were created.`,
      },
      {
        para: `All documents including Deliverables in our possession or 
control, generated by us or addressed to us, relating to the 
Services shall be our sole property.`,
      },
    ],
  },
  {
    title: "Additional terms and conditions of Engagement",
    subListItems: [
      {
        para: `Finnoto will exercise all reasonable and proper skill and 
attention necessarily required to discharge its duty of care to 
the Company for rendering the Services.`,
      },
      {
        para: `Finnoto’s staff, that may be deployed on this assignment from 
time to time, have a specific agreement with Finnoto which 
prevents them from employment opportunities with any of our
clients, without Finnoto’s specific prior consent. In the event 
that the Company contemplates offering an employment 
opportunity to any of Finnoto’s existing staff, the same must 
not be with respect of a staff with whom you have had 
dealings in connection with the Engagement during the 12 
(twelve) months immediately prior to your approach without 
Finnoto’s specific prior written consent. The Company 
acknowledges and agrees not to defame or publicly criticize 
Finnoto and its Director/Partner, its business, integrity, 
veracity or personal or professional reputation or any of its 
officers, partners, employees, affiliates, agents, or franchisees
thereof in either a professional or personal manner either 
during the term of this Engagement or thereafter.`,
      },
    ],
  },
  {
    title: "Termination of Engagement",
    subListItems: [
      {
        para: `The terms and conditions set out in this Letter will come into 
effect from the Effective Date and shall terminate upon the payment by the Company of all outstanding Finnoto’s fees i.e. 
professional fees and out of pocket expenses, unless earlier 
terminated as set forth below.`,
      },
      {
        para: `Either party may terminate this Letter upon written notice if 
the other party breaches any of its obligations hereunder and 
such breach is not cured within 15 (fifteen) days following 
receipt of written notice thereof.`,
      },
      {
        para: `Finnoto may terminate this Letter upon written notice to the 
Company, if: Delays due to change of events aggregate to 
more than 30 (thirty) days, or Finnoto reasonably determines 
that it can no longer provide the Services in accordance with 
applicable professional obligations.`,
      },
      {
        para: `The Company shall pay for work-in-progress, completed 
services, and expenses incurred by Finnoto till the effective 
date of termination.`,
      },
      {
        para: `Subject to the terms and conditions provided above, either of 
the parties can terminate this Letter by giving 30 (thirty) days’
written notice to the other party. Upon such termination all 
outstanding Finnoto’s professional fees and out of pocket 
expenses should be paid by the Company immediately.`,
      },
      {
        para: `You agree that we shall have the right to retain copies of 
Deliverables relating to the Engagement after the 
Engagement has ended. It is our normal practice to retain 
documents relating to client engagements for 7 (seven) years 
after the end of the relevant Engagement. Thereafter, unless 
separate arrangements have been made, we may destroy or 
erase the documents or papers without reference to you.`,
      },
    ],
  },
  {
    title: "Use of name",
    subListItems: [
      {
        para: `Except as expressly permitted by this Letter neither party 
shall use publicly the other party’s name, trademark, service 
mark or logo in connection with the Services or any of the 
reports without the prior written consent of such other party.`,
      },
      {
        para: `Notwithstanding anything contained herein to the contrary, 
Finnoto may disclose to present or prospective clients, or 
otherwise in its marketing materials, that it has performed the
Services for the Company, and may use the Company’s name 
and trademark solely for that purpose, in accordance with 
applicable professional obligations. Finnoto may use the 
Company’s name, trademark, service mark and logo as 
reasonably necessary to perform the Services and in 
correspondence, including proposals, from Finnoto to the 
Company.`,
      },
    ],
  },
  {
    title: "Successor entity",
    subListItems: [
      {
        para: `If we should merge with another entity or transfer our 
business to another entity (a “Successor Entity”) then our 
Engagement with you shall not automatically terminate by 
reason of such merger or transfer. You agree that the 
Successor Entity is automatically appointed by you so that 
continuity of service can be provided. Both the Successor Entity and you may rely on the Letter as setting out the 
continuing terms of the Engagement. If such transfer requires 
some official action by you then you will take such steps as 
are necessary to enable continuity of service. This paragraph 
does not in any way limit your termination rights as set out in 
the paragraph headed “Termination”.`,
      },
    ],
  },
  {
    title: "Force Majeure",
    subListItems: [
      {
        para: `We will not be liable for any delays or failures in performance 
or breach of contract due to events or circumstances beyond 
our reasonable control, including acts of God, war, acts by 
governments and regulators, acts of terrorism, accident, fire, 
flood or storm or civil disturbance.`,
      },
    ],
  },
  {
    title: "Complaints",
    subListItems: [
      {
        para: `If at any time you would like to discuss with us how our 
service to you could be improved, or if you are dissatisfied 
with any aspect of the service you are receiving, please let us 
know by contacting the CEO at our registered office.`,
      },
      {
        para: `We will look into any complaint carefully and promptly.`,
      },
    ],
  },
  {
    title: "Arbitration",
    subListItems: [
      {
        para: `The Letter shall be governed by, and construed in accordance 
with, the laws of India and subject to this paragraph, the 
courts of Mumbai will have exclusive jurisdiction.`,
      },
      {
        para: `Finnoto and the Company hereto agrees that any disputes 
arising in connection with this Letter shall in the first instance 
be settled amicably by discussions between the Company and
Finnoto within 7 (seven) days of such dispute being notified by
a party to the other party. If the dispute is not resolved within 
the period of 7 (seven) days, the Company and Finnoto agree 
that either of them may refer the dispute for arbitration which 
will be governed in accordance with the Arbitration and 
Conciliation Act, 1996. The venue of the arbitration shall be 
Mumbai and the language of the arbitration shall be in 
English. The arbitration panel shall consist of 3 arbitrators. 
Each Party shall appoint one arbitrator. The two arbitrators so 
appointed shall jointly choose the third arbitrator who shall be 
the chairman of the arbitration panel. The result of the 
arbitration shall be binding on the parties.`,
      },
      {
        para: `All aspects of the arbitration shall be treated as confidential. 
The Company, Finnoto and the arbitration panel may disclose 
the existence, content or results of the arbitration only in 
accordance with the rules or applicable professional 
standards. Before making any such disclosure, a party shall 
give written notice to other party and shall afford them a 
reasonable opportunity to protect their interests, except to the
extent such disclosure is necessary to comply with applicable 
law, regulatory requirements or professional standards`,
      },
    ],
  },
];

const TermsAndCondition = () => {
  return (
    <main>
      <Navbar />
      <LandingSection
        title={<LandingHeader>Terms and Conditions</LandingHeader>}
        description="Our Terms and Conditions"
        hideIcon
        backgroundHeight="130%"
      ></LandingSection>

      <Container className="space-y-16 mt-16 flex flex-col items-center">
        <div className="gap-6 p-4 flex flex-col">
          <p className="text-xl font-semibold">SCHEDULE</p>
          <p className="text-xl font-semibold">TERMS OF BUSINESS</p>
          <p className="text-lg">
            The terms of business (“TOB”) of the Engagement are set out below.
          </p>
          <div>
            <ol className="gap-4 flex flex-col [&>li]:text-sm [&>li]:leading-6">
              {listData?.map((val) => (
                <ListItems
                  key={val?.title}
                  title={val?.title}
                  items={val?.items}
                  subListItems={val?.subListItems}
                />
              ))}
            </ol>
          </div>
        </div>
      </Container>
      <JoinUsWrapper />
    </main>
  );
};

const ListItems = ({
  title,
  items,
  subListItems,
}: {
  title: string;
  items?: ListItem[];
  subListItems?: ListItem[];
}) => {
  return (
    <li className="list-decimal ">
      <span className="inline-block mb-2 text-lg font-semibold align-top">
        {title}
      </span>
      <br />
      <div className="gap-2 flex flex-col">
        {items?.map((val, index) => (
          <p key={index}>{val?.para}</p>
        ))}
        {subListItems && subListItems.length > 0 && (
          <ol className="gap-2 ml-4 flex flex-col">
            {subListItems.map((val, index) => (
              <li key={index} className="list-disc">
                {val.para}
              </li>
            ))}
          </ol>
        )}
      </div>
    </li>
  );
};

export default TermsAndCondition;
