import { Brand } from "../interfaces";

interface Props {
  handleOnchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  brandId: number | string;
  brands: Brand[];
}

export const SelectBrand = ({ handleOnchange, brandId, brands }: Props) => {
  return (
    <select
      name="brandId"
      onChange={handleOnchange}
      value={brandId}
      className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer pr-10"
    >
      <option value={""} disabled>
        Selecciona una marca
      </option>
      {brands.map((brand) => (
        <option key={brand.id} value={brand.id}>
          {brand.name}
        </option>
      ))}
    </select>
  );
};
