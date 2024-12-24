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
        <div className="border-t bg-white/10 p-6 backdrop-blur-xl">
          <ul className="container grid grid-cols-4 divide-x text-white">
            {FEATURES.map((feature, index) => (
              <li key={index} className="px-6 first:pl-0 last:pr-0">
                <h3 className="pb-2 font-aloevera text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute top-0 -z-30 h-dvh w-full">
        <Image src="/images/wall-mount-tv.jpg" fill alt="" />
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
