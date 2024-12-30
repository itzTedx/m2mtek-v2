import Image from "next/image";

import { Badge } from "@/components/ui/custom/badge";

export const FeaturedProduct = () => {
  return (
    <section className="grid h-[calc(100dvh-5rem)] bg-white md:grid-cols-2">
      <div className="container flex flex-col justify-between py-20 pl-24">
        <div className="">
          <h2 className="font-aloevera text-6xl font-bold">
            Choose the <span className="text-orange-500">Right Mount</span> for
            your TV
          </h2>
          <p className="mt-3 leading-loose">
            Our MT Series wall mounts cater to diverse screen sizes and mounting
            requirements. Whether you&apos;re mounting a compact TV in your
            workspace or a massive entertainment screen in your living room, we
            have a model for you.
          </p>
        </div>

        <p>Find the Perfect Fit for Your TV</p>
      </div>
      <div className="relative flex h-full w-full flex-col justify-between bg-gray-200">
        <div className="relative z-10 self-end py-12 pr-12">
          <Badge>Seamlessly Designed for Modern Living</Badge>
        </div>
        <Image
          src="/images/featured-product.jpg"
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};
