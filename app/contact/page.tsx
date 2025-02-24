import type {Metadata} from "next";
import type {JSX} from "react";
import Link from "next/link";
import {SVGProps} from "react";
import {LandingSection} from "../components/home/LandingSection";
import {LandingHeader} from "../components/home/LandingHeader";
import {Container} from "../components/layout/Container";
import {EmailIcon} from "../assets/svgs/Email";
import {PhoneIcon} from "../assets/svgs/PhoneIcon";
import {LocationIcon} from "../assets/svgs/LocationIcon";
import {Faq} from "../components/home/Faq";

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
        description="Get in touch with us"
        hideIcon
      ></LandingSection>

      <Container className="mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full text-primary-black from-[#4CC3C7] to-[#4CC1C7] bg-gradient-to-r rounded-lg p-4">
          <ContactCard
            description={
              <Link href="mailto:support@finnoto.com">support@finnoto.com</Link>
            }
            icon={EmailIcon}
          />
          <ContactCard description="+91 9353759385" icon={PhoneIcon} />
          <ContactCard
            description="No. 461/1 Bhatarahalli Villa, Virgonagar, Po Banglore, Karnataka, India-550036"
            icon={LocationIcon}
          />
        </div>
      </Container>
      <Faq />
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
    <div className="flex flex-col items-center justify-between h-full min-h-[300px] p-4">
      <div className="w-[200px] h-[150px] bg-primary-white rounded-xl flex items-center justify-center text-primary mb-4">
        <Icon height={50} width={50} />
      </div>
      <div className="flex items-center flex-grow">
        <p className="text-primary-white text-center">{description}</p>
      </div>
    </div>
  );
};

export default ContactPage;
