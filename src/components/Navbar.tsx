"use client";

import {navRoutes} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useEffect, useState} from "react";
import ToggleButton from "./ui/ToggleButton";

const Navbar = () => {
  const path = usePathname();
  const isActive = (pathname: string) => pathname === path;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between h-16 max-container">
        <h5 className="text-2xl font-bold relative z-20">Blogify</h5>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 right-0 h-full w-full bg-gray-50 flex flex-col md:flex-row items-center justify-center md:static md:h-auto md:w-auto gap-4 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          {navRoutes.map((route, index) => (
            <Link
              key={route.name + index}
              href={route.href}
              className={`${isActive(route.href) ? "font-bold text-blue-600" : "font-medium text-gray-600"} text-4xl md:text-base`}
              onClick={handleToggle}
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <ToggleButton isOpen={isOpen} handleToggle={handleToggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
