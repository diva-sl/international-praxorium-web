import { motion } from "framer-motion";

import livingLab from "../../assets/images/sc1.png";
import arrowRight from "../../assets/icons/ArrowRight.svg";

const LivingLab = () => {
  return (
    <section
      className="
        bg-white

        pb-20
        lg:pb-24
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
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            overflow-hidden

            border
            border-[#ECE7E3]

            bg-white

            lg:grid
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          {/* Left Image */}

          <div className="overflow-hidden">
            <img
              src={livingLab}
              alt="Living Lab Institute"
              className="
                h-full
                w-full

                object-cover

                transition
                duration-700

                hover:scale-[1.03]
              "
            />
          </div>

          {/* Right Content */}

          <div
            className="
              flex
              flex-col

              justify-center

              px-8
              py-8

              lg:px-10
              lg:py-10
            "
          >
            {/* Category */}

            <span
              className="
                font-inter
                font-regular

                uppercase

                tracking-[0.12em]

                text-[12px]

                text-[#1A1C1B]
              "
            >
              STARTUP · SCALE UP
            </span>

            {/* Title */}

            <h2
              className="
                mt-5

                font-eb-garamond
                font-semibold

                text-[#631015]

                text-[34px]
                md:text-[42px]
                lg:text-[44px]

                leading-[1.08]
              "
            >
              Living Lab Institute
            </h2>

            {/* Description */}

            <p
              className="
                mt-6

                font-inter
                font-medium

                text-[15px]
                md:text-[16px]

                leading-6

                text-[#1A1C1B]
              "
            >
              The Living Lab Institute is the Praxorium's centre for
              entrepreneurship and innovation. It provides structured pathways
              for entrepreneurs at every stage of their journey, from early
              ideation through international scale-up.
            </p>

            <p
              className="
                mt-6

                font-inter
                font-medium

                text-[15px]
                md:text-[16px]

                leading-6

                text-[#1A1C1B]
              "
            >
              Working closely with global venture networks and incubators, the
              Institute offers mentoring, structured learning programmes, and
              access to a curated community of investors and corporate
              innovators.
            </p>

            {/* Tags */}

            <div
              className="
                mt-8

                flex
                flex-wrap

                gap-3
              "
            >
              {[
                "TECH VENTURES",
                "SOCIAL ENTERPRISE",
                "CROSS-BORDER SCALING",
              ].map((tag) => (
                <span
                  key={tag}
                  className="
                    bg-[#F8F5F3]

                    px-4
                    py-2

                    font-inter
                    font-bold

                    text-[12px]

                    text-[#C9A96E]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}

            <button
              className="
                group

                mt-10

                flex
                items-center

                gap-3

                font-inter
                font-semibold

                text-[16px]

                text-[#631015]
              "
            >
              Visit School
              <img
                src={arrowRight}
                alt=""
                className="
                  w-5

                  transition-transform
                  duration-300

                  group-hover:translate-x-2
                "
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LivingLab;
