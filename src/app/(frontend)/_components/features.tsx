import Image from "next/image";

import { Badge } from "@/components/ui/custom/badge";

export const Features = () => {
  return (
    <section className="relative">
      <div className="flex h-dvh flex-col justify-between">
        <div className="flex items-center justify-end p-9">
          <Badge className="self-end">
            Seamlessly Designed for Modern Living
          </Badge>
        </div>
        <div className="border-t bg-white/10 p-6 backdrop-blur-sm md:backdrop-blur-xl">
          <ul className="container grid divide-white/20 text-white max-md:gap-4 max-md:divide-y md:grid-cols-2 md:divide-x lg:grid-cols-4">
            {FEATURES.map((feature, index) => (
              <li key={index} className="first:pl-0 last:pr-0 md:px-6">
                <h3 className="pb-2 font-aloevera text-lg font-semibold md:text-2xl">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute top-0 -z-30 h-dvh w-full">
        <Image
          src="/images/wall-mount-tv.jpg"
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

const FEATURES = [
  {
    title: "Modern & Sleek Design",
    description:
      "Ultra-slim 30mm (1.2”) distance from the wall for a clean, minimal look that complements any interior design.",
  },
  {
    title: "Simple Construction",
    description:
      "User-friendly design ensures quick and easy installation with minimal effort.",
  },
  {
    title: "Side Lock Mechanism",
    description:
      "State-of-the-art locking system that enhances safety and stability for large-screen TVs.",
  },
  {
    title: "Integrated Bubble Level",
    description:
      "Built-in leveling system guarantees precise and seamless alignment every time.",
  },
];
