"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { IconX } from "@tabler/icons-react";

import { Media } from "@/components/Media";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTrigger,
} from "@/components/ui/morphing-dialog";
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
        {current > 0 && <CarouselPrevious />}
        <CarouselNext />
      </Carousel>
      <Carousel setApi={setMainApi} className="shrink-0 grow">
        <MorphingDialog
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <MorphingDialogTrigger>
            <MorphingDialogImage
              src="https://64.media.tumblr.com/a56381366ceaab29b760aabe5e88df07/f3b5e9af4d3103f3-97/s2048x3072/caec6beeee2cbeb80b05e88c917b187926749703.jpg"
              alt="Sony Style Store in the Sony Center complex - Berlin, Germany (2000)"
              className="max-w-xs rounded-[4px]"
            />
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent className="relative">
              <MorphingDialogImage
                src="https://64.media.tumblr.com/a56381366ceaab29b760aabe5e88df07/f3b5e9af4d3103f3-97/s2048x3072/caec6beeee2cbeb80b05e88c917b187926749703.jpg"
                alt="Sony Style Store in the Sony Center complex - Berlin, Germany (2000)"
                className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
              />
            </MorphingDialogContent>
            <MorphingDialogClose
              className="fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1"
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.1 },
                },
                exit: { opacity: 0, transition: { duration: 0 } },
              }}
            >
              <IconX className="h-5 w-5 text-zinc-500" />
            </MorphingDialogClose>
          </MorphingDialogContainer>
        </MorphingDialog>
        <CarouselContent className="-ml-4">{mainImage}</CarouselContent>
      </Carousel>
    </div>
  );
};
