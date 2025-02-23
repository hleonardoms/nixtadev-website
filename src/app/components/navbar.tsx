"use client";

import { fontSpaceMono } from "@/utils/font-constants";
import { useEffect, useState } from "react";
import {usePathname} from "next/navigation";
import classNames from "classnames";

export default function NavBar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSolidNavBar, setIsSolidNavBar] = useState(false);

  const navTitleClassName = classNames(
      'text-white',
      'text-4xl',
      'font-extrabold',
      'tracking-tight',
  );
  const pathName = usePathname();

  const handleScroll = (): void => {
    setIsScrolling(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setIsSolidNavBar(pathName !== '/');

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathName]);
 
  return (
    <div className={`${isScrolling ? 'bg-gray-950 bg-opacity-100' : 'bg-opacity-0'} transition duration-200 ${isSolidNavBar ? 'relative bg-gray-950 bg-opacity-100' : ''} fixed top-0 z-50 w-full`}>
      <div className="container mx-auto p-4 flex flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <h1 className={`${fontSpaceMono.className} ${navTitleClassName}`}>
            nixtadev<span className="animate-blink">_</span>
          </h1>
        </div>
      </div>
    </div>
  );

};