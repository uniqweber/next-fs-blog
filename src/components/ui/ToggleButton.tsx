"use client";
import React, {useState} from "react";

const ToggleButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="flex flex-col gap-1" onClick={handleToggle}>
        <span className={`h-1 inline-block w-8 rounded-full bg-red-400 duration-500 ${isOpen ? "-rotate-45 translate-y-2" : ""}`}></span>
        <span className={`h-1 inline-block w-8 rounded-full bg-red-400 duration-100 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`h-1 inline-block w-8 rounded-full bg-red-400 duration-500 ${isOpen ? "rotate-45 -translate-y-2" : ""}`}></span>
      </button>
    </div>
  );
};

export default ToggleButton;
