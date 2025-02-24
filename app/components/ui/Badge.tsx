import {cn} from "@/app/utils/util";
import React from "react";

export const statusColorSolid = {
  error: "bg-[#FFEBEB] text-[#BD7070]",
  warning: "bg-[#FFF7EA] text-[#F8B84E]",
  success: "bg-[#EBFFF4] text-[#53A578]",
  base: "bg-[#EFEAFF] text-[#9D83E8]",
};

interface BadgeProps {
  label: string | React.ReactNode;
  appearance: keyof typeof statusColorSolid;
}
const Badge = ({label, appearance}: BadgeProps) => {
  return (
    <div
      className={cn(
        "text-center text-sm lg:text-[20px] md:text-base font-medium px-2 lg:px-4 md:px-3  py-2 rounded-full inline-flex w-fit gap-3 items-center whitespace-nowrap",
        {
          [statusColorSolid[appearance]]: appearance,
        }
      )}
    >
      {label}
    </div>
  );
};
export {Badge};
