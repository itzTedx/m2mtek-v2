"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { IconSearch } from "@tabler/icons-react";

import { Input } from "@/components/ui/input";
import { useDebounceCallback } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const searchparams = useSearchParams();
  console.log("Search Params: ", searchparams);

  const debounced = useDebounceCallback(setValue, 500);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("q", value);

    window.history.pushState({}, "", `/search?${searchParams}`);
  }, [value]);

  return (
    <form className="relative h-full">
      <Input
        className="peer h-full bg-white/50 ps-9"
        placeholder="Search..."
        type="text"
        defaultValue={value}
        onChange={(e) => debounced(e.target.value)}
      />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <IconSearch size={16} strokeWidth={2} aria-hidden="true" />
      </div>
    </form>
  );
};
