import { motion } from "framer-motion";
import AcademicTable from "./AcademicTable";
import { academicBoard } from "./governanceData";

const AcademicBoard = () => {
  return (
    <section className="bg-[#0A192F] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C9A96E]">
            Academic Rigour
          </p>

          <h2 className="mt-3 font-eb-garamond text-[28px] font-semibold text-[#C9A96E] sm:text-[34px] lg:text-[42px]">
            Board for Academic Excellence
          </h2>

          <p className="mt-6 max-w-3xl font-inter font-medium text-[15px] leading-7 text-white">
            Comprising eminent scholars and industry leaders, providing
            strategic guidance on curriculum design, research priorities, and
            pedagogical innovation.
          </p>
        </motion.div>

        {/* Desktop Table */}

        <div className="mt-12 hidden overflow-hidden rounded-md lg:block">
          <table className="w-full border-collapse">
            <thead className="bg-[#09162A]">
              <tr>
                <th className="px-5 py-5 text-left font-inter text-[14px] font-medium text-[#C9A96E]">
                  Member Name
                </th>

                <th className="px-5 py-5 text-left font-inter text-[14px] font-medium text-[#C9A96E]">
                  Designation
                </th>

                <th className="px-5 py-5 text-left font-inter text-[14px] font-medium text-[#C9A96E]">
                  Institution
                </th>

                <th className="px-5 py-5 text-left font-inter text-[14px] font-medium text-[#C9A96E]">
                  Connect
                </th>
              </tr>
            </thead>

            <tbody>
              {academicBoard.map((member) => (
                <AcademicTable key={member.name} {...member} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}

        <div className="mt-10 grid gap-5 lg:hidden">
          {academicBoard.map((member) => (
            <div
              key={member.name}
              className="rounded-lg border border-white/10 bg-[#09162A] p-5"
            >
              <h3 className="font-eb-garamond text-[20px] text-white">
                {member.name}
              </h3>

              <p className="mt-3 font-inter text-[14px] text-[#C9A96E]">
                {member.designation}
              </p>

              <p className="mt-2 font-inter text-[14px] text-white">
                {member.institution}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex"
              >
                <img
                  src="../../assets/icons/Linkedin 1.svg"
                  alt="LinkedIn"
                  className="h-5 w-5"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicBoard;
