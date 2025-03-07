// import {Faster} from "@/app/assets/svgs/Faster";
// import {Container} from "../layout/Container";
// import {Smarter} from "@/app/assets/svgs/Smarter";
// import {Efficient} from "@/app/assets/svgs/Efficient";
// import {Button} from "../ui/Button";
// import {Arrow} from "@/app/assets/svgs/Arrow";
// import Link from "next/link";

// interface LandingSectionProps {
//   title: React.ReactNode;
//   description: string;
//   hideIcon?: boolean;
//   hideContactButton?: boolean;
// }

// const LandingSection = ({
//   description,
//   title,
//   hideIcon = false,
//   hideContactButton = false,
// }: LandingSectionProps) => {
//   const aiOverviews = [
//     {
//       icon: Faster,
//       title: "Faster",
//     },
//     {
//       icon: Smarter,
//       title: "Smarter",
//     },
//     {
//       icon: Efficient,
//       title: "Efficient",
//     },
//   ];
//   return (
//     <div className="relative">
//       <div
//         className="absolute inset-x-0 top-[-8rem] bottom-0 z-[-1]"
//         style={{
//           backgroundImage: "url('/images/home/matrix-full.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "220%",
//         }}
//       />

//       <Container className="pt-16 relative flex flex-col items-center w-[68%]">
//         {!hideIcon && (
//           <div className="flex flex-1 justify-center items-center pb-6 lg:gap-11 md:gap-8 gap-4 ">
//             {aiOverviews.map((overview, index) => {
//               const Icon = overview.icon;
//               return (
//                 <div
//                   className="flex lg:gap-3 md:gap-2 sm:gap-1 items-center shrink-0"
//                   key={index}
//                 >
//                   <Icon className="md:w-8 md:h-8 w-6 h-6" />
//                   <h3>{overview?.title}</h3>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//         {/* <div className="space-y-5 max-w-[80%] xl:max-w-[50%] text-center">
//           <Image
//             src="/images/home/robot.png"
//             alt="robot"
//             width={80}
//             height={70}
//           />
//           {title}
//           <p className="text-sm md:text-base lg:text-xl  text-secondary-black">
//             {description}
//           </p>
//         </div> */}
//         <div className="flex flex-col items-center text-center space-y-5 ">
//           <div className="flex items-start ">
//             {/* <Image
//               src="/images/home/robot.png"
//               alt="robot"
//               width={80}
//               height={70}
//             /> */}
//             <h2 className="text-lg font-semibold">{title}</h2>
//           </div>
//           <p className=" lg:text-[24px] text-secondary-black">{description}</p>
//         </div>

//         {!hideContactButton && (
//           <div className="relative w-full pt-16 flex items-center justify-center">
//             <div className="absolute left-1/2 transform -translate-x-1/2">
//               <Button variant="green" size="lg">
//                 <Link href="/contact">Contact Us</Link>
//               </Button>
//             </div>
//             (
//             <div className="flex items-center gap-1 md:gap-2 text-[#4040FF] absolute left-1/2 transform -translate-x-1/2 -ml-[100px] md:-ml-[160px] lg:-ml-[180px]">
//               <div className="text-left text-[10px] md:text-sm lg:text-base font-schoolbell">
//                 We respond <p>Quickly</p>
//               </div>
//               <Arrow className="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20" />
//             </div>
//             )
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

// export {LandingSection};
import {Faster} from "@/app/assets/svgs/Faster";
import {Container} from "../layout/Container";
import {Smarter} from "@/app/assets/svgs/Smarter";
import {Efficient} from "@/app/assets/svgs/Efficient";
import {Button} from "../ui/Button";
import {Arrow} from "@/app/assets/svgs/Arrow";
import Link from "next/link";

interface LandingSectionProps {
  title: React.ReactNode;
  description: string;
  hideIcon?: boolean;
  hideContactButton?: boolean;
  backgroundHeight?: string;
}

const LandingSection = ({
  description,
  title,
  hideIcon = false,
  hideContactButton = false,
  backgroundHeight = "221%",
}: LandingSectionProps) => {
  const aiOverviews = [
    {
      icon: Faster,
      title: "Faster",
    },
    {
      icon: Smarter,
      title: "Smarter",
    },
    {
      icon: Efficient,
      title: "Efficient",
    },
  ];

  return (
    <div className="relative w-full">
      <div
        className="absolute inset-x-0 top-[-8rem] bottom-0 z-[-1]"
        style={{
          backgroundImage: "url('/images/home/matrix-full.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: backgroundHeight,
        }}
      />

      <Container className="pt-16 pb-24 relative flex flex-col items-center w-[68%] ">
        {!hideIcon && (
          <div className="flex flex-1 justify-center items-center pb-6 lg:gap-11 md:gap-8 gap-4">
            {aiOverviews.map((overview, index) => {
              const Icon = overview.icon;
              return (
                <div
                  className="flex lg:gap-3 md:gap-2 sm:gap-1 items-center shrink-0"
                  key={index}
                >
                  <Icon className="md:w-8 md:h-8 w-6 h-6" />
                  <h3>{overview?.title}</h3>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex flex-col items-center text-center space-y-5">
          <div className="flex items-start">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <p className="lg:text-[24px] text-secondary-black">{description}</p>
        </div>

        {!hideContactButton && (
          <div className="relative w-full pt-16 flex items-center justify-center">
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Button variant="green" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-[#4040FF] absolute left-1/2 transform -translate-x-1/2 -ml-[100px] md:-ml-[160px] lg:-ml-[180px]">
              <div className="text-left text-[10px] md:text-sm lg:text-base font-schoolbell">
                We respond <p>Quickly</p>
              </div>
              <Arrow className="w-8 h-8 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </div>
          </div>
        )}
      </Container>

      {/* Add bottom border line */}
      <div className="w-full h-[1px] bg-gray-200"></div>
    </div>
  );
};

export {LandingSection};
