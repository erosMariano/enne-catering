import Image from 'next/image';
import React from 'react';

import GoogleImage from '@/assets/images/icons/google.svg';
export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center max-w-[852px] bg-black">
        <h1 className="inter text-[40px] font-extrabold text-titleGray mb-10">
          Entre com sua conta
        </h1>

        <button className="h-20 flex items-center gap-5 justify-center bg-backgroundGreen w-full max-w-[500px] rounded-full poppins text-2xl font-medium text-titleGray">
          <Image
            src={GoogleImage}
            width={40}
            height={40}
            alt="Ícone google fazer login"
          />
          Fazer login com Google
        </button>

        <div className="flex w-[500px] items-center gap-10 my-10">
          <span className="bg-titleGray6 h-[1px] w-full flex-1 relative top-1"></span>
          <span className="font-medium poppins text-2xl text-titleGray6">
            ou
          </span>
          <span className="bg-titleGray6 h-[1px] w-full flex-1 relative top-1"></span>
        </div>

        <input
          type="text"
          placeholder="E-mail"
          className="px-5 w-[500px] h-10 rounded-full border border-titleGray6 Poppins"
        />
        <input
          type="password"
          placeholder="E-mail"
          className="px-5 mt-5 w-[500px] h-10 rounded-full border border-titleGray6 Poppins"
        />
        <button className="poppins text-xl text-titleGray6 mt-5 w-[500px] h-10 bg-backgroundGreen rounded-full border border-[#ABF6C5]">
          Entrar
        </button>
      </div>
    </>
  );
}

// ('use client');
// import { useSession, signIn, signOut } from 'next-auth/react';
// import Image from 'next/image';

// export default function SignIn() {
//   const { data, status } = useSession();
//   if (status === 'loading') return <h1> loading... please wait</h1>;
//   if (status === 'authenticated') {
//     return (
//       <div>
//         <h1> hi {data?.user?.name}</h1>
//         <Image
//           width={20}
//           height={20}
//           src={String(data?.user?.image)}
//           alt={data?.user?.name + ' photo'}
//         />
//         {data.user && <button onClick={() => signOut()}>sign out</button>}
//       </div>
//     );
//   }
//   return (
//     <div>
//       <button onClick={() => signIn('google')}>sign in with google</button>
//     </div>
//   );
// }
