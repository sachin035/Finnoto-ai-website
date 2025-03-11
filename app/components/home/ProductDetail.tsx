import Image from "next/image";

import {Container} from "../layout/Container";
import {Button} from "../ui/Button";
import {SectionHeader, SectionHeaderProps} from "./SectionHeader";
import {cn} from "@/app/utils/util";
import Link from "next/link";
// import {SmallBoxDot} from "@/app/assets/svgs/SmallBoxDot";

export interface ProductDetailProps {
  header: SectionHeaderProps;
  image: string;
  reverseOrder?: boolean;
}

const ProductDetail = ({header, image, reverseOrder}: ProductDetailProps) => {
  return (
    <Container
      className={cn(
        "flex flex-col md:flex-row p-4 justify-between items-center  gap-10 md:gap-0  py-8 relative max-w-[1134px]",
        {
          "md:flex-row-reverse": !reverseOrder,
        }
      )}
    >
      {/* <SmallBoxDot className="absolute top-10 left-8" /> */}

      <div className="flex flex-col justify-center items-center md:items-start w-full w-[70%] md:w-[48%] gap-10 md:gap-6 lg:gap-10">
        <SectionHeader {...header} />

        <div className="flex gap-3 lg:text-[20px]">
          <Button variant="green" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      <div
        className={cn("w-[50%] flex justify-center md:justify-between", {
          "md:justify-end": reverseOrder,
        })}
      >
        <Image src={image} alt="product" width={397} height={482} />
      </div>
    </Container>
  );
};
export {ProductDetail};
