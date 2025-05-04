"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Props {
  images: string[];
}

export const ProductSlideShow = ({ images }: Props) => {
  const [imageActive, setImageActive] = useState(images[0]);

  return (
    <div className="flex w-3/4 gap-4 flex-col-reverse min-[1400px]:flex-row min-[1400px]:gap-0">
      <div className="flex flex-row justify-center min-[1400px]:flex-col min-[1400px]:justify-normal gap-2 p-2">
        {images.map((urlIamge) => (
          <div
            key={urlIamge}
            className="border-double border-4 border-sky-500"
            onMouseEnter={() => setImageActive(urlIamge)}
          >
            <Image
              src={urlIamge}
              alt={urlIamge}
              width={100}
              height={100}
              className="cursor-pointer h-full"
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          src={imageActive}
          alt={imageActive}
          width={600}
          height={600}
          className="max-w-[400px]  max-h-[400px] min-[1400px]:max-w-[500px] min-[1400px]:max-h-[500px] 2xl:max-w-[600px] 2xl:max-h-[600px] shadow-2xl rounded-xl p-8 bg-white object-contain"
        />
      </div>
    </div>
  );
};
