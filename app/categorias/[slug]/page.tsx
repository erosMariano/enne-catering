import Image from 'next/image';
import React from 'react';

import ListCardCategory from '@/components/templates/list-cards-category';

import { prisma } from '@/lib/prisma';
import { GetRevenue } from '@/types/types';
import { categoriesInfos } from '@/utils/listCategory';

export async function generateStaticParams() {
  return categoriesInfos.map((category) => ({
    slug: category.slug
  }));
}

async function getRevenues(slug: string) {
  const data: GetRevenue[] = await prisma.revenues.findMany({
    where: {
      category: slug
    }
  });

  const revenueLists: {
    receitasCafeManha: GetRevenue[];
    receitasDiaADia: GetRevenue[];
    receitasRefeicoes: GetRevenue[];
    receitasSobremesa: GetRevenue[];
    receitasBebidas: GetRevenue[];
  } = {
    receitasCafeManha: [],
    receitasDiaADia: [],
    receitasRefeicoes: [],
    receitasSobremesa: [],
    receitasBebidas: []
  };

  data.forEach((el) => {
    if (el.typeRevenue === 'receita-para-cafe-da-manha') {
      revenueLists.receitasCafeManha.push(el);
    } else if (el.typeRevenue === 'receita-para-dia-a-dia') {
      revenueLists.receitasDiaADia.push(el);
    } else if (el.typeRevenue === 'receita-para-refeicoes') {
      revenueLists.receitasRefeicoes.push(el);
    } else if (el.typeRevenue === 'receita-para-sobremesas') {
      revenueLists.receitasSobremesa.push(el);
    } else if (el.typeRevenue === 'receita-para-bebidas') {
      revenueLists.receitasBebidas.push(el);
    }
  });
  await prisma.$disconnect();

  const quantityPostInPage = data.length;
  return {
    quantityPostInPage,
    revenueLists
  };
}

function getDataPage(slug: string) {
  return categoriesInfos.filter((el) => el.slug === slug);
}

export default async function Category({
  params
}: {
  params: { slug: string };
}) {
  const [dataPage] = getDataPage(params.slug);

  const { revenueLists, quantityPostInPage } = await getRevenues(params.slug);
  const {
    receitasBebidas,
    receitasCafeManha,
    receitasDiaADia,
    receitasRefeicoes,
    receitasSobremesa
  } = revenueLists;

  return (
    <>
      <div className="relative mb-32">
        <Image
          src={dataPage.imageBg}
          blurDataURL={dataPage.imageBg.blurDataURL}
          quality={100}
          alt="ALIMENTAÇÃO SAUDÁVEL"
          className="w-full object-cover"
        />
        <h1 className="backdrop-blur-sm max-w-[1000px] py-11 w-full bg-white/75 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] inter font-extrabold text-titleGray">
          {dataPage.label}
        </h1>
      </div>
      <main className="container mb-20">
        {quantityPostInPage === 0 && (
          <>
            <h4 className="text-4xl text-titleBlack inter font-extrabold mb-7 text-center pb-40">
              Infelizmente não temos receitas da categoria: <br />
              <span className="text-buttonGreen">{dataPage.label}</span>
            </h4>

            <p>Veja nossas receitas mais populares: </p>
          </>
        )}
        {receitasCafeManha.length >= 1 && (
          <ListCardCategory
            quantityCards={6}
            title="Receitas para"
            emphasis="Café da Manhã"
            data={receitasCafeManha}
          />
        )}
        {receitasDiaADia.length >= 1 && (
          <ListCardCategory
            quantityCards={6}
            title="Receitas para"
            emphasis="Dia a Dia"
            data={receitasDiaADia}
          />
        )}
        {receitasRefeicoes.length >= 1 && (
          <ListCardCategory
            quantityCards={3}
            title="Receitas para"
            emphasis="Refeições"
            data={receitasRefeicoes}
          />
        )}
        {receitasSobremesa.length >= 1 && (
          <ListCardCategory
            quantityCards={3}
            title="Receitas para"
            emphasis="Sobremesas"
            data={receitasSobremesa}
          />
        )}
        {receitasBebidas.length >= 1 && (
          <ListCardCategory
            quantityCards={3}
            title="Receitas para"
            emphasis="Bebidas"
            data={receitasBebidas}
          />
        )}
      </main>
    </>
  );
}
