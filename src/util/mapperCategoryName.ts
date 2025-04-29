export const mapperCategoryName = (categoryName: string) => {
  switch (categoryName) {
    case "Procesadores":
      return "processors";
    case "Tarjetas de Video":
      return "video-cards";
    case "Memoria RAM":
      return "ram-memory";
    case "Gabinetes":
      return "towers";
    default:
      return null;
  }
};
