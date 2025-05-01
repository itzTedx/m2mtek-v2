import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Product } from "@/payload-types";

import { Heading } from "./heading";

export const SpecificationsSection = ({ data }: { data: Product }) => {
  if (!data.specifications) return null;

  return (
    <section id="specifications" className="container scroll-mt-12">
      <Heading>Specifications</Heading>
      <div className="text-sm md:columns-2 md:gap-4">
        <Table className="inline-block">
          <TableBody>
            <TableRow>
              <TableCell className="w-48 bg-gray-200/80">Category</TableCell>
              <TableCell className="bg-white font-medium">
                {typeof data.subcategories === "object"
                  ? data.subcategories?.title
                  : "N/A"}
              </TableCell>
            </TableRow>
            {data.specifications
              .slice(0, Math.ceil(data.specifications.length / 2))
              .map((spec) => (
                <TableRow key={spec.id}>
                  <TableCell className="w-48 bg-gray-200/80">
                    {spec.title}
                  </TableCell>
                  <TableCell className="bg-white font-medium">
                    {spec.value}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Table className="inline-block">
          <TableBody>
            {data.specifications
              .slice(Math.ceil(data.specifications.length / 2))
              .map((spec) => (
                <TableRow key={spec.id}>
                  <TableCell className="w-48 bg-gray-200/80">
                    {spec.title}
                  </TableCell>
                  <TableCell className="bg-white font-medium">
                    {spec.value}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
