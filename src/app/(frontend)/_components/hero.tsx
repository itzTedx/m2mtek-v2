import Image from "next/image";
import Link from "next/link";

import { IconArrowNarrowRight } from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <div className="h-dvh">
      <div className="absolute aspect-video h-dvh w-full">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container relative z-10 grid h-full items-center md:grid-cols-2">
        <div className="order-2 mb-40 self-end px-6 sm:order-1">
          <h2 className="font-medium">Modern & Sleek</h2>
          <p className="mb-3">
            Ultra slim design seamlessly aligns
            <br /> the TV to the wall
          </p>
          <Link
            href="/products"
            className={cn(buttonVariants(), "h-auto gap-3 py-3")}
          >
            View Products <Separator orientation="vertical" />
            <IconArrowNarrowRight />
          </Link>
        </div>
        <div className="order-1 mt-12 space-y-3 rounded-xl bg-white/30 p-9 backdrop-blur-xl sm:order-2 md:-mt-52">
          <p className="font-aloevera">Innovative TV Wall Mounts</p>
          <h1 className="font-aloevera text-4xl font-bold leading-none md:text-[2.8rem]">
            Bridging Technologies with Modern TV Wall Mounts
          </h1>
          <p className="text-balance text-base md:text-lg">
            Ultra-slim, sleek, and innovative wall mounts for large screens.
            Transform your living spaces with precision-engineered solutions
            that combine elegance and functionality.
          </p>
        </div>
      </div>
    </div>
  );
};
