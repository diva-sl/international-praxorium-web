import { motion } from "framer-motion";
import DirectorCard from "./DirectorCard";
import { operationsLeadership } from "./governanceData";

const OperationsLeadership = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2
              className="
                font-eb-garamond
                font-semibold
                text-[#631015]
                leading-tight

                text-[34px]
                sm:text-[40px]
                lg:text-[46px]
              "
            >
              Operations &
              <br />
              Leadership
            </h2>

            <p
              className="
                mt-8
                max-w-md
                font-inter
                font-medium
                text-[15px]
                leading-6
                text-[#1A1C1B]
              "
            >
              Ensuring operational excellence in line with the vision set by the
              Board. Our directors champion the mission to elevate global
              standing in education and innovation.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {operationsLeadership.map((member) => (
                <DirectorCard key={member.name} {...member} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Watermark */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-6
            hidden
            lg:block

            font-eb-garamond
            text-[110px]
            font-semibold
            text-[#F8F5F2]
            select-none
          "
        >
          Praxorium
        </div>
      </div>
    </section>
  );
};

export default OperationsLeadership;
