import { motion } from "framer-motion";
import heroImage from "../../assets/images/governanceHero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[280px] lg:h-[285px] xl:h-[280px]">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Governance Hero"
        className="
          absolute
          inset-0
          w-full
          h-full
          xl:h-[280px]
          object-cover
          object-[center_12%]
        
          select-none
        "
      />

      {/* Primary Maroon Overlay */}
      <div className="absolute inset-0 bg-[#631015]/25" />

      {/* Premium Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#631015]/15
          via-[#631015]/35
          to-[#631015]/70
        "
      />

      {/* Extra Vignette */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <h1
            className="
              font-eb-garamond
              text-white
              font-semibold
              tracking-[0.01em]
              leading-none

              text-[42px]
              lg:text-[48px]
              xl:text-[52px]
            "
          >
            Governance
          </h1>

          <p
            className="
              mx-auto
              mt-3
              max-w-[720px]

              font-inter
              font-normal
              leading-[1.55]

              text-[15px]
              lg:text-[16px]

              text-white/95
            "
          >
            The International Praxorium is guided by an Executive Board, a Board
            for Academic Excellence, and dedicated Praxorium Directors.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
