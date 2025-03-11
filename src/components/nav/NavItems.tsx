"use client";

import Link from "next/link";
import { useContext } from "react";
// import { UIContext } from "../ui/context/UIContext";

interface Props {
  flexDirection?: flexDirection;
}

type flexDirection = "flex-row" | "flex-col";

const navItems = [
  {
    name: "Incio",
    path: "/",
  },
];

export const NavItems = ({ flexDirection }: Props) => {
  // const { onToggleMenu, isOpenMenu } = useContext(UIContext);

  // const handleOnClick = () => {
  //   if (isOpenMenu) {
  //     onToggleMenu();
  //   }
  // };

  return (
    <div className={`flex ${flexDirection}`}>
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
    </div>
  );
};
