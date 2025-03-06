import {Container} from "../layout/Container";
import {Button} from "../ui/Button";
import {AiIcon} from "@/app/assets/svgs/AiIcon";
import {ChatBox} from "@/app/assets/svgs/ChatBox";

const JoinUs = () => {
  return (
    <Container>
      <div className="w-full border rounded-3xl bg-primary-white relative overflow-hidden flex flex-col items-center max-h-[400px]">
        <div className="relative overflow-hidden rounded-3xl w-full">
          <div className="hidden md:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full from-[#4CC3C7] to-[#4CC1C7] bg-gradient-to-r" />
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[65vw] max-w-[1000px] max-h-[900px] rounded-full from-[#4CC3C7] to-[#4CB2C71A] bg-gradient-to-r " />

          <div className="flex w-full md:gap-[109px] px-6 xl:px-8 py-16 justify-between">
            <div className="hidden md:block relative w-[50%] flex items-center justify-center">
              <div className="absolute left-[36%] xl:left-[26%] top-[4%] lg:-top-[12%] xl:-top-[18%]">
                <ChatBox className="h-[80px] w-[65px] lg:h-[100px] lg:w-[85px] xl:h-[125px] xl:w-[108px]" />
              </div>
              <div className="absolute left-[5%] top-1/2 -translate-y-1/2">
                <AiIcon className="h-[130px] w-[130px] lg:w-[193px] lg:h-[194px]" />
              </div>
            </div>

            <div className="w-full bg-transparent z-10 md:max-w-[45%] flex flex-col justify-center items-center md:items-start">
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-semibold mb-4 md:mb-8">
                Try Finnoto AI Today!
              </h3>
              <p className="mb-6 lg:mb-10 text-base lg:font-medium xl:text-[20px] text-secondary-black text-center md:text-left">
                Be a part of the future of finance. Get in touch with us today
                to explore how Finnoto can streamline your financial operations!
              </p>
              <div>
                <Button variant="green" className="px-6 py-3 rounded-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export {JoinUs};
