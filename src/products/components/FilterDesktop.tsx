interface Props {
  subCategories: { id: string; name: string }[];
}

export const FilterDesktop = ({ subCategories = [] }: Props) => {
  return (
    <div className="bg-zinc-700 w-[300px] h-screen rounded-md flex flex-col items-center text-white p-4">
      <h2 className="text-2xl font-semibold">Filtros</h2>
      <fieldset>
        <legend>Datos generales</legend>
        {subCategories.map((category) => (
          <div key={category.id}>
            <label className="uppercase">
              <input type="checkbox" />
              {category.name}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};
