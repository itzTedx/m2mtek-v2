import { Product } from "@/payload-types";

import { Heading } from "./heading";

export const FeaturesSection = ({ data }: { data: Product }) => {
  if (!data.features) return null;

  return (
    <section id="features" className="container scroll-mt-12">
      <Heading>Features</Heading>
      <ul className="grid list-inside list-disc gap-4 md:grid-cols-2">
        {data.features.map((feature) => (
          <li key={feature.id}>{feature.title}</li>
        ))}
      </ul>
    </section>
  );
};
