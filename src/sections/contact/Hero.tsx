import { motion } from "framer-motion";
import heroImage from "../../assets/images/ContactUsHero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[280px] lg:h-[285px] xl:h-[290px]">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Contact Us"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          scale-[1.02]
          select-none
        "
      />

      {/* Maroon Overlay */}

      {/* Maroon Tint */}
      <div className="absolute inset-0 bg-[#631015]/35" />

      {/* Left & Right Dark / Middle Bright */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,28,27,.60) 38%, rgba(26,28,27,.30) 51%, rgba(26,28,27,.60) 62%)",
        }}
      />

      {/* Top & Bottom Blend */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(99,16,21,.15) 0%, rgba(99,16,21,.40) 100%)",
        }}
      />
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
              font-semibold
              leading-none
              tracking-[0.01em]
              text-white

              text-[36px]
              sm:text-[42px]
              md:text-[46px]
              lg:text-[50px]
            "
          >
            Contact Us
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl

              font-inter
              font-medium
              leading-relaxed
              text-white/95

              text-[14px]
              sm:text-[15px]
              md:text-[16px]
            "
          >
            We welcome enquiries from prospective students, partner
            institutions, and collaborators.
          </p>
        </motion.div>
      </div>

      {/* Decorative sparkle (matches the reference) */}
      <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-10 w-10">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/25" />
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/25" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
