import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import ThemeToggle from "./ThemeToggle";

const MenuItems = ({ children }) => (
  <span className="block mt-4 mr-6">{children}</span>
);

const Navbar = ({ className }: { className?: string }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <div
      className={`flex items-center justify-between flex-wrap p-2 bg-red-500 ${className}`}
    >
      <div className="flex items-center mr-5">
        <h1 className="text-6xl">Urvi</h1>
      </div>

      <div className="block md:hidden" onClick={handleToggle}>
        <BiMenuAltRight size={30} />
      </div>

      <div
        className={
          show
            ? "md:flex block md:w-auto w-full flex-grow"
            : "md:flex hidden md:w-auto w-full flex-grow"
        }
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
        <MenuItems>
          <ThemeToggle />
        </MenuItems>
      </div>
    </div>
  );
};

export default Navbar;
