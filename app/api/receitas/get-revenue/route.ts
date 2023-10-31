import { NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client';
export async function GET(request: Request) {
  const slug = request.url.split('?=')[1];

  const prisma = new PrismaClient();

  const revenue = await prisma.revenues.findMany({
    where: {
      slug: slug
    }
  });
  return NextResponse.json({ revenue });
}
