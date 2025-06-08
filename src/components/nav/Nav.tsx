import { Category } from "@/categories/interfaces";
import { NavItems } from "./NavItems";

interface Props {
  categories: {
    id: string;
    name: string;
    image: string;
    is_active: boolean;
    subCategories?: Category[];
  }[];
}

export const Nav = ({ categories }: Props) => {
  return (
    <nav className="flex justify-center">
      <div className=" bg-gradient-to-br from-teal-900 via-teal-300 to-teal-900 mt-20 rounded-t-md justify-between shadow-[0_0px_10px_6px_rgba(15,194,205)] hidden md:flex md:w-10/12 2xl:w-full 2xl:max-w-[1360px]">
        {categories.map((category) => (
          <NavItems key={category.id} {...category} />
        ))}
      </div>
    </nav>
  );
};
