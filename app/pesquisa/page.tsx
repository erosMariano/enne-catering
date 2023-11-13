import Link from 'next/link';
import React from 'react';

import Pagination from '@/components/pesquisa/pagination';
import SearchElementPage from '@/components/pesquisa/search-element-page';
import ListCardCategory from '@/components/templates/list-cards-category';

import { prisma } from '@/lib/prisma';
import { encodeURLParameter } from '@/utils/encodeURLParameter';

async function getSearchRevenues(
  searchText: string,
  takeNumber: number,
  skipNumber: number
) {
  const revenues = await prisma.$transaction([
    prisma.revenues.count({
      where: {
        title: {
          contains: searchText
        }
      }
    }),
    prisma.revenues.findMany({
      take: takeNumber,
      skip: skipNumber,
      where: {
        title: {
          contains: searchText
        }
      }
    })
  ]);

  await prisma.$disconnect();
  return {
    count: revenues[0],
    revenues: revenues[1]
  };
}

export default async function SearchPage({
  searchParams
}: {
  searchParams: { s: string; page: string };
}) {
  const title = searchParams.s;
  const atualPage = Number(searchParams.page) || 1;
  const per_page = 12;
  const skipe_page = per_page * (atualPage - 1);
  const { revenues, count } = await getSearchRevenues(
    title,
    per_page,
    skipe_page
  );

  return (
    <main className="poppins">
      <div className="w-full">
        <SearchElementPage searchValue={title} />
      </div>
      <section className="container mt-10">
        <div className="flex gap-5 justify-center">
          <span className="text-2xl text-buttonGreen font-medium">
            Sugestão:
          </span>
          <Link
            href="/pesquisa?s=Brownie&page=1"
            className="text-2xl text-titleGray font-medium"
          >
            Brownie
          </Link>
          <Link
            href={`/pesquisa?s=${encodeURLParameter(
              'Lasanha de forno'
            )}&page=1`}
            className="text-2xl text-titleGray font-medium"
          >
            Lasanha de forno
          </Link>
          <Link
            href={`/pesquisa?s=${encodeURLParameter(
              'Frango á milanesa'
            )}&page=1`}
            className="text-2xl text-titleGray font-medium"
          >
            Frango á milanesa
          </Link>
          <Link
            href="/pesquisa?s=Bolo&page=1"
            className="text-2xl text-titleGray font-medium"
          >
            Bolo
          </Link>
          <Link
            href={`/pesquisa?s=${encodeURLParameter('Torta de frango')}&page=1`}
            className="text-2xl text-titleGray font-medium"
          >
            Torta de frango
          </Link>
        </div>
      </section>

      <section className="container mt-10">
        <p className="text-2xl text-titleGray font-medium">
          Resultados para a sua pesquisa:
          <span className="text-2xl text-buttonGreen font-medium">
            {' '}
            {title}
          </span>
        </p>
        {revenues.length >= 1 ? (
          <ListCardCategory
            quantityCards={12}
            title=""
            emphasis=""
            data={revenues}
          />
        ) : (
          <p>oi</p>
        )}
      </section>

      <Pagination
        per_page={per_page}
        title={title}
        quantity={count}
        atualPage={atualPage}
      />
    </main>
  );
}
