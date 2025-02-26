import Link from "next/link";

import { Category, SubCategory } from "@/payload-types";

export const MegaMenu = ({ data }: { data: Category[] }) => {
  return (
    <div className="relative w-full md:w-[76rem] lg:w-[86rem]">
      <div className="columns-5 gap-3">
        {data.map((category) => (
          <div key={category.id} className="inline-block p-2 md:mt-3">
            <Link
              href="/"
              className="rounded-md border-b px-1 py-1.5 text-base transition-colors"
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
                      className="block p-1 text-sm font-medium transition-colors hover:bg-gray-100"
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
