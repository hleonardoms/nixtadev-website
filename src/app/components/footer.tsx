"use client";

import { fontSpaceMono } from "@/utils/font-constants";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={`bg-gray-950 w-full`}>
      <div className="container mx-auto py-8 px-4 flex flex-col justify-center items-center">
        <a
          className="block text-2xl text-white hover:text-gray-400 transition divide-neutral-200"
          href="https://www.instagram.com/nixtadev_/"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <span
          className={`${fontSpaceMono.className} block text-lg text-white  font-semibold pt-4`}
        >
          2025 nixtadev_
        </span>
      </div>
    </div>
  );
}
