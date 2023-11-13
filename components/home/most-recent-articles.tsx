import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ButtonGreen from '../button-green';

import { GetRevenue } from '@/types/types';
import { Clock4 } from 'lucide-react';

type Props = {
  data: GetRevenue[];
};
export default function MostRecentArticles({ data }: Props) {
  function formatDate(value: Date) {
    return new Intl.DateTimeFormat('pt-br').format(value);
  }

  if (data.length >= 1) {
    const firstPost = data[0];
    return (
      <section className="py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[32px] inter font-bold text-titleBlack">
              Receitas mais <span className="text-buttonGreen">Recentes</span>
            </h2>

            <ButtonGreen variant="normal" href="#">
              Ver mais
            </ButtonGreen>
          </div>

          <div className="flex justify-between">
            <Link href={`/receitas/${firstPost.slug}`} className="w-[771px]">
              <div>
                <Image
                  src={firstPost.imageUrl}
                  quality={100}
                  width={771}
                  height={309}
                  alt={firstPost.title}
                  className="rounded-lg overflow-hidden h-[309px] object-cover"
                />

                <span className="mt-4 text-titleGray6 text-xs flex gap-1 poppins  font-medium">
                  <Clock4 width={16} height={16} color="#666" /> Em{' '}
                  {formatDate(new Date(String(firstPost.createAt)))}
                </span>

                <h3 className="poppins text-xl font-normal text-titleGray mb-1 leading-10">
                  {firstPost.title}
                </h3>
                <p className="text-base poppins font-medium  text-titleGray max-w-[719px] leading-5">
                  {firstPost.description}
                </p>
              </div>
            </Link>

            <div className="flex-1 grid grid-rows-3 gap-5 max-w-[313px]">
              {data.slice(1).map((el) => (
                <Link
                  key={el.slug}
                  href={`/receitas/${el.slug}`}
                  className="flex gap-2"
                >
                  <Image
                    src={el.imageUrl}
                    width={132}
                    height={128}
                    alt={el.title}
                    className="rounded-md"
                  />
                  <div>
                    <span className="text-titleGray6 text-xs flex gap-1 poppins font-medium">
                      <Clock4 width={16} height={16} color="#666" /> Em{' '}
                      {formatDate(new Date(String(el.createAt)))}
                    </span>
                    <p className="text-xs poppins font-medium mt-3 text-titleGray max-w-[719px] leading-5">
                      {el.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
