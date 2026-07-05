import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Programs from "../pages/Programs/Programs";
import Schools from "../pages/Schools/Schools";
import LivingLab from "../pages/Schools/LivingLab/LivingLab";

// import Governance from "../pages/Governance/Governance";
// import Contact from "../pages/Contact/Contact";
// import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/schools" element={<Schools />} />

        <Route path="/schools/living-lab" element={<LivingLab />} />
        {/* 



        <Route path="/governance" element={<Governance />} />

        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
