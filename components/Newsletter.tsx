import Image from 'next/image';
import React from 'react';

import ImageNewsletter from '@/assets/images/image-news.png';
export default function Newsletter() {
  return (
    <section className="py-12 bg-green">
      <div className="container flex items-center justify-between gap-4">
        <div className="w-[502px]">
          <h4 className="text-4xl text-titleBlack inter font-extrabold mb-7">
            Siga a nossa <span className="text-buttonGreen">Newsletter!</span>
          </h4>
          <p className="poppins text-2xl text-titleBlack leading-10 font-semibold mb-7">
            Receba em primeira mão nossas atualizações de receitas, artigos e
            dicas.
          </p>
          <input
            type="text"
            placeholder="email@email.com"
            className="mb-7 border outline-buttonGreen border-buttonGreen h-[70px] w-full rounded-full px-6 font-medium placeholder:text-titleGray6 text-sm"
          />
          <button className="bg-buttonGreen h-[76px] w-full inter text-white text-xl font-bold rounded-full">
            Me inscrever
          </button>
        </div>
        <Image
          src={ImageNewsletter}
          alt="Formas com comidas"
          className="relative -right-20"
        />
      </div>
    </section>
  );
}
