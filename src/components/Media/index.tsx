import React, { Fragment, JSX } from "react";

import { ImageMedia } from "./ImageMedia";
import { VideoMedia } from "./VideoMedia";
import type { Props } from "./types";

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = "div", resource } = props;

  const isVideo =
    typeof resource === "object" && resource?.mimeType?.includes("video");
  const Tag = (htmlElement as keyof JSX.IntrinsicElements) || Fragment;

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />}
    </Tag>
  );
};
