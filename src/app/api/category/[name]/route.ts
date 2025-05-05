import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
  params: {
    name: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const categories = await prisma.category.findFirst({
    where: {
      name: {
        equals: params.name.toLowerCase().replace(/-/g, " "),
        mode: "insensitive",
      },
    },
  });

  if (!categories) {
    return NextResponse.json(
      { message: `Categoría con el nombre ${params.name} no exite` },
      { status: 404 }
    );
  }

  return NextResponse.json(categories);
}
