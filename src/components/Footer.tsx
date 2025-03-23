import {navRoutes} from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-container border-t border-gray-200 py-5 mt-20 flex flex-col lg:flex-row gap-5 items-center justify-between">
        <nav className="flex flex-wrap justify-center ">
          {navRoutes.map((route) => (
            <a key={route.name} href={route.href} className="px-5 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              {route.name}
            </a>
          ))}
        </nav>
        <p className="text-sm text-center text-gray-400">© 2025 MindInk, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
