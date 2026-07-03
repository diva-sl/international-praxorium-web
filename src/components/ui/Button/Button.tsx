import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className = "", ...props }: Props) => {
  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded
        border
        border-[#741C28]
        px-7
        py-3
        text-[15px]
        font-medium
        text-[#741C28]
        transition-all
        duration-300
        hover:bg-[#741C28]
        hover:text-white
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
