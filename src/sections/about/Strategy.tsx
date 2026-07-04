import { motion } from "framer-motion";
const strategyCards = [
  {
    title: "STEWARDSHIP",
    subtitle: "A strategic conscience for the ecosystem.",
    content: [
      "Every meaningful platform needs more than structure; it needs stewardship.",
    ],
    large: false,
  },
  {
    title: "STRATEGY",
    subtitle: "Addressing complex global challenges.",
    content: [
      "The International Praxorium Council exists to hold that responsibility. It serves as the strategic conscience and guiding presence of the Praxorium ecosystem, ensuring that learning does not remain abstract, research does not become detached, and innovation remains anchored in human and societal purpose.",
      "The Council provides the strategic stewardship and moral compass for a living platform for applied learning designed to address complex challenges in developing and emerging contexts.",
    ],
    large: true,
  },
  {
    title: "GLOBAL TRUST",
    subtitle: "Centered in high-growth economies.",
    content: [
      "At a time when global knowledge production remains concentrated in a few regions, the Praxorium deliberately centers its work in Asia-Pacific, Africa, the Middle East, and Central Asia, where demographic growth, economic transition, and societal change demand context-sensitive, practice-driven solutions.",
    ],
    large: false,
  },
];
const Strategy = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F3F1]
      py-16
md:py-20
lg:py-24
      "
    >
      <div
        className="
          relative
          mx-auto
          max-w-[1320px]
          px-6
          lg:px-12
        "
      >
        <h1
          className="
            pointer-events-none
            absolute
            left-0
            top-1

            select-none

            font-eb-garamond
            font-bold

            text-[#63101508]
text-[70px]
md:text-[100px]
lg:text-[100px]
xl:text-[100px]
            leading-none
          "
        >
          Praxorium
        </h1>
        <div
          className="
    relative
    z-10

    grid
gap-6
lg:gap-8
    lg:grid-cols-[0.85fr_1fr_0.85fr]
    lg:items-center
  "
        >
          {strategyCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              className={`
  relative

  ${index === 0 ? "lg:mt-16" : index === 1 ? "" : "lg:mt-10"}
`}
            >
              {/* Border Frame */}

              <div
                className="
          absolute
          border
          border-[#631015]
          z-0
        "
                style={
                  index === 0
                    ? {
                        top: -10,
                        left: 10,
                        right: -10,
                        bottom: -10,
                      }
                    : index === 1
                      ? {
                          top: -10,
                          left: -10,
                          right: -10,
                          bottom: 10,
                        }
                      : {
                          top: -10,
                          left: 10,
                          right: -10,
                          bottom: 10,
                        }
                }
              />

              {/* Card */}

              <div
                className={`
          relative
          z-10
          bg-white
          shadow-sm

      ${
        card.large
          ? `
      px-6
      py-7
      md:px-8
      md:py-8
      lg:min-h-[450px]
    `
          : `
      px-6
      py-6
      md:px-7
      md:py-7
      lg:min-h-[235px]
    `
      }
        `}
              >
                {/* Title */}

                <h5
                  className="
            font-inter
            font-bold
            uppercase
text-[12px]
md:text-[13px]
tracking-[0.12em]
            text-[#631015]
          "
                >
                  {card.title}
                </h5>

                {/* Subtitle */}

                <p
                  className="
            mt-3
            font-eb-garamond
            italic
text-[16px]
md:text-[17px]
lg:text-[18px]
leading-[1.4]
            text-[#2D2D2D]
          "
                >
                  {card.subtitle}
                </p>

                {/* Content */}

                <div className="mt-5 space-y-4">
                  {card.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="
                font-inter
                text-[14px]
md:text-[15px]
leading-7
                text-[#333333]
              "
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
