import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import type { NavItemType } from "./navbar.types";

interface Props {
  item: NavItemType;
}

const NavItem = ({ item }: Props) => {
  if (item.children) {
    return (
      <div className="group relative">
        <button className="flex items-center gap-1 text-[15px] font-medium text-[#222] transition hover:text-[#741C28]">
          {item.label}
          <ChevronDown size={16} strokeWidth={2} />
        </button>

        <div
          className="
          invisible
          absolute
          left-0
          top-full
          z-50
          mt-5
          w-72
          overflow-hidden
          rounded-xl
          border
          border-gray-100
          bg-white
          opacity-0
          shadow-xl
          transition-all
          duration-300
          group-hover:visible
          group-hover:opacity-100
        "
        >
          {item.children.map((child) => (
            <NavLink
              key={child.href}
              to={child.href}
              className="block border-b px-6 py-4 text-sm transition hover:bg-gray-50 hover:text-[#741C28]"
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `
        relative
        flex
        items-center
        pl-3
        text-[15px]
        font-medium
        transition-all
        duration-300
        ${isActive ? "text-[#741C28]" : "text-[#222] hover:text-[#741C28]"}
      `
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span className="absolute left-0 h-7 w-[2px] bg-[#741C28]" />
          )}

          {item.label}
        </>
      )}
    </NavLink>
  );
};

export default NavItem;
