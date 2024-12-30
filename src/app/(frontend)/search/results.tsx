"use client";

import { useSearchParams } from "next/navigation";

export default function SearchResults({ results }: { results: number }) {
  const searchparams = useSearchParams();

  const query = searchparams.get("q");

  console.log("Query: ", query);

  return (
    <div className="text-center font-aloevera text-2xl font-medium capitalize">
      {results} Results found for &quot;{query}&quot;
    </div>
  );
}
