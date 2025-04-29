import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface FeaturedProduct {
  id: number;
  name: string;
  price: number;
  img_url: string;
  category_name: string;
}

export async function GET(request: Request) {
  const featuredProducts: FeaturedProduct[] = await prisma.$queryRaw`
  select 
    distinct  
    p.id, p."name", 
    p.price, 
    p.images,
    c."name" as category_name
  from product p
  inner join order_item oi on p.id = oi.product_id
  inner join category c on c.id = p.category_id 
  group by p.id, p."name", p.price, p.images, c."name" 
  having count(oi.product_id) > 1`;

  if (featuredProducts.length === 0) {
    return NextResponse.json({ message: "No hay productos" }, { status: 404 });
  }

  const featuredProductsMapper = featuredProducts.map((product) => {
    return {
      ...product,
      category: {
        name: product.category_name,
      },
    };
  });

  return NextResponse.json(featuredProductsMapper);
}
