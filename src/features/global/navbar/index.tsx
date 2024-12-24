import { Logo } from "@/components/assets/logo";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getCachedGlobal } from "@/lib/get-globals";
import { Navbar as NavbarType } from "@/payload-types";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

export const Navbar = async () => {
  const navData: NavbarType = await getCachedGlobal("navbar", 1)();
  
  const navItems = navData?.navItems || [];
  return (
    <header className="container fixed left-1/2 top-3 z-50 flex -translate-x-1/2 justify-between">
      <div className="flex items-center gap-3 rounded-md bg-white/60 p-3 px-6 backdrop-blur-xl">
        <Logo />
        <Separator orientation="vertical" />
        <p className="text-xs">
          Bridging
          <br />
          Technologies
        </p>
      </div>
      <nav className="flex items-center rounded-md bg-white/60 backdrop-blur-xl">
        <ul className="flex items-center gap-6 px-6 py-3 font-medium">
          {navItems.map((nav) => (
            <li key={nav.id}>
              <Link href='#'>{ nav.label}</Link>
            </li>
          ))}
        </ul>

        <div className="relative h-full">
          <Input
            className="peer h-full bg-white/50 ps-9"
            placeholder="Search..."
            type="text"
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <IconSearch size={16} strokeWidth={2} aria-hidden="true" />
          </div>
        </div>
      </nav>
    </header>
  );
};
