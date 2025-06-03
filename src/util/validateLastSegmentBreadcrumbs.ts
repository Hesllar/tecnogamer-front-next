export const validateLastSegmentBreadcrumbs = (segment: string) => {
  switch (true) {
    case segment.includes("procesador-amd"):
      return "procesador-amd";
    case segment.includes("procesador-intel"):
      return "procesador-intel";
    case segment.includes("gabinete-cougar"):
      return "gabinete-cougar";
    case segment.includes("gabinete-lian-li"):
      return "gabinete lian li";
    case segment.includes("gabinete-nzxt"):
      return "gabinete nzxt";
    case segment.includes("memoria-ram-corsair"):
      return "memoria ram corsair";
    case segment.includes("memoria-ram-g.skill"):
      return "memoria ram g.skill";
    case segment.includes("memoria-ram-kingston"):
      return "memoria ram kingston";
    case segment.includes("tarjeta-grafica-amd"):
      return "tarjeta gráfica amd";
    case segment.includes("tarjeta-grafica-nvidia"):
      return "tarjeta gráfica nvidia";
    default:
      return null;
  }
};
