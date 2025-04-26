import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface FeaturedProduct {
  id: number;
  name: string;
  price: number;
  img_url: string;
}

export async function GET(request: Request) {
  const featuredProducts: FeaturedProduct[] = await prisma.$queryRaw`
  select 
    distinct  
    p.id, p."name", 
    p.price, 
    p.images
  from product p
  inner join order_item oi on p.id = oi.product_id
  group by p.id, p."name", p.price, p.images
  having count(oi.product_id) > 1`;

  if (featuredProducts.length === 0) {
    return NextResponse.json({ message: "No hay productos" }, { status: 404 });
  }

  return NextResponse.json(featuredProducts);
}
