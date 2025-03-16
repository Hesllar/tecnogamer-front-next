import Link from "next/link";

interface Props {
  name: string;
  icon: React.ReactNode;
  path: string;
}

export const SidebarMenuItem = ({ name, icon, path }: Props) => {
  return (
    <Link
      href={path}
      className="text-lg font-medium text-white px-2 rounded-md transition duration-150 ease-in-out hover:scale-105 "
    >
      <div className="flex gap-3 items-center">
        <div className="hidden md:block">{icon}</div>
        <span className="">{name}</span>
      </div>
    </Link>
  );
};
