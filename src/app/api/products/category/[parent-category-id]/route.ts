import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Products {
  id: number;
  name: string;
  price: number;
  images: string[];
  namenormalized: string;
}

interface Segments {
  params: {
    ["parent-category-id"]: number;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const parentCategoryId = params["parent-category-id"];

  if (!parentCategoryId || isNaN(Number(parentCategoryId))) {
    return NextResponse.json(
      { message: "ID de categoría no válido" },
      { status: 400 }
    );
  }

  let products: Products[] = await prisma.$queryRaw`
    select 
      p.id,
      p.name,
      p.price,
      p.images,
      p.namenormalized
    from product p 
    inner join category c on c.id  = p.category_id 
    inner join category c2 on c.parent_category_id  = c2.id
    where c.parent_category_id = ${+parentCategoryId}
    `;

  if (products.length === 0) {
    products = await prisma.$queryRaw`
    select 
      p.id,
      p.name,
      p.price,
      p.images,
      p.namenormalized
    from product p 
    where p.category_id= ${+parentCategoryId}
    `;
  }

  if (products.length === 0) {
    return NextResponse.json(
      { message: `No hay productos para esa categoría` },
      { status: 404 }
    );
  }

  return NextResponse.json(products);
}
