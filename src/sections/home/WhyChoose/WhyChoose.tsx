import { Globe, GraduationCap, ShieldCheck, Users } from "lucide-react";

import { motion } from "framer-motion";

import Container from "../../../components/layout/Container/Container";

const features = [
  {
    title: "Global Education",
    description:
      "International academic collaborations and worldwide learning opportunities.",
    icon: Globe,
  },
  {
    title: "Leadership",
    description: "Developing ethical and visionary leaders for tomorrow.",
    icon: GraduationCap,
  },
  {
    title: "Integrity",
    description: "Built on responsibility, stewardship and trust.",
    icon: ShieldCheck,
  },
  {
    title: "Community",
    description: "A vibrant network of students, educators and partners.",
    icon: Users,
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#F9F8F5] py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="uppercase tracking-[6px] text-[#C6A25B] text-sm">
            Why Praxorium
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-serif text-[#741C28]">
            A Different Way
            <br />
            To Learn
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            International Praxorium creates future-ready leaders through
            interdisciplinary education, innovation and global partnerships.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  rounded-3xl
                  bg-white
                  p-10
                  shadow-lg
                  hover:shadow-2xl
                  transition
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#741C28] text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-serif text-[#741C28]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
