import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import BreadImage from '@/assets/images/btn-bread.png';
import MassasImage from '@/assets/images/btn-massas.png';
import SaladImage from '@/assets/images/btn-salad.png';
import SobremesaImage from '@/assets/images/btn-sobremesas.png';
import SoupImage from '@/assets/images/btn-soup.png';
import VeganImage from '@/assets/images/btn-vegan.png';

export default function QuickNavigation() {
  const navigationItems = [
    {
      href: '/categorias/area-vegeana',
      image: VeganImage,
      label: 'Área vegana'
    },
    {
      href: '/categorias/saladas-e-entradas',
      image: SaladImage,
      label: 'Saladas e entradas'
    },
    {
      href: '/categorias/sopas-e-caldos',
      image: SoupImage,
      label: 'Sopas e caldos'
    },
    {
      href: '/categorias/paes',
      image: BreadImage,
      label: 'Pães'
    },
    {
      href: '/categorias/massas',
      image: MassasImage,
      label: 'Massas'
    },
    {
      href: '/categorias/sobremesas',
      image: SobremesaImage,
      label: 'Sobremesas'
    }
  ];
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-[32px] font-bold text-titleBlack text-center">
          Navegação rápida
        </h2>

        <div className="grid grid-cols-6 gap-11 mt-11">
          {navigationItems.map((item) => (
            <Link href={item.href} key={item.label}>
              <Image
                src={item.image}
                width={160}
                height={160}
                alt={item.label}
              />
              <span className="block poppins text-xl text-titleGray mt-5 text-center">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
