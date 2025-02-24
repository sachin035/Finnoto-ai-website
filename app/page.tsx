// import Image from "next/image";
import {Metadata} from "next";
import {LandingSection} from "./components/home/LandingSection";
import {LandingHeader} from "./components/home/LandingHeader";
import {TrustedClients} from "./components/home/TrustedClient";
import {WorkingMethod} from "./components/home/WorkingMethod";
import {Products} from "./components/home/Products";
import {MissionSection} from "./components/home/MissionSection";
import {Faq} from "./components/home/Faq";

export const metadata: Metadata = {
  title: "Finnoto - Solution",
  applicationName: "Finnoto - Solution",
  openGraph: {
    type: "website",
    title: "Finnoto - Solutions",
    url: "https://finnoto.com/",
    images: [
      {
        url: "https://finnoto.com/_next/image?url=%2Fimages%2Fspend-management.webp&w=1080&q=75",
        alt: "img",
      },
    ],
    description:
      "Finnoto empowers you with customizable dashboards for efficient business operations. Stay well-informed with real-time spend management updates and enhance your Vendor and HR management capabilities. Make informed decisions, devise strategies, and streamline your business processes effortlessly.",
  },
  description:
    "Finnoto empowers you with customizable dashboards for efficient business operations. Stay well-informed with real-time spend management updates and enhance your Vendor and HR management capabilities. Make informed decisions, devise strategies, and streamline your business processes effortlessly.",
};

export default function Home() {
  return (
    <main>
      <LandingSection
        title={
          <LandingHeader>
            Strategic{" "}
            <span className="text-transparent bg-gradient-to-r from-[#E47A6D] to-[#625AFF] bg-clip-text">
              AI
            </span>{" "}
            that shows what you’ve been missing
          </LandingHeader>
        }
        description="Turn your sales playbook and unstructured data into complete pipeline visibility, risk insights, and winning behaviors."
      ></LandingSection>
      <div className="mb-20 mt-24">
        <TrustedClients />
      </div>
      <div className="mb-20">
        <WorkingMethod />
      </div>
      <div className="mb-20 ">
        <Products />
      </div>
      <div className="mb-20">
        <MissionSection />
      </div>
      <div className="mb-20">
        <Faq />
      </div>
    </main>
  );
}
