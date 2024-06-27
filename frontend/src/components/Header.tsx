"use client";

import { logo } from "@/utils/fonts";
import { usePathname } from "next/navigation";
export default function Header({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 flex w-full justify-between bg-[#FAF9F7]">
      <h1 className={`m-6 text-[#D64545] ${logo.className} text-4xl`}>mChat</h1>
      <div className="mx-6 mt-4 text-right">
        <p className="text-lg text-[#757575]">Hello</p>
        {children}
      </div>
    </header>
  );
}
