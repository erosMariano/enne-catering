import Image from 'next/image';
import React from 'react';

import ButtonGreen from '../button-green';

import ArtigoRecenteImage from '@/assets/images/artigoRecente.png';
import AirFryerImage from '@/assets/images/bg-img-airfryer.png';
import BrownieImage from '@/assets/images/bg-img-brownie.png';
import ChaImage from '@/assets/images/bg-img-cha.png';
import { Clock4 } from 'lucide-react';

export default function MostRecentArticles() {
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
                src={ArtigoRecenteImage}
                quality={100}
                alt="Artigo recente"
                className="rounded-lg overflow-hidden"
              />

              <span className="mt-4 text-titleGray6 text-xs flex gap-1 poppins  font-medium">
                <Clock4 width={16} height={16} color="#666" /> Em 27/08/2023
              </span>

              <h3 className="poppins text-xl font-normal text-titleGray mb-1 leading-10">
                Como calcular a quantidade de comidas, bebidas e doces para
                festas.
              </h3>
              <p className="text-xs poppins font-medium  text-titleGray max-w-[719px] leading-5">
                Se está planejando um festão ou uma festinha, saiba como
                calcular a quantidade de alimentos necessários para o evento.
              </p>
            </div>
          </div>

          <div className="flex-1 grid grid-rows-3 gap-5 max-w-[313px]">
            <div className="flex gap-2">
              <Image
                src={AirFryerImage}
                width={132}
                height={128}
                alt="Como evitar que suas batatas fiquem moles na Air fryer."
                className="rounded-md"
              />
              <div>
                <span className="text-titleGray6 text-xs flex gap-1 poppins font-medium">
                  <Clock4 width={16} height={16} color="#666" /> Em 02/08/23
                </span>
                <p className="text-xs poppins font-medium mt-3 text-titleGray max-w-[719px] leading-5">
                  Como evitar que suas batatas fiquem moles na Air fryer.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Image
                src={BrownieImage}
                width={132}
                height={128}
                alt="Como evitar que suas batatas fiquem moles na Air fryer."
                className="rounded-md"
              />
              <div>
                <span className="text-titleGray6 text-xs flex gap-1 poppins font-medium">
                  <Clock4 width={16} height={16} color="#666" /> Em 05/08/23
                </span>
                <p className="text-xs poppins font-medium mt-3 text-titleGray max-w-[719px] leading-5">
                  Descubra 30 sobremesas fáceis que ficam prontas em menos de 10
                  minutos!
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Image
                src={ChaImage}
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
                  Descubra 20 chás que são seus aliados para o dia a dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
