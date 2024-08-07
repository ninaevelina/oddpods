"use client";

import Link from "next/link";
import Search from "./search";
import HeaderLogo from "../icons/header-logo";
import { usePathname } from "next/navigation";
import { HamburgerIcon } from "../icons/hamburger-icon";
import HeartIcon from "../icons/heart-icon";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex w-full flex-col items-center border-black transition-all duration-300 bg-white z-50">
      <div
        className={`flex h-[56px] w-full items-center justify-between ${
          pathname !== "/podcasts" ? "border-b border-black" : ""
        }`}
      >
        <div className="flex w-full max-w-[56px] justify-center">
          <button type="button">
            <HamburgerIcon />
          </button>
        </div>
        <div className="opacity-1 transition-all duration-300">
          <Link href={"/"}>
            <HeaderLogo />
          </Link>
        </div>
        <div className="text-small flex h-full items-center overflow-hidden px-0 w-full max-w-[80px]">
          <HeartIcon /> {/* update the hearticon-component */}
        </div>
      </div>
      {pathname == "/podcasts" && <Search placeholder={"Search"} />}
    </header>
  );
};

export default Header;
