import { payload } from "@/lib/payload";
import { SubCategory } from "@/payload-types";

export default async function Test() {
  const { docs } = await payload.find({
    collection: "categories",
    depth: 1,
    sort: "createdAt",
    pagination: false,
  });
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="M2MTEK" />
      </head>
      <body>
        <div>
          {docs.map((category) => (
            <ul key={category.id}>
              {category.subcategories
                ?.filter(
                  (sub): sub is SubCategory =>
                    typeof sub === "object" && sub !== null && "id" in sub
                )
                .map((sub) => <Subcat key={sub.id} sub={sub} />)}
            </ul>
          ))}
        </div>
      </body>
    </html>
  );
}

const Subcat = ({ sub }: { sub: SubCategory }) => {
  return <li>{sub.title}</li>;
};
