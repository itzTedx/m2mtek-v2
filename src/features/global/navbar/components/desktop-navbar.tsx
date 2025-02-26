import Link from "next/link";
import { Suspense } from "react";

import { Logo } from "@/components/assets/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";

import { MegaMenu } from "./mega-menu";
import { SearchInput } from "./search-input";

export const DesktopNavbar = ({ categories }: { categories: Category[] }) => {
  return (
    <header className="container fixed left-1/2 top-3 z-50 hidden -translate-x-1/2 items-center justify-between rounded-lg bg-white/80 px-0 py-2 backdrop-blur-lg transition-colors group-hover:bg-white md:flex">
      <NavigationMenu className="flex items-center gap-3 px-3">
        <Link href="/" className="h-auto py-3">
          <Logo />
        </Link>

        <Separator
          orientation="vertical"
          className="h-6 bg-muted max-sm:hidden"
        />
        <NavigationMenuList asChild>
          <menu className="flex items-center justify-between gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MegaMenu data={categories} />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Suspense>
                <SearchInput />
              </Suspense>
            </NavigationMenuItem>
          </menu>
        </NavigationMenuList>
      </NavigationMenu>

      <nav className="flex items-center px-3">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/about" className={cn("hover:text-sky-700")}>
              About us
            </Link>
          </li>
          <li>
            <Button
              asChild
              className="h-10 bg-sky-500 text-base hover:bg-sky-600"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
