import { motion } from "framer-motion";

import aboutImage from "../../assets/images/about1.png";

const Meaning = () => {
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
    gap-10
    lg:gap-16

    lg:grid-cols-[1.15fr_0.85fr]
  "
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className="
    relative
    w-full
    max-w-[620px]
  "
            >
              {/* Image */}

              <img
                src={aboutImage}
                alt="About"
                className="
      block
      w-full
      object-cover
      relative
      z-10
    "
              />

              {/* Border on top */}

              <div
                className="
      pointer-events-none

      absolute

      top-4
      left-4

      w-full
      h-full

      border-[1.5px]
      border-[#631015]

      z-20
    "
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
    flex
    flex-col
    justify-center
  "
          >
            <div
              className="
    border-[1.5px]
    border-[#631015]

    h-[92px]

    flex
    items-end

    pb-4
    pl-0
    pr-8
  "
            >
              <h2
                className="
    ml-0

    font-eb-garamond
    font-semibold

    text-[#631015]

    text-[28px]
    md:text-[34px]
    lg:text-[38px]

    leading-none
  "
              >
                The Meaning of Praxorium
              </h2>
            </div>
            <p
              className="
    mt-3

    font-eb-garamond
    italic
    font-medium

    text-[15px]
    md:text-[16px]

    leading-relaxed

    text-[#1A1C1B]
  "
            >
              The word Praxorium carries the philosophy at the heart of this
              platform.
            </p>
            <div
              className="
    mt-5

    max-w-[520px]

    border-l-[5px]
    border-[#C9A96E]

    bg-[#F7F2EC]

    px-6
    py-5
  "
            >
              <p
                className="
    font-inter
    font-medium
    text-[15px]
    leading-7
    text-[#1A1C1B]
  "
              >
                Praxorium (noun) is derived from{" "}
                <strong className="text-[#631015]">praxis</strong>
                <span className="text-[#686C73]">(Greek</span>
                <em className="text-[#1A1C1B]">
                  : "action, applied knowledge"
                </em>
                ) and <strong className="text-[#631015]">-orium</strong>
                <span className="text-[#686C73]">(Latin</span>
                <em className="text-[#1A1C1B]">: "a place or domain"</em>) .
              </p>
              <p
                className="
    mt-5

    font-inter
font-medium
    text-[15px]
    leading-7

    text-[#741C28]
  "
              >
                It signifies a space where thinking meets doing, and where
                knowledge finds expression through practice.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Meaning;
