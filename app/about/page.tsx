import type {Metadata} from "next";
import {LandingSection} from "../components/home/LandingSection";
import {LandingHeader} from "../components/home/LandingHeader";
import {Container} from "../components/layout/Container";
import {Faq} from "../components/home/Faq";

export const metadata: Metadata = {
  title: "Finnoto - About Us",
  openGraph: {
    type: "website",
    title: "Finnoto - About Us",
    url: "https://finnoto.com/about-us",
    images: [
      {
        url: "https://finnoto.com/_next/image?url=%2Fimages%2Fspend-management.webp&w=1080&q=75",
        alt: "img",
      },
    ],
    description: `We streamline financial operations for businesses through simplifying various aspects of financial management and providing effective solutions.`,
  },
  description:
    "We streamline financial operations for businesses through simplifying various aspects of financial management and providing effective solutions.",
};

const AboutPage = () => {
  return (
    <main>
      <LandingSection
        title={<LandingHeader>About Us</LandingHeader>}
        description="Who we are and what we do"
        hideIcon
        backgroundHeight="130%"
      ></LandingSection>

      <Container
        mode="wide"
        className="space-y-16 mt-16 flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          <p className="text-base md:mb-2 w-fit uppercase font-semibold bg-gradient-to-r from-[#E47A6D] to-[#625AFF] bg-clip-text text-transparent mb-2 md:mb-5">
            Our Solution
          </p>
          <h2 className="text-2xl md:text-[2.25rem] leading-10 font-semibold mb-5 md:text-[2.5rem] text-center">
            Building a Comprehensive Solution
          </h2>
          <p className="text-sm md:text-xl md:leading-8 font-medium text-secondary-black text-center">
            Through Data Integration from Multiple Sources
          </p>
        </div>

        <div className="max-w-[90%] md:max-w-[50%] text-center [&_p]:text-sm  md:[&_p]:text-[20px] md:[&_p]:leading-8 [&_p]:text-secondary-black [&_p]:font-normal [&_h3]:text-[20px]  md:[&_h3]:text-[20px] md:[&_h3]:leading-9 [&_h3]:text-primary-black [&_h3]:font-semibold [&_h3]:mt-6">
          <p>
            We streamline financial operations for businesses through
            simplifying various aspects of financial management and providing
            effective solutions.
          </p>

          <p className="mt-6">
            Finnoto empowers you with customizable dashboards for efficient
            business operations. Stay well-informed with real-time spend
            management updates and enhance your Vendor and HR management
            capabilities. Make informed decisions, devise strategies, and
            streamline your business processes effortlessly. Our Products and
            services:
          </p>

          <h3>Account Payable:</h3>

          <p>
            Streamline your accounts payable process with advanced automation
            that reduces manual effort, enhances accuracy, and integrates
            seamlessly with your financial systems
          </p>

          <h3>Accounts Receivable:</h3>
          <p>
            Track every step of the order-to-cash process, from order placement
            to cash receipt, with a transparent and efficient AR portal.
            Simplify dispute management and optimize financial operations.
          </p>

          <h3>Payment Automation:</h3>
          <p>
            Automate end-to-end payment workflows to ensure compliance, reduce
            risks, and gain real-time insights. Achieve complete visibility and
            control over financial transactions.
          </p>

          <h3>Vendor Management:</h3>

          <p>
            Manage vendor relationships with ease through secure onboarding,
            performance tracking, and compliance handling. Enhance collaboration
            and maintain tax and KYC compliance via a dedicated portal.
          </p>
        </div>
      </Container>

      <div className="mb-36 mt-36">
        <Faq />
      </div>
    </main>
  );
};

export default AboutPage;
