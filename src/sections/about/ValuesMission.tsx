import { motion } from "framer-motion";

import missionIcon from "../../assets/icons/mission.svg";
import valuesIcon from "../../assets/icons/values.svg";

const principles = [
  {
    number: "01",
    title: "Applied Learning With Impact",
    description:
      "Transforming knowledge into practical capability and measurable outcomes.",
  },
  {
    number: "02",
    title: "Global Collaboration And Inclusive Growth",
    description:
      "Building diverse partnerships that foster shared knowledge, equal opportunity, and collective progress.",
  },
  {
    number: "03",
    title: "Innovation And Entrepreneurial Excellence",
    description:
      "Encouraging creativity, agility, and bold thinking to create sustainable solutions and future-focused ventures.",
  },
  {
    number: "04",
    title: "Ethical And Responsible Leadership",
    description:
      "Leading with integrity, accountability, and a commitment to societal advancement.",
  },
];

const ValuesMission = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white

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
        {/* ===================== */}
        {/* TOP VALUES / MISSION */}
        {/* ===================== */}

        <div
          className="
            relative
            grid
            gap-8

           lg:grid-cols-2
lg:gap-14

max-w-[980px]
mx-auto
            lg:items-start
          "
        >
          {" "}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <div
              className="
    mb-5

    flex
    items-center
    justify-center

    gap-3
  "
            >
              <img
                src={valuesIcon}
                alt="Values"
                className="
      w-8
      h-8
      object-contain
    "
              />

              <h4
                className="
      font-inter
      font-semibold

      text-[18px]

      text-[#741C28]
    "
              >
                Values
              </h4>
            </div>
            <div
              className="
                relative

                bg-[#F7F4EE]

                px-6
                py-5

                md:px-8
                md:py-6
              "
            >
              <p
                className="
    font-inter
    font-medium
    text-justify
    
    text-[15px]
    leading-6

    text-[#1A1C1B]
  "
              >
                Our vision is to build a global community where experiential
                learning, applied research, and innovation become catalysts for
                sustainable growth and impactful solutions.
              </p>
            </div>
          </motion.div>{" "}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
          >
            <div
              className="
    mb-5

    flex
    items-center
    justify-center

    gap-3
  "
            >
              <img
                src={missionIcon}
                alt="Mission"
                className="
      w-8
      h-8
      object-contain
    "
              />

              <h4
                className="
      font-inter
      font-semibold

      text-[18px]

      text-[#741C28]
    "
              >
                Mission
              </h4>
            </div>

            <div
              className="
                relative

                bg-[#F7F4EE]

                px-6
                py-5

                md:px-8
                md:py-6
              "
            >
              <p
                className="
    font-inter
    font-medium
    text-justify

    text-[15px]
    leading-6

    text-[#1A1C1B]
  "
              >
                Our mission is to bridge knowledge and practice by creating
                dynamic collaborations between academia, industry and
                entrepreneurship, preparing future-ready leaders for a connected
                world.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===================== */}
        {/* BOTTOM SECTION */}
        {/* ===================== */}

        <div
          className="
            relative

            mt-20

            grid
            gap-14

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-start
          "
        >
          <h1
            className="
    absolute

    left-1/2

    -top-[170px]
    md:-top-[200px]
    lg:-top-[230px]
    xl:-top-[230px]

    -translate-x-1/2

    pointer-events-none
    select-none

    font-eb-garamond
    font-bold

    text-[#0A192F08]

    text-[100px]
    md:text-[130px]
    lg:text-[170px]
    xl:text-[150px]

    leading-none
    whitespace-nowrap

    z-0
  "
          >
            IP
          </h1>
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
            className="
relative
z-10

lg:-mt-8
"
          >
            <div className="relative inline-block">
              {/* Offset Duplicate */}

              <h2
                className="
      absolute

      -left-[3px]

      font-eb-garamond
      font-semibold

      text-[#E2D3B1]

      text-[32px]
      md:text-[38px]
      lg:text-[44px]

      leading-[1.1]

      opacity-70

      pointer-events-none
      select-none
      whitespace-nowrap
    "
              >
                The Spirit of Praxorium
              </h2>

              {/* Main Heading */}

              <h2
                className="
      relative

      font-eb-garamond
      font-semibold

      text-[#C9A96E]

      text-[32px]
      md:text-[38px]
      lg:text-[44px]

      leading-[1.1]
      whitespace-nowrap
    "
              >
                The Spirit of Praxorium
              </h2>
            </div>

            <p
              className="
    mt-3

    font-eb-garamond
    font-medium
    italic

    text-[18px]

    text-[#1A1C1B]
  "
            >
              The spirit of Praxorium is guided by four core values:
            </p>

            <p
              className="
                -lg:mt-2
mt-5

                max-w-[470px]

                font-inter
                font-medium
                text-[15px]
                md:text-[16px]

                leading-6

text-[#444444]
              "
            >
              Praxorium is more than a platform. It is a movement shaping the
              future of learning, innovation, and global collaboration with
              purpose and impact.
            </p>
          </motion.div>
          <div
            className="
              relative
              z-10

              flex
              flex-col

              gap-10
            "
          >
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  flex
                  items-start
                  gap-6
                "
              >
                {/* Offset Duplicate Number */}

                <div
                  className="
    relative
    shrink-0

    w-[72px]
    md:w-[82px]
    lg:w-[95px]

    h-[72px]
    md:h-[82px]
    lg:h-[95px]
  "
                >
                  {/* Duplicate Layer */}

                  <span
                    className="
      absolute

      -left-[5px]
      

      font-eb-garamond
      font-normal

      text-[#E3D0A5]

      text-[54px]
      md:text-[62px]
      lg:text-[72px]

      leading-none

      opacity-70

      select-none
    "
                  >
                    {item.number}
                  </span>

                  {/* Main Number */}

                  <span
                    className="
      absolute

      left-0
      top-0

      font-eb-garamond
      font-normal

      text-[#C9A96E]

      text-[54px]
      md:text-[62px]
      lg:text-[72px]

      leading-none

      select-none
    "
                  >
                    {item.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h4
                    className="
                      font-eb-garamond
                      font-semibold

                      text-[#741C28]

                      text-[22px]
                      md:text-[24px]

                      leading-[1.3]
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-2

                      max-w-[520px]

                      font-inter
                      font-medium

                      text-[15px]
                      md:text-[16px]

                      leading-6

                      text-[#1A1C1B]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default ValuesMission;
