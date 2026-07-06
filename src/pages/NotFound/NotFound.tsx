import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-white px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            font-inter
            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#631015]
          "
        >
          ERROR 404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            mt-4

            font-eb-garamond
            font-semibold

            leading-none

            text-[#631015]

            text-[70px]

            sm:text-[100px]

            lg:text-[150px]
          "
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-2

            font-eb-garamond
            font-semibold

            text-[#1A1C1B]

            text-[34px]

            lg:text-[46px]
          "
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            mx-auto

            mt-6

            max-w-xl

            font-inter
            font-medium

            leading-8

            text-[#666]
          "
        >
          The page you are looking for may have been moved, deleted, or the
          address may be incorrect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Link
            to="/"
            className="
              inline-flex
              items-center
              justify-center

              rounded-sm

              bg-[#631015]

              px-10
              py-4

              font-inter
              font-semibold

              text-white

              transition

              hover:bg-[#4F0C11]
            "
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
