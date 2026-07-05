import { motion } from "framer-motion";

import livingImage from "../../assets/images/living1.png";
import tickIcon from "../../assets/icons/tick.svg";

const offerings = [
  "Startup incubation and venture acceleration programmes",
  "Executive education for founders and innovation leaders",
  "Mentorship from experienced entrepreneurs and investors",
  "International networking and cross-border collaboration",
  "Access to funding opportunities and innovation ecosystems",
];

const WhatWeOffer = () => {
  return (
    <section
      className="
        bg-white

        py-10
        md:py-10
        lg:py-14
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

            gap-16

            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
          "
        >
          {/* Left Image */}

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
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className="
    relative

    w-full

    max-w-[360px]
    sm:max-w-[380px]
    md:max-w-[400px]
    lg:max-w-[410px]
    xl:max-w-[430px]

    lg:ml-4
    xl:ml-6
  "
            >
              {/* Floating Border */}
              <div className="px-4">
                <div
                  className="
                  absolute
               left-2
sm:left-10
md:left-16
lg:left-24
xl:left-30
                  bottom-4

w-full
       h-[220px]
sm:h-[230px]
md:h-[240px]
lg:h-[260px]
xl:h-[280px]

                  border
                  border-[#631015]

                  z-0
                "
                />

                <img
                  src={livingImage}
                  alt="Living Lab"

                  className="
                  relative
                  z-10

                  block
ml-2
sm:ml-10
md:ml-16
lg:ml-24
xl:ml-30

w-full
                 h-[220px]
sm:h-[230px]
md:h-[240px]
lg:h-[260px]
xl:h-[280px]

                  object-cover

                  bg-white
                "
                />
              </div>
            </div>
          </motion.div>
          {/* Right */}

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
            viewport={{ once: true }}
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
              WHAT WE OFFER
            </span>

            <div
              className="
              mt-6
space-y-4
"
            >
              {offerings.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="
                    flex
                    items-start

                    gap-3
                  "
                >
                  <img
                    src={tickIcon}
                    alt="Tick"

                    className="
  mt-[3px]
  h-4
  w-4
  shrink-0
"
                  />

                  <p
                    className="
                      font-inter
                      font-medium

                      text-[15px]
                      md:text-[16px]

                      leading-7

                      text-[#1A1C1B]
                    "
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
