import {WorkingMethod2} from "@/app/assets/svgs/WorkingMethod2";
import {Container} from "../layout/Container";
import {WorkingMethod1} from "@/app/assets/svgs/WorkingMethod1";
import {WorkingMethod3} from "@/app/assets/svgs/WorkingMethod3";
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
      icon: WorkingMethod2,
    },
  ];

  return (
    <Container className="relative px-4 sm:px-6">
      {/* <Dot className="absolute left-7 hidden md:block" /> */}
      <div className="border rounded-lg p-6 sm:p-8 md:p-12">
        <h3 className="text-4xl sm:text-5xl md:text-[61px] font-semibold text-center mb-8">
          How It work
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 
place-items-center place-items-center lg:place-items-start"
        >
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center max-w-[219px]"
              >
                <div className="border rounded-lg shadow-md p-4 w-full aspect-square flex flex-col  h-[222px]">
                  <div className="h-[87px] w-[34px] text-center text-5xl md:text-6xl font-bold text-gray">
                    {method.number}
                  </div>
                  <div className="flex justify-center items-center">
                    <Icon />
                  </div>
                </div>
                <div className="font-semibold text-center mt-4 text-sm md:text-base">
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
