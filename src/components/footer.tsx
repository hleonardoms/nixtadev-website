"use client";

import { fontSpaceMono } from "@/utils/font-constants";

export default function Footer() {
  return (
    <div className={`bg-gray-950 w-full`}>
      <div className="container mx-auto py-8 px-4 flex flex-row justify-center">
        <span className={`${fontSpaceMono.className} text-lg font-semibold`}>
          2025 nixtadev_
        </span>
      </div>
    </div>
  );
}
