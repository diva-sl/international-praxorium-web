import { motion } from "framer-motion";

import filterIcon from "../../assets/icons/fillter.svg";
import searchIcon from "../../assets/icons/search.svg";

const categories = ["MBA", "PhD", "EXECUTIVE"];

const Explore = () => {
  return (
    <section
      className="
        bg-[#F8F5F3]

        py-16
        md:py-20
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
        {/* Header */}

        <div
          className="
            flex
            flex-col
            gap-8

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2
              className="
                font-eb-garamond
                font-semibold

                text-[#741C28]

                text-[34px]
                md:text-[42px]
                lg:text-[48px]
              "
            >
              Explore Programmes
            </h2>

            {/* Tabs */}

            <div
              className="
                mt-7

                flex
                flex-wrap

                gap-8
              "
            >
              <button
                className="
                  relative

                  font-inter
                  font-semibold

                  text-[14px]

                  text-[#741C28]

                  after:absolute
                  after:left-0
                  after:-bottom-2

                  after:h-[2px]
                  after:w-full

                  after:bg-[#741C28]
                "
              >
                View by Programmes
              </button>

              <button
                className="
                  font-inter
                  font-medium

                  text-[14px]

                  text-[#8E8E8E]

                  hover:text-[#741C28]
                "
              >
                View by Host Institution
              </button>
            </div>
          </motion.div>

          {/* Search */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              w-full
              lg:w-[300px]
            "
          >
            <div
              className="
                flex
                items-center

                border-b
                border-[#741C28]
                pb-2
              "
            >
              <input
                type="text"
                placeholder="Search"
                className="
                  flex-1

                  bg-transparent

                  font-inter
                  text-[15px]

                  outline-none

                  placeholder:text-[#888888]
                "
              />

              <img
                src={searchIcon}
                alt="Search"
                className="
                  w-5
                  h-5
                "
              />
            </div>
          </motion.div>
        </div>

        {/* Filter Row */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mt-10

            flex
            flex-wrap

            items-center

            gap-4
          "
        >
          {/* Filter */}

          <button
            className="
              flex
              items-center
              justify-center

              w-12
              h-12

              rounded-md

              bg-white

              border
              border-[#ECECEC]

              hover:border-[#741C28]
              transition
            "
          >
            <img
              src={filterIcon}
              alt="Filter"
              className="
                w-6
                h-6
              "
            />
          </button>

          {/* Categories */}

          {categories.map((category, index) => (
            <button
              key={category}
              className={`
                h-12

                rounded-md

                px-7

                font-inter
                font-semibold

                text-[14px]

                transition

                ${
                  index === 0
                    ? "bg-white text-[#1A1C1B] border border-[#E6E6E6]"
                    : "bg-[#ECECEC] text-[#3F3F3F] hover:bg-white border border-transparent"
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Explore;
