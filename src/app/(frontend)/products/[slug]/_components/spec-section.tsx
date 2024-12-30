import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Product } from "@/payload-types";

import { Heading } from "./heading";

export const SpecificationsSection = ({ data }: { data: Product }) => {
  if (!data.specifications) return null;

  return (
    <section id="specifications" className="container scroll-mt-12">
      <Heading>Specifications</Heading>
      <div className="grid text-sm md:grid-cols-2 md:gap-4">
        <Table>
          <TableBody>
            {data.specifications
              .slice(0, Math.ceil(data.specifications.length / 2))
              .map((spec) => (
                <TableRow key={spec.id}>
                  <TableCell className="w-48">{spec.title}</TableCell>
                  <TableCell className="bg-white/20 font-medium">
                    {spec.value}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Table>
          <TableBody>
            {data.specifications
              .slice(Math.ceil(data.specifications.length / 2))
              .map((spec) => (
                <TableRow key={spec.id}>
                  <TableCell className="w-48">{spec.title}</TableCell>
                  <TableCell className="bg-white/20 font-medium">
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
