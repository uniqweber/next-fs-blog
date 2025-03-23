"use client";

import {navRoutes} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";
import ToggleButton from "./ui/ToggleButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const path = usePathname();
  const isActive = (pathname: string) => pathname === path;
  const handleToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="bg-white relative z-10">
      <div className="flex items-center justify-between h-16 max-container">
        <h5 className="text-2xl font-bold relative z-20">MindInk</h5>

        {/* Menu */}
        <nav
          className={`fixed top-0 z-0 left-0 right-0 h-full w-full bg-white flex flex-col md:flex-row items-center justify-center md:static md:h-auto md:w-auto gap-8 md:gap-4 transition-all duration-300 ease-in-out  ${
            isOpen ? "scale-100 opacity-100  " : "opacity-0 md:opacity-100 rounded-bl-full scale-0 md:scale-100 "
          }`}
          style={{transformOrigin: "top right"}}
        >
          {navRoutes.map((route, index) => (
            <Link
              key={route.name + index}
              href={route.href}
              className={`${isActive(route.href) ? "font-bold text-blue-600" : "font-medium text-gray-600"} text-4xl md:text-base  `}
              onClick={handleToggle}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <ToggleButton isOpen={isOpen} handleToggle={handleToggle} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
