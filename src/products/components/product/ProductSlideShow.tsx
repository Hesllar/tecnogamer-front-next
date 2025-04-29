import React from "react";

export const ProductSlideShow = () => {
  return (
    <div className="flex bg-white w-3/4">
      <div className="flex flex-col gap-2 p-2">
        <div className="bg-blue-600 w-24 h-24"></div>
        <div className="bg-blue-600 w-24 h-24"></div>
        <div className="bg-blue-600 w-24 h-24"></div>
        <div className="bg-blue-600 w-24 h-24"></div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="bg-black w-[400px] h-[200px]"></div>
      </div>
    </div>
  );
};
