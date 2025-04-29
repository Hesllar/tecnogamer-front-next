import { EnumCategory } from "@/interfaces/products";

export const identifyCategoryIdByURL = (url: string) => {
  switch (url) {
    case "/products/processors":
      return EnumCategory.Procesadores;
    case "/products/ram-memory":
      return EnumCategory.MemoriaRAM;
    case "/products/towers":
      return EnumCategory.Gabinetes;
    case "/products/video-cards":
      return EnumCategory.TarjetasVideo;
    default:
      return null;
  }
};
