import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import quotation from "../../../assets/icons/quatation.svg";
import arrowRight from "../../../assets/icons/ArrowRight.svg";

import missionImage from "../../../assets/images/Section 2 Mission.png";

const Mission = () => {
  return (
    <section
      id="mission"
      className="
        bg-white
      py-20
md:py-28
lg:py-36
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
    lg:grid-cols-2
    gap-16
    xl:gap-24
    items-stretch
  "
        >
          {/* LEFT CONTENT */}

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
order-2
lg:order-1
flex
flex-col
justify-between
h-full
"
          >
            {/* Quote */}

            <div className="flex items-center gap-4">
              <img
                src={quotation}
                alt="Quotation"
                className="
w-16
h-16
md:w-20
md:h-20
"
              />

              <span
                className="
              text-[#B08A8F]
font-medium
text-[13px]
tracking-[5px]
uppercase
mt-12
md:text-[15px]
md:tracking-[6px]
                "
              >
                Our Mission
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
    mt-4
    font-eb-garamond
    font-semi bold
    text-[#741C28]
    text-[36px]
    md:text-[44px]
    xl:text-[52px]
    leading-[1.15]
    tracking-[-0.02em]
  "
            >
              Partnerships That Empower
            </h2>

            {/* Paragraph */}

            <p
              className="
              font-inter
              font-medium
                mt-4
                max-w-[640px]
               text-[17px]
leading-8
text-[#4B5563]
              "
            >
              The International Praxorium is a unique collaborative framework
              that brings together distinguished institutions to create
              programmes where reflective knowledge and professional practice
              converge.
            </p>

            <p
              className="
                mt-4
                max-w-[640px]
             text-[17px]
leading-8
text-[#4B5563]
              "
            >
              Praxorium helps educational institutions in emerging economies
              scale up by building curated programmes with renowned institutions
              from across the world.
            </p>

            {/* CTA Button */}

            <div
              className="
    mt-auto
    pt-6
    flex
    justify-center
    lg:justify-end
  "
            >
              {/* <Link
                to="/about"
                className="
      group
      inline-flex
      items-center
      justify-between
      w-full
      sm:w-[320px]
      lg:w-[330px]
      h-[52px]
      rounded-sm
      border
      border-[#8A1F2D]
      px-16
      text-base
      font-semibold
      text-[#741C28]
      transition-all
      duration-300
      hover:bg-[#741C28]
      hover:text-white
      hover:shadow-xl
    "
              >
                <span>About The Praxorium</span>

                <img
                  src={arrowRight}
                  alt="Arrow Right"
                  className="
        h-5
        w-5
        transition-all
        duration-300
        group-hover:translate-x-2
        group-hover:brightness-0
        group-hover:invert
      "
                />
              </Link> */}
              <Link
                to="/about"
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
                <span>About The Praxorium</span>

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

          {/* RIGHT IMAGE */}

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
              order-1
              lg:order-2
              flex
              justify-center
            "
          >
            <div
              className="
                relative
                w-full
                max-w-[900px]
                overflow-hidden
                rounded-sm
              "
            >
              <img
                src={missionImage}
                alt="International Praxorium Mission"
                className="
w-full
h-full
object-cover
rounded-sm
transition-all
duration-700
hover:scale-[1.03]
"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
