import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Segments {
  params: {
    ["subcategory-id"]: number;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const subCategoryId = params["subcategory-id"];

  if (!subCategoryId || isNaN(Number(subCategoryId))) {
    return NextResponse.json(
      { message: "ID de categoría no válido" },
      { status: 400 }
    );
  }

  const product = await prisma.product.findMany({
    where: {
      category_id: +subCategoryId,
    },
  });

  if (product.length === 0) {
    return NextResponse.json(
      { message: `No hay productos para esa categoría` },
      { status: 404 }
    );
  }

  const productsMapper = product.map((product) => ({
    id: product.id,
    name: product.name,
    namenormalized: product.namenormalized,
    price: product.price,
    images: product.images,
    is_active: product.is_active,
  }));
  return NextResponse.json(productsMapper);
}
