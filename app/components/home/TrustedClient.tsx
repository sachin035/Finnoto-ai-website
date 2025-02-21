import Image from "next/image";
import {Container} from "../layout/Container";

const clients = [
  {
    name: "Flobiz",
    logo: "/images/home/flobiz-logo.png",
  },
  {
    name: "Traya",
    logo: "/images/home/traya-logo.png",
  },
  {
    name: "Supertails",
    logo: "/images/home/supertails-logo.png",
  },
  {
    name: "Happay",
    logo: "/images/home/happay-logo.png",
  },
];

const TrustedClients = () => {
  return (
    <Container className="flex flex-col gap-6 items-center">
      <h3 className="md:text-base font-semibold text-sm">
        Loved by the efficiency-obsessed at:
      </h3>
      <div className="flex gap-10">
        {clients.map((client) => (
          <div key={client.name}>
            <Image
              src={client.logo}
              alt={client.name}
              width={180}
              height={55}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export {TrustedClients};
