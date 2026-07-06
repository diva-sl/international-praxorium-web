import linkedinIcon from "../../assets/icons/Linkedin 1.svg";
import avatar from "../../assets/icons/avatar.svg";

interface ExecutiveCardProps {
  image: string;
  name: string;
  designation: string;
  institution: string;
  linkedin: string;
}

const ExecutiveCard = ({
  image,
  name,
  designation,
  institution,
  linkedin,
}: ExecutiveCardProps) => {
  return (
    <div className="relative h-full border-r border-b border-[#E7D9D5] bg-white p-5 transition duration-300 hover:bg-[#FCFAF8]">
      <a
        href={linkedin}
        className="absolute right-4 top-4"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="" className="h-5 w-5" />
      </a>

      <img
        src={image || avatar}
        alt={name}
        className="mb-5 h-12 w-12 object-cover border border-[#DDD]"
      />

      <h3 className="font-eb-garamond text-[18px] font-semibold leading-snug text-[#1A1C1B]">
        {name}
      </h3>

      <p className="mt-2 font-inter text-[14px] font-medium text-[#631015]">
        {designation}
      </p>

      <p className="mt-2 font-inter font-regular text-[12px] leading-6 text-[#0A192F]/50">
        {institution}
      </p>
    </div>
  );
};

export default ExecutiveCard;
