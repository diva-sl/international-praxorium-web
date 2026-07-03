import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { navItems } from "./navbar.data";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: Props) => {
  const [expanded, setExpanded] = useState("");

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-[90]
          transition-all duration-300
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-[100]
          h-screen
          w-[320px]
          bg-white
          shadow-2xl
          transition-all
          duration-500
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 h-24">
          <h2 className="font-serif text-2xl text-[#741C28]">Menu</h2>

          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        {/* Menu */}

        <div className="py-4">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.href}>
                  <button
                    onClick={() =>
                      setExpanded(expanded === item.label ? "" : item.label)
                    }
                    className="flex w-full items-center justify-between px-6 py-4 font-medium"
                  >
                    {item.label}

                    <ChevronDown
                      size={18}
                      className={`transition ${
                        expanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expanded === item.label && (
                    <div className="bg-gray-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={onClose}
                          className="block px-10 py-3 text-sm hover:text-[#741C28]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className="block px-6 py-4 font-medium hover:text-[#741C28]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
