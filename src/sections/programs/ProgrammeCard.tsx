import { motion } from "framer-motion";

interface ProgrammeCardProps {
  image: string;
  logo: string;
  institution: string;
  country: string;
  title: string;
  category: string;
  duration: string;
  mode: string;
  status: string;
  degree: string;
  partner: string;
  index?: number;
}

const ProgrammeCard = ({
  image,
  logo,
  institution,
  country,
  title,
  category,
  duration,
  mode,
  status,
  degree,
  partner,
  index = 0,
}: ProgrammeCardProps) => {
  return (
    <motion.article
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
        delay: index * 0.08,
      }}
      viewport={{
        once: true,
      }}
      className="
flex
flex-col

h-full
min-h-[610px]

overflow-hidden

border
border-[#ECE7E3]

bg-white

transition-all
duration-300

hover:-translate-y-1
hover:shadow-lg
"
    >
      {/* Image */}

      {/* Image */}

      <div
        className="
    px-4
    pt-4
  "
      >
        <div
          className="
      overflow-hidden
    "
        >
          <img
            src={image}
            alt={title}
            className="
        w-full

        h-[195px]
        md:h-[205px]

        object-cover

        transition
        duration-500

        hover:scale-[1.03]
      "
          />
        </div>
      </div>
      {/* Content */}

      <div className="px-4 py-4">
        {/* Institution */}

        <div
          className="
flex
items-end
justify-between

h-[42px]
"
        >
          <img
            src={logo}
            alt={institution}
            className="
              h-10
              w-auto
              object-contain
            "
          />
          <span
            className="
font-inter
font-semibold

text-[13px]

text-[#1A1C1B]/70
"
          >
            {country}
          </span>
        </div>

        {/* Labels */}

        <div
          className="
    mt-4

    flex
    items-center

    gap-6
  "
        >
          <p
            className="
    shrink-0

    font-inter
    font-normal

    text-[10px]

    text-[#1A1C1B]/55
  "
          >
            Host Institution
          </p>

          <p
            className="
    font-inter
    font-medium

    text-[12px]

    text-[#1A1C1B]

    truncate
  "
          >
            {institution}
          </p>
        </div>

        {/* Title */}

        <div className="pt-3">
          <h3
            className="
      h-[30px]

      overflow-hidden
      whitespace-nowrap
      text-ellipsis

      font-inter
      font-medium

      text-[16px]
      md:text-[17px]
      lg:text-[18px]

      leading-[1.2]

      text-[#631015]
    "
          >
            {title}
          </h3>
        </div>
        {/* Category */}

        <p
          className="
mt-3

h-[66px]

overflow-hidden

font-inter
font-normal
text-[#1A1C1B]/55

text-[14px]

leading-6

"
        >
          {category}
        </p>

        {/* Duration */}
        <div
          className="
mt-5

flex
items-center
justify-between
"
        >
          <div
            className="
flex
items-center

gap-3
"
          >
            <span
              className="
font-inter
font-semibold

text-[14px]

text-[#1A1C1B]/75
"
            >
              {duration}
            </span>

            <div
              className="
h-4
w-px

bg-[#CFCFCF]
"
            />

            <span
              className="
font-inter
font-semibold

text-[14px]

text-[#1A1C1B]/75
"
            >
              {mode}
            </span>
          </div>
          <span
            className="
rounded-[4px]

border
border-[#70B775]

bg-[#43A047]/10

px-3
py-[4px]

font-inter
font-semibold

text-[12px]

text-[#1B5E20]
"
          >
            {status}
          </span>
        </div>

        {/* Bottom */}

        <div
          className="
    mt-6

    space-y-4
  "
        >
          {/* Degree */}

          <div
            className="
      grid
      grid-cols-[108px_1fr]

      items-center

      gap-2
    "
          >
            <span
              className="
        font-inter
        font-normal
        text-[13px]
        text-[#1A1C1B]/55
      "
            >
              Degree / Award
            </span>

            <span
              className="
        font-inter
        font-medium
        text-[13px]
        leading-6
        text-[#1A1C1B]
      "
            >
              {degree}
            </span>
          </div>

          {/* Global Partner */}

          <div
            className="
      grid
      grid-cols-[108px_1fr]

      items-center

      gap-2
    "
          >
            <span
              className="
        font-inter
        font-normal
        text-[13px]
        text-[#1A1C1B]/55
      "
            >
              Global Partner
            </span>

            <span
              className="
        flex
        items-center

        min-h-[44px]

        font-inter
        font-medium

        text-[13px]
        leading-6

        text-[#1A1C1B]
      "
            >
              {partner}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProgrammeCard;
