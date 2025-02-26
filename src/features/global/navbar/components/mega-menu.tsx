import Link from "next/link";

import { Category, SubCategory } from "@/payload-types";

export const MegaMenu = ({ data }: { data: Category[] }) => {
  return (
    <div className="relative w-full md:w-[76rem] lg:w-[86rem]">
      <div className="grid grid-cols-4 gap-4 p-4">
        {data.map((category) => (
          <div key={category.id} className="flex flex-col gap-1">
            <Link
              href="/"
              className="rounded-md py-3 text-sm font-medium transition-colors"
            >
              {category.title}
            </Link>
            <ul className="flex flex-col gap-1">
              {category.subcategories
                ?.filter(
                  (sub): sub is SubCategory =>
                    typeof sub === "object" && sub !== null && "id" in sub
                )
                .map((sub) => (
                  <li key={sub.id}>
                    <Link
                      href={sub.slug!}
                      className="p-2 transition-colors hover:bg-popover"
                    >
                      <span>{sub.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
