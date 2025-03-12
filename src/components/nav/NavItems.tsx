import Link from "next/link";
import { IoIosKeypad, IoMdCube } from "react-icons/io";
import { SidebarMenuItem } from "../sidebar/SidebarMenuItem";

const items = [
  {
    name: "Inicio",
    icon: <IoIosKeypad size={10} />,
    path: "/",
  },
  {
    name: "Productos",
    icon: <IoMdCube size={10} />,
    path: "/products",
  },
];
export const NavItems = () => {
  return (
    <div className="flex flex-col fixed w-full top-14 n bg-slate-200 text-center transform transition-all duration-600 translate-y-[0%] md:hidde">
      {items.map((item, index) => (
        <>
          <Link href={item.path} className="p-2">
            {item.name}
          </Link>
          <hr
            className={
              items.length - (index + 1) !== 0 ? "border-black" : undefined
            }
          />
        </>
      ))}
    </div>
  );
};
