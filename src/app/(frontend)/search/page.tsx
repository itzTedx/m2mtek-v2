import { Suspense } from "react";

import SearchResults from "./results";

export default function SearchPage() {
  return (
    <main className="min-h-dvh py-28 text-center font-bold capitalize">
      <Suspense fallback={"Loading..."}>
        <SearchResults />
      </Suspense>
    </main>
  );
}
