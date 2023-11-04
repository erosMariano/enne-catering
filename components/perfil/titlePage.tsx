'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function TitlePagePerfil() {
  const searchParams = useSearchParams();
  const edit = searchParams.get('edit');

  return (
    <h2 className="inter text-[40px] font-extrabold mb-5 text-titleGray">
      {edit ? 'Editar perfil' : 'Boas vindas ao Enne Catering'}
    </h2>
  );
}
