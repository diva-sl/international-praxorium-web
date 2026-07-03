import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import arrowRight from "../../../assets/icons/ArrowRight.svg";

interface Props {
  logo: string;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const SchoolCard = ({ logo, title, description, link, delay }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{
        once: true,
      }}
      className="
        group
        flex
        h-full
      "
    >
      <div
        className="
          flex
          w-full
          flex-col

          rounded-[20px]
          border
          border-[#E8E4DD]

          bg-white

          px-8
          py-10

          shadow-[0_12px_35px_rgba(0,0,0,0.05)]

          transition-all
          duration-300

          hover:-translate-y-2
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]
        "
      >
        {/* Logo */}

        <div
          className="
            flex
            justify-center
            items-center
            h-[120px]
          "
        >
          <img
            src={logo}
            alt={title}
            className="
              max-h-[85px]
              w-auto
              object-contain
            "
          />
        </div>

        {/* School Name */}

        <h3
          className="
            mt-8

            text-center

            font-eb-garamond
            font-semibold

            text-[#741C28]

            text-[22px]
            md:text-[24px]
            leading-tight
          "
        >
          {title}
        </h3>

        {/* Divider */}

        <div
          className="
            mx-auto
            mt-6
            h-[1px]
            w-full
            bg-[#C7A464]
          "
        />

        {/* Description */}

        <p
          className="
            mt-6

            flex-1

            font-inter
            font-medium

            text-[16px]
            leading-8

            text-[#333333]
          "
        >
          {description}
        </p>

        {/* Discover */}

        <Link
          to={link}
          className="
            group/link

            mt-8

            inline-flex
            items-center

            gap-2

            font-inter
            font-semibold

            text-[18px]

            text-[#741C28]

            transition-all
            duration-300
          "
        >
          Discover
          <img
            src={arrowRight}
            alt="Arrow"

            className="
              h-5
              w-5

              transition-all
              duration-300

              group-hover/link:translate-x-1
            "
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default SchoolCard;
