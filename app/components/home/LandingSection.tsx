import {Faster} from "@/app/assets/svgs/Faster";
import {Container} from "../layout/Container";
import {Smarter} from "@/app/assets/svgs/Smarter";
import {Efficient} from "@/app/assets/svgs/Efficient";
import {Button} from "../ui/Button";
import {Arrow} from "@/app/assets/svgs/Arrow";

interface LandingSectionProps {
  title: React.ReactNode;
  description: string;
}

const LandingSection = ({description, title}: LandingSectionProps) => {
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
    <Container
      mode="wide"
      //   className="bg-gradient-to-b from-[#1a1533] via-[#1a1533] to-[#2f455b] rounded-2xl m-5 pt-40 relative flex flex-col gap-10 items-center"
      className="pt-16 relative flex flex-col gap-10 items-center bg-[url('/images/home/matrix-full.png')] bg-cover"
    >
      <div className="flex flex-1 justify-center items-center lg:gap-11 md:gap-8 gap-4 ">
        {aiOverviews.map((overview, index) => {
          const Icon = overview.icon;
          return (
            <div
              className="flex lg:gap-3 md:gap-2 sm:gap-1 items-center shrink-0"
              key={index}
            >
              <Icon className="md:w-8 md:h-8 sm:w-6 sm:h-6" />
              <h3>{overview?.title}</h3>
            </div>
          );
        })}
      </div>
      <div className="space-y-5 max-w-[50%] text-center">
        {title}
        <p className="text-sm sm:text-base lg:text-xl  text-secondary-black">
          {description}
        </p>
      </div>

      <div className="flex gap-6">
        <div className="text-[#4040FF]">
          We respond <p>Quickly</p>
        </div>
        <Arrow />
        <Button variant="green" size="sm">
          Book a Demo
        </Button>
      </div>
    </Container>
  );
};

export {LandingSection};
