import {WorkingMethod2} from "@/app/assets/svgs/WorkingMethod2";
import {Container} from "../layout/Container";
import {WorkingMethod1} from "@/app/assets/svgs/WorkingMethod1";
import {WorkingMethod3} from "@/app/assets/svgs/WorkingMethod3";
import {WorkingMethod4} from "@/app/assets/svgs/WorkingMethod4";
import Image from "next/image";
// import {Dot} from "@/app/assets/svgs/Dot";

const WorkingMethod = () => {
  const methods = [
    {
      number: 1,
      title: "Connect Your System",
      icon: WorkingMethod1,
    },
    {
      number: 2,
      title: "AI Scans and Extracts Data",
      icon: WorkingMethod2,
    },
    {
      number: 3,
      title: "Automated Insights & Actions",
      icon: WorkingMethod3,
    },
    {
      number: 4,
      title: "Smart Assistance & Learning",
      icon: WorkingMethod4,
    },
  ];

  return (
    <Container className="relative w-[75%]">
      <div className="absolute inset-0 -z-10 mx-2">
        <Image
          src="/images/home/dot-matrix.png"
          alt="working-method-bg"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* <Dot className="absolute left-7 hidden md:block" /> */}
      <div className="border rounded-lg p-6 sm:p-8 md:p-12">
        <h3 className="text-[24px] md:text-[48xpx] lg-text-[61px] font-semibold text-center mb-8">
          How It work
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 
  place-items-center "
        >
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center max-w-[191px] z-10 bg-primary-white"
              >
                <div className="border rounded-lg shadow-md p-4 w-full aspect-square flex flex-col  h-[222px]">
                  <div className="h-[87px] w-[34px] text-center text-5xl md:text-6xl font-bold text-gray">
                    {method.number}
                  </div>
                  <div className="flex justify-center items-center">
                    <Icon />
                  </div>
                </div>
                <div className="font-semibold text-center mt-4 text-sm md:min-h-[48px] md:text-base">
                  {method.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export {WorkingMethod};
