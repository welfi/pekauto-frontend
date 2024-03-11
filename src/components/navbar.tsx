"use client";

import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="animate-in fade-in slide-in-from-top-2 sticky top-0 z-50 w-full duration-500">
      <div className="grid grid-cols-3 gap-8 pl-3 pt-1 z-10 bg-[#1f1e43]">
        <Link
          href={"/"}
          suppressHydrationWarning
          className="pointer-events-auto"
        >
          <Image
            src={"/logo-gold.png"}
            alt="logo"
            loading="lazy"
            width={130}
            height={50}
          />
        </Link>
        <div className="flex justify-center gap-9 align-center pt-5 w-full">
          <Link
            href={"/generate"}
            className={`relative group text-primary-foreground hover:text-[#F07BFB] hover:delay-100 hover:duration-300`}
          >
            Generate
            <span
              className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}
            >
              &nbsp;
            </span>
          </Link>
          <Link
            href={"/search"}
            className={`relative group text-primary-foreground hover:text-[#F07BFB] hover:delay-100 hover:duration-300`}
          >
            Search
            <span
              className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}
            >
              &nbsp;
            </span>
          </Link>
          <Link
            href={"/browse"}
            className={`relative group text-primary-foreground hover:text-[#F07BFB] hover:delay-100 hover:duration-300`}
          >
            Browse
            <span
              className={`h-[1px] inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}
            >
              &nbsp;
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
