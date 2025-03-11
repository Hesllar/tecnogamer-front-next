import { SidebarMenuItem } from "./SidebarMenuItem";

import { IoMdCube, IoIosKeypad } from "react-icons/io";

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

export const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="hidden bg-white h-screen shadow-xl px-3 w-32 overflow-x-hidden transition-transform duration-300 ease-in-out md:block md:w-60 lg:w-80 "
      x-show="sidenav"
    >
      <div className="space-y-6 md:space-y-10 mt-10">
        <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
          Dashwind<span className="text-teal-600">.</span>
        </h1>
        <div id="profile" className="space-y-3">
          <img
            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Avatar user"
            className="w-10 md:w-16 rounded-full mx-auto"
          />
          <div>
            <h2 className="font-medium text-xs md:text-xl text-center text-teal-500">
              Eduard Pantazi
            </h2>
            <p className="text-md text-gray-500 text-center">Administrator</p>
          </div>
        </div>
        <div id="menu" className="flex flex-col space-y-2">
          {sidebar.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
