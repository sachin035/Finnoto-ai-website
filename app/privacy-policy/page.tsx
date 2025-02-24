import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finnoto - Privacy & Policy",
  openGraph: {
    type: "website",
    title: "Finnoto - Privacy Policy",
    url: "https://finnoto.com/privacy-policy",
    images: [
      {
        url: "https://finnoto.com/_next/image?url=%2Fimages%2Fspend-management.webp&w=1080&q=75",
        alt: "img",
      },
    ],
    description:
      "Our privacy policy ensures the protection of your personal information. We commit to secure data handling, safeguarding it from unauthorized access. Your trust is our priority, and we strictly adhere to privacy regulations to guarantee confidentiality.",
  },
  description:
    "Our privacy policy ensures the protection of your personal information. We commit to secure data handling, safeguarding it from unauthorized access. Your trust is our priority, and we strictly adhere to privacy regulations to guarantee confidentiality.",
};

const Title = ({children}: {children: React.ReactNode}) => (
  <p className="text-base font-semibold">{children}</p>
);

const PrivacyPolicy = () => {
  const gapClass = "flex flex-col gap-2";
  return (
    <div className="container gap-12 pt-16 flex flex-col">
      <p className="text-lg font-semibold md:text-xl lg:text-2xl">
        Finnoto Solution Private Limited - PRIVACY POLICY
      </p>
      <div className="flex flex-col gap-2 [&>p]:text-sm [&>p]:leading-6">
        <p className="text-base font-semibold">
          Date Updated: <span className="font-normal"> 2023/06/07</span>
        </p>
        <p>
          This privacy policy is an electronic record in the form of an
          electronic contract formed under the information technology act, 2000
          & 2021 and the rules made thereunder and the amended provisions
          pertaining to electronic documents / records in various statutes as
          amended by the information technology act, 2000& 2021. This privacy
          policy does not require any physical, electronic or digital signature.
          This document is published and shall be construed in accordance with
          the provisions of the information technology (reasonable security
          practices and procedures and sensitive personal data of information)
          rules, 2011 under information technology act, 2000; that require
          publishing of the privacy policy for collection, use, storage and
          transfer of sensitive personal data or information.
        </p>
        <p>
          This privacy policy (“Policy”) explains our Company’s policy regarding
          the collection, use, disclosure and transfer of your data by Finnoto
          Solution Private Limited, a private limited company incorporated under
          Indian Company Act 2013, CIN U72900KA2022PTC165727 with its registered
          office at No. 46/1, Bhattarahalli Village, Virgo Nagar, P.O.,
          Bangalore, Karnataka, India, 560036 or any of its affiliate(s) (“we”
          or “us” or “our”) using the website{" "}
          <Link
            className="underline text-info"
            href={"https://finnoto.com/"}
            target="_blank"
          >
            Finnoto
          </Link>{" "}
          available on digital platforms.
        </p>
        <p>
          This privacy policy is a legal document binding between you and by
          Finnoto Solution Private Limited (hereinafter called “Finnoto”) (both
          terms defined below). the terms of this privacy policy will be
          effective upon your acceptance of the same (directly or indirectly in
          electronic form, by use or the website or by other means) and will
          govern the relationship between you and Finnoto for your use of the
          website (defined below).
        </p>
        <p>
          Finnoto Solutions Private Limited, hereinafter referred to as
          “Finnoto” is the licensed owner of Its Product and the website{" "}
          <Link
            className="underline text-info"
            href={"https://finnoto.com/"}
            target="_blank"
          >
            Finnoto.com
          </Link>{" "}
          (”The Site”). Finnoto respects your privacy and this Privacy Policy
          provides information on the manner in which your data is collected and
          used by the Finnoto on the Site. As a visitor to the Site/ Customer
          you are advised to please read the Privacy Policy carefully. By
          accessing the services provided by the Site you agree to the
          collection and use of your data by the Finnoto in the manner provided
          in this Privacy Policy.
        </p>
        <p>
          Please read this privacy policy carefully. by using the website, you
          indicate that you understand, agree and consent to this privacy
          policy. if you do not agree with the terms of this privacy policy,
          please do not use this website. you hereby provide your unconditional
          consent or agreements to the Finnoto as provided under section 43a and
          section 72a of information technology act, 2000.The User may revoke
          its consent for providing the sensitive information (as defined under
          Information Technology (Reasonable security practices and procedures
          and sensitive personal data or information) Rules, 2011) by reaching
          out to Finnoto support in writing and Finnoto may discontinue to
          provide services, which are depended or requires such sensitive
          information.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Title>Information Collected from Users</Title>

        <ol>
          <p>
            As part of the registration process or to avail services of the
            Finnoto the Site or the Finnoto App, Finnoto may collect the
            following personally identifiable information about you:
          </p>
          <div className="mt-2 ml-4 lg:ml-6">
            <li className="list-decimal">name</li>
            <li className="list-decimal">email address,</li>
            <li className="list-decimal">phone number,</li>
            <li className="list-decimal">business entity information,</li>
            <li className="list-decimal">account number of the Users,</li>
            <li className="list-decimal">
              KYC details and any other such information as required,
            </li>
            <li className="list-decimal">
              Demographic profile (like your age, gender, occupation, education,
              address etc.) and information about the pages on the site you
              visit/access, the links you click on the site, the number of times
              you access the page and any such browsing information.
            </li>
          </div>
        </ol>
        <p>
          We do not knowingly contact or collect personal information from
          children under 13. If you believe we have inadvertently collected such
          information, please contact us so we can promptly obtain parental
          consent or remove the information.
        </p>
      </div>
      <div className={gapClass}>
        <Title>Method of collecting the Information</Title>
        <p>
          Finnoto collects personally identifiable information about you only as
          part of a voluntary registration process, on-line survey or any
          combination thereof. The Site may contain links to other Web sites.
          Finnoto is not responsible for the privacy practices of such Web
          sites, which it does not own, manage or control. The Site and
          third-party vendors, including Google, use first-party cookies (such
          as the Google Analytics cookie) and third-party cookies (such as the
          DoubleClick cookie) together to inform, optimise, and serve ads based
          on someone’s past visits to the Site.
        </p>
      </div>
      <div className={gapClass}>
        <Title>Share your location only with permission</Title>
        <p>
          In serving you, Finnoto name may use or store your precise geographic
          location, if you give us permission to do so. We do not use or share
          this data for any other purpose. Many devices will indicate through an
          icon when location services are operating. We only share this location
          information with others as approved by you.
        </p>
      </div>
      <div className={gapClass}>
        <Title>Use of the information</Title>
        <p>
          Finnoto will use your personal information to provide personalized
          features to you on the Site and to provide for promotional offers to
          you through the Site and other channels. Finnoto will also provide
          this information to its business associates and partners to get in
          touch with you when necessary to provide the services requested by
          you. Finnoto will use this information to preserve transaction history
          as governed by existing law or policy. Finnoto may also use contact
          information internally to direct its efforts for product improvement,
          to contact you as a survey respondent, to notify you if you win any
          contest; and to send you promotional materials from its contest
          sponsors or advertisers. Finnoto will also use this information to
          serve various promotional and advertising materials to you via display
          advertisements through the Google Ad network on third party websites.
          You can opt out of Google Analytics for Display Advertising and
          customize Google Display network ads using the Ads Preferences
          Manager. Information about Customers on an aggregate (excluding any
          information that may identify you specifically) covering Customer
          transaction data and Customer demographic and location data may be
          provided to partners of the Finnoto for the purpose of creating
          additional features on the website, creating appropriate merchandising
          or creating new products and services and conducting marketing
          research and statistical analysis of customer behavior and
          transactions.
        </p>
      </div>
      <div className={gapClass}>
        <Title>
          Information automatically tracked while using the App or Site
        </Title>
        <p>
          We follow a policy to store all your credit card / other payment
          records in a cloud-based environment using the services of third-party
          infrastructure service providers.
        </p>
      </div>
      <div className={gapClass}>
        <Title>Sharing of your information</Title>
        <p>
          Finnoto will not use your financial information for any purpose other
          than to complete a transaction with you. Finnoto does not rent, sell
          or share your personal information and will not disclose any of your
          personally identifiable information to third parties. In cases where
          it has your permission to provide products or services you’ve
          requested and such information is necessary to provide these products
          or services the information may be shared with Finnoto business
          associates and partners.
        </p>
        <p>
          Nevertheless, Finnoto may use this information any special offers or
          promotional activities related to Finnoto or its services
        </p>
        <p>
          In order to serve you better, Finnoto may share your personal and
          anonymous information with other companies, including vendors and
          contractors. Their use of information is limited to these purposes,
          and subject to agreements that require them to keep the information
          confidential. Our vendors provide assurance that they take reasonable
          steps to safeguard the data they hold on our behalf, although data
          security cannot be guaranteed. Finnoto , generally do not share
          personally identifiable information (such as name, address, email or
          phone) with other companies or allow advertising companies to collect
          data through our service for ad targeting.
        </p>
      </div>
      <div className={gapClass}>
        <Title>Disclosure of your information</Title>
        <div className="mt-2 lg:ml-6">
          <li className="list-decimal">with your express consent,</li>
          <li className="list-decimal">
            when we have a good faith belief it is required by law,
          </li>
          <li className="list-decimal">
            when we have a good faith belief it is necessary to protect our
            rights or property, or
          </li>
          <li className="list-decimal">
            to any successor or purchaser in a merger, acquisition, liquidation,
            dissolution or sale of assets. Your consent will not be required for
            disclosure in these cases, but we will attempt to notify you, to the
            extent permitted by law to do so.
          </li>
        </div>
        <p>
          In addition, under any special circumstances, Finnoto could share
          information to help investigate, prevent or take action regarding
          unlawful and illegal activities, suspected fraud, potential threat to
          the safety or security of any person, violations of the its terms of
          use or to defend against legal claims; special circumstances such as
          compliance with subpoenas, court orders, requests/order from legal
          authorities or law enforcement agencies requiring such disclosure.
        </p>
      </div>
      <div className={gapClass}>
        <Title>Protecting your personal information</Title>

        <p>
          To protect against the loss, misuse and modification or alteration of
          the information under its control, Finnoto will take reasonable steps
          to secure your personally identifiable information against
          unauthorized access or disclosure. We encrypt transmission of data on
          pages where you provide payment information. However, no security or
          encryption method can be guaranteed to protect information from
          hackers or human error.
        </p>
        <p>
          Although, Finnoto will endeavor, to safeguard the confidentiality of
          your personally identifiable information, transmissions made by means
          of the Internet cannot be made absolutely secure. By using this site,
          you agree that Finnoto will have no liability for disclosure of your
          information due to errors in transmission or unauthorized acts of
          third parties.
        </p>
        <p>
          Information collected may be stored or processed on computers located
          in any country where we do business.
        </p>
      </div>
      <div className={gapClass}>
        <Title>Policy updates/Questions/Grievance Redressal</Title>

        <p>
          Finnoto reserves the right to change or update this policy at any
          time. If we make any material changes to our policies, we will place a
          prominent notice on our website or application. Any changes we make
          will be effective immediately on notice, which we may give by posting
          the new policy on the Site. Your use of the Services after such notice
          will be deemed acceptance of such changes. We may also make reasonable
          efforts to inform you via electronic mail. In any case, you are
          advised to review this Policy periodically on the Site to ensure that
          you are aware of the latest version. In the event you have any
          grievance relating to the processing of Information provided by you,
          you may contact our Grievance Officer or write to us at the following
          address:{" "}
          <a
            href="mailto:grievance@finnoto.com"
            className="text-info hover:underline"
            target="_blank"
          >
            {" "}
            grievance@finnoto.com
          </a>
        </p>
      </div>
      <div className={gapClass}>
        <Title>Scope Justification for Google OAuth</Title>
        <Title>Connect to an External Service:</Title>
        <p>
          Required to link with external services, this allows the app to read
          or write data efficiently from our server for the creation of expenses
          and reimbursements based on expenses and other data that is received
          in gmail,as explained in the justification of viewing email messages
          and settings, ensuring the security of your information.
        </p>
        <p>
          It&apos;s essential for accessing your business details and vendor
          details, making it easier to raise expenses and send them to the right
          email recipients.
        </p>
      </div>
      <div className={gapClass}>
        <Title>View Your Email Messages and Settings:</Title>
        <p>
          Enhances the app&apos;s ability to fetch and manage data for
          comprehensive expense management within the Gmail environment.
        </p>
        <p>
          Our app requests access to view your email messages and settings for
          essential functionalities:
        </p>
        <p>
          Utilises message IDs to retrieve and process Gmail data for the
          creation of expense/reimbursements. Ensures efficient receipt saving
          and data restoration for seamless expense tracking. Allows users to
          reopen emails and visualise the created expense/reimbursement card.
        </p>
        <p>
          We are not accessing or asking for extra information other than as
          required to meet the functionality.
        </p>
        <p>
          Finnoto use and transfer to any other app of information received from
          Google APIs will adhere to the{" "}
          <Link
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            className="link link-info"
          >
            Google API Services User Data Policy
          </Link>
          , including the Limited Use requirements.
        </p>
      </div>
      <div className={gapClass}>
        <Title>Disclaimer</Title>
        <p>
          In case any personal information is shared by you with us, which is
          not requested by us during registration, (whether mandatorily or
          optionally), we will not be liable for any information security breach
          or disclosure in relation to such information. If you have any
          questions regarding this Policy or the protection of your personal
          information, please contact our data protection officer/grievance
          officer.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
