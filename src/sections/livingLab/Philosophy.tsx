import { motion } from "framer-motion";

import philosophyImage from "../../assets/images/living2.png";

const Philosophy = () => {
  return (
    <section
      className="
        bg-[#F8F5F3]

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

            gap-16

            lg:grid-cols-[1fr_0.95fr]
            lg:items-center
          "
        >
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
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
          >
            <h2
              className="
                mt-5

                font-eb-garamond
                font-semibold

                text-[#631015]

                text-[20px]
                md:text-[28px]
                lg:text-[38px]

                leading-[1.08]
              "
            >
              Our Philosophy
            </h2>

            <p
              className="
                mt-7

                max-w-[640px]

                font-inter
                font-medium

                text-[15px]
                md:text-[16px]

                leading-7

                text-[#1A1C1B]
              "
            >
              We believe entrepreneurship cannot be mastered through theory We
              believe that the best entrepreneurship education happens by doing.
              Every participant in our programmes is engaged in real
              venture-building activity there are no purely theoretical modules.
              Reflective practice is woven through all our work, drawing on the
              Praxorium's broader commitment to praxis.
            </p>
          </motion.div>
          {/* Right Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
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
    flex
    justify-center
    lg:justify-end
  "
          >
            <div
              className="
      relative

      w-full
      max-w-[560px]
    "
            >
              {/* Border */}

              <div
                className="
        absolute

        top-[15px]
        left-[15px]

        w-full
   h-[190px]
        sm:h-[220px]
        md:h-[250px]
        lg:h-[270px]
        xl:h-[290px]
        border
        border-[#631015]

        z-20
      "
              />

              {/* Image */}

              <img
                src={philosophyImage}
                alt="Living Lab Philosophy"

                className="
        relative
        z-10

        block

        w-full

        h-[220px]
        sm:h-[250px]
        md:h-[280px]
        lg:h-[300px]
        xl:h-[320px]

        object-cover
        object-center

        bg-white
      "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
