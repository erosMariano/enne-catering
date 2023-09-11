'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

function Entrar() {
  const { status, data } = useSession();

  console.log(data);
  return (
    <>
      {status === 'unauthenticated' ? (
        <button onClick={() => signIn('google')}>Login</button>
      ) : status === 'authenticated' ? (
        <button onClick={() => signOut()}>Deslogin</button>
      ) : (
        'Carregando'
      )}
    </>
  );
}

export default Entrar;
