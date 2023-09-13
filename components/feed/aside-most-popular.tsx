import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ButtonGreen from '../button-green';

import ImageNews from '@/assets/images/bg-image-card-news.png';
import ImageSalad from '@/assets/images/bg-image-salad-popular.png';
import ArrowButtonNext from '@/assets/images/icons/arrow-button-next.svg';
import ImageHealth from '@/assets/images/icons/health.svg';
import ImageLifeStyle from '@/assets/images/icons/life-style.svg';
import ImageNutrition from '@/assets/images/icons/nutrition.svg';
import ImageReceitas from '@/assets/images/icons/receita.svg';

export default function AsideMostPopular() {
  const itemsCategories = [
    {
      image: ImageReceitas,
      label: 'Receitas',
      href: '/'
    },
    {
      image: ImageNutrition,
      label: 'Saúde e nutrição',
      href: '/'
    },
    {
      image: ImageHealth,
      label: 'Saúde mental',
      href: '/'
    },
    {
      image: ImageLifeStyle,
      label: 'Estilo de vida',
      href: '/'
    }
  ];

  return (
    <aside className="w-[282px]">
      <h2 className="poppins text-2xl font-semibold text-titleBlack">
        Mais Populares
      </h2>

      <div className="pb-2 mb-4 pt-4 border-t border-backgroundGray mt-3">
        <div className="rounded-t overflow-hidden mb-2">
          <Image
            src={ImageSalad}
            alt="Conheça a famosa Salada Caesar que esta em alta nas redes sociais!"
          />
        </div>
        <p className="poppins text-xs font-medium mb-5">
          Conheça a famosa Salada Caesar que esta em alta nas redes sociais!
        </p>

        <ButtonGreen href="#" variant="readMore">
          <span className="flex gap-3">
            <span className="text-xs">Ler mais</span>
            <Image
              src={ArrowButtonNext}
              width={16}
              height={16}
              alt="Ler mais ícone"
            />
          </span>
        </ButtonGreen>
      </div>
      <div className="pb-2 mb-4 pt-4 border-t border-backgroundGray mt-3">
        <div className="rounded-t overflow-hidden mb-2">
          <Image
            src={ImageNews}
            alt="Entenda a importância de praticar exercícios físicos ao menos 30min por dia!"
          />
        </div>
        <p className="poppins text-xs font-medium mb-5">
          Entenda a importância de praticar exercícios físicos ao menos 30min
          por dia!
        </p>

        <ButtonGreen href="#" variant="readMore">
          <span className="flex gap-3">
            <span className="text-xs">Ler mais</span>
            <Image
              src={ArrowButtonNext}
              width={16}
              height={16}
              alt="Ler mais ícone"
            />
          </span>
        </ButtonGreen>
      </div>

      <div className="pt-3 block">
        <h2 className="pb-2 border-b mb-3 border-backgroundGray inter text-titleBlack font-semibold">
          Navegue por Categoria
        </h2>
        <nav>
          <ul>
            {itemsCategories.map((el) => (
              <li
                key={el.label}
                className="mb-3 inter text-titleBlack font-semibold flex gap-2"
              >
                <Image src={el.image} width={24} height={24} alt={el.label} />
                <Link href={el.href}>{el.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
