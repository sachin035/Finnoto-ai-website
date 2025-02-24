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

        <div className="max-w-[90%] md:max-w-[50%] text-center [&_p]:text-sm  md:[&_p]:text-lg md:[&_p]:leading-8 [&_p]:text-secondary-black [&_p]:font-medium [&_h3]:text-lg  md:[&_h3]:text-2xl md:[&_h3]:leading-9 [&_h3]:text-primary-black [&_h3]:font-semibold [&_h3]:mt-6">
          <p>
            We streamline financial operations for businesses through
            simplifying various aspects of financial management and providing
            effective solutions.
          </p>

          <p>
            Finnoto empowers you with customizable dashboards for efficient
            business operations. Stay well-informed with real-time spend
            management updates and enhance your Vendor and HR management
            capabilities. Make informed decisions, devise strategies, and
            streamline your business processes effortlessly. Our Products and
            services:
          </p>

          <h3>Vendor Management:</h3>

          <p>
            We offer comprehensive solutions that focus on precise vendor data
            management, improving efficiency and ensuring compliance within your
            organisation.
          </p>

          <h3>Spend Management:</h3>
          <p>
            We offer enhanced financial health for your business by optimising
            efficiency, reducing costs, and ensuring compliance through
            automated workflows.
          </p>

          <h3>Reconciliation and Dispute management:</h3>

          <p>
            Conflict resolution with real-time tracking, and effective
            strategies to minimise legal risks and foster collaboration.
          </p>
        </div>
      </Container>

      <Faq />
    </main>
  );
};

export default AboutPage;
