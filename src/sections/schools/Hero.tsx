import heroImage from "../../assets/images/schoolHero.png";

const Hero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
      "
    >
      <div
        className="
    relative
h-[200px]
sm:h-[235px]
md:h-[275px]
lg:h-[305px]
xl:h-[300px]
  "
      >
        {/* Background */}

        <img
          src={heroImage}
          alt="Our Schools"
          className="
    absolute
    inset-0

    w-full
    h-auto

    object-contain
  "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-[#3B181A]/68
          "
        />

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-black/10
            via-transparent
            to-black/25
          "
        />

        {/* Content */}

        <div
          className="
            relative
            z-10

            flex
            h-full

            items-center
            justify-center

            px-6

            text-center
          "
        >
          <div className="max-w-[760px]">
            <h1
              className="
                font-eb-garamond
                font-semibold

                text-white

                text-[36px]
                sm:text-[44px]
                md:text-[52px]
                lg:text-[60px]

                leading-none
              "
            >
              Our Schools
            </h1>

            <p
              className="
                mx-auto
                mt-6

                max-w-[620px]

                font-inter
                font-medium

                text-[14px]
                md:text-[16px]

                leading-7

                text-white/95
              "
            >
              Three specialist schools, each with a distinct mission, united
              within the Praxorium framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
