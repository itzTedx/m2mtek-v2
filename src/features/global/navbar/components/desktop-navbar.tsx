import Link from "next/link";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  Suspense,
  forwardRef,
} from "react";

import { Logo } from "@/components/assets/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";

import { SearchInput } from "./search-input";

export const DesktopNavbar = ({ categories }: { categories: Category[] }) => {
  // const navItems = navData?.navItems || [];
  return (
    <NavigationMenu className="fixed left-1/2 top-3 z-50 hidden -translate-x-1/2 justify-between rounded-md bg-white/60 px-3 backdrop-blur-xl md:flex">
      <Link href="/" className="flex items-center gap-3 p-3">
        <Logo />
        <Separator orientation="vertical" className="max-sm:hidden" />
        {/* <Separator orientation="vertical" className="max-sm:hidden" />
        <p className="text-xs max-sm:hidden">
          Bridging
          <br />
          Technologies
        </p> */}
      </Link>

      <NavigationMenuList className="flex items-center gap-6 px-6 py-3 font-medium">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {categories.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.slug!}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <Suspense>
        <SearchInput />
      </Suspense>
    </NavigationMenu>
  );
};

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
