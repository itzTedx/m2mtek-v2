"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Product } from "@/payload-types";

const Media = dynamic(
  () => import("@/components/Media").then((mod) => mod.Media),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-md bg-gray-200" />
    ),
  }
);

interface ImagePreviewProps {
  data: Product;
  autoplayDelay?: number;
}

export const ImagePreview = ({ data, autoplayDelay }: ImagePreviewProps) => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (!mainApi || !thumbnailApi) {
      return;
    }

    const handleTopSelect = () => {
      const selected = mainApi.selectedScrollSnap();
      setCurrent(selected);
      thumbnailApi.scrollTo(selected);
    };

    const handleBottomSelect = () => {
      const selected = thumbnailApi.selectedScrollSnap();
      setCurrent(selected);
      mainApi.scrollTo(selected);
    };

    mainApi.on("select", handleTopSelect);
    thumbnailApi.on("select", handleBottomSelect);

    return () => {
      mainApi.off("select", handleTopSelect);
      thumbnailApi.off("select", handleBottomSelect);
    };
  }, [mainApi, thumbnailApi]);

  const handleClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbnailApi) {
        return;
      }
      thumbnailApi.scrollTo(index);
      mainApi.scrollTo(index);
      setCurrent(index);
    },
    [mainApi, thumbnailApi]
  );

  const mainImage = useMemo(
    () =>
      data.images &&
      data.images.map((image) => (
        <CarouselItem key={image.id} className="w-full cursor-pointer pl-4">
          <div className="relative aspect-square overflow-hidden rounded-md bg-white">
            {image.image && (
              <Media resource={image.image} fill imgClassName="object-cover" />
            )}
          </div>
        </CarouselItem>
      )),
    [data.images]
  );

  const thumbnailImages = useMemo(
    () =>
      data.images &&
      data.images.map((image, index) => (
        <CarouselItem
          key={image.id}
          className={cn(
            "relative aspect-square w-full basis-1/4 overflow-hidden rounded-md border-white bg-white md:basis-1/5",
            index === current ? "border-2" : ""
          )}
          onClick={() => handleClick(index)}
        >
          {image.image && (
            <Media
              fill
              resource={image.image}
              imgClassName={cn("object-cover")}
            />
          )}
        </CarouselItem>
      )),
    [data.images, current, handleClick]
  );

  if (isDesktop) {
    return (
      <div className="flex gap-4">
        <Carousel setApi={setThumbnailApi} orientation="vertical">
          <CarouselContent className="m-1 w-24 gap-3">
            {thumbnailImages}
          </CarouselContent>
          {current > 3 && <CarouselPrevious />}
          {current > 3 && <CarouselNext />}
        </Carousel>
        <Carousel
          setApi={setMainApi}
          className="shrink-0 grow"
          plugins={[
            Autoplay({
              delay: autoplayDelay || 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">{mainImage}</CarouselContent>
        </Carousel>
      </div>
    );
  } else {
    return (
      <div>
        <Carousel
          setApi={setMainApi}
          className="shrink-0 grow"
          plugins={[
            Autoplay({
              delay: autoplayDelay || 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">{mainImage}</CarouselContent>
        </Carousel>
        <Carousel setApi={setThumbnailApi} orientation="horizontal">
          <CarouselContent className="my-3 h-24 gap-3">
            {thumbnailImages}
          </CarouselContent>
          {current > 3 && <CarouselPrevious />}
          {current > 3 && <CarouselNext />}
        </Carousel>
      </div>
    );
  }
};
