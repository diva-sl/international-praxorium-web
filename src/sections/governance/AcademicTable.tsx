import linkedinIcon from "../../assets/icons/Linkedin 1.svg";

interface AcademicTableProps {
  name: string;
  designation: string;
  institution: string;
  linkedin: string;
}

const AcademicTable = ({
  name,
  designation,
  institution,
  linkedin,
}: AcademicTableProps) => {
  return (
    <tr className="border-b border-white/10 last:border-none transition-colors duration-300 hover:bg-white/5">
      <td className="px-5 py-6 font-inter text-[14px] font-medium text-white">
        {name}
      </td>

      <td className="px-5 py-6 font-inter text-[14px] font-medium text-white">
        {designation}
      </td>

      <td className="px-5 py-6 font-inter text-[14px] font-medium text-white">
        {institution}
      </td>

      <td className="px-5 py-6">
        <a href={linkedin} target="_blank" rel="noreferrer">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="h-5 w-5 rounded-xs transition-transform duration-300 hover:scale-110"
          />
        </a>
      </td>
    </tr>
  );
};

export default AcademicTable;
