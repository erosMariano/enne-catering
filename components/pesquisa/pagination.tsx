import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Arrow from '@/assets/images/icons/arrow-next.svg';
import clsx from 'clsx';
type Props = {
  quantity: number;
  atualPage: number;
  title: string;
  per_page: number;
};
function Pagination({ quantity, title, atualPage, per_page }: Props) {
  const quantityPage =
    quantity % per_page === 0
      ? quantity / per_page
      : Math.trunc(quantity / per_page) + 1;

  const data = Array.from({ length: quantityPage }, (_, i) => i + 1);
  const count = atualPage;

  const prevButton =
    atualPage === 1
      ? `/pesquisa?s=${title}&page=1`
      : `/pesquisa?s=${title}&page=${atualPage - 1}`;

  const nextButton =
    atualPage + 1 > quantityPage
      ? `/pesquisa?s=${title}&page=${quantityPage}`
      : `/pesquisa?s=${title}&page=${count + 1}`;

  return (
    <div className="flex items-center justify-center mt-24 mb-36 gap-1">
      <Link
        href={prevButton}
        className={clsx(
          'w-[30px] h-[30px] bg-backgroundGreen flex items-center justify-center rounded-full',
          {
            'cursor-not-allowed pointer-events-none opacity-50': atualPage === 1
          }
        )}
      >
        <Image src={Arrow} alt="Arrow prev" width={24} height={24} />
      </Link>
      {data.map((el, index) => (
        <Link
          href={`/pesquisa?s=${title}&page=${index + 1}`}
          className={clsx(
            'w-[30px] h-[30px] rounded-full transition-all flex items-center justify-center',
            {
              'bg-backgroundGreen': atualPage - 1 === index
            }
          )}
          key={el}
        >
          {el}
        </Link>
      ))}
      <Link
        href={nextButton}
        className={`w-[30px] h-[30px] bg-backgroundGreen flex items-center justify-center rounded-full ${
          atualPage + 1 > quantityPage &&
          'cursor-not-allowed pointer-events-none opacity-50'
        }`}
      >
        <Image
          src={Arrow}
          alt="Arrow next"
          className="rotate-180"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
}

export default Pagination;
