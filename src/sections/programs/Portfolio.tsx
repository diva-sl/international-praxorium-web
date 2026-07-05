import { motion } from "framer-motion";

import badgeIcon from "../../assets/icons/badge.svg";

const Portfolio = () => {
  return (
    <section
      className="
        bg-white

        py-16
        md:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-[1320px]

          px-6
          lg:px-12
        "
      >
        <div
          className="
            grid

            gap-10

            lg:grid-cols-[1fr_340px]
            lg:items-center
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            {/* Label */}

            <span
              className="
                font-inter
                font-semibold

                uppercase

                tracking-[0.08em]

                text-[14px]

                text-[#741C28]
              "
            >
              CURRENT PROGRAMMES
            </span>

            {/* Heading */}

            <h2
              className="
                mt-5

                font-eb-garamond
                font-semibold

                text-[#741C28]

                text-[36px]
                md:text-[44px]
                lg:text-[50px]

                leading-[1.15]
              "
            >
              Our Programme Portfolio
            </h2>

            {/* Description */}

            <p
              className="
                mt-7

                max-w-[650px]

                font-inter
                font-medium

                text-[16px]

                leading-8

                text-[#1A1C1B]
              "
            >
              Each programme offered through the International Praxorium results
              in dual credentials from partner institutions, combining
              international academic standards with the flexibility required by
              working professionals.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="
              flex
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                w-full
                max-w-[320px]

                rounded-[6px]

                bg-[#F8F5EF]

                px-8
                py-10

                text-center
              "
            >
              <img
                src={badgeIcon}
                alt="Accreditation"
                className="
                  mx-auto

                  w-20
                  h-20

                  object-contain
                "
              />

              <p
                className="
                  mt-5

                  font-inter
                  font-semibold

                  uppercase

                  tracking-[0.08em]

                  text-[13px]

                  text-[#C9A96E]
                "
              >
                ACCREDITATION
              </p>

              <h3
                className="
                  mt-3

                  font-inter
                  font-semibold

                  text-[20px]

                  leading-8

                  text-[#3D3D3D]
                "
              >
                100% Dual Credential Guarantee
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
