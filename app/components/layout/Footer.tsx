"use client";

import Image from "next/image";
import Link from "next/link";
import {Container} from "./Container";
import {Encryption} from "@/app/assets/svgs/Encryption";
import {IsoCertification} from "@/app/assets/svgs/IsoCertification";

const data = [
  {
    title: "Help",
    lists: [
      {name: "Terms & Conditions", link: "/terms-and-condition"},
      {name: "Privacy Policy", link: "/privacy-policy"},
    ],
  },
  {
    title: "Company",
    lists: [{name: "About Us", link: "/about"}],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-white">
      <Container>
        <div className="flex flex-wrap items-center justify-between w-full gap-8 py-6 text-2xl md:py-20 md:items-start lg:flex-nowrap">
          <LogoSection />
          <NavigationSection />
        </div>
        <BottomComponent />
      </Container>
    </footer>
  );
};

const LogoSection = () => {
  return (
    <div className="gap-7 flex flex-col lg:gap-14">
      <div className="gap-3 lg:max-w-[500px] flex flex-col">
        <Link href="/">
          <Image
            src={"/images/home/logo-small.png"}
            height={40}
            width={40}
            alt="Finnoto Logo"
          />
        </Link>
        <p className="text-base">
          Tailored solutions addressing contemporary business requirements and
          innovative approaches to effectively meet the demands of today&lsquo;s
          dynamic and evolving marketplace.
        </p>
      </div>

      <div className="flex gap-8 justify-start items-center">
        <Image src="/images/home/soc.png" alt="soc" width={50} height={50} />
        <Encryption className="w-[88px] h-[37px]" />
        <IsoCertification className="w-[87px] h-[37px]" />
      </div>
    </div>
  );
};

const NavigationSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
      {data?.map((val) => {
        return (
          <NavigationList
            key={val?.title}
            title={val?.title}
            lists={val?.lists}
          />
        );
      })}
    </div>
  );
};

const NavigationList = ({
  title,
  lists,
}: {
  title: string;
  lists: {name: string; link: string; onClick?: () => void}[];
}) => {
  return (
    <div className="gap-6 flex flex-col">
      <p className="text-sm font-semibold">{title}</p>
      <ul className="gap-4 flex flex-col">
        {lists?.map((val) => {
          return (
            <li key={val.name} className="whitespace-nowrap text-sm">
              <Link href={val?.link}>{val?.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const BottomComponent = () => {
  return (
    <div className="items-center gap-6 py-10 border-t-2 lg:py-14 flex flex-col lg:flex-row justify-between">
      <p className="text-xs">
        © Copyright 2022, All Rights Reserved by Finnoto Solutions Private
        Limited
      </p>
    </div>
  );
};

export default Footer;
