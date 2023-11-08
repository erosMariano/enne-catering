'use client';

import Image from 'next/image';
import React from 'react';

import { User } from '@/types/types';
import { Icon } from '@iconify/react';

interface HeroProps {
  imageUrl?: string;
  title: string;
  user: User;
}
export default function Hero({ imageUrl, title, user }: HeroProps) {
  console.log(user.function);
  return (
    <div className="mb-5">
      <Image
        src={imageUrl || ''}
        alt={title}
        width={1020}
        height={420}
        className="rounded h-[420px] object-cover"
      />

      <div className="mt-5 flex justify-between items-center flex-1 w-full">
        <div className="flex gap-4 p-2 w-full">
          <Image
            src={user.avatarUrl}
            alt={user.name}
            width={72}
            height={72}
            className="rounded-full object-contain"
          />

          <div className="flex gap-[89px]">
            <div>
              <span className="block poppins text-xl font-normal text-black mb-1">
                {user.name}
              </span>
              <span className="text-titleGray6 poppins text-base">
                {user.function === '' ? 'Função não informada' : user.function}
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
