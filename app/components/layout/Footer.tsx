"use client";

import Image from "next/image";
import Link from "next/link";
import {Container} from "./Container";
import {TwitterIcon} from "@/app/assets/svgs/Twitter";
import {FacebookIcon} from "@/app/assets/svgs/Facebook";
import {InstagramIcon} from "@/app/assets/svgs/Instagram";
import {Encryption} from "@/app/assets/svgs/Encryption";
import {IsoCertification} from "@/app/assets/svgs/IsoCertification";
import {LinkedInIcon} from "@/app/assets/svgs/LinkedIn";

const data = [
  {
    title: "Resources",
    lists: [
      {name: "Affiliate Login", link: ""},
      {name: "Affiliate Signup", link: ""},
      {name: "Pricing", link: ""},
      {name: "Tutorial", link: ""},
      {
        name: "Blog",
        link: "",
      },
      {
        name: "Contact",
        link: "",
      },
    ],
  },
  {
    title: "Help",
    lists: [
      {name: "Customer Support", link: ""},
      {name: "Delivery Details", link: ""},
      {name: "Terms & Conditions", link: ""},
      {name: "Privacy Policy", link: ""},
    ],
  },
  {
    title: "Company",
    lists: [
      {name: "About", link: ""},
      {name: "Features", link: ""},
      {name: "Work", link: ""},
      {name: "Career", link: ""},
    ],
  },
];

const socialIcons = [
  {name: "Twitter", link: "", icon: TwitterIcon},
  {name: "Facebook", link: "", icon: FacebookIcon},
  {name: "Instagram", link: "", icon: InstagramIcon},
  {name: "LinkedIn", link: "", icon: LinkedInIcon},
];

const Footer = () => {
  return (
    <footer className="bg-primary-black text-primary-white pt-[344px] ">
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

      <div className="flex gap-8">
        <Encryption />
        <IsoCertification />
      </div>
    </div>
  );
};

const NavigationSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
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
      <div className="flex items-center gap-4">
        {socialIcons?.map((icon) => (
          <Link
            key={icon.name}
            href={icon.link}
            target="_blank"
            className="bg-primary-white w-6 h-6 rounded-full flex items-center justify-center"
          >
            <icon.icon />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
