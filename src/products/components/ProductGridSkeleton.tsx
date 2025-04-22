export default function ProductGridSkeleton() {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-md rounded-lg max-w-xs items-center h-[450px] w-[250px] p-2">
      <div className="h-48 w-full bg-gray-200 rounded-lg mb-8 animate-pulse"></div>
      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
      <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>

      <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
}
