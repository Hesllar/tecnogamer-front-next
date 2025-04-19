import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const categories = await prisma.category.findMany();

  if (categories.length === 0) {
    return NextResponse.json({ message: "No hay categorías" }, { status: 404 });
  }

  return NextResponse.json(categories);
}
