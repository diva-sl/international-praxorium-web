import { motion } from "framer-motion";

import campLogo from "../../assets/icons/camp1.svg";

const AboutSchool = () => {
  return (
    <section
      className="
        bg-white
        py-8
        md:py-8
        lg:py-12
      "
    >
      <div
        className="
          mx-auto
          max-w-[1440px]

          px-6
          lg:px-12
        "
      >
        <div
          className="
            grid
            items-center

            gap-12

          lg:grid-cols-[1.15fr_0.85fr]
gap-10
xl:gap-12
items-center
          "
        >
          {/* Left Content */}

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
            viewport={{ once: true }}
          >
            {/* Label */}

            <span
              className="
                font-inter
                font-semibold

                uppercase

                tracking-[0.14em]

                text-[13px]

                text-[#631015]
              "
            >
              ABOUT THE SCHOOL
            </span>

            {/* Heading */}

            <h2
              className="
                mt-5

                font-eb-garamond
                font-semibold

                text-[#631015]

                text-[34px]
                md:text-[32px]
                lg:text-[36px]

                leading-[1.08]
              "
            >
              Where Startups Begin and Scale
            </h2>

            {/* Paragraph */}

            <p
              className="
                mt-8

                max-w-[720px]

                font-inter
                font-medium

                text-[15px]
                md:text-[16px]

                leading-7

                text-[#1A1C1B]
              "
            >
              The Living Lab Institute is the Praxorium's centre for
              entrepreneurship, innovation, and business creation. It exists to
              support founders, innovators, and intrapreneurs at every stage,
              from the earliest spark of an idea through sustainable
              international growth.
            </p>

            <p
              className="
                mt-7

                max-w-[720px]

                font-inter
                font-medium

                text-[15px]
                md:text-[16px]

                leading-7

                text-[#1A1C1B]
              "
            >
              The Institute operates as a genuine "living lab"—a space where
              real ventures are built, tested, and refined in dialogue with
              mentors, peers, and market realities. It draws on global
              traditions of collaborative enterprise and connects participants
              to a broad network of investors, corporate partners, and ecosystem
              builders.
            </p>
          </motion.div>

          {/* Right Logo */}
          <div
            className="
    px-6
    py-10

    sm:px-8
    sm:py-12

    md:px-12
    md:py-16

    lg:px-20
    lg:py-24

    xl:px-38
    xl:py-38
  "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="
  flex

  items-center
  justify-start

  h-full
"
            >
              <img
                src={campLogo}
                alt="Living Lab Institute"

                className="
  w-full

  max-w-[140px]
  sm:max-w-[170px]
  md:max-w-[200px]
  lg:max-w-[220px]
  xl:max-w-[240px]

  h-auto

  object-contain

  select-none
"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSchool;
