// "use client";
// import Image from "next/image";
// import {Button} from "../ui/Button";
// import Link from "next/link";
// import {useState, useEffect} from "react";
// import AnimateHeight from "react-animate-height";
// import {Hamburger} from "../ui/Hamburger";
// import {Container} from "./Container";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setHasScrolled(window.scrollY > 120);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`sticky transition-all duration-300 left-0 max-w-[1080] px-4 mx-auto z-[99999] ${
//           hasScrolled ? "-top-5 pt-12 " : "-top-5 py-12 pb-2"
//         }`}
//       >
//         <Container
//           className={`flex justify-between  ${
//             hasScrolled ? "bg-primary-white " : "bg-background"
//           } items-center h-navbar rounded-full shadow-[0px_8px_10px_#0C0C0D0D] px-4`}
//         >
//           <Link href="/">
//             <Image
//               src="/images/home/finnoto-logo.png"
//               alt="Logo"
//               width={146}
//               height={34}
//               className="w-auto h-8"
//             />
//           </Link>

//           <Hamburger
//             isCollapsed={isMenuOpen}
//             setIsCollapsed={setIsMenuOpen}
//             className="md:hidden"
//           />

//           <AnimateHeight
//             duration={300}
//             height={isMenuOpen ? "auto" : 0}
//             className="lg:hidden absolute top-full left-0 right-0 bg-white overflow-hidden -translate-y-5 rounded-b-3xl"
//           >
//             <div className="p-4 flex flex-col gap-3">
//               <Link
//                 href="/about"
//                 className="block py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About Us
//               </Link>

//               <Link
//                 href="/contact"
//                 className="block py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </AnimateHeight>

//           <ul className="hidden md:flex gap-10 md:gap-6 items-center">
//             <Link href="/about">About Us</Link>
//             {/* <Link href="/contact">Contact Us</Link> */}
//           </ul>

//           <div className="hidden md:flex md:gap-4 text-primary-black">
//             <Button variant="outline" asChild>
//               <Link href="/contact">Go to Finnoto</Link>
//             </Button>

//             <Button variant="green" asChild>
//               <Link href="/contact">Contact Us</Link>
//             </Button>
//           </div>
//         </Container>
//       </nav>
//     </>
//   );
// };

// export {Navbar};

// "use client";
// import Image from "next/image";
// import {Button} from "../ui/Button";
// import Link from "next/link";
// import {useState, useEffect} from "react";
// import AnimateHeight from "react-animate-height";
// import {Hamburger} from "../ui/Hamburger";
// import {Container} from "./Container";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setHasScrolled(window.scrollY > 120);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Content above navbar with conditional visibility */}
//       <div
//         className={`w-full transition-all duration-300 overflow-hidden ${
//           hasScrolled ? "h-0 opacity-0" : "h-auto opacity-100"
//         }`}
//       >
//         {/* Your content above navbar goes here */}
//         {/* This will be completely hidden when hasScrolled is true */}
//       </div>

//       <nav
//         className={`sticky transition-all duration-300 left-0 max-w-[1080] px-4 mx-auto z-[99999] ${
//           hasScrolled ? "top-0" : "-top-5 py-12 pb-2"
//         }`}
//       >
//         <Container
//           className={`flex justify-between ${
//             hasScrolled ? "bg-primary-white " : "bg-background"
//           } items-center h-navbar rounded-full shadow-[0px_8px_10px_#0C0C0D0D] px-4`}
//         >
//           <Link href="/">
//             <Image
//               src="/images/home/finnoto-logo.png"
//               alt="Logo"
//               width={146}
//               height={34}
//               className="w-auto h-8"
//             />
//           </Link>

//           <Hamburger
//             isCollapsed={isMenuOpen}
//             setIsCollapsed={setIsMenuOpen}
//             className="md:hidden"
//           />

//           <AnimateHeight
//             duration={300}
//             height={isMenuOpen ? "auto" : 0}
//             className="lg:hidden absolute top-full left-0 right-0 bg-white overflow-hidden -translate-y-5 rounded-b-3xl"
//           >
//             <div className="p-4 flex flex-col gap-3">
//               <Link
//                 href="/about"
//                 className="block py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About Us
//               </Link>

//               <Link
//                 href="/contact"
//                 className="block py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </AnimateHeight>

//           <ul className="hidden md:flex gap-10 md:gap-6 items-center">
//             <Link href="/about">About Us</Link>
//             {/* <Link href="/contact">Contact Us</Link> */}
//           </ul>

//           <div className="hidden md:flex md:gap-4 text-primary-black">
//             <Button variant="outline" asChild>
//               <Link href="/contact">Go to Finnoto</Link>
//             </Button>

//             <Button variant="green" asChild>
//               <Link href="/contact">Contact Us</Link>
//             </Button>
//           </div>
//         </Container>
//       </nav>
//     </>
//   );
// };

// export {Navbar};

"use client";
import Image from "next/image";
import {Button} from "../ui/Button";
import Link from "next/link";
import {useState, useEffect} from "react";
import AnimateHeight from "react-animate-height";
import {Hamburger} from "../ui/Hamburger";
import {Container} from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Container for the overlay */}
      <Container className="sticky top-0 z-[99998]">
        <div
          className={`absolute w-full transition-opacity duration-300 bg-primary-white ${
            hasScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            height: "80px",
          }}
        />
      </Container>

      <nav
        className={`sticky transition-all duration-300 z-[99999] ${
          hasScrolled ? "-top-5 pt-12" : "-top-5 py-12 pb-2"
        }`}
      >
        <Container
          className={`flex justify-between ${
            hasScrolled ? "bg-primary-white" : "bg-background"
          } items-center h-navbar rounded-full shadow-[0px_8px_10px_#0C0C0D0D] px-4`}
        >
          <Link href="/">
            <Image
              src="/images/home/finnoto-logo.png"
              alt="Logo"
              width={146}
              height={34}
              className="w-auto h-8"
            />
          </Link>

          <Hamburger
            isCollapsed={isMenuOpen}
            setIsCollapsed={setIsMenuOpen}
            className="md:hidden"
          />

          <AnimateHeight
            duration={300}
            height={isMenuOpen ? "auto" : 0}
            className="lg:hidden absolute top-full left-0 right-0 bg-white overflow-hidden -translate-y-5 rounded-b-3xl"
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
            {/* <Link href="/contact">Contact Us</Link> */}
          </ul>

          <div className="hidden md:flex md:gap-4 text-primary-black">
            <Button variant="outline" asChild>
              <Link href="/contact">Go to Finnoto</Link>
            </Button>

            <Button variant="green" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </nav>
    </>
  );
};

export {Navbar};
