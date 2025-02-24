// import {Dot} from "@/app/assets/svgs/Dot";
// import {Matrix} from "@/app/assets/svgs/Matrix";
import Image from "next/image";

export const MatrixBackground = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="relative w-full h-full">
      {/* Matrix background - covers full viewport */}
      <div className="absolute inset-0 w-full h-full">
        {/* <div className="w-full h-full bg-white bg-[linear-gradient(#00000009_1px,transparent_1px),linear-gradient(90deg,#00000009_1px,transparent_1px)] bg-[size:24px_24px]" /> */}
        {/* <Dot className="w-full h-full object-cover" /> */}
        {/* <div className="w-full h-full bg-[url('/images/home/dot-matrix-full.png')]"></div> */}
        {/* <Image
          src="/images/home/dot-matrix.png"
          alt="dot-matrix"
          // layout="fill"
          objectFit="cover"
          quality={100}
          width={495}
          height={1015}
          className="w-full h-full object-cover"
        /> */}
        <Image
          src="/images/home/matrix-full.png"
          alt="dot-matrix"
          // layout="fill"
          objectFit="cover"
          quality={100}
          width={495}
          height={1015}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="relative">{children}</div>
    </div>
  );
};
