import livingLabHero from "../../assets/images/livingLabHero.png";

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

          h-[210px]
          sm:h-[240px]
          md:h-[280px]
          lg:h-[320px]
          xl:h-[350px]
        "
      >
        {/* Background */}

        <img
          src={livingLabHero}
          alt="Living Lab Institute"
          className="
            absolute
            inset-0

            w-full
            h-full

            object-cover
            object-[center_28%]
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0

            bg-[#3B181A]/62
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-black/10
            via-transparent
            to-black/30
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
          <div className="max-w-[900px]">
            <h1
              className="
                font-eb-garamond
                font-semibold

                text-white

                text-[34px]
                sm:text-[42px]
                md:text-[50px]
                lg:text-[56px]

                leading-none
              "
            >
              Living Lab Institute
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
