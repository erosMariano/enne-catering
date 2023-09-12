import Image from 'next/image';
import React from 'react';

import ButtonGreen from '../button-green';

import BatataImage from '@/assets/images/bg-img-batata.png';
import BoloImage from '@/assets/images/bg-img-bolo.png';
import ArtigoPopularImage from '@/assets/images/bg-img-cuscuz.png';
import PaoImage from '@/assets/images/bg-img-pao.png';
import { Clock4 } from 'lucide-react';

export default function MostPopularArticles() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[32px] inter font-bold text-titleBlack">
            Artigos mais <span className="text-buttonGreen">Recentes</span>
          </h2>

          <ButtonGreen href="#">Ver mais</ButtonGreen>
        </div>

        <div className="flex justify-between">
          <div className="w-[771px]">
            <div>
              <Image
                src={ArtigoPopularImage}
                quality={100}
                alt="Artigo recente"
                className="rounded-lg overflow-hidden"
              />

              <span className="mt-4 text-titleGray6 text-xs flex gap-1 poppins  font-medium">
                <Clock4 width={16} height={16} color="#666" /> Em 27/08/2023
              </span>

              <h3 className="poppins text-xl font-normal text-titleGray mb-1 leading-10">
                Substitua o pão no seu café!
              </h3>
              <p className="text-xs poppins font-medium  text-titleGray max-w-[719px] leading-5">
                Veja 3 receitas para substituir ou intercalar o pão no café
                manhã e assim o deixando ainda mais gostoso e nutritivo.
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-rows-3 gap-5 max-w-[313px]">
            <div className="flex gap-2">
              <Image
                src={PaoImage}
                width={132}
                height={128}
                alt="Como evitar que suas batatas fiquem moles na Air fryer."
                className="rounded-md"
              />
              <div>
                <span className="text-titleGray6 text-xs flex gap-1 poppins font-medium">
                  <Clock4 width={16} height={16} color="#666" />
                  Em 21/08/2023
                </span>
                <p className="text-xs poppins font-medium mt-3 text-titleGray max-w-[719px] leading-5">
                  Aprenda a fazer pão de frigideira sem glúten que fica pronto
                  em 20min...
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Image
                src={BoloImage}
                width={132}
                height={128}
                alt="Como evitar que suas batatas fiquem moles na Air fryer."
                className="rounded-md"
              />
              <div>
                <span className="text-titleGray6 text-xs flex gap-1 poppins font-medium">
                  <Clock4 width={16} height={16} color="#666" /> Em 16/07/2023
                </span>
                <p className="text-xs poppins font-medium mt-3 text-titleGray max-w-[719px] leading-5">
                  Arrase corações com esse delicioso Bolo de laranja com
                  chocolate.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Image
                src={BatataImage}
                width={132}
                height={128}
                alt="Como evitar que suas batatas fiquem moles na Air fryer."
                className="rounded-md"
              />
              <div>
                <span className="text-titleGray6 text-xs flex gap-1 poppins font-medium">
                  <Clock4 width={16} height={16} color="#666" /> Em 18/08/23
                </span>
                <p className="text-xs poppins font-medium mt-3 text-titleGray max-w-[719px] leading-5">
                  Aprenda a fazer Chips de batata crocante, uma deliciosa opção
                  de petisco...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
