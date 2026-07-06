import { motion } from "framer-motion";

import facebook from "../../assets/icons/Facebook.svg";
import instagram from "../../assets/icons/Instagram.svg";
import linkedin from "../../assets/icons/LinkedIn.svg";
import twitter from "../../assets/icons/X logo.svg";

import { contactCards } from "./contactData";

const socials = [facebook, instagram, twitter, linkedin];

import ContactForm from "./ContactForm";

const ContactInfo = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
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

                text-[36px]
                lg:text-[42px]
              "
            >
              Get in Touch
            </h2>

            <div className="mt-10 space-y-5">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="
                    rounded-md
                    border
                    border-[#EFE7E2]
                    bg-white
                    p-6
                    transition
                    duration-300
                    hover:border-[#631015]/30
                  "
                >
                  <div className="flex items-center gap-4">
                    <img src={card.icon} alt="" className="h-14 w-14" />

                    <h3
                      className="
                        font-inter
                        font-medium
                        text-[18px]
                        text-[#631015]
                      "
                    >
                      {card.title}
                    </h3>
                  </div>

                  <a
                    href={`mailto:${card.email}`}
                    className="
                      mt-5
                      block

                      font-inter
                      font-medium
                      text-[14px]

                      underline

                      text-[#1A1C1B]
                    "
                  >
                    {card.email}
                  </a>
                </div>
              ))}
            </div>

            {/* Social */}

            <div className="mt-14">
              <h3
                className="
                  font-inter
                  font-medium
                  text-[20px]
                  text-[#000000]
                "
              >
                Find Us Online
              </h3>

              <div className="mt-8 flex gap-7">
                {socials.map((icon, index) => (
                  <button key={index}>
                    <img
                      src={icon}
                      alt=""
                      className="h-6 w-6 transition hover:scale-110"
                    />
                  </button>
                ))}
              </div>

              <p
                className="
                  mt-8
                  max-w-sm

                  font-inter
                  text-[15px]
                  leading-8

                  text-[#000000]/60
                "
              >
                Follow us on social media for programme updates, research
                highlights, and partnership news.
              </p>
            </div>
          </motion.div>

          {/* Right */}

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
