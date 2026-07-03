import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import programImage from "../../../assets/images/Section 4 Mission.png";

import greaterIcon from "../../../assets/icons/greater.svg";
import arrowRight from "../../../assets/icons/ArrowRight.svg";

const Programs = () => {
  return (
    <section
      className="
        bg-[#FAF8F5]
        py-20
        md:py-24
        lg:py-28
        overflow-hidden
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
    lg:grid-cols-[1.08fr_0.92fr]
    items-center
    gap-8
    xl:gap-10
  "
        >
          {/* LEFT IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
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
              order-1
              flex
              h-full
            "
          >
            <div
              className="
                w-full
                h-full
                overflow-hidden
              "
            >
              <img
                src={programImage}
                alt="Programmes"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  hover:scale-[1.02]
                "
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
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
              order-2
              flex
              flex-col
              justify-center
              w-full
            "
          >
            {/* Section Label */}
            <div
              className="
    relative
    inline-block
    mb-5
  "
            >
              <img
                src={greaterIcon}
                alt="Programmes"
                className="
      w-12
      md:w-14
      lg:w-16
      h-auto
      object-contain
    "
              />
              <span
                className="
    absolute
    top-8
    left-[8%]
    sm:left-[9%]
    md:left-[10%]
    lg:left-[8%]
    xl:left-[8%]

    font-inter
    text-[13px]
    md:text-[14px]
    font-semibold
    uppercase
    tracking-[0.25em]
    text-[#B89A91]
    whitespace-nowrap
  "
              >
                PROGRAMMES
              </span>
            </div>
            {/* Heading */}
            <h2
              className="
  mt-6
  font-eb-garamond
  font-semibold
  text-[#741C28]
  text-[30px]
  sm:text-[34px]
  md:text-[36px]
  lg:text-[36px]
  xl:text-[36px]
  leading-[1.15]
  tracking-[-0.02em]
"
              // 2xl:text-[40px]
            >
              Locally relevant, Internationally Accredited
            </h2>
            {/* Paragraph 1 */}
            <p
              className="
              mt-5
              max-w-[640px]
              font-inter
              text-[17px]
              font-medium
              leading-8
              text-[#3B3B3B]
              md:text-[18px]
            "
            >
              We build bespoke programmes that blend the academic rigour of
              leading institutions from around the world with the local
              expertise of the institutions we work with.
            </p>
            {/* Paragraph 2 */}
            <p
              className="
              mt-5
              max-w-[640px]
              font-inter
              text-[17px]
              font-medium
              leading-8
              text-[#3B3B3B]
              md:text-[18px]
            "
            >
              We have seen this work wonders with the value students derive from
              these programmes. Thereby helping our clients scale up the
              programmes they can offer dramatically.
            </p>
            {/* CTA Button */}
            <div
              className="
              mt-12
              flex
              justify-start
            "
            >
              <Link
                to="/programs"
                className="
    group
    inline-flex
    items-center
    gap-2
    rounded-sm
    border
    border-[#8A1F2D]
    bg-white
    px-6
    py-4
    font-inter
    text-[16px]
    font-semibold
    text-[#741C28]
    transition-all
    duration-300
    hover:bg-[#741C28]
    hover:text-white
  "
              >
                <span>Programmes</span>

                <img
                  src={arrowRight}
                  alt="Arrow Right"
                  className="
      h-4
      w-4
      transition-all
      duration-300
      group-hover:translate-x-1
      group-hover:brightness-0
      group-hover:invert
    "
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
