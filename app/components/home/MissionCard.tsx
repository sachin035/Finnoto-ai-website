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
        "w-[75%] lg:w-full max-w-[370px] h-[180px]  md:h-[200px] lg:h-[243px] relative  border bg-background  px-6 rounded-[22px] flex flex-col gap-4",
        {"!p-0 ": isImage}
      )}
    >
      {!isImage ? (
        <>
          <div className=" w-[75%] lg:w-full  h-[58px] md:h-[66px] lg:h-[80px] xl:h-[96px] text-[48px] md:text-[56px] lg:text-[76px]  font-semibold text-green">
            {label}
          </div>

          <p className=" md:w-full text-[24px] md:text-[26px] lg:text-[28px] xl:text-[30px] leading:[36px]  text-medium font-normal">
            {title}
          </p>
        </>
      ) : (
        <>
          <div className="absolute w-full h-full rounded-[22px] bg-gradient-to-r from-[#EFD5C6] to-[#DEB5A1]">
            <Image src={title} alt="product" layout="fill" objectFit="cover" />
          </div>
        </>
      )}
    </div>
  );
};
export {MissionCard};
