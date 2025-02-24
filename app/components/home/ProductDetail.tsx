import Image from "next/image";

import {Container} from "../layout/Container";
import {Button} from "../ui/Button";
import {SectionHeader, SectionHeaderProps} from "./SectionHeader";
import {cn} from "@/app/utils/util";
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
        "flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 p-8 relative",
        {
          "md:flex-row-reverse": !reverseOrder,
        }
      )}
    >
      {/* <SmallBoxDot className="absolute top-10 left-8" /> */}
      <div className="flex flex-col justify-center items-center md:items-start w-full w-[70%] md:w-[45%] gap-10">
        <SectionHeader {...header} />

        <div className="flex gap-3">
          <Button variant="green">Contact Us</Button>
        </div>
      </div>
      <div className="w-full md:w-[45%] p-[40px] border rounded-lg flex items-center justify-center">
        <Image src={image} alt="product" width={397} height={482} />
      </div>
    </Container>
  );
};

export {ProductDetail};
