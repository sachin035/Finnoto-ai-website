// import {SectionHeader} from "../common/SectionHeader";
import {Container} from "../layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordin";
import {cn} from "@/app/utils/util";

interface FaqCardProps {
  title: string;
  description: string;
}

const faqs: FaqCardProps[] = [
  {
    title: "What are reconciliation and dispute management?",
    description:
      "Our product facilitates reconciliation and dispute resolution with one-time, no-code integration. It automates multi-way reconciliation, ensuring accurate transactional data. Real-time dashboards and reports enhance financial efficiency by offering insights and enabling prompt action.",
  },
  {
    title: "How does your vendor management and payment system work?",
    description:
      "Our system enables real-time tracking and transparency in invoicing, streamlining flow, reducing errors, and improving Client-Vendor relationships. Automated processes ensure easy monitoring, quick issue resolution, and trust-building. Implementing it establishes efficient payments and positive vendor relationships for businesses.",
  },
  {
    title: "How can your products enhance financial management?",
    description:
      "Our products enhance financial management through automated reconciliation, dispute management, and vendor payments. Real-time insights aid decision-making, while transparency builds trust with vendors. Streamlined expense management reduces costs and improves financial control.",
  },
  {
    title: "Are your products scalable for businesses of different sizes?",
    description:
      "Absolutely! Our scalable products are adaptable to businesses of all sizes, from startups to enterprises. We recognise the varying needs based on company size and offer flexible solutions tailored to meet those requirements.",
  },
];

const Faq = () => {
  return (
    <Container className="flex flex-col gap-16 ">
      <div className={cn("flex flex-col items-center")}>
        <p
          className={cn(
            "text-base mb-2 md:mb-5 w-fit uppercase font-semibold bg-gradient-to-r from-[#27213E] to-[#4CC3C7] bg-clip-text text-transparent"
          )}
        >
          Faq
        </p>
        <h2
          className={cn(
            "text-2xl md:text-[2.5rem] text-center leading-10 font-semibold mb-5"
          )}
        >
          Frequently Asked Questions
        </h2>
        <p
          className={cn(
            " md:text-[20px] font-medium text-secondary-black text-center"
          )}
        >
          Clear your doubts with us
        </p>
      </div>

      <div>
        <Accordion type="single" className="space-y-7" collapsible>
          {faqs.map((faq) => (
            <AccordionItem
              className="border-2 border-transparent shadow-[0px_5px_16px_0px_rgba(8,15,52,0.06)] rounded-xl px-5 py-6 md:px-14 md:py-10 data-[state=open]:border-secondary data-[state=open]:border-solid data-[state=open]:shadow-[0px_6px_16px_0px_rgba(76,195,199,0.3)]"
              key={faq.title}
              value={faq.title}
            >
              <AccordionTrigger className="p-0">{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export {Faq};
