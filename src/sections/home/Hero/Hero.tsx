import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import { motion } from "framer-motion";
// import { ArrowRight, ArrowDown } from "lucide-react";

import banner1 from "../../../assets/images/Banner.png";
import banner2 from "../../../assets/images/Banner2.png";
import banner3 from "../../../assets/images/Banner3.png";
import banner4 from "../../../assets/images/Banner4.png";
import banner5 from "../../../assets/images/Banner5.png";

import arrowRight from "../../../assets/icons/ArrowRight.svg";
import circleArrowDown from "../../../assets/icons/CircleArrowDown.svg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: banner1,
    title: "Where Knowledge Meets Purpose & Practice",
    subtitle:
      "International Praxorium is a global alliance of specialist schools, connecting scholars, practitioners and institutions through innovative education, leadership, research and meaningful partnerships.",
    button: "Discover More",
  },
  {
    id: 2,
    image: banner2,
    title: "Empowering Future Leaders Through Global Education",
    subtitle:
      "Explore internationally recognised learning experiences designed to inspire innovation, collaboration and lifelong leadership for tomorrow's global challenges.",
    button: "Explore Programs",
  },
  {
    id: 3,
    image: banner3,
    title: "Building International Partnerships That Transform Learning",
    subtitle:
      "Together with universities, educators and industry experts, Praxorium creates impactful academic pathways that connect knowledge with real-world practice.",
    button: "Our Network",
  },
  {
    id: 4,
    image: banner4,
    title: "Inspiring Innovation, Research & Excellence",
    subtitle:
      "Experience interdisciplinary education where innovation, leadership and research empower individuals to become catalysts for positive global change.",
    button: "Learn More",
  },
  {
    id: 5,
    image: banner5,
    title: "Shaping Tomorrow's Global Changemakers",
    subtitle:
      "Join a vibrant international academic community dedicated to excellence, sustainability, entrepreneurship and transformative learning experiences.",
    button: "Join Praxorium",
  },
];

const Hero = () => {
  const scrollNext = () => {
    const nextSection = document.getElementById("mission");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // className="hero-swiper h-[calc(100vh-96px)] min-h-[700px]"
        className="
hero-swiper
h-[calc(100vh-96px)]
min-h-[650px]
sm:min-h-[700px]
"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section
              className="
relative
h-[calc(100vh-96px)]
min-h-[650px]
sm:min-h-[700px]
bg-cover
bg-center
bg-no-repeat
"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}

              <div className="absolute inset-0 bg-black/35" />

              {/* Content */}

              <div
                className="
                  relative
                  z-20
                  flex
                  h-full
                  items-center
                  justify-center
                  px-6
                "
              >
                <div className="mx-auto max-w-5xl text-center">
                  {/* Heading */}

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="
                      mx-auto
                      max-w-5xl
                      font-serif
                      text-white
                      text-[34px]
                      sm:text-[46px]
                      md:text-[56px]
                      lg:text-[68px]
                      xl:text-[76px]
                      font-semibold
                      leading-[1.15]
                      tracking-[-0.02em]
                    "
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Subtitle */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.8,
                    }}
                    className="
                      mx-auto
                      mt-8
                      max-w-3xl
                      text-base
                      md:text-lg
                      lg:text-xl
                      leading-8
                      text-white/90
                    "
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="
    group
    mt-12
    inline-flex
    items-center
    gap-3
    rounded-md
    bg-white
    px-10
    py-4
    text-[15px]
    font-semibold
    text-[#741C28]
    shadow-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-[#741C28]
    hover:text-white
  "
                  >
                    <span>{slide.button}</span>

                    <img
                      src={arrowRight}
                      alt="Arrow Right"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center bg-white py-4">
        <button
          onClick={scrollNext}
          className="transition-all duration-300 hover:scale-105"
        >
          <img
            src={circleArrowDown}
            alt="Scroll Down"
            className="
        w-10
        h-10
        sm:w-12
        sm:h-12
        md:w-14
        md:h-14
      "
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
