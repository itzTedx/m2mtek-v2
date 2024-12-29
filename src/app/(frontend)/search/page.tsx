"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchparams = useSearchParams();

  const query = searchparams.get("q");

  console.log("Query: ", query);

  return (
    <main className="min-h-dvh py-28 text-center font-bold capitalize">
      Search Results for: {query}
    </main>
  );
}
