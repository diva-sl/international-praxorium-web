import FooterColumn from "./FooterColumn";

import { navigation, schools } from "./footer.data";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      className="
        bg-[#081C34]
     pt-24
pb-20
        overflow-hidden
      "
    >
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-6
          lg:px-12
        "
      >
        <div
          className="
            grid
            gap-12
lg:gap-16

            md:grid-cols-2

lg:grid-cols-[1.3fr_.8fr_1fr_.7fr]
xl:grid-cols-[1.4fr_.8fr_1fr_.7fr] "
        >
          {/* BRAND */}

          <div>
            <h1
              className="
    font-eb-garamond
    font-bold
    leading-none
    text-white/15
    select-none

    text-[110px]
    sm:text-[140px]
    lg:text-[170px]
    xl:text-[190px]
  "
            >
              IP
            </h1>
            <p
              className="
    mt-5
    max-w-[420px]
    font-eb-garamond
    font-semibold
    text-[18px]
    md:text-[20px]
    leading-[1.6]
    text-white
  "
            >
              The International Praxorium is a global alliance of specialist
              schools dedicated to education, research, and professional
              development — where knowledge meets purpose and practice.
            </p>
          </div>

          <FooterColumn title="Navigation" links={navigation} />
          <div>
            <FooterColumn title="Our Schools" links={schools} />

            <div className="mt-12">
              <h3
                className="
                  font-inter
                  text-[18px]
                  font-medium
                  text-white/60
                "
              >
                Contact
              </h3>

              <div
                className="
                  mt-6
                  space-y-5
                "
              >
                <a
                  href="mailto:info@internationalpraxorium.org"
                  className="
                    block

                    font-inter

                    text-[17px]

                    text-white

                    underline-offset-4

                    hover:text-[#C5A46D]

                    hover:underline
                  "
                >
                  info@internationalpraxorium.org
                </a>

                <a
                  href="mailto:partnerships@internationalpraxorium.org"
                  className="
                    block

                    font-inter

                    text-[17px]

                    text-white

                    underline-offset-4

                    hover:text-[#C5A46D]

                    hover:underline
                  "
                >
                  partnerships@internationalpraxorium.org
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3
              className="
                font-inter
                text-[18px]
                font-medium
                text-white/60
              "
            >
              Social Media
            </h3>

            <div
              className="
    mt-8
    flex
    items-center
    gap-6
  "
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
      text-white
      transition-all
      duration-300
      hover:text-[#C5A46D]
      hover:-translate-y-1
    "
              >
                <FaFacebookF size={22} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
      text-white
      transition-all
      duration-300
      hover:text-[#C5A46D]
      hover:-translate-y-1
    "
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
      text-white
      transition-all
      duration-300
      hover:text-[#C5A46D]
      hover:-translate-y-1
    "
              >
                <RiTwitterXLine size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
      text-white
      transition-all
      duration-300
      hover:text-[#C5A46D]
      hover:-translate-y-1
    "
              >
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
