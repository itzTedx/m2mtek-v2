import Link from "next/link";

import { IconMenu3 } from "@tabler/icons-react";

import { Logo } from "@/components/assets/logo";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Navbar as NavbarType } from "@/payload-types";

export const MobileNavbar = ({ navData }: { navData: NavbarType }) => {
  const navItems = navData?.navItems || [];
  return (
    <header className="container fixed left-1/2 top-3 z-50 -translate-x-1/2 md:hidden">
      <div className="container flex justify-between rounded-sm bg-white/90 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3 rounded-md py-3">
          <Logo />
        </Link>
        <Sheet>
          <SheetTrigger>
            <IconMenu3 />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <Logo />
              <SheetTitle className="sr-only">M2MTEK</SheetTitle>
              <SheetDescription className="pb-3 text-left">
                Building Technologies
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <nav>
              <ul className="flex flex-col gap-2 py-3 font-medium">
                {navItems.map((nav) => (
                  <li key={nav.id}>
                    <Link href={nav.url || "/"} className="py-3">
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
