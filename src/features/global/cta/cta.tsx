import { IconPhone } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getCachedGlobal } from "@/lib/get-globals";
import type { Cta as CtaType } from "@/payload-types";

export async function Cta() {
  const ctaData: CtaType = await getCachedGlobal("cta", 1)();
  return (
    <section id="cta" className="bg-gray-900 py-12">
      <div className="container grid max-w-6xl grid-cols-5 items-center justify-center gap-4 text-white">
        <div className="col-span-4">
          <h5 className="font-aloevera text-4xl font-semibold">
            {ctaData.title}
          </h5>
          <p className="text-balance pt-3">{ctaData.description}</p>
        </div>
        <div className="flex items-center justify-center">
          <Button className="bg-brand w-fit text-base font-medium font-aloevera h-12 px-6 items-center gap-3">
            {ctaData.buttonText}
            <Separator orientation="vertical" />
            <IconPhone className="size-5" stroke={1.5} />
          </Button>
        </div>
      </div>
    </section>
  );
}
