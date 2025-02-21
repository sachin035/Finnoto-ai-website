import {cn} from "@/app/utils/util";
import Image from "next/image";

interface MissionCardProps {
  label: string;
  title: string;
  isImage?: boolean;
}
const MissionCard = ({label, title, isImage = false}: MissionCardProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[370px] min-h-[243px] relative  border bg-background  p-8 rounded-[22px] flex flex-col gap-6 md:gap-6",
        {"!p-0 ": isImage}
        // {"bg-[#EFD5C6] overflow-hidden !p-0 relative": isImage}
      )}
    >
      {!isImage ? (
        <>
          <div className="  text-4xl xl:text-[76px] lg:text-[68px] lg:leading-96px] md:text-[56px]  sm:5xl text-green font-semibold text-center">
            {label}
          </div>
          <p className="xl:text-[32px] lg:text-[28px] md:text-lg text-medium font-normal">
            {title}{" "}
          </p>{" "}
        </>
      ) : (
        <>
          <div className="absolute w-full h-full rounded-[22px] bg-gradient-to-r from-[#EFD5C6] to-[#DEB5A1]">
            <Image src={title} alt="product" layout="fill" objectFit="cover" />
          </div>

          {/* <div className="text-[#E38B5B] lg:text-[32px] md:text-2xl left-6 absolute font-semibold">
            {label}
          </div> */}
          {/* <div className="bg-gradient-to-r from-[#EFD5C6] to-[#DEB5A1] flex justify-center items-center py-2 pl-[16.48%] pr-[11%]">
            <Image src={title} alt="product" width={268} height={230} />
          </div> */}
        </>
      )}
    </div>
  );
};
export {MissionCard};
