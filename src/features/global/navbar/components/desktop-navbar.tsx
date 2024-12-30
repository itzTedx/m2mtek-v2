import Link from "next/link";
import { Suspense } from "react";

import { Logo } from "@/components/assets/logo";
import { Separator } from "@/components/ui/separator";
import { Navbar as NavbarType } from "@/payload-types";

import { SearchInput } from "./search-input";

export const DesktopNavbar = ({ navData }: { navData: NavbarType }) => {
  const navItems = navData?.navItems || [];
  return (
    <header className="container fixed left-1/2 top-3 z-50 hidden -translate-x-1/2 justify-between md:flex">
      <Link
        href="/"
        className="flex items-center gap-3 rounded-md bg-white/60 p-3 px-6 backdrop-blur-xl"
      >
        <Logo />
        <Separator orientation="vertical" className="max-sm:hidden" />
        <p className="text-xs max-sm:hidden">
          Bridging
          <br />
          Technologies
        </p>
      </Link>
      <nav className="flex items-center rounded-md bg-white/60 backdrop-blur-xl">
        <ul className="flex items-center gap-6 px-6 py-3 font-medium">
          {navItems.map((nav) => (
            <li key={nav.id}>
              <Link href={nav.url || "/"} className="text-sm md:text-base">
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
        <Suspense>
          <SearchInput />
        </Suspense>
      </nav>
    </header>
  );
};
