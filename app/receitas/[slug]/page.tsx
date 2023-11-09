import React from 'react';

import Hero from '@/components/blog/hero';
import Presentation from '@/components/blog/presentation';
import Revenue from '@/components/blog/revenue';
import Footer from '@/components/footer';

import { prisma } from '@/lib/prisma';

export default async function Article({
  params
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const revenue = await prisma.revenues.findMany({
    where: {
      slug: slug
    }
  });

  if (!revenue[0]) {
    return <div>Que pena. ainda não temos essa receita olhe as outras...</div>;
  }
  const {
    title,
    imageUrl,
    presentation,
    description,
    preparation,
    cooking,
    total,
    ingredients,
    methodPreparation,
    calories,
    category,
    incomeQuantity,
    incomeType
  } = revenue[0];

  const user = await prisma.user.findUnique({
    where: {
      id: String(revenue[0].userId)
    }
  });

  const dataRevenue = {
    title: title,
    description: description,
    preparationInformation: {
      tempoPreparo: preparation,
      tempoCozimento: cooking,
      total: total
    },
    ingredients: ingredients,
    methodPreparation: methodPreparation,
    rendimento: incomeQuantity,
    category: category,
    incomeType: incomeType,
    calories: calories
  };

  return (
    <>
      <main className="max-w-[1020px] mx-auto pt-10 pb-32">
        <Hero imageUrl={imageUrl} title={title} user={user!} />
        <Presentation title={title} presentation={presentation} />
        <Revenue data={dataRevenue} />
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const receitas = await prisma.revenues.findMany();

  const data = receitas.map((receita) => ({
    slug: receita.slug
  }));

  return data;
}
