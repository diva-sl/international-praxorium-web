import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-6 md:px-8 xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
