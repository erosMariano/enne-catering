import Link from 'next/link';
import React from 'react';

import Pagination from '@/components/pesquisa/pagination';
import SearchElementPage from '@/components/pesquisa/search-element-page';
// import ListCardCategory from '@/components/templates/list-cards-category';

// import Image1 from '@/public/images/categories/categorias-manha-1.png';
// import Image2 from '@/public/images/categories/categorias-manha-2.png';
// import Image3 from '@/public/images/categories/categorias-manha-3.png';
import { encodeURLParameter } from '@/utils/encodeURLParameter';
export default function Pesquisa({
  searchParams
}: {
  searchParams: { s: string };
}) {
  const title = searchParams.s;
  // const receitasCafeManha = [
  //   {
  //     imageUrl: String(Image1),
  //     slug: 'bolo-simples',
  //     title: 'Combinações para pão'
  //   },
  //   {
  //     imageUrl: Image2,
  //     slug: 'bolo-simples',
  //     title: 'Panquecas com Geleia de frutas vermelhas'
  //   },
  //   {
  //     imageUrl: Image3,
  //     slug: 'bolo-simples',
  //     title: 'Broa de fubá com goiabada'
  //   },
  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Smoothie de Morango e Banana'
  //   },

  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Torradas de Abacate com Ovo Poche'
  //   },

  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Mingau de Aveia com Frutas'
  //   },

  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Waffles de Mirtilo'
  //   },

  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Omelete de Espinafre e Queijo'
  //   },

  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Tapioca Recheada com Coco e Banana'
  //   },

  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Pão de Queijo'
  //   },

  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Iogurte com Granola e Mel'
  //   },

  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Tigela de Açaí com Frutas e Granola'
  //   },
  //   {
  //     imageUrl: Image1,
  //     slug: 'bolo-simples',
  //     title: 'Fala comigo'
  //   }
  // ];

  return (
    <>
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
              href="/pesquisa?s=Brownie"
              className="text-2xl text-titleGray font-medium"
            >
              Brownie
            </Link>
            <Link
              href={`/pesquisa?s=${encodeURLParameter('Lasanha de forno')}`}
              className="text-2xl text-titleGray font-medium"
            >
              Lasanha de forno
            </Link>
            <Link
              href={`/pesquisa?s=${encodeURLParameter('Frango á milanesa')}`}
              className="text-2xl text-titleGray font-medium"
            >
              Frango á milanesa
            </Link>
            <Link
              href="/pesquisa?s=Bolo"
              className="text-2xl text-titleGray font-medium"
            >
              Bolo
            </Link>
            <Link
              href={`/pesquisa?s=${encodeURLParameter('Torta de frango')}`}
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

          {/* <ListCardCategory
            quantityCards={12}
            title=""
            emphasis=""
            data={receitasCafeManha}
          /> */}
        </section>

        <Pagination quantity={7} />
      </main>
    </>
  );
}
