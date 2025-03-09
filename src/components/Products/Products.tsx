import productsData from "../../data/products.json";
import {
  amdRyzen5800,
  amdRyzen9900,
  intelCore11400,
  intelCoreUltra265K,
} from "../../../public/index";

import { ProductItem } from "./ProductItem";

const imageData: { [key: number]: any } = {
  0: amdRyzen5800,
  1: amdRyzen9900,
  2: intelCore11400,
  3: intelCoreUltra265K,
};

export const Products = () => {
  const { productos } = productsData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {productos.map((producto, index) => (
        <ProductItem
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          categoria={producto.categoria}
          precio={producto.precio}
          image={imageData[index]}
        />
      ))}
    </div>
  );
};
