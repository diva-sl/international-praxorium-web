import { motion } from "framer-motion";

import SchoolCard from "./SchoolCard";

import camp1 from "../../../assets/icons/camp1.svg";
import camp2 from "../../../assets/icons/camp2.svg";
import camp3 from "../../../assets/icons/camp3.svg";

const schools = [
  {
    logo: camp1,
    title: "Living Lab Institute",
    description:
      "Dedicated to startup and scale up, the Living Lab Institute supports early-stage and mid-stage ventures with our programmes and our networks of mentors, investors, and institutions.",
    link: "/schools/living-lab",
  },
  {
    logo: camp2,
    title: "Prof. Rajen Gupta Doctoral School",
    description:
      "Empowering researchers with rigorous doctoral pathways, dual credentials, and a global network of academic institutions across India and Europe.",
    link: "/schools/doctoral-school",
  },
  {
    logo: camp3,
    title: "DCAC-PRIXOR Lab",
    description:
      "Building reflective practices through action learning, case-based dialogue, and experiential programmes that bridge academia and professional life.",
    link: "/schools/dcac-prixor",
  },
];

const Schools = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        md:py-24
        lg:py-28
      "
    >
      {/* Watermark */}

      <h1
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[28%]
          -translate-x-1/2

          font-eb-garamond
          font-bold

          text-[90px]
          md:text-[130px]
          lg:text-[170px]

          leading-none
          tracking-[-0.04em]

          text-[#071A3308]

          select-none
          whitespace-nowrap
        "
      >
        Praxorium
      </h1>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-6
          lg:px-12
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >
          <h2
            className="
              font-eb-garamond
              font-bold

              text-[#741C28]

              text-[34px]
              md:text-[46px]
              lg:text-[56px]

              leading-tight
            "
          >
            Three Specialist Schools, One Vision
          </h2>
        </motion.div>
        <div
          className="
            mt-16

            grid

            gap-8

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {schools.map((school, index) => (
            <SchoolCard key={index} {...school} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schools;
