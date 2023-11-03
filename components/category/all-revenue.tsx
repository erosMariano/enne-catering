import Image from 'next/image';
import React from 'react';

import ButtonCategory from '../buttons/button-category';

import CategoryImage1 from '@/public/images/categories/todas-categoria-1.png';
import CategoryImage10 from '@/public/images/categories/todas-categoria-10.png';
import CategoryImage11 from '@/public/images/categories/todas-categoria-11.png';
import CategoryImage12 from '@/public/images/categories/todas-categoria-12.png';
import CategoryImage2 from '@/public/images/categories/todas-categoria-2.png';
import CategoryImage3 from '@/public/images/categories/todas-categoria-3.png';
import CategoryImage4 from '@/public/images/categories/todas-categoria-4.png';
import CategoryImage5 from '@/public/images/categories/todas-categoria-5.png';
import CategoryImage6 from '@/public/images/categories/todas-categoria-6.png';
import CategoryImage7 from '@/public/images/categories/todas-categoria-7.png';
import CategoryImage8 from '@/public/images/categories/todas-categoria-8.png';
import CategoryImage9 from '@/public/images/categories/todas-categoria-9.png';

export default function AllRevenue() {
  const dataCategories = [
    {
      imageUrl: CategoryImage1,
      label: 'Alimentação Saudável'
    },
    {
      imageUrl: CategoryImage2,
      label: 'Aves'
    },
    {
      imageUrl: CategoryImage3,
      label: 'Bebidas'
    },
    {
      imageUrl: CategoryImage4,
      label: 'Bolos e Tortas Doces'
    },
    {
      imageUrl: CategoryImage5,
      label: 'Carnes'
    },
    {
      imageUrl: CategoryImage6,
      label: 'Doces e Sobremesas'
    },
    {
      imageUrl: CategoryImage7,
      label: 'Lanches'
    },
    {
      imageUrl: CategoryImage8,
      label: 'Massas e Molhos'
    },
    {
      imageUrl: CategoryImage9,
      label: 'Pães'
    },
    {
      imageUrl: CategoryImage10,
      label: 'Peixes e Frutos do Mar'
    },
    {
      imageUrl: CategoryImage11,
      label: 'Sopas e Caldos'
    },
    {
      imageUrl: CategoryImage12,
      label: 'Veganas e Vegetarianas'
    }
  ];
  return (
    <main className="container">
      <h2 className="text-[32px] py-12 inter font-extrabold text-titleBlack text-center">
        Todas as Receitas
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {dataCategories.map((el) => (
          <div
            key={el.label}
            className="w-[280px] py-5 bg-backgroundGreen rounded-lg flex flex-col items-center"
          >
            <Image
              src={el.imageUrl}
              alt={el.label}
              quality={100}
              width={200}
              height={200}
            />
            <ButtonCategory label={el.label} className="mt-5" />
          </div>
        ))}
      </div>
    </main>
  );
}
