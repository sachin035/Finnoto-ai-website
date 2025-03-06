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
          "text-2xl md:text-[2rem] lg:text-[3rem] leading-10 font-semibold lg:leading-[3.75rem] md:leading-[2.5rem]",
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

// const SectionHeader = ({
//   title,
//   description,
//   prefix,
//   mode = "left",
// }: SectionHeaderProps) => {
//   return (
//     <div
//       className={cn("flex flex-col", {
//         "items-center": mode === "center",
//       })}
//     >
//       {prefix ? (
//         <p
//           className={cn(
//             "text-base md:mb-2 w-fit uppercase font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
//             {
//               "mb-2 md:mb-5": mode === "center",
//             }
//           )}
//         >
//           {prefix}
//         </p>
//       ) : (
//         <Badge label={label} appearance={appearance} />
//       )}
//       <h2
//         className={cn(
//           "text-2xl md:text-[2.25rem] leading-10 font-semibold mb-5",
//           {
//             "md:text-[2.5rem] text-center": mode === "center",
//           }
//         )}
//       >
//         {title}
//       </h2>
//       <p
//         className={cn(
//           "text-sm md:text-[1.2rem] font-medium text-secondary-black",
//           {
//             "text-center": mode === "center",
//           }
//         )}
//       >
//         {description}
//       </p>
//     </div>
//   );
// };

export {SectionHeader};
