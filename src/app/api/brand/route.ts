import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const brands = await prisma.brand.findMany();

  if (brands.length === 0) {
    return NextResponse.json({ message: "No hay marcas" }, { status: 404 });
  }

  return NextResponse.json(brands);
}
