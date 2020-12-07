import React, { ReactNode, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import ThemeToggle from "./ThemeToggle";

const MenuItems = ({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) => (
  <a href={href} className="block my-5 md:my-0 text-lg md:mr-6">
    {children}
  </a>
);

const Navbar = ({ className }: { className?: string }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <div
      className={
        show
          ? `flex items-center md:justify-between flex-col h-screen md:flex-row p-2 bg-bgc ${className}`
          : `flex items-center md:justify-between flex-col md:flex-row p-2 bg-bgc ${className}`
      }
    >
      <div className="flex justify-between w-full md:w-auto">
        <div className="flex items-center mx-5 ">
          <h1 className="text-6xl">Urvi</h1>
        </div>

        <div className="flex items-center md:hidden" onClick={handleToggle}>
          <BiMenuAltRight size={30} />
        </div>
      </div>

      <div
        className={
          show
            ? "flex md:flex-row flex-col items-center md:justify-between justify-center px-5 h-full"
            : "md:flex hidden md:flex-row flex-col items-center md:justify-between justify-center px-5 "
        }
      >
        <div className="flex md:mr-10 md:flex-row flex-col items-center">
          <MenuItems href="https://www.google.com">Docs</MenuItems>
          <MenuItems>Examples</MenuItems>
          <MenuItems>Blog</MenuItems>
        </div>
        <div className="flex justify-center items-center md:mr-5 ">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
