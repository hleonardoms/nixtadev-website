"use client";

import { fontCantataSerif, fontSpaceMono } from "@/utils/font-constants";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const navTitleClassName = `text-4xl font-extrabold tracking-tight`;
  const navItemClassName = `${fontCantataSerif.className} tracking-wide text-lg py-2 px-4 hover:bg-gray-50 hover:text-gray-950 hover:cursor-pointer transition-all duration-300 w-full lg:w-auto`;

  const handleScroll = (): void => {
    setIsScrolling(window.scrollY > 150);
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <div className={`${isScrolling ? 'bg-gray-950 bg-opacity-100' : 'bg-opacity-0'} transition duration-200 fixed top-0 z-50 w-full`}>
      <div className="container mx-auto p-4 flex flex-row justify-between items-baseline">
        <div className="mb-4 lg:mb-0">
          <h1 className={`${fontSpaceMono.className} ${navTitleClassName}`}>
            nixtadev<span className="animate-blink">_</span>
          </h1>
        </div>
        {/* <div className="flex flex-col w-full lg:flex-row lg:w-auto"> */}
          {/* <a className={`${navItemClassName}`}>Inicio</a>
          <a className={navItemClassName}>Acerca de</a>
          <a className={navItemClassName}>Contacto</a> */}
        {/* </div> */}
      </div>
    </div>
  );

};