'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

import GoogleImage from '@/assets/images/icons/google.svg';

function LoginGoogle() {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/artigos' })}
      className="h-20 flex items-center gap-5 justify-center bg-backgroundGreen w-full max-w-[500px] rounded-full poppins text-2xl font-medium text-titleGray"
    >
      <Image
        src={GoogleImage}
        width={40}
        height={40}
        alt="Ícone google fazer login"
      />
      Fazer login com Google
    </button>
  );
}

export default LoginGoogle;
