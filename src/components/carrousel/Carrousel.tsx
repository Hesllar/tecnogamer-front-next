"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
}

export const Carrousel = ({ images }: Props) => {
  return (
    <Swiper
      cssMode={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {images.map((urlIamge) => (
        <SwiperSlide key={urlIamge}>
          <Image
            src={urlIamge}
            alt={urlIamge}
            width={600}
            height={600}
            className="w-full h-[400px] bg-white object-contain p-6"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
