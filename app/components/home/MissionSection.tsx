import Image from "next/image";
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
    <div className="bg-gradient-to-b from-[#4CC3C740] to-[#FFFFFF] relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/mission-bg.png"
          alt="mission-bg"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Container className="flex flex-col lg:flex-row  justify-between pt-[76px] gap-10 items-center">
        <div className="w-full w-[80%] lg:w-[31%] flex flex-col justify-center lg:gap-[20px] gap-4 items-center lg:items-start text-center lg:text-start">
          <h4 className="lg:text-medium text-green font-semibold">
            CREATE REAL IMPACT
          </h4>
          <h2 className="text-[1.5rem]  md:text-[40px] font-semibold leading-[36px] lg:leading-[60px]">
            The Core Mission behind all our work
          </h2>
          <p className=" text-medium lg:text-xl font-normal text-secondary-black">
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
    </div>
  );
};
export {MissionSection};
