import React from 'react';

import Hero from '@/components/blog/hero';
import Presentation from '@/components/blog/presentation';
import Revenue from '@/components/blog/revenue';
import Footer from '@/components/footer';

import { prisma } from '@/lib/prisma';
import { RevenueView } from '@/types/types';

export default async function Article({
  params
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const url = process.env.NEXT_PUBLIC_URL;

  const res = await fetch(`${url}/api/receitas/get-revenue?=${slug}`, {
    method: 'GET'
  });

  const { revenue }: RevenueView = await res.json();
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
      id: revenue[0].userId
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

// Criar rota para todos os posts para deixar estático
export async function generateStaticParams() {
  const receitas = await prisma.revenues.findMany();

  return receitas.map((receita) => ({
    slug: receita.slug
  }));
}
