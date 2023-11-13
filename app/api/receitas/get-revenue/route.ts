import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const slug = request.url.split('?=')[1];

  const revenue = await prisma.revenues.findMany({
    where: {
      slug: slug
    }
  });
  await prisma.$disconnect();

  return NextResponse.json({ revenue });
}
