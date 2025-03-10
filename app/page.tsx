import {Metadata} from "next";
import {LandingSection} from "./components/home/LandingSection";
import {LandingHeader} from "./components/home/LandingHeader";
import {TrustedClients} from "./components/home/TrustedClient";
import {WorkingMethod} from "./components/home/WorkingMethod";
import {Products} from "./components/home/Products";
import {MissionSection} from "./components/home/MissionSection";
import {Faq} from "./components/home/Faq";
import {Navbar} from "./components/layout/Navbar";

export const metadata: Metadata = {
  title: "Home",
  description: "Finnoto",
};

export default function Home() {
  return (
    <main>
      {/* Grid Background */}
      <div className="relative">
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
        <Navbar />
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

// export default function Home() {
//   return (
//     <main>
//       <LandingSection
//         title={
//           <LandingHeader>
//             Strategic{" "}
//             <span className="text-transparent bg-gradient-to-r from-[#E47A6D] to-[#625AFF] bg-clip-text">
//               AI
//             </span>{" "}
//             that shows what you’ve been missing
//           </LandingHeader>
//         }
//         description="Turn your sales playbook and unstructured data into complete pipeline visibility, risk insights, and winning behaviors."
//       ></LandingSection>

//       <div className="mb-20 mt-24">
//         <TrustedClients />
//       </div>

//       <div className="mb-20">
//         <WorkingMethod />
//       </div>

//       <div className="mb-36 mt-14">
//         <Products />
//       </div>

//       <div className="mb-36 mt-14">
//         <MissionSection />
//       </div>

//       <div className="mb-36 mt-14">
//         <Faq />
//       </div>
//     </main>
//   );
// }
// ("use client");
// import {useState, useEffect, useRef} from "react";
// // import {Metadata} from "next";
// import {LandingSection} from "./components/home/LandingSection";
// import {LandingHeader} from "./components/home/LandingHeader";
// import {TrustedClients} from "./components/home/TrustedClient";
// import {WorkingMethod} from "./components/home/WorkingMethod";
// import {Products} from "./components/home/Products";
// import {MissionSection} from "./components/home/MissionSection";
// import {Faq} from "./components/home/Faq";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Finnoto",
// };

// const YourComponent = () => {
//   const workingMethodRef = useRef<HTMLDivElement | null>(null);
//   const [backgroundHeight, setBackgroundHeight] = useState("50vh"); // Default value

//   useEffect(() => {
//     if (workingMethodRef.current) {
//       const halfHeight = workingMethodRef.current.offsetHeight / 2;
//       setBackgroundHeight(`${halfHeight}px`);
//     }
//   }, []);

//   return (
//     <>
//       <LandingSection
//         title={
//           <LandingHeader>
//             Strategic{" "}
//             <span className="text-transparent bg-gradient-to-r from-[#E47A6D] to-[#625AFF] bg-clip-text">
//               AI
//             </span>{" "}
//             that shows what you’ve been missing
//           </LandingHeader>
//         }
//         description="Turn your sales playbook and unstructured data into complete pipeline visibility, risk insights, and winning behaviors."
//       />

//       <div className="mb-20 mt-24">
//         <TrustedClients />
//       </div>

//       <div className="mb-20" ref={workingMethodRef}>
//         <WorkingMethod />
//       </div>

//       <div
//         className="absolute inset-x-0 top-[-8rem] bottom-0 z-[-1]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />
//     </>
//   );
// };

// export default YourComponent;

// export default function Home() {
//   return (
//     <main>
//       {/* Grid Background Container */}
//       <div className="relative overflow-hidden">
//         {/* Grid Background */}
//         <div
//           className="absolute inset-x-0 top-0 z-[-1]"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//             height: "100%",
//             width: "100%",
//           }}
//         />

//         {/* Content that should have grid background */}
//         <LandingSection
//           title={
//             <LandingHeader>
//               Strategic{" "}
//               <span className="text-transparent bg-gradient-to-r from-[#E47A6D] to-[#625AFF] bg-clip-text">
//                 AI
//               </span>{" "}
//               that shows what you've been missing
//             </LandingHeader>
//           }
//           description="Turn your sales playbook and unstructured data into complete pipeline visibility, risk insights, and winning behaviors."
//         />

//         <div className="mb-20 mt-24">
//           <TrustedClients />
//         </div>

//         {/* This wrapper allows us to clip the grid at the halfway point */}
//         <div className="relative">
//           <div
//             className="absolute inset-0 z-[-1] bg-white"
//             style={{height: "50%"}}
//           ></div>
//           <WorkingMethod />
//         </div>
//       </div>

//       {/* Rest of content without grid background */}
//       <div className="mb-36 mt-14">
//         <Products />
//       </div>

//       <div className="mb-36 mt-14">
//         <MissionSection />
//       </div>

//       <div className="mb-36 mt-14">
//         <Faq />
//       </div>
//     </main>
//   );
// }

// export default function Home() {
//   const workingMethodRef = useRef<HTMLDivElement | null>(null);
//   const [gridHeight, setGridHeight] = useState("100%");

//   useEffect(() => {
//     const updateGridHeight = () => {
//       if (workingMethodRef.current) {
//         const workingMethodRect =
//           workingMethodRef.current.getBoundingClientRect();
//         const halfHeight = workingMethodRect.height / 2;
//         const totalHeight = workingMethodRect.top + halfHeight;
//         setGridHeight(`${totalHeight}px`);
//       }
//     };

//     updateGridHeight();
//     window.addEventListener("resize", updateGridHeight);
//     return () => window.removeEventListener("resize", updateGridHeight);
//   }, []);

//   return (
//     <main>
//       {/* Grid Background with dynamic height */}
//       <div
//         className="absolute inset-x-0 top-0 z-[-1]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//           height: gridHeight,
//         }}
//       />

//       {/* Content */}
//       <LandingSection
//         title={
//           <LandingHeader>
//             Strategic{" "}
//             <span className="text-transparent bg-gradient-to-r from-[#E47A6D] to-[#625AFF] bg-clip-text">
//               AI
//             </span>{" "}
//             that shows what you’ve been missing
//           </LandingHeader>
//         }
//         description="Turn your sales playbook and unstructured data into complete pipeline visibility, risk insights, and winning behaviors."
//       ></LandingSection>

//       <div className="mb-20 mt-24">
//         <TrustedClients />
//       </div>
//       <div className="mb-20" ref={workingMethodRef}>
//         <WorkingMethod />
//       </div>

//       <div className="mb-36 mt-14">
//         <Products />
//       </div>

//       <div className="mb-36 mt-14">
//         <MissionSection />
//       </div>

//       <div className="mb-36 mt-14">
//         <Faq />
//       </div>
//     </main>
//   );
// // }
// "use client";
// import {useEffect, useRef, useState} from "react";

// import {Metadata} from "next";
// import {LandingSection} from "./components/home/LandingSection";
// import {LandingHeader} from "./components/home/LandingHeader";
// import {TrustedClients} from "./components/home/TrustedClient";
// import {WorkingMethod} from "./components/home/WorkingMethod";
// import {Products} from "./components/home/Products";
// import {MissionSection} from "./components/home/MissionSection";
// import {Faq} from "./components/home/Faq";

// export default function Home() {
//   const landingRef = useRef<HTMLDivElement | null>(null);
//   const [landingHeight, setLandingHeight] = useState(0);
//   console.log({landingHeight});

//   useEffect(() => {
//     if (landingRef.current) {
//       setLandingHeight(landingRef.current.clientHeight);
//     }
//   }, []);
//   type BreakpointValues = {
//     sm: string;
//     md: string;
//     lg: string;
//   };

//   const breakpoint: BreakpointValues = {
//     sm: "1238px",
//     md: "794px",
//     lg: "476px",
//   };

//   return (
//     <main>
//       {/* Landing Section */}
//       <div ref={landingRef}>
//         <LandingSection
//           title={
//             <LandingHeader>
//               Strategic{" "}
//               <span className="text-transparent bg-gradient-to-r from-[#E47A6D] to-[#625AFF] bg-clip-text">
//                 AI
//               </span>{" "}
//               that shows what you’ve been missing
//             </LandingHeader>
//           }
//           description="Turn your sales playbook and unstructured data into complete pipeline visibility, risk insights, and winning behaviors."
//         />
//       </div>

//       {/* Background Div */}
//       <div
//         className="absolute inset-x-0 top-[-8rem] bottom-0 z-[-1]"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//           height: `calc(${landingHeight}px + ${
//             {
//               sm: "1238px",
//               md: "794px",
//               lg: "476px",
//             }[breakpoint.sm as keyof BreakpointValues]
//           } / 2 + 112px)`,
//         }}
//       />

//       {/* Other Sections */}
//       <div className="mb-20 mt-24">
//         <TrustedClients />
//       </div>
//       <div className="mb-20">
//         <WorkingMethod />
//       </div>
//       <div className="mb-36 mt-14">
//         <Products />
//       </div>
//       <div className="mb-36 mt-14">
//         <MissionSection />
//       </div>
//       <div className="mb-36 mt-14">
//         <Faq />
//       </div>
//     </main>
//   );
// }
