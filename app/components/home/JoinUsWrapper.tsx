"use client";

import {usePathname} from "next/navigation";
import {JoinUs} from "./Joinus";
import Footer from "../layout/Footer";

export function JoinUsWrapper() {
  const pathname = usePathname();
  const excludedPages = ["/terms-and-condition", "/privacy-policy"];
  const hideJoinUs = excludedPages.includes(pathname);

  return (
    <>
      {!hideJoinUs ? (
        <div className="relative">
          {/* Container for JoinUs and Footer */}
          <div className="relative">
            {/* Background container */}
            <div className="relative">
              {/* Top half - white background */}
              <div className="h-[200px] bg-white"></div>
              {/* Bottom half - black background */}
              <div className="h-[200px] bg-primary-black"></div>
              {/* Absolutely positioned JoinUs component */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full">
                <JoinUs />
              </div>
            </div>
            {/* Footer starts right after the bottom half */}
            <div className="bg-primary-black">
              <Footer />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-20">
          <Footer />
        </div>
      )}
    </>
  );
}
