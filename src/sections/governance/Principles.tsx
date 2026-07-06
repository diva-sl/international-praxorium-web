import { motion } from "framer-motion";

import stewardshipIcon from "../../assets/icons/Stewardship.svg";
import trustIcon from "../../assets/icons/Global Trust.svg";

const Principles = () => {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
lg:col-span-8
bg-white
shadow-md
border border-[#ECECEC]
p-6
sm:p-8
md:p-10
lg:p-12
"
          >
            <h2
              className="
font-eb-garamond
font-semibold
text-[#631015]
leading-tight

text-[24px]
sm:text-[28px]
md:text-[30px]
lg:text-[28px]
xl:text-[30px]
"
            >
              Commons Governance Principles
            </h2>

            <p
              className="
mt-5
max-w-3xl
font-inter
font-medium

text-[13px]
sm:text-[14px]
md:text-[15px]
lg:text-[12px]
xl:text-[13px]

leading-6
text-[#1A1C1B]
"
            >
              Rather than governing through hierarchy, the Council works as a
              custodian of purpose. Its role is not to control, but to ensure
              that the Praxorium remains intellectually rigorous, ethically
              grounded, globally inclusive, and meaningfully connected to
              real-world challenges.
            </p>

            <div
              className="
mt-8
grid
grid-cols-1
gap-8
sm:gap-10
md:grid-cols-2
lg:mt-10
"
            >
              {/* Item */}
              <div
                className="
flex
items-start
gap-4
sm:gap-5
"
              >
                <div className="flex h-24 w-24 shrink-0 items-center justify-center">
                  <img
                    src={stewardshipIcon}
                    alt="Stewardship"
                    className="
h-16
w-16

"
                  />
                </div>

                <div>
                  <h3
                    className="
font-inter
font-bold
text-[#631015]

text-[16px]
sm:text-[17px]
lg:text-[18px]
"
                  >
                    Stewardship
                  </h3>

                  <p
                    className="
mt-2
sm:mt-3

font-inter
font-medium

text-[13px]
sm:text-[14px]
lg:text-[12px]
xl:text-[13px]

leading-6
text-[#000000]
"
                  >
                    Leading through dialogue, guidance, and catalytic leadership
                    enabling rather than instructing.
                  </p>
                </div>
              </div>

              {/* Item */}

              <div className="flex items-start gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center">
                  <img
                    src={trustIcon}
                    alt="Global Trust"
                    className="h-16 w-16"
                  />
                </div>

                <div>
                  <h3 className="font-inter font-bold text-[18px] text-[#631015]">
                    Global Trust
                  </h3>

                  <p className="mt-3 font-inter font-medium text-[12px] leading-6 text-[#000000]">
                    A shared domain of action, sustained by trust and animated
                    by the belief that knowledge serves life.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
lg:col-span-4

rounded-md

border
border-[#631015]

bg-[#C9A96E]

flex
flex-col
justify-center

p-6
sm:p-8
md:p-10
lg:p-12

min-h-[240px]
lg:min-h-full
"
          >
            <h2
              className="
font-eb-garamond
font-semibold
text-[#631015]

text-[22px]
sm:text-[24px]
lg:text-[26px]
"
            >
              Strategic
            </h2>

            <p
              className="
mt-5

font-inter
italic

text-[14px]
sm:text-[15px]
lg:text-[16px]

leading-7

text-[#1A1C1B]
"
            >
              "The Council serves as the strategic guiding presence, ensuring
              learning does not remain abstract and research remains anchored in
              human purpose."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
