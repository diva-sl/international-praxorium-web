import { motion } from "framer-motion";

import seedIcon from "../../assets/icons/seed.svg";
import venturesIcon from "../../assets/icons/ventures.svg";
import marketIcon from "../../assets/icons/market.svg";

const audience = [
  {
    icon: seedIcon,
    description: "Founders at seed stage",
  },
  {
    icon: venturesIcon,
    title: "Startup Founders",
    description: "Corporate innovators seeking to incubate new ventures",
  },
  {
    icon: marketIcon,
    description:
      "Established businesses looking to enter new markets or adopt new business models",
  },
];

const Audience = () => {
  return (
    <section
      className="
        bg-[#F8F5F3]
        py-8
        md:py-12
        lg:py-14
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
        {/* Heading */}
        <div className="max-w-[720px]">
          <h2
            className="
      mt-5

      font-eb-garamond
      font-semibold

      text-[#631015]

      text-[24px]
      md:text-[32px]
      lg:text-[36px]

      leading-[1.08]
    "
          >
            Who It Is For
          </h2>

          <span
            className="
      mt-3
      block

      font-inter
      font-medium
      italic

      text-[15px]
      md:text-[16px]

      leading-7

      text-[#1A1C1B]/60
    "
          >
            The Living Lab Institute welcomes
          </span>
        </div>
        {/* Cards */}

        <div
          className="
    mt-12

    grid

    gap-5

    md:grid-cols-2
    xl:grid-cols-3
  "
        >
          {audience.map((item, index) => (
            <motion.div
              key={item.description}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
              className="
        group
    bg-white

        flex
        items-center

        gap-4

        h-full
        min-h-[120px]

        rounded-sm

        border
        border-[#E8E3DD]

        bg-[#F8F5F3]

        px-6
        py-6

        transition-all
        duration-300

        hover:border-[#631015]
        hover:shadow-md
      "
            >
              {/* Icon */}
              <div
                className="
    flex

    h-20
    w-20

    shrink-0

    items-center
    justify-center



  "
              >
                <img
                  src={item.icon}
                  alt=""
                  className="
  h-11
  w-11

  object-contain

          "
                />
              </div>

              {/* Content */}

              <div className="flex flex-1 items-center">
                <p
                  className="
  font-inter
  font-medium

  text-[14px]
  md:text-[12px]

  leading-5

  text-[#1A1C1B]
"
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
