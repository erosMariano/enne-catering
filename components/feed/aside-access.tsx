import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ImageReceita1 from '@/assets/images/bg-img-airfryer-access.png';
import ImageReceita2 from '@/assets/images/img-2-access.png';
import ImageReceita3 from '@/assets/images/img-3-access.png';
import ImageReceita4 from '@/assets/images/img-4-access.png';
import ImageReceita5 from '@/assets/images/img-5-access.png';
import { Clock4 } from 'lucide-react';

export default function AsideAccess() {
  const itemsAccess = [
    {
      image: ImageReceita1,
      label:
        '5 receitas fáceis de Poke, a comida havaiana que conquistou o mundo.',
      date: '17/05/23',
      href: '/'
    },
    {
      image: ImageReceita2,
      label:
        '10 receitas saudáveis para você fazer em casa e melhorar seus hábitos alimentares.',
      date: '13/04/23',
      href: '/'
    },
    {
      image: ImageReceita3,
      label:
        'Saiba os benefícios da água no seu organismo, e como mantê-la no seu dia a dia.',
      date: '08/06/23',
      href: '/'
    },
    {
      image: ImageReceita4,
      label: '10 receitas fáceis para jantar sem ter muito trabalho',
      date: '17/05/23',
      href: '/'
    },
    {
      image: ImageReceita5,
      label: 'Descubra qual a diferença entre bacon, toucinho e paleta',
      date: '17/05/23',
      href: '/'
    }
  ];

  return (
    <aside className="w-[269px] border border-backgroundGray p-4  sticky top-24">
      <h2 className="poppins text-base font-semibold text-titleBlack mb-2">
        Acesso Rápido
      </h2>

      <div className="flex flex-col gap-4">
        {itemsAccess.map((el) => (
          <Link href={'/'} key={el.label} className="flex gap-1 items-start">
            <Image
              width={80}
              height={80}
              src={el.image}
              alt={el.label}
              className="rounded-sm"
            />

            <div className="w-full flex flex-col justify-between">
              <span className="poppins text-titleGray6 font-medium text-xs leading-[initial]">
                {el.label}
              </span>
              <span className="flex items-center poppins gap-1 text-titleGray6 text-xs leading-6 font-medium">
                Em <Clock4 width={12} height={12} color="#666" />
                {el.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
