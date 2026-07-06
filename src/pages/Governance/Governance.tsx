import AcademicBoard from "../../sections/governance/AcademicBoard";
import ExecutiveBoard from "../../sections/governance/ExecutiveBoard";
import Hero from "../../sections/governance/Hero";
import OperationsLeadership from "../../sections/governance/OperationsLeadership";
import Principles from "../../sections/governance/Principles";

const Governance = () => {
  return (
    <>
      <Hero />
      <Principles />
      <ExecutiveBoard />
      <AcademicBoard />
      <OperationsLeadership />
    </>
  );
};

export default Governance;
