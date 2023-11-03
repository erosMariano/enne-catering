import Image from 'next/image';
import React from 'react';

import ImageNews1 from '@/public/images/categories/bg-img-heineken.png';
import ImageNews3 from '@/public/images/categories/card-news-lateral-2.png';
import ImageNews2 from '@/public/images/categories/card-news-lateral.png';
import { Clock4 } from 'lucide-react';

export default function News() {
  return (
    <section className="container py-20">
      <h2 className="mb-10 text-titleBlack text-[40px] text-center inter font-extrabold">
        Saiba mais sobre o que acontece em nosso Blog
      </h2>

      <div className="flex gap-5">
        <div className="relative">
          <Image
            src={ImageNews1}
            alt="Heineken vende operação na Rússia por US$ 1"
          />
          <div className="absolute bottom-0 left-0 p-5">
            <span className="text-white poppins text-xs mb-3 flex items-center gap-2">
              <Clock4 width={16} height={16} color="#fff" /> Em 28/08/2023
            </span>
            <h5 className="text-white poppins text-xl">
              Heineken vende operação na Rússia por US$ 1
            </h5>
            <p className="text-white poppins text-xs mt-3">
              As operações da Heineken na Rússia incluem a propriedade de sete
              fábricas, que empregam 1,8 mil trabalhadores.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="relative">
            <Image
              src={ImageNews2}
              alt="Heineken vende operação na Rússia por US$ 1"
            />

            <div className="absolute bottom-0 left-0 p-5 flex justify-between w-full items-end">
              <h5 className=" text-white poppins text-xl max-w-[361px]">
                Starbucks está experimentando um “pagamento sem scanner”.
              </h5>

              <button className="text-xs inter text-white font-semibold w-[80px] h-[33px] bg-[#FF8A00] rounded-full block">
                Ver mais
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={ImageNews3}
              alt="Heineken vende operação na Rússia por US$ 1"
            />
            <div className="absolute bottom-0 left-0 p-5 flex justify-between w-full items-end">
              <h5 className=" text-white poppins text-xl max-w-[361px]">
                Brasil bate recorde de varejistas faturando mais de R$ 1 bilhão.
              </h5>

              <button className="text-xs inter text-white font-semibold w-[80px] h-[33px] bg-[#FF8A00] rounded-full block">
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
