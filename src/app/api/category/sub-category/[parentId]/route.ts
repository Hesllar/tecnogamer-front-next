import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
  params: {
    parentId: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const parentId = Number(params.parentId);

  if (isNaN(parentId)) {
    return NextResponse.json(
      { message: "El ID de la categoría padre debe ser un número" },
      { status: 400 }
    );
  }

  let categories = [];

  if (parentId === 0) {
    categories = await prisma.category.findMany({
      where: {
        is_active: true,
        parent_category_id: {
          not: null,
        },
      },
    });
  } else {
    categories = await prisma.category.findMany({
      where: { is_active: true, parent_category_id: parentId },
    });
  }

  if (categories.length === 0) {
    return NextResponse.json({ message: "No hay categorías" }, { status: 404 });
  }

  return NextResponse.json(categories);
}
