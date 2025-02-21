import Image from "next/image";
import {Container} from "./Container";
// import {ProductsNavigationMenu} from "./ProductsNavigationMenu";
import {Button} from "../ui/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="-top-5 left-0 bg-background z-[999999] max-w-[1080] px-4 mx-auto py-12 pb-2 sticky">
      <Container className="flex justify-between items-center h-navbar rounded-full shadow-[0px_8px_10px_#0C0C0D0D]">
        <Link href="/">
          <Image
            src="/images/home/finnoto-logo.png"
            alt="Logo"
            width={190}
            height={52}
          />
        </Link>

        <ul className="flex gap-10 items-center">
          {/* <ProductsNavigationMenu /> */}
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </ul>

        <div className="flex gap-4">
          <Button variant="outline">Sign Up</Button>
          <Button variant="green">Book a demo</Button>
        </div>
      </Container>
    </nav>
  );
};

export {Navbar};
