'use client';

import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import SearchBanner from '@/public/images/hero-search.png';
import { encodeURLParameter } from '@/utils/encodeURLParameter';
import { Search } from 'lucide-react';

type Props = {
  searchValue: string;
};
export default function SearchElementPage({ searchValue }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState(searchValue);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    router.push(`/pesquisa?s=${encodeURLParameter(search)}`);
  }

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  return (
    <div className="relative">
      <Image
        src={SearchBanner}
        alt="Banner image"
        className="w-full h-[220px] object-cover"
        height={220}
      />

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full  max-w-[1212px] px-4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute flex items-center justify-center transition-all"
      >
        <span className="block left-9  z-10 absolute">
          <Search width={32} height={32} color="#4d4343" />
        </span>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Busque aqui sua receita"
          className="w-full h-[70px] rounded-full text-2xl transition-all border-[2px] placeholder:text-black backdrop-blur-lg bg-white/70 pl-16  focus:border-buttonGreen outline-none"
        />
      </form>
    </div>
  );
}
