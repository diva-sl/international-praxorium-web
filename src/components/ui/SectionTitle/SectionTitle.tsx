interface SectionTitleProps {
  subTitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionTitle = ({
  subTitle,
  title,
  description,
  align = "left",
}: SectionTitleProps) => {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="uppercase tracking-[3px] text-[#A88C65] text-sm mb-3">
        {subTitle}
      </p>

      <h2
        className="
        text-5xl
        font-serif
        text-[#741C28]
        leading-tight
        mb-5
        "
      >
        {title}
      </h2>

      {description && (
        <p className="text-gray-600 max-w-xl leading-8">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
