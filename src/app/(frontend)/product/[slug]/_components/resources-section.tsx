import Link from "next/link";

import { getClientSideURL } from "@/lib/get-url";
import { Product } from "@/payload-types";

import { Heading } from "./heading";

export const ResourcesSection = ({ data }: { data: Product }) => {
  if (!data.resources) return null;

  return (
    <section id="resources" className="container scroll-mt-12">
      <Heading>Resources</Heading>
      <div>
        {data.resources.map((res) => {
          const resourceUrl =
            typeof res.document === "object" && res.document !== null
              ? res.document.url
              : "";

          return (
            <div key={res.id}>
              <Link
                href={`${getClientSideURL()}${resourceUrl}`}
                target="_blank"
              >
                {typeof res.document === "object" && res.document !== null
                  ? res.document.filename
                  : ""}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
