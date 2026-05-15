// "use client";

import { useProductStore } from "@/store/products/product-store";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  name: string;
  url: string;
}

export const NavSubItem = ({ id, name, url }: Props) => {
  // const router = useRouter();
  // const { filterProduct, setFilterProduct, setApplyFilter } = useProductStore(
  //   (state) => state
  // );

  // const handleOnClick = () => {
  //   router.push(`${url}/sub-category/${name}`);
  // };

  return (
    // <span
    //   className="text-white text-center font-semibold block px-4 py-2 text-sm uppercase hover:bg-cyan-500"
    //   onClick={handleOnClick}
    // >
    //   {name}
    // </span>
    <Link
      className="text-white text-center font-semibold block px-4 py-2 text-sm uppercase hover:bg-cyan-500"
      href={`${url}/sub-category/${name.replaceAll(" ", "-").toLowerCase()}`}
    >
      {name}
    </Link>
  );
};
