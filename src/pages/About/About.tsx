import AboutBanner from "../../sections/about/AboutBanner";
import CtaBanner from "../../sections/about/CtaBanner";
import Governance from "../../sections/about/Governance";
import KnowledgePartnership from "../../sections/about/KnowledgePartnership";
import Meaning from "../../sections/about/Meaning";
import Strategy from "../../sections/about/Strategy";
import ValuesMission from "../../sections/about/ValuesMission";

const About = () => {
  return (
    <>
      <AboutBanner />
      <Meaning />
      <KnowledgePartnership />
      <Strategy />

      <ValuesMission />
      <Governance />
      <CtaBanner />
    </>
  );
};

export default About;
