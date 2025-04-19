import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const categoryId = Number(searchParams.get("category_id") ?? 0);

  const maxPrice = await prisma.product.aggregate({
    _max: {
      price: true,
    },
    where: {
      category_id: categoryId,
    },
  });

  return NextResponse.json(maxPrice);
}
