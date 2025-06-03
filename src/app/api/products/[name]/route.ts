import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Segments {
  params: {
    name: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const product = await prisma.product.findFirst({
    include: {
      brand: {
        select: {
          name: true,
        },
      },
    },
    where: {
      OR: [
        { name: params.name.toLowerCase().replace(/-/g, " ") },
        { namenormalized: params.name.toLowerCase().replace(/-/g, " ") },
      ],
    },
  });

  if (!product) {
    return NextResponse.json(
      { message: `Producto con el nombre ${params.name} no exite` },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
