// import Image from "next/image";
import {Metadata} from "next";
import {LandingSection} from "./components/home/LandingSection";
import {LandingHeader} from "./components/home/LandingHeader";
import {TrustedClients} from "./components/home/TrustedClient";
import {WorkingMethod} from "./components/home/WorkingMethod";
import {Products} from "./components/home/Products";
import {MissionSection} from "./components/home/MissionSection";
import {Faq} from "./components/home/Faq";
import {JoinUs} from "./components/home/Joinus";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Finnoto",
};

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
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
      <div className="mb-36 mt-14">
        <TrustedClients />
      </div>
      <div className="mb-36 mt-14">
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
      {/* <div className=" mt-14 relative">
        <JoinUs />
        <Footer />
      </div> */}

      <div className="relative">
        <div className="bg-white pb-36"></div>

        <div className="absolute w-full bg-primary-black bottom-0 h-1/2"></div>

        <div className="relative">
          <div className="relative">
            <div className="relative">
              <div className=" h-1/2"></div>
              <div className="bg-primary-black h-1/2"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <JoinUs />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
