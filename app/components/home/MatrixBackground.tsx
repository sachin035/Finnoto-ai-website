import {Matrix} from "@/app/assets/svgs/Matrix";

export const MatrixBackground = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Matrix background - covers full viewport */}
      <div className="absolute inset-0 w-full h-full">
        {/* <div className="w-full h-full bg-white bg-[linear-gradient(#00000009_1px,transparent_1px),linear-gradient(90deg,#00000009_1px,transparent_1px)] bg-[size:24px_24px]" /> */}
        <Matrix className="w-full h-full" />
      </div>

      {/* Content container */}
      <div className="relative">{children}</div>
    </div>
  );
};
