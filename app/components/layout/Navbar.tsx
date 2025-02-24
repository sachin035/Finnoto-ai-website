"use client";
import Image from "next/image";

import {Button} from "../ui/Button";
import Link from "next/link";
import {useState} from "react";
import AnimateHeight from "react-animate-height";
import {Hamburger} from "../ui/Hamburger";
import {Container} from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <nav className="max-w-[100vw] bg-primary-white left-0 z-[100] w-full px-4 md:px-6 top-0 py-0 md:pt-1 fixed">
    <nav className="-top-5 left-0 bg-background z-[999999] max-w-[1080] px-4 mx-auto py-12 pb-2 sticky">
      {/* <div className="bg-gradient rounded-t-3xl rounded-b-3xl py-2 translate-y-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"> */}
      <Container className="flex justify-between items-center h-navbar rounded-full shadow-[0px_8px_10px_#0C0C0D0D]">
        <Link href="/">
          <Image
            src="/images/home/finnoto-logo.png"
            alt="Logo"
            width={146}
            height={34}
            className="w-auto h-8 "
          />
        </Link>

        {/* Hamburger menu button */}
        <Hamburger
          isCollapsed={isMenuOpen}
          setIsCollapsed={setIsMenuOpen}
          className="md:hidden"
        />

        {/* Mobile menu */}
        <AnimateHeight
          duration={300}
          height={isMenuOpen ? "auto" : 0}
          className="md:hidden absolute top-full right-0 bg-background overflow-hidden -translate-y-5 rounded-b-3xl"
        >
          <div className="p-4 flex flex-col gap-3">
            <Link
              href="/about"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </AnimateHeight>

        <ul className="hidden md:flex gap-10 md:gap-6 items-center">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </ul>

        <div className="hidden md:flex md:gap-4 text-primary-black">
          <Button variant="outline" asChild>
            <Link href="/contact">Sign Up</Link>
          </Button>

          <Button variant="green" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export {Navbar};
