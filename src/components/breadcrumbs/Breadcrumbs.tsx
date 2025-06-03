"use client";

import { validateLastSegmentBreadcrumbs } from "@/util";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  customLabels?: { [key: string]: string };
}

export const Breadcrumbs = ({ customLabels }: Props) => {
  const pathname = usePathname();

  let pathSegments = pathname.split("/").filter((segment) => segment);

  // No muestra nada si no hay segmentos de ruta por ejemplo en la ruta raíz
  if (pathSegments.length === 0) return;

  // Si hay más de dos segmentos, valida el último segmento para breadcrumbs
  if (pathSegments.length > 2) {
    const lastSegment = pathSegments.at(-1);
    if (lastSegment) {
      const lastSegmentBreadcrumbs =
        validateLastSegmentBreadcrumbs(lastSegment);
      if (lastSegmentBreadcrumbs) {
        pathSegments = pathSegments.slice(0, -1);
        pathSegments = [...pathSegments, lastSegmentBreadcrumbs];
      }
    }
  }

  const formatLabel = (segment: string) => {
    if (customLabels && customLabels[segment]) {
      return customLabels[segment];
    }

    return segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <nav className="bg-gradient-to-b from-gray-400 to-gray-600 p-3 rounded font-sans w-full">
      <ol className="list-reset flex text-grey-dark">
        <li>
          <Link href="/" className="text-white font-bold">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-white capitalize">
                  {formatLabel(segment)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-white hover:underline capitalize"
                >
                  {formatLabel(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
