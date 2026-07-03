import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
