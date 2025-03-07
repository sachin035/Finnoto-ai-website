import {cn} from "@/app/utils/util";
import {Badge, statusColorSolid} from "../ui/Badge";

export interface SectionHeaderProps {
  title: string;
  description: string;
  label?: string | React.ReactNode;
  appearance?: keyof typeof statusColorSolid;
  mode?: "center" | "left";
  prefix?: string;
}

const SectionHeader = ({
  title,
  description,
  label,
  appearance = "base",
  mode = "left",
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 text-center items-center md:items-start md:text-start",
        {
          "items-center": mode === "center",
        }
      )}
    >
      <Badge label={label} appearance={appearance} />

      <h2
        className={cn(
          "text-2xl md:text-[2rem] lg:text-[36px] leading-10 font-semibold lg:leading-[3.75rem] md:leading-[2.5rem]",
          {
            "md:text-[2.5rem] text-center": mode === "center",
          }
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          " md:text-lg lg:text-2xl lg:leading-[2rem] font-normal text-secondary-black",
          {
            "text-center": mode === "center",
          }
        )}
      >
        {description}
      </p>
    </div>
  );
};

export {SectionHeader};
