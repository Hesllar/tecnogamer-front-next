import clsx from "clsx";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
}

export const NavSubItem = ({ id, name }: Props) => {
  return (
    <Link
      href="#"
      className="text-white text-center font-semibold block px-4 py-2 text-sm uppercase hover:bg-cyan-500"
    >
      {name}
    </Link>
  );
};
