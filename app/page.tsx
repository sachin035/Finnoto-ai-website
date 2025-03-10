import {Metadata} from "next";
import {LandingSection} from "./components/home/LandingSection";
import {LandingHeader} from "./components/home/LandingHeader";
import {TrustedClients} from "./components/home/TrustedClient";
import {WorkingMethod} from "./components/home/WorkingMethod";
import {Products} from "./components/home/Products";
import {MissionSection} from "./components/home/MissionSection";
import {Faq} from "./components/home/Faq";
import {Navbar} from "./components/layout/Navbar";
import {JoinUsWrapper} from "./components/home/JoinUsWrapper";

export const metadata: Metadata = {
  title: "Home",
  description: "Finnoto",
};
export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Grid Background */}
      <div className="relative top-[-8rem]">
        <div
          className="absolute inset-x-0 top-0 z-[-1]
            h-[calc(100%-644px)]
            md:h-[calc(100%-397px)]
            xl:h-[calc(100%-238px)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, black calc(100% - 40px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black calc(100% - 40px), transparent 100%)",
          }}
        />
        {/* Only include the Navbar once at the top level */}

        <LandingSection
          title={
            <LandingHeader>
              Strategic{" "}
              <span className="text-transparent bg-gradient-to-r from-[#E47A6D] to-[#625AFF] bg-clip-text">
                AI
              </span>{" "}
              that shows what you&apos;ve been missing
            </LandingHeader>
          }
          description="Turn your sales playbook and unstructured data into complete pipeline visibility, risk insights, and winning behaviors."
        />

        <div className="mb-20 mt-24">
          <TrustedClients />
        </div>

        <div className="mb-20z-10">
          <WorkingMethod />
        </div>
      </div>
      <div>
        {/* Remove this second Navbar */}
        {/* <Navbar /> */}
        <div className="mb-36 mt-14">
          <Products />
        </div>

        <div className="mb-36 mt-14">
          <MissionSection />
        </div>

        <div className="mb-36 mt-14">
          <Faq />
        </div>
        <JoinUsWrapper />
      </div>
    </main>
  );
}
