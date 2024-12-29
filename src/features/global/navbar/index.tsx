import Link from "next/link";

import { Logo } from "@/components/assets/logo";
import { Separator } from "@/components/ui/separator";
import { getCachedGlobal } from "@/lib/get-globals";
import { Navbar as NavbarType } from "@/payload-types";

import { SearchInput } from "./components/search-input";

export const Navbar = async () => {
  const navData: NavbarType = await getCachedGlobal("navbar", 1)();

  const navItems = navData?.navItems || [];
  return (
    <header className="container fixed left-1/2 top-3 z-50 flex -translate-x-1/2 justify-between">
      <Link
        href="/"
        className="flex items-center gap-3 rounded-md bg-white/60 p-3 px-6 backdrop-blur-xl"
      >
        <Logo />
        <Separator orientation="vertical" />
        <p className="text-xs">
          Bridging
          <br />
          Technologies
        </p>
      </Link>
      <nav className="flex items-center rounded-md bg-white/60 backdrop-blur-xl">
        <ul className="flex items-center gap-6 px-6 py-3 font-medium">
          {navItems.map((nav) => (
            <li key={nav.id}>
              <Link href={nav.url || "/"}>{nav.label}</Link>
            </li>
          ))}
        </ul>

        <SearchInput />
      </nav>
    </header>
  );
};
