"use client";

import {navRoutes} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import ToggleButton from "./ui/ToggleButton";

const Navbar = () => {
  const path = usePathname();
  const isActive = (pathname: string) => pathname === path;
  return (
    <nav>
      <div className="flex  items-center justify-between h-16 max-container">
        <h5 className="text-xl font-bold">Blogify</h5>

        <div className="flex items-center gap-2">
          {navRoutes.map((route, index) => (
            <Link
              key={route.name + index}
              href={route.href}
              className={`${isActive(route.href) ? "font-bold text-blue-600" : "font-medium text-gray-600"}`}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <ToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
