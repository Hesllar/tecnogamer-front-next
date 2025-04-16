import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const category_id = Number(searchParams.get("category_id") ?? 0);

  if (isNaN(category_id)) {
    return NextResponse.json(
      { message: "category_id tiene que ser un número" },
      { status: 400 }
    );
  }

  let products = [];

  if (category_id === 0) {
    products = await prisma.product.findMany();
  } else {
    products = await prisma.product.findMany({ where: { category_id } });
  }

  if (products.length === 0) {
    return NextResponse.json({ message: "No hay productos" }, { status: 404 });
  }

  return NextResponse.json(products);
}
