"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { Media } from "@/components/Media";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Product } from "@/payload-types";

interface ImagePreviewProps {
  data: Product;
}

export const ImagePreview = ({ data }: ImagePreviewProps) => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
        <CarouselItem key={image.id} className="relative aspect-video w-full">
          {image.image && (
            <Media resource={image.image} fill className="object-cover" />
          )}
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
          className="relative aspect-square w-full basis-1/5"
          onClick={() => handleClick(index)}
        >
          {image.image && (
            <Media
              fill
              resource={image.image}
              className={cn(
                "object-cover",
                index === current ? "border-2" : ""
              )}
            />
          )}
        </CarouselItem>
      )),
    [data.images, current, handleClick]
  );

  return (
    <div className="flex gap-4">
      <Carousel setApi={setThumbnailApi}>
        <CarouselContent className="m-1 flex w-32 flex-col gap-3">
          {thumbnailImages}
        </CarouselContent>
      </Carousel>
      <Carousel setApi={setMainApi} className="shrink-0 grow">
        <CarouselContent className="bg-gray-200">{mainImage}</CarouselContent>
      </Carousel>
    </div>
  );
};
