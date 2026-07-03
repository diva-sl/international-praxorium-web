import { motion } from "framer-motion";
import StatisticCard from "./StatisticCard";

const statistics = [
  {
    value: 3,
    suffix: "",
    title: "Specialist Schools",
  },
  {
    value: 8,
    suffix: "",
    title: "Countries Represented",
  },
  {
    value: 500,
    suffix: "+",
    title: "Countries Represented",
  },
  {
    value: 12,
    suffix: "+",
    title: "Global Partners",
  },
];

const Statistics = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#071A33]
      py-20
      md:py-24
      lg:py-28
    "
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        lg:px-8
      "
      >
        <div
          className="
          grid
          gap-10
          lg:gap-14 
          lg:grid-cols-[1.2fr_0.8fr]
          lg:items-center
        "
        >
          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
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
              relative
              z-5
              max-w-[640px]
            "
          >
            <h2
              className="
    font-inter
    font-thin
    text-[#B8C1CD]
    text-[40px]
    sm:text-[50px]
    md:text-[60px]
    lg:text-[58px]
    xl:text-[64px]
    leading-[1.05]
    tracking-[-0.03em]
  "
            >
              Looking for a specific
              <br />
              pathway?
            </h2>
            <p
              className="
    mt-8
    max-w-[560px]
    font-['Inter']
    font-medium
    text-[16px]
    md:text-[17px]
    leading-8
    text-white/90
  "
            >
              Whether you are a prospective scholar seeking doctoral research or
              an institution looking to expand your portfolio, our directors are
              available for a structured dialogue.
            </p>
          </motion.div>
          {/* RIGHT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
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
              relative
              flex
              justify-center
              lg:justify-end
            "
          >
            {/* Watermark */}

            <h1
              className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    whitespace-nowrap
    font-['EB_Garamond']
    font-bold
    text-[80px]
    sm:text-[70px]
    lg:text-[90px]
    xl:text-[120px]
    leading-none
    tracking-[-0.02em]
    text-[#FFFFFF08]
    select-none
    z-0
  "
            >
              Praxorium
            </h1>
            {/* Cards */}

            <div
              className="
    relative
    z-10
    grid
    grid-cols-2
    gap-4
    w-full
    max-w-[520px]
    mx-auto
  "
            >
              {statistics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
relative
flex
h-[150px]
sm:h-[165px]
lg:h-[180px]

flex-col
items-center
justify-center

rounded-md

border
border-white/12

bg-white/[0.015]

backdrop-blur-[2px]

px-4
sm:px-5
py-5

overflow-hidden

transition-all
duration-300

hover:bg-white/[0.03]
hover:border-[#C6A86A]
"
                >
                  <div className="relative z-10">
                    <StatisticCard
                      value={item.value}
                      suffix={item.suffix}
                      title={item.title}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
