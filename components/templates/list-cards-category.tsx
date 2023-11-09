import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { GetRevenue } from '@/types/types';

interface ListCardCategoryProps {
  title: string;
  emphasis: string;
  quantityCards: number;
  data: GetRevenue[];
}
function ListCardCategory({
  title,
  emphasis,
  data,
  quantityCards
}: ListCardCategoryProps) {
  return (
    <section className="mt-28">
      <h2 className="text-[32px] inter font-bold text-titleBlack">
        {title} <span className="text-buttonGreen">{emphasis}</span>
      </h2>

      <div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-16">
        {data.slice(0, quantityCards).map((el) => (
          <Link href={`/receitas/${el.slug}`} key={el.title}>
            <Image
              src={el.imageUrl}
              width={369}
              height={220}
              quality={100}
              alt={el.title}
              className="rounded-[4px] w-full h-[220px] object-cover"
            />
            <h3 className="mt-3 poppins text-xl">{el.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ListCardCategory;
