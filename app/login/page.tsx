'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function SignIn() {
  const { data, status } = useSession();
  if (status === 'loading') return <h1> loading... please wait</h1>;
  if (status === 'authenticated') {
    return (
      <div>
        <h1> hi {data?.user?.name}</h1>
        <Image
          width={20}
          height={20}
          src={String(data?.user?.image)}
          alt={data?.user?.name + ' photo'}
        />
        {data.user && <button onClick={() => signOut()}>sign out</button>}
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn('google')}>sign in with google</button>
    </div>
  );
}
