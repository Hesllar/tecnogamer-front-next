import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const categoryId = Number(searchParams.get("categoryId") ?? 0);

  if (isNaN(categoryId)) {
    return NextResponse.json(
      { message: "categoryId tiene que ser un número" },
      { status: 400 }
    );
  }

  let brands = [];

  if (categoryId === 0) {
    // Obtiene todas las marcas
    brands = await prisma.brand.findMany();
  } else {
    // Obtiene las marcas de los productos de la categoria
    // y elimina los duplicados
    brands = await prisma.product
      .findMany({
        select: {
          brand: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        where: {
          category_id: categoryId,
        },
        distinct: ["brand_id"],
      })
      .then((products) => {
        return products.map((product) => {
          return {
            id: product.brand!.id,
            name: product.brand!.name,
          };
        });
      });
  }

  if (brands.length === 0) {
    return NextResponse.json({ message: "No hay marcas" }, { status: 404 });
  }

  return NextResponse.json(brands);
}
