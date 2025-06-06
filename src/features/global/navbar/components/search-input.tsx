"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const searchSchema = z.object({
  query: z.string().min(1),
});

const RECENT_SEARCHES_KEY = "recent_searches";
const MAX_RECENT_SEARCHES = 10;

export const SearchInput = () => {
  const searchparams = useSearchParams();
  const router = useRouter();

  const query = searchparams.get("q");

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: query || "",
    },
  });

  const addToRecentSearches = (query: string) => {
    const recentSearches = JSON.parse(
      localStorage.getItem(RECENT_SEARCHES_KEY) || "[]"
    );
    const updatedSearches = [
      query,
      ...recentSearches.filter((item: string) => item !== query),
    ].slice(0, MAX_RECENT_SEARCHES);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updatedSearches));
  };

  function onSubmit(values: z.infer<typeof searchSchema>) {
    const validation = searchSchema.safeParse(values);

    if (validation.success) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", values.query);
      addToRecentSearches(values.query);
      window.history.pushState({}, "", `/search?${searchParams}`);
      router.push(`/search?${searchParams}`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="relative h-full w-96 space-y-0">
              <Input
                id="search"
                className="peer h-10 bg-white/50 pe-9 ps-9"
                placeholder="Search for TV stands, mounts, and more..."
                type="search"
                {...field}
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground peer-disabled:opacity-50">
                <IconSearch size={16} strokeWidth={2} />
              </div>
              <Button
                className="absolute inset-y-0 end-0 flex h-full items-center justify-center rounded-e-lg text-muted-foreground outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                variant="ghost"
                size="icon"
                aria-label="Submit search"
                type="submit"
              >
                <IconArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
