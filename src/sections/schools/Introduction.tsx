import { motion } from "framer-motion";

import schoolIcon from "../../assets/icons/school.svg";

const Introduction = () => {
  return (
    <section
      className="
        bg-white

        py-18
        md:py-18
        lg:py-18
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

    grid-cols-1

    items-center

    gap-6

    lg:grid-cols-12
    lg:gap-6

    xl:gap-6
  "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              clipPath: "inset(0 100% 0 0)",
            }}
            whileInView={{
              opacity: 1,
              clipPath: "inset(0 0% 0 0)",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="
      lg:col-span-9
      xl:col-span-9

      self-center
    "
          >
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
              GLOBAL ALLIANCE
            </span>

            <h2
              className="
        mt-4

        font-eb-garamond
        font-semibold

        text-[#631015]

        text-[34px]
        md:text-[42px]
        lg:text-[52px]

        leading-[1.18]
      "
            >
              Three specialist schools,
              <br />
              <span
                className="
              font-eb-garamond
        font-bold  
          italic
          text-[#1A1C1B]/70
        "
              >
                One Vision.
              </span>
            </h2>

            <p
              className="
        mt-6

        max-w-[650px]

        font-inter
        font-medium

        text-[15px]
        md:text-[16px]

        leading-6

        text-[#1A1C1B]
      "
            >
              At the heart of the International Praxorium are three distinct
              centres of excellence. Each is dedicated to a specific pillar of
              our mission: entrepreneurship, rigorous research, and reflective
              practice.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
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
      lg:col-span-3

      flex

      items-center
      justify-center

      lg:justify-start
    "
          >
            <img
              src={schoolIcon}
              alt="School"

              className="
        w-full

        max-w-[170px]
        sm:max-w-[190px]
        md:max-w-[220px]
        lg:max-w-[250px]
        xl:max-w-[290px]

        h-auto

        object-contain
      "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
