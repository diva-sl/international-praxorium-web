import { motion } from "framer-motion";

import heroImage from "../../assets/images/programHero.png";

const Hero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
      "
    >
      {/* Background */}

      <div
        className="
          relative

          h-[220px]
          sm:h-[260px]
          md:h-[300px]
          lg:h-[340px]
          xl:h-[380px]
        "
      >
        <img
          src={heroImage}
          alt="Programmes"
          className="
            absolute
            inset-0

            h-full
            w-full

            object-cover
          "
        />

        {/* Maroon Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-[#3B181A]/70
          "
        />

        {/* Dark Gradient */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-black/15
            via-transparent
            to-black/20
          "
        />

        {/* Content */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            relative
            z-10

            flex
            h-full

            items-center
            justify-center

            px-6
            text-center
          "
        >
          <div className="max-w-[760px]">
            <h1
              className="
                font-eb-garamond
                font-semibold

                text-white

                text-[34px]
                sm:text-[42px]
                md:text-[52px]
                lg:text-[58px]

                leading-none
              "
            >
              Programmes
            </h1>

            <p
              className="
                mt-6

                mx-auto
                max-w-[620px]

                font-inter
                font-medium

                text-white/95

                text-[14px]
                md:text-[16px]

                leading-7
              "
            >
              Internationally accredited, dual-credential programmes designed
              for ambitious professionals and researchers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
