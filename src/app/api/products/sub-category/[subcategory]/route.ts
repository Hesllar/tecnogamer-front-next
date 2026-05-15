import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Segments {
  params: {
    ["subcategory"]: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const subCategory = params["subcategory"];

  let products: any[] = [];

  if (isNaN(+subCategory)) {
    products = await prisma.product.findMany({
      where: {
        category: {
          name: {
            contains: subCategory.replaceAll("-", " "),
            mode: "insensitive", // para hacer búsqueda case-insensitive
          },
        },
      },
    });
  }

  if (!isNaN(+subCategory)) {
    products = await prisma.product.findMany({
      where: {
        category_id: +subCategory,
      },
    });
  }

  if (products.length === 0) {
    return NextResponse.json(
      { message: `No hay productos para esa categoría` },
      { status: 404 }
    );
  }

  const productsMapper = products.map((product) => ({
    id: product.id,
    name: product.name,
    namenormalized: product.namenormalized,
    price: product.price,
    images: product.images,
    is_active: product.is_active,
  }));
  return NextResponse.json(productsMapper);
}
