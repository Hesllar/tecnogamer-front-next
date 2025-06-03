import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
