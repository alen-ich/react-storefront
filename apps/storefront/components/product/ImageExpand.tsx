// import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

import { ProductMediaFragment } from "@/saleor/api";

interface ImageExpandProps {
  image?: ProductMediaFragment;
  onRemoveExpand: () => void;
}
export const ImageExpand = ({ image, onRemoveExpand }: ImageExpandProps) => {
  if (!image) {
    return null;
  }

  return (
    <div className="min-h-screen absolute overflow-hidden grid grid-cols-1 mx-auto px-8 md:h-full w-full bg-gray-100 mt-10">
      <div className="w-full h-full absolute md:mt-10">
        <Image
          src={image.url}
          alt={image.alt}
          layout="fill"
          objectFit="scale-down"
          onClick={() => onRemoveExpand()}
        />
      </div>
    </div>
  );
};

export default ImageExpand;
