import { motion } from "framer-motion";

import quotation from "../../assets/icons/quatation.svg";
import aboutImage from "../../assets/images/about2.png";

const KnowledgePartnership = () => {
  return (
    <section
      className="
        bg-white
        py-20
        md:py-24
        lg:py-28
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
            lg:gap-20

            lg:grid-cols-[0.95fr_1.05fr]
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
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
            <div className="flex items-start gap-4">
              <img
                src={quotation}
                alt="Quotation"
                className="
                  w-9
                  h-9
                  md:w-10
                "
              />

              <div className="pt-3">
                <span
                  className="
                    font-inter
                    font-semibold

                    uppercase

                    tracking-[0.14em]

                    text-[12px]

                    text-[#631015]
                  "
                >
                  WHO WE ARE
                </span>
              </div>
            </div>
            <h2
              className="
                mt-3

                font-eb-garamond
                font-bold

                text-[#631015]

                text-[34px]
                md:text-[42px]
                lg:text-[48px]

                leading-[1.1]
              "
            >
              A New Kind of Knowledge Partnership
            </h2>
            <p
              className="
                mt-3

                font-eb-garamond
                italic

                text-[18px]

                text-[#1A1C1B]
              "
            >
              Living Platform for Applied Learning
            </p>
            <p
              className="
                mt-8

                max-w-[520px]

                font-inter
                font-medium

                text-[16px]
                leading-8

                text-[#3F3F3F]
              "
            >
              An international applied learning and academic innovation
              organisation focused on co-creating and managing experiential
              learning, startup scale-up, industry immersion, and transnational
              higher education programmes across developing economies.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
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
            className="flex justify-center lg:justify-end"
          >
            <div
              className="
    relative
    w-full
    max-w-[540px]
    pr-6
    pb-6
  "
            >
              {/* Border */}

              <div
                className="
      absolute

      left-5
bottom-0.5
      w-[calc(100%-20px)]
      h-[calc(100%+28px)]

      border
      border-[#631015]

      z-0
    "
              />

              {/* Image */}

              <img
                src={aboutImage}
                alt="Knowledge Partnership"
                className="
      relative
      z-10
      block
      w-full

      h-[380px]

      object-cover
      bg-white
    "
              />
            </div>{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgePartnership;
