import type {Metadata} from "next";
import type {JSX} from "react";
import Link from "next/link";
import {SVGProps} from "react";
import {LandingSection} from "../components/home/LandingSection";
import {LandingHeader} from "../components/home/LandingHeader";
import {Container} from "../components/layout/Container";
import {EmailIcon} from "../assets/svgs/Email";
import {LocationIcon} from "../assets/svgs/LocationIcon";
import {Faq} from "../components/home/Faq";
import {cn} from "../utils/util";

export const metadata: Metadata = {
  title: "Finnoto - Contact-Us",
  openGraph: {
    type: "website",
    title: "Finnoto - Contact",
    url: "https://finnoto.com/contact",
    images: [
      {
        url: "https://finnoto.com/_next/image?url=%2Fimages%2Fspend-management.webp&w=1080&q=75",
        alt: "img",
      },
    ],
    description: `Contact us through our user-friendly "Contact Us" page to reach our dedicated support team. We're here to assist you promptly and provide expert guidance via email or other convenient support channels.`,
  },
  description: `Contact us through our user-friendly "Contact Us" page to reach our dedicated support team. We're here to assist you promptly and provide expert guidance via email or other convenient support channels.`,
};

const ContactPage = () => {
  return (
    <main>
      <LandingSection
        title={<LandingHeader>Contact Us</LandingHeader>}
        description="Send us a signal – Let's explore financial universes together!"
        hideContactButton
        backgroundHeight="130%"
      ></LandingSection>

      <Container className="mt-16 flex flex-col items-center">
        <div className={cn("flex flex-col items-center")}>
          <p
            className={cn(
              "text-base mb-2 md:mb-5 w-fit uppercase font-semibold bg-gradient-to-r from-[#27213E] to-[#4CC3C7] bg-clip-text text-transparent"
            )}
          >
            Contact
          </p>
          <h2
            className={cn(
              "text-2xl md:text-[2.5rem] text-center leading-10 font-semibold mb-5"
            )}
          >
            Get in touch with us
          </h2>
          <p
            className={cn(
              " md:text-[20px] font-medium text-secondary-black text-center"
            )}
          >
            Through Multiple Sources
          </p>
        </div>
        <div className="flex flex-col md:flex-row h-fit text-primary-black  relative overflow-hidden from-[#4CC3C7] to-[#4CC1C7] bg-gradient-to-r items-stretch mt-16 py-12 rounded-xl">
          <ContactCard
            description={
              <Link href="mailto:support@finnoto.com">support@finnoto.com</Link>
            }
            icon={EmailIcon}
          />
          {/* <ContactCard description="+91 9353759385" icon={PhoneIcon} /> */}
          <ContactCard
            description="No. 461/1 Bhatarahalli Villa, Virgonagar, Po Banglore, Karnataka, India-550036"
            icon={LocationIcon}
          />
        </div>
      </Container>
      <div className="mb-36 mt-36">
        <Faq />
      </div>
    </main>
  );
};

const ContactCard = ({
  description,
  icon,
}: {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  description: React.ReactNode;
}) => {
  const Icon = icon;

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center flex-1 min-h-[250px] p-4 rounded-lg text-center">
      <div className="w-[200px] h-[150px] bg-primary-white rounded-xl flex items-center justify-center text-primary">
        <Icon height={50} width={50} />
      </div>
      <p className="text-primary-white mt-auto">{description}</p>
    </div>
  );
};

export default ContactPage;
