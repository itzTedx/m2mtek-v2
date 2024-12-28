"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { Media } from "@/components/Media";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
        <CarouselItem key={image.id} className="w-full cursor-pointer pl-4">
          <div className="relative aspect-[5/3] overflow-hidden rounded-md bg-white">
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
            "relative aspect-square w-full basis-1/5 overflow-hidden rounded-md border-white",
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

  return (
    <div className="flex gap-6">
      <Carousel setApi={setThumbnailApi} orientation="vertical">
        <CarouselContent className="m-1 w-24 gap-3">
          {thumbnailImages}
        </CarouselContent>
        {current > 3 && <CarouselPrevious />}
        {current > 3 && <CarouselNext />}
      </Carousel>
      <Carousel setApi={setMainApi} className="shrink-0 grow">
        <CarouselContent className="-ml-4">{mainImage}</CarouselContent>
      </Carousel>
    </div>
  );
};
