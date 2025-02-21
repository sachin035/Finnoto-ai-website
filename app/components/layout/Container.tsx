import {cn} from "@/app/utils/util";
import {Slot} from "@radix-ui/react-slot";

interface ContainerProps {
  children: React.ReactNode;
  mode?: "default" | "wide";
  asChild?: boolean;
  className?: string;
}

export const Container = ({
  children,
  mode = "default",
  asChild = false,
  className,
}: ContainerProps) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(
        {
          container: mode === "default",
          "": mode === "wide",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};
