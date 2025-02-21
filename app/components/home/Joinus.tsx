// import {cn} from "@/app/utils/util";
// import {Container} from "../layout/Container";
// import {Button} from "../ui/Button";
// import {AiIcon} from "@/app/assets/svgs/AiIcon";
// import {ChatBox} from "@/app/assets/svgs/ChatBox";

// const JoinUs = () => {
//   return (
//     <Container
//       className={cn(
//         "border relative overflow-hidden h-[400px] flex flex-col items-center rounded-3xl pt-[70px]"
//       )}
//     >
//       <div className="absolute -left-[14%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full from-[#4CC3C7]  to-[#4CC1C7] bg-gradient-to-r" />
//       <div className="absolute -left-[4%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full from-[#4CC3C7] to-[#4CB2C71A] bg-gradient-to-r" />
//       <div className="absolute left-[4%] top-1/2 -translate-y-1/2">
//         <AiIcon />
//       </div>
//       <div className="absolute left-[16%] top-1/4 -translate-y-1/2">
//         <ChatBox />
//       </div>

//       <div className="max-w-[50%] absolute right-[2%]">
//         <h3 className="text-5xl font-semibold mb-8">Try Finnoto AI Today!</h3>
//         <p className="mb-10 font-medium">
//           Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
//           pellentesque donec et tellus ac varius tortor, bibendum.
//         </p>

//         <Button variant="green">Book a demo</Button>
//       </div>
//     </Container>
//   );
// };

// export {JoinUs};

import {Container} from "../layout/Container";
import {Button} from "../ui/Button";
import {AiIcon} from "@/app/assets/svgs/AiIcon";
import {ChatBox} from "@/app/assets/svgs/ChatBox";

const JoinUs = () => {
  return (
    <Container
      mode="wide"
      className="px-0 border rounded-3xl max-w-[1280px] mx-auto bg-primary-white relative overflow-hidden flex flex-col items-center
      "
    >
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute xl:-left-[22%] lg:-left-[26%] md:-left-[28%] top-1/2 -translate-y-1/2 w-[697px] h-[696px] rounded-full from-[#4CC3C7] to-[#4CC1C7] bg-gradient-to-r" />
        <div className="absolute xl:-left-[14%] lg:-left-[18%] md:-left-[20%] top-1/2 -translate-y-1/2 w-[697px] h-[697px] rounded-full from-[#4CC3C7] to-[#4CB2C71A] bg-gradient-to-r" />

        <div className="flex gap-[109px] px-8 py-16">
          <div className="relative w-[50%] flex items-center justify-center">
            <div className="absolute left-[25%] top-6 -translate-y-1/2">
              <ChatBox />
            </div>
            <div className="absolute left-[5%]">
              <AiIcon />
            </div>
          </div>

          <div className="max-w-[45%] flex flex-col justify-center">
            <h3 className="xl:text-5xl lg:text-4xl text-3xl font-semibold mb-8">
              Try Finnoto AI Today!
            </h3>
            <p className="mb-10 xl:text-[20px] font-medium text-secondary-black">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
              Neque pellentesque donec et tellus ac varius tortor, bibendum.
            </p>
            <div>
              <Button variant="green" className="px-6 py-3 rounded-full">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export {JoinUs};
