"use client";

import Link from "next/link";
import Search from "./search";
import { usePathname, useRouter } from "next/navigation";
import HeartIcon from "../icons/heart-icon";
import { useFavourites } from "@/lib/contexts/favourites-context";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { favourites } = useFavourites();
  console.log("FAVOURITES", favourites);

  const favouritesLength = favourites.length;
  const hasFavourites = favourites.length > 0;

  return (
    <header className="sticky top-0 flex w-full flex-col items-center border-black transition-all duration-300 bg-white z-50">
      <div
        className={`flex h-[56px] w-full items-center justify-between ${
          pathname !== "/podcasts" ? "border-b border-black" : ""
        }`}
      >
        <div className="flex w-full max-w-[56px] items-center">
          <Link href={"/"} className="font-bold ml-[10px] mr-[10px] text-2xl">
            ODDPODS
          </Link>
          <Link href={"/podcasts"} className="uppercase">
            Podcasts
          </Link>
        </div>
        <div className="text-small flex h-full items-center overflow-hidden px-0 w-full max-w-[80px]">
          <HeartIcon
            isFilled={hasFavourites}
            favouritesCount={favouritesLength}
            onClick={() => router.push("/my-favourites")}
          />
        </div>
      </div>
      {pathname == "/podcasts" && <Search placeholder={"Search"} />}
    </header>
  );
};

export default Header;
