import Link from "next/link";
import { IoIosKeypad, IoMdCube } from "react-icons/io";
import { SidebarMenuItem } from "../sidebar/SidebarMenuItem";

const sidebar = [
  {
    name: "Inicio",
    icon: <IoIosKeypad size={40} />,
    path: "/",
  },
  {
    name: "Productos",
    icon: <IoMdCube size={40} />,
    path: "/products",
  },
];
export const NavItems = () => {
  return (
    <div className="flex flex-col fixed w-full  md:hidden top-14">
      {/* {navItems.map((item) => (
        <Link
          href={item.path}
          className="text-white py-2 sm:pr-4 sm:pl-3 hover:text-dark-primary cursor-pointer font-serif font-semibold sm:font-normal text-sm sm:text-xl dark:hover:text-primary"
          key={item.name}
          onClick={handleOnClick}
        >
          {item.name}
        </Link>
      ))} */}
      {sidebar.map((item) => (
        <SidebarMenuItem key={item.path} {...item} />
      ))}
    </div>
  );
};
