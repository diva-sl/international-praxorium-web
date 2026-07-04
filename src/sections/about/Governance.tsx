import { motion } from "framer-motion";

import councilIcon from "../../assets/icons/council.svg";
import custodianIcon from "../../assets/icons/custodiant.svg";
import leadershipIcon from "../../assets/icons/leadership.svg";

const governanceCards = [
  {
    icon: councilIcon,
    title: "Distinguished Council",
    description:
      "Bringing together academic leaders, policy thinkers, and global innovators united by a shared commitment to responsible impact.",
  },
  {
    icon: custodianIcon,
    title: "Custodian of Purpose",
    description:
      "Ensuring our platform remains intellectually rigorous, ethically grounded, and connected to real-world societal challenges.",
  },
  {
    icon: leadershipIcon,
    title: "Catalytic Leadership",
    description:
      "Leading through dialogue and guidance—enabling rather than instructing, connecting rather than directing.",
  },
];

const Governance = () => {
  return (
    <section
      className="
        bg-[#F7F3F1]
        py-16
        md:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-[1320px]
          px-6
          lg:px-12
        "
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[900px]"
        >
          <p
            className="
              font-inter
              font-semibold
              uppercase
              tracking-[0.08em]

              text-[14px]

              text-[#B89086]
            "
          >
            OUR APPROACH
          </p>

          <h2
            className="
              mt-3

              font-eb-garamond
              font-semibold

              text-[#631015]

              text-[34px]
              md:text-[42px]
              lg:text-[48px]

              leading-[1.15]
            "
          >
            Commons Governance & Stewardship
          </h2>

          <p
            className="
              mt-5

              max-w-[980px]

              font-inter
              font-medium

              text-[15px]
              md:text-[16px]

              leading-6

              text-[#1A1C1B]
            "
          >
            Rather than governing through hierarchy, we operate through Commons
            governance principles, acting as a custodian of purpose, quality,
            and integrity.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            mt-14

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {governanceCards.map((card, index) => (
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
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-[4px]
                bg-white

                px-6
                py-6

                shadow-[0_2px_10px_rgba(0,0,0,0.04)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
              "
            >
              {/* Icon + Title */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className={`
    object-contain
    shrink-0

    ${index === 0 ? "w-6 h-6" : index === 1 ? "w-6 h-6" : "w-8 h-8"}
  `}
                />
                <h3
                  className="
                    font-eb-garamond
                    font-semibold

                    text-[22px]

                    text-[#741C28]
                  "
                >
                  {card.title}
                </h3>
              </div>

              {/* Divider */}

              <div
                className="
                  mt-4
                  h-px
                  w-full
                  bg-[#C9A96E]
                "
              />

              {/* Description */}

              <p
                className="
                  mt-4

                  font-inter
                  font-medium

                  text-[15px]

                  leading-6

                  text-[#000000]
                "
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Governance;
