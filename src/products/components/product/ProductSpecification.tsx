interface Props {
  specefication: { [key: string]: string | number };
}

export const ProductSpecification = ({ specefication }: Props) => {
  return (
    <div className="space-y-4">
      <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-4">
          <h3 className="text-2xl font-bold text-white">
            {specefication?.nombre ?? "Especificaciones Generales"}
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-1">
            {Object.entries(specefication).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-2 gap-4 py-4 px-4 hover:bg-slate-800 rounded-lg transition-colors group"
              >
                <span className="text-slate-400 font-medium capitalize group-hover:text-slate-300">
                  {key.replaceAll("_", " ")}
                </span>
                <span className="text-white font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
