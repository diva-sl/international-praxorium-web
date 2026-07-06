import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import signInIcon from "../../../assets/icons/Sign In Icon.svg";

import Container from "../Container/Container";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import useNavbar from "./useNavbar";

import logo from "../../../assets/logos/logo.svg";

const Navbar = () => {
  const { sticky, mobileOpen, setMobileOpen } = useNavbar();

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300
          ${sticky ? "bg-white shadow-md" : "bg-white border-b border-gray-100"}
        `}
      >
        <Container>
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}

            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="International Praxorium"
                className="
                  h-10
                  sm:h-12
                  md:h-14
                  w-auto
                  object-contain
                "
              />
            </Link>

            {/* Desktop Navigation */}

            <div className="hidden xl:flex flex-1 justify-center">
              <DesktopNav />
            </div>

            {/* Right */}

            <div className="hidden xl:flex items-center">
              <Link
                to="/signin"
                className="
    flex
    items-center
    gap-2

    font-inter
    font-medium

    text-[15px]
    text-[#1A1C1B]

    transition-all
    duration-300

    hover:text-[#631015]
  "
              >
                <img
                  src={signInIcon}
                  alt="Sign In"
                  className="h-5 w-5 object-contain"
                />

                <span>Sign In</span>
              </Link>
            </div>

            {/* Mobile */}

            <div className="xl:hidden">
              <Hamburger
                toggled={mobileOpen}
                toggle={setMobileOpen}
                size={22}
                rounded
                color="#741C28"
              />
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Navbar;
