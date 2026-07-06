interface DirectorCardProps {
  name: string;
  designation: string;
  description: string;
}

const DirectorCard = ({
  name,
  designation,
  description,
}: DirectorCardProps) => {
  return (
    <div
      className="
        rounded-sm
        border
        border-[#EFE6E2]
        bg-white
        p-6
        transition-all
        duration-300
        hover:border-[#631015]/30
        hover:-translate-y-1
      "
    >
      <h3 className="font-eb-garamond text-[22px] font-semibold leading-tight text-[#1A1C1B]">
        {name}
      </h3>

      <p className="mt-2 font-inter text-[15px] font-medium text-[#631015]">
        {designation}
      </p>

      <p className="mt-4 font-inter font-regular text-[14px] leading-6 text-[#0A192F]/60">
        {description}
      </p>
    </div>
  );
};

export default DirectorCard;
