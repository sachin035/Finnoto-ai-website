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
  title: "Home",
  description: "Finnoto",
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

      <div className="mb-36 mt-14">
        <Products />
      </div>

      <div className="mb-36 mt-14">
        <MissionSection />
      </div>

      <div className="mb-36 mt-14">
        <Faq />
      </div>
    </main>
  );
}
