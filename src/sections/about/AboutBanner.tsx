import { motion } from "framer-motion";

import aboutBanner from "../../assets/images/aboutBanner.png";
const AboutBanner = () => {
  return (
    <section
      className="
        relative
        h-[260px]
        sm:h-[320px]
        md:h-[360px]
        lg:h-[400px]
        xl:h-[430px]
        overflow-hidden
      "
    >
      <img
        src={aboutBanner}
        alt="About Banner"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />{" "}
      <div
        className="
          absolute
          inset-0
          bg-[#3A151A]/75
        "
      />{" "}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-[1440px]
          items-center
          justify-center
          px-6
          lg:px-12
          text-center
        "
      >
        {" "}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <h1
            className="
              font-eb-garamond
              font-bold
              text-white

              text-[34px]
              sm:text-[42px]
              md:text-[52px]
              lg:text-[58px]

              leading-tight
            "
          >
            About the International Praxorium
          </h1>
          <p
            className="
              mx-auto
              mt-5
              max-w-[760px]

              font-inter
              font-medium

              text-white/90

              text-[15px]
              sm:text-[16px]
              md:text-[17px]

              leading-8
            "
          >
            A globally rooted alliance dedicated to partnerships that empower
            scholars, practitioners, and institutions through transformative
            learning, research, and purposeful collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;
