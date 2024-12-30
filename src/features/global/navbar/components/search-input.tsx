"use client";

import { useSearchParams } from "next/navigation";

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

export const SearchInput = () => {
  const searchparams = useSearchParams();

  const query = searchparams.get("q");

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: query || undefined,
    },
  });

  function onSubmit(values: z.infer<typeof searchSchema>) {
    const validation = searchSchema.safeParse(values);

    if (validation.success) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", values.query);
      window.history.pushState({}, "", `/search?${searchParams}`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="relative h-full space-y-0">
              <Input
                id="search"
                className="peer h-full bg-white/50 pe-9 ps-9"
                placeholder="Search..."
                type="search"
                {...field}
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <IconSearch size={16} strokeWidth={2} />
              </div>
              <Button
                className="absolute inset-y-0 end-0 flex h-full items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
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
