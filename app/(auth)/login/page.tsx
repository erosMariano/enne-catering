import Image from 'next/image';
import React from 'react';

import LoginGoogle from '@/components/buttons/login-google';

import BannerLogin from '@/assets/images/banner-login.png';
import LogoLogin from '@/assets/images/icons/logo-login.svg';

export default function Login() {
  return (
    <main className="flex h-[calc(100vh-130px)] mt-10 relative">
      <div className="flex flex-col bg-white/4 backdrop-blur-lg justify-between flex-1 z-10 mt-[-7rem] pt-[7rem] relative">
        <div className="flex items-center justify-center flex-1">
          <div className="flex flex-col items-center w-[80%] justify-center">
            <h1 className="inter text-[40px] font-extrabold text-titleGray mb-10">
              Entre com sua conta
            </h1>

            <LoginGoogle />

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
              className="focus:border-buttonGreen outline-none px-5 w-[500px] h-[52px] rounded-full border border-titleGray6 Poppins"
            />
            <input
              type="password"
              placeholder="Senha"
              className="focus:border-buttonGreen outline-none px-5 mt-5 w-[500px] h-[52px] rounded-full border border-titleGray6 Poppins"
            />
            <button className="poppins text-xl text-titleGray6 mt-5 w-[500px] h-[52px] bg-backgroundGreen rounded-full border border-[#ABF6C5]">
              Entrar
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 pl-5">
          <Image src={LogoLogin} width={38} height={60} alt="Ícone enne code" />

          <div className="flex flex-col gap-1">
            <span className="poppins text-titleGray6">
              Criado e desenvolvido por Enne Code
            </span>
            <span className="poppins text-buttonGreen">@Copyright</span>
          </div>
        </div>
      </div>

      <div className="bg-backgroundGreen ml-[-2%] w-[42%] mt-[-7rem] h-[calc(100%+130px)] flex items-center justify-center flex-col">
        <Image
          src={BannerLogin}
          alt="bannerLogin"
          className="absolute top-[-7rem] right-0 w-[44%]"
        />

        <div className="inter text-3xl text-titleGray font-bold">
          Bem vindo de volta!
        </div>
        <p className="text-titleGray poppins text-xl mt-8 mb-5">
          Faça login com sua conta Enne Catering.
        </p>

        <div className="flex w-[500px] items-center gap-10 my-10">
          <span className="bg-titleGray6 h-[1px] w-full flex-1 relative top-1"></span>
          <span className="font-medium poppins text-2xl text-titleGray6">
            ou
          </span>
          <span className="bg-titleGray6 h-[1px] w-full flex-1 relative top-1"></span>
        </div>

        <button className="w-full max-w-[440px] Poppins text-xl text-buttonGreen bg-white border border-buttonGreen h-[60px] rounded-full">
          Criar nova conta
        </button>
      </div>
    </main>
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
