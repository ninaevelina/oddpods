"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MagnifyingGlass } from "../icons/magnifying-glass";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    console.log(term);
  }, 300);

  return (
    <div className="flex w-full items-center overflow-hidden absolute top-[56px] h-[42px] outline outline-1 bg-white">
      <form className="h-full w-full outline-0">
        <input
          type="search"
          className="transition-all duration-300 flex items-center justify-center gap-0.25 appearance-none rounded-none h-full w-full outline-none outline-0 pl-3 pr-11"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams?.get("query")?.toString()}
        />
      </form>
      <div className="h-full flex items-center pr-3 w-[40px]">
        <button>
          <MagnifyingGlass />
        </button>
      </div>
    </div>
  );
}
