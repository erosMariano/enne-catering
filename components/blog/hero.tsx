'use client';

import Image from 'next/image';
import React from 'react';

import ImageLogo from '@/assets/images/car-imagem-artigo.jpg';
import Avatar from '@/assets/images/image-perfil.png';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <div className="mb-5">
      <Image
        src={ImageLogo}
        alt=""
        width={1020}
        height={420}
        className="rounded"
        placeholder="blur"
      />

      <div className="mt-5 flex justify-between items-center flex-1 w-full">
        <div className="flex gap-4 p-2 w-full">
          <Image
            src={Avatar}
            alt=""
            width={72}
            height={72}
            className="rounded-full object-contain"
            placeholder="blur"
          />

          <div className="flex gap-[89px]">
            <div>
              <span className="block poppins text-xl font-normal text-black mb-1">
                Caroline Leite
              </span>
              <span className="text-titleGray6 poppins text-base">
                Nutricionista
              </span>
            </div>

            <button className="w-20 h-7 bg-backgroundGreen rounded-full poppins text-titleGray text-base font-medium">
              Seguir
            </button>
          </div>

          <div className="flex gap-5 justify-end flex-1">
            <button className="bg-backgroundGreen w-10 h-10 rounded-full flex items-center justify-center">
              <Icon icon="icon-park-outline:like" width={24} height={24} />
            </button>

            <button className="bg-backgroundGreen w-10 h-10 rounded-full flex items-center justify-center">
              <Icon icon="iconamoon:comment-light" width={24} height={24} />
            </button>

            <button className="bg-backgroundGreen w-10 h-10 rounded-full flex items-center justify-center">
              <Icon icon="ion:share-outline" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
