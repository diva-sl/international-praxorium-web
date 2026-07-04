import { motion } from "framer-motion";

import ctaImage from "../../assets/images/cta.png";

const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="
          relative
          h-[180px]
          sm:h-[220px]
          md:h-[260px]
          lg:h-[300px]
          xl:h-[330px]
        "
      >
        {/* Background */}

        <img
          src={ctaImage}
          alt="Rooted in Purpose"
          className="
            absolute
            inset-0

            h-full
            w-full

            object-cover
          "
        />

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-[#0A192F]/55
          "
        />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-r
            from-black/15
            via-transparent
            to-black/20
          "
        />

        {/* Content */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          <h2
            className="
              font-eb-garamond
              font-semibold

              text-[#C9A96E]

              text-[30px]
              sm:text-[40px]
              md:text-[52px]
              lg:text-[64px]
              xl:text-[72px]

              leading-[1.1]
              tracking-[-0.02em]
            "
          >
            Rooted in Purpose. Reaching the World.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
