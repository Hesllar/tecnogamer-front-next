import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const categoryId = Number(searchParams.get("categoryId") ?? 0);

  const rangePrice = Number(searchParams.get("rangePrice") ?? 0);

  const brandId = Number(searchParams.get("brandId") ?? null);

  if (isNaN(categoryId)) {
    return NextResponse.json(
      { message: "categoryId tiene que ser un número" },
      { status: 400 }
    );
  }

  let products = [];

  if (categoryId === 0) {
    products = await prisma.product.findMany({
      include: {
        category: {
          select: {
            name: true,
            is_active: true,
          },
        },
      },
    });
  } else if (brandId) {
    products = await prisma.product.findMany({
      where: {
        category_id: categoryId,
        brand_id: brandId,
        price: {
          gte: rangePrice,
        },
      },
      include: {
        category: {
          select: {
            name: true,
            is_active: true,
          },
        },
      },
    });
  } else {
    products = await prisma.product.findMany({
      where: { category_id: categoryId, price: { gte: rangePrice } },
      include: {
        category: {
          select: {
            name: true,
            is_active: true,
          },
        },
      },
    });
  }

  if (products.length === 0) {
    return NextResponse.json({ message: "No hay productos" }, { status: 404 });
  }

  return NextResponse.json(products);
}
