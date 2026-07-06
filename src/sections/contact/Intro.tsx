import { motion } from "framer-motion";
import contactImage from "../../assets/images/contactUs1.png";

const Intro = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-[560px]"
          >
            <p
              className="
                font-inter
                text-[13px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#631015]
              "
            >
              CONNECT WITH OUR ALLIANCE
            </p>

            <h2
              className="
                mt-5
                font-eb-garamond
                font-semibold
                leading-tight
                text-[#631015]

                text-[34px]
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              Where Knowledge Meets
              <br />
              Purpose & Practice
            </h2>

            <p
              className="
                mt-7
                max-w-[520px]

                font-inter
                font-medium
                text-[#1A1C1B]

                text-[15px]
                leading-6
              "
            >
              We welcome enquiries from prospective students, partner
              institutions, and collaborators. Whether you are exploring our
              specialist schools or seeking global partnerships, our team is
              ready to assist.
            </p>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-[540px] max-h-[360] flex justify-center"
          >
            {/* Wrapper */}

            <div className="relative">
              {/* Decorative Border */}

              <div
                className="
    absolute

    left-1/2
    top-[130px]

    -translate-x-1/2
    -translate-y-1/2

    w-[170px]
    h-[280px]

    sm:w-[190px]
    sm:h-[280px]

    md:left-1/2
    md:top-[180px]

    md:w-[210px]
    md:h-[320px]

    lg:w-[220px]
    lg:h-[380px]

    xl:left-[330px]
    xl:top-[180px]
    xl:w-[230px]
    xl:h-[380px]

    border-[2px]
    border-[#631015]
  "
              />
              {/* Image */}

              <div className="relative z-10 flex justify-end">
                <img
                  src={contactImage}
                  alt="International Praxorium"
                  className="
h-[220px]
w-[220px]

sm:h-[250px]
sm:w-[250px]

md:h-[270px]
md:w-[270px]

lg:h-[320px]
lg:w-[320px]

object-contain
bg-white

        "
                />
              </div>

              {/* Quote */}

              <div
                className="
relative
z-20
     bottom-[40px]
                    right-[10px]



    mx-auto
    w-[95%]

    sm:w-[92%]

    md:w-[90%]
    lg:w-[520px]
    xl:w-[560px]

    bg-[#631015]

     px-3
    py-2
    xl:px-5
    xl:py-4
    
"
              >
                <p
                  className="
      ml-[6px]

      font-eb-garamond
      italic
      font-semibold

      text-white

      text-[15px]

      sm:text-[17px]

      md:text-[19px]

      lg:text-[24px]

      leading-6
      lg:leading-7
    "
                >
                  "learn more about the International Praxorium"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
