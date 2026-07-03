import { useEffect, useState } from "react";

const useNavbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return {
    sticky,
    mobileOpen,
    setMobileOpen,
  };
};

export default useNavbar;
