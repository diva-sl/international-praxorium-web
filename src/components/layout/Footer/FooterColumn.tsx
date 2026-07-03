import { Link } from "react-router-dom";

interface LinkItem {
  label: string;
  href: string;
}

interface Props {
  title: string;
  links: LinkItem[];
}

const FooterColumn = ({ title, links }: Props) => {
  return (
    <div>
      {/* Heading */}

      <h3
        className="
          font-inter
          text-[18px]
          font-medium
          text-white/60
        "
      >
        {title}
      </h3>

      {/* Links */}

      <ul className="mt-8 space-y-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="
                group
                inline-block
                font-inter
                text-[18px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:text-[#C5A46D]
              "
            >
              <span
                className="
                  relative
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[1px]
                  after:w-0
                  after:bg-[#C5A46D]
                  after:transition-all
                  after:duration-300
                  group-hover:after:w-full
                "
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
