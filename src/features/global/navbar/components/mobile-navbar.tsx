import Link from "next/link";

import { IconMenu3 } from "@tabler/icons-react";

import { Logo } from "@/components/assets/logo";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Category } from "@/payload-types";

export const MobileNavbar = ({ categories }: { categories: Category[] }) => {
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
              <SheetDescription className="sr-only pb-3 text-left">
                Building Technologies
              </SheetDescription>
            </SheetHeader>

            <Separator />
            <nav>
              <ul className="flex flex-col gap-6 py-3 font-medium">
                <li>
                  <SheetClose asChild>
                    <Link href="/">Home</Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href="/about">About</Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link href="/contact">Contact</Link>
                  </SheetClose>
                </li>
                {categories.map((nav) => (
                  <li key={nav.id}>
                    <SheetClose asChild>
                      <Link href={nav.url || "/"} className="py-6">
                        {nav.title}
                      </Link>
                    </SheetClose>
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
