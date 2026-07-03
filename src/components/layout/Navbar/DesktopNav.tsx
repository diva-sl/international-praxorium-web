import NavItem from "./NavItem";
import { navItems } from "./navbar.data";

const DesktopNav = () => {
  return (
    <nav className="hidden xl:flex items-center gap-10">
      {navItems.map((item) => (
        <NavItem key={item.href} item={item} />
      ))}
    </nav>
  );
};

export default DesktopNav;
