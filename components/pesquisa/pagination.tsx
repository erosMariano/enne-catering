'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import Arrow from '@/assets/images/icons/arrow-next.svg';
import clsx from 'clsx';
type Props = {
  quantity: number;
};
function Pagination({ quantity }: Props) {
  const data = Array.from({ length: quantity }, (_, i) => i + 1);
  const [indexActive, setIndexActive] = useState(0);

  function nextPage() {
    if (indexActive < quantity - 1) {
      setIndexActive((prevState) => prevState + 1);
    }
  }

  function prevPage() {
    if (indexActive >= 1) {
      setIndexActive((prevState) => prevState - 1);
    }
  }
  return (
    <div className="flex items-center justify-center mt-24 mb-36 gap-1">
      <button
        onClick={prevPage}
        className="w-[30px] h-[30px] bg-backgroundGreen flex items-center justify-center rounded-full"
      >
        <Image src={Arrow} alt="Arrow prev" width={24} height={24} />
      </button>
      {data.map((el, index) => (
        <button
          onClick={() => setIndexActive(index)}
          className={clsx('w-[30px] h-[30px] rounded-full transition-all', {
            'bg-backgroundGreen': indexActive === index
          })}
          key={el}
        >
          {el}
        </button>
      ))}

      <button
        onClick={nextPage}
        className="w-[30px] h-[30px] bg-backgroundGreen flex items-center justify-center rounded-full"
      >
        <Image
          src={Arrow}
          alt="Arrow next"
          className="rotate-180"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default Pagination;
