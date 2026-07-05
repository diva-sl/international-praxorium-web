import { motion } from "framer-motion";

import arrowRight from "../../assets/icons/ArrowRight.svg";

import schools from "./schools.data";

const SchoolsGrid = () => {
  return (
    <section
      className="
        bg-white

        pb-20
        lg:pb-28
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
    gap-8

    lg:grid-cols-2

    items-stretch
  "
        >
          {schools.map((school, index) => (
            <motion.article
              key={school.title}
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
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="
    flex
    flex-col

    h-full

    border
    border-[#ECE7E3]

    bg-white
  "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={school.image}
                  alt={school.title}
                  className="
      w-full
      h-[320px]
      md:h-[380px]

      object-cover
         transition
                    duration-700

                    hover:scale-[1.03]
    "
                />
              </div>

              {/* Content */}
              <div
                className="
    flex
    flex-1
    flex-col

    px-8
    py-8
  "
              >
                <span
                  className="
                    font-inter
                    font-regular

                    uppercase

                    tracking-[0.14em]

                    text-[12px]

                    text-[#6B6B6B]
                    
                  "
                >
                  {school.category}
                </span>

                <h2
                  className="
                    mt-5

                    font-eb-garamond
                    font-semibold

                    text-[#631015]

                    text-[34px]
                    md:text-[40px]

                    leading-[1.15]
                  "
                >
                  {school.title}
                </h2>

                <div className="mt-6 space-y-6">
                  {school.description.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="
                        font-inter
                        font-medium

                        text-[15px]
                        md:text-[16px]

                        leading-7

                        text-[#1A1C1B]
                      "
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button
                  className="
    group

    mt-auto

    flex
    items-center
    gap-3

    pt-8

    font-inter
    font-semibold

    text-[16px]

    text-[#631015]
  "
                >
                  {school.button}

                  <img
                    src={arrowRight}
                    alt=""
                    className="
      w-5

      transition-transform
      duration-300

      group-hover:translate-x-2
    "
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsGrid;
