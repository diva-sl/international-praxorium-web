import ProgrammeCard from "./ProgrammeCard";
import { programmes } from "./programme.data";

const ProgrammeGrid = () => {
  return (
    <section
      className="
        bg-[#F8F5F3]
        pb-20
        lg:pb-28
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
        <div
          className="
            grid
            gap-8

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {programmes.map((programme, index) => (
            <ProgrammeCard
              key={`${programme.title}-${index}`}
              {...programme}
              index={index}
            />
          ))}
        </div>

        {/* Note */}

        <div
          className="
    mt-16

    max-w-[960px]

    border-l-[4px]
    border-[#631015]

    bg-[#F7F3F1]

    px-6
    py-5

    md:px-8
    md:py-6
  "
        >
          <h4
            className="
      font-inter
      font-bold

      text-[16px]
      md:text-[17px]

      text-[#D50000]
    "
          >
            Note:
          </h4>

          <p
            className="
      mt-3

      font-inter
      font-medium

      text-[15px]
      md:text-[16px]

      leading-8

      text-[#1A1C1B]
    "
          >
            Additional programmes are in development across the Praxorium's
            three schools. Institutions interested in partnership or individuals
            wishing to express interest in forthcoming programmes are invited to
            contact us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeGrid;
