import { NextResponse } from 'next/server';

import { CreateRevenue } from '@/types/types';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();
export async function POST(req: Request) {
  const revenue: CreateRevenue = await req.json();

  function createSlug(text: string) {
    const formatText = text
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .split(' ')
      .join('-');

    return formatText;
  }

  const create = await prisma.revenues.create({
    data: {
      title: revenue.title,
      slug: createSlug(revenue.title),
      imageUrl: String(revenue.imageUrl),
      calories: revenue.calories,
      presentation: revenue.presentation,
      category: revenue.category,
      description: revenue.description,
      cooking: revenue.preparationInformation.cooking,
      preparation: revenue.preparationInformation.preparation,
      total: revenue.preparationInformation.total,
      incomeQuantity: revenue.income.quantity,
      incomeType: revenue.income.type,
      ingredients: revenue.ingredients,
      methodPreparation: revenue.methodPreparation,
      createAt: new Date(),
      updateAt: new Date(),
      id: uuidv4(),
      userId: revenue.userId
    }
  });

  if (create.id) {
    return NextResponse.json(
      {
        slug: create.slug
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        message: 'Erro na criação'
      },
      { status: 400 }
    );
  }
}