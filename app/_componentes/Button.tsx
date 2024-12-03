"use client";

import Link from "next/link";

interface buttonProps {
  children: React.ReactNode;
  href: string;
}

const Button = ({ children, href }: buttonProps) => {
  return (
    <div
      className={
        "bg-[#3F4D3B] flex items-center justify-center w-32 h-14 gap-2 px-4 py-2 text-white rounded-lg font-bold shadow-xl shadow-black/50 hover:scale-105 cursor-pointer"
      }
    >
      <Link href={href} target="_blank">
        <div className="flex items-center justify-center gap-2">{children}</div>
      </Link>
    </div>
  );
};

export default Button;
