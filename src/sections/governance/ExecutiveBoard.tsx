import { motion } from "framer-motion";
import ExecutiveCard from "./ExecutiveCard";
import { executiveBoard } from "./governanceData";

const ExecutiveBoard = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        {/* Header */}
        <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-inter text-[13px] font-semibold uppercase tracking-wide text-[#631015]">
              Strategic Direction
            </p>

            <h2 className="mt-3 font-eb-garamond text-[28px] font-semibold text-[#631015] lg:text-[42px]">
              Executive Board
            </h2>
          </div>

          <div className="max-w-[420px] lg:ml-auto">
            <p className="font-inter font-medium text-[15px] leading-6 text-[#1A1C1B]/50">
              Steering the strategic direction of the Praxorium and safeguarding
              long-term sustainability across global education.
            </p>
          </div>
        </div>

        {/* Board */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-sm border border-[#E7D9D5]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {executiveBoard.map((member) => (
              <ExecutiveCard key={member.name} {...member} />
            ))}

            {/* Empty last cell like the design */}
            <div className="hidden border-r border-b border-[#E7D9D5] bg-white lg:block"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveBoard;
