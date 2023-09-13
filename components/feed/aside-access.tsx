import Image from 'next/image';
import React from 'react';

import ImageReceitas from '@/assets/images/bg-image-taco.jpg';
import { Clock4 } from 'lucide-react';

export default function AsideAccess() {
  const itemsAccess = [
    {
      image: ImageReceitas,
      label:
        '5 receitas fáceis de Poke, a comida havaiana que conquistou o mundo.',
      date: '17/05/23',
      href: '/'
    },
    {
      image: ImageReceitas,
      label:
        '3 receitas fáceis de Poke, a comida havaiana que conquistou o mundo.',
      date: '17/05/23',
      href: '/'
    },
    {
      image: ImageReceitas,
      label:
        '4 receitas fáceis de Poke, a comida havaiana que conquistou o mundo.',
      date: '17/05/23',
      href: '/'
    },
    {
      image: ImageReceitas,
      label:
        '5 receitas fáceis de Poke, a comida havaiana que conquistou o mundo.',
      date: '17/05/23',
      href: '/'
    }
  ];

  return (
    <aside className="w-[269px] border border-backgroundGray p-4">
      <h2 className="poppins text-base font-semibold text-titleBlack mb-2">
        Acesso Rápido
      </h2>

      <div className="flex flex-col gap-4">
        {itemsAccess.map((el) => (
          <div key={el.label} className="flex gap-1">
            <Image
              width={80}
              height={80}
              src={el.image}
              alt={el.label}
              className="rounded-sm"
            />

            <div className="w-full flex flex-col justify-between">
              <span className="poppins text-titleGray6 text-[8px] font-medium ">
                {el.label}
              </span>
              <span className="flex items-end poppins gap-1 text-titleGray6 text-[8px] font-medium ">
                Em <Clock4 width={16} height={16} color="#666" />
                {el.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
