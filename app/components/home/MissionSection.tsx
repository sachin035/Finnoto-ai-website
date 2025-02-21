import {Container} from "../layout/Container";
import {MissionCard} from "./MissionCard";

const MissionSection = () => {
  const missionCards = [
    {
      label: "95%",
      title: "accurately detects fraud",
    },
    {
      label: "Grow Fast",
      title: "/images/home/grow-fast.png",
      isImage: true,
    },
    {
      label: "3x",
      title: "Faster Financial Processing",
    },
    {
      label: "85%",
      title: "Reduction in Manual Effort",
    },
  ];
  return (
    // <Container
    //   mode="wide"
    //   className="px-[69px] flex lg:flex-row !md:flex-col justify-between bg-gradient-to-b from-[#4CC3C740] to-[#FFFFFF] pt-[152px]  gap-10 items-center"
    // >
    //   <div className="w-[31%] flex flex-col justify-center lg:gap-[20px] gap-4 md:items-center md:text-center">
    //     <h4 className=" text-sm lg:text-medium text-green font-semibold">
    //       CREATE REAL IMPACT
    //     </h4>
    //     <h2 className=" text-3xl lg:text-[40px] font-semibold leading:[48px] lg:leading-[60px] ">
    //       The Core Mission behind all our work
    //     </h2>
    //     <p className="text-medium lg:text-xl font-normal text-secondary-black">
    //       Finnoto AI transforms financial workflows with intelligent data
    //       extraction, anomaly detection, and seamless integrations—enabling
    //       businesses to operate smarter, faster, and with greater financial
    //       confidence.
    //     </p>
    //   </div>
    //   <div className="w-[54%] flex justify-between flex-wrap gap-8">
    //     {missionCards.map((missionCard, index) => {
    //       return <MissionCard key={index} {...missionCard} />;
    //     })}
    //   </div>
    // </Container>
    <Container
      mode="wide"
      className="px-[69px] flex flex-col lg:flex-row  justify-between bg-gradient-to-b from-[#4CC3C740] to-[#FFFFFF] pt-[76px] gap-10 items-center"
    >
      <div className="w-full lg:w-[31%] flex flex-col justify-center lg:gap-[20px] gap-4 items-center lg:items-start">
        <h4 className="text-sm lg:text-medium text-green font-semibold">
          CREATE REAL IMPACT
        </h4>
        <h2 className="text-xl md:text-2xl lg:text-[40px] font-semibold leading-[48px] lg:leading-[60px]">
          The Core Mission behind all our work
        </h2>
        <p className=" text-sm md:text-medium lg:text-xl font-normal text-secondary-black">
          Finnoto AI transforms financial workflows with intelligent data
          extraction, anomaly detection, and seamless integrations—enabling
          businesses to operate smarter, faster, and with greater financial
          confidence.
        </p>
      </div>
      <div className=" w-full lg:w-[54%] grid lg:grid-cols-2 md:grid-cols-2 gap-8 place-items-center">
        {missionCards.map((missionCard, index) => {
          return <MissionCard key={index} {...missionCard} />;
        })}
      </div>
    </Container>
  );
};
export {MissionSection};
