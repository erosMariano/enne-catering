import Image from 'next/image';
import React from 'react';

import BannerLogin from '@/assets/images/banner-login2.png';
import GoogleImage from '@/assets/images/icons/google.svg';
import LogoLogin from '@/assets/images/icons/logo-login.svg';

export default function Cadaster() {
  return (
    <main className="flex h-[calc(100vh-130px)] mt-10 relative">
      <div className="bg-backgroundGreen mr-[-2%] w-[42%] mt-[-7rem] h-[calc(100%+130px)] flex  justify-center flex-col">
        <div className="flex items-center justify-center flex-1 flex-col">
          <Image
            src={BannerLogin}
            alt="bannerLogin"
            className="absolute top-[-7rem] left-0 w-[44%]"
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

        <div className="flex items-center gap-3 pl-5 relative top-[-18px]">
          <Image src={LogoLogin} width={38} height={60} alt="Ícone enne code" />

          <div className="flex flex-col gap-1">
            <span className="poppins text-titleGray6">
              Criado e desenvolvido por Enne Code
            </span>
            <span className="poppins text-buttonGreen">@Copyright</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white/4 backdrop-blur-lg justify-between flex-1 z-10 mt-[-7rem] pt-[7rem] relative">
        <div className="flex items-center justify-center flex-1">
          <div className="flex flex-col items-center w-[80%] justify-center">
            <h1 className="inter text-[40px] font-extrabold text-titleGray mb-10">
              Cadastrar nova conta
            </h1>

            <button className="h-20 flex items-center gap-5 justify-center bg-backgroundGreen w-full max-w-[500px] rounded-full poppins text-2xl font-medium text-titleGray">
              <Image
                src={GoogleImage}
                width={40}
                height={40}
                alt="Ícone google fazer login"
              />
              Cadastrar com Google
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
              className="px-5 w-[500px] h-[52px] rounded-full border border-titleGray6 Poppins"
            />
            <input
              type="password"
              placeholder="Senha"
              className="px-5 mt-5 w-[500px] h-[52px] rounded-full border border-titleGray6 Poppins"
            />
            <button className="poppins text-xl text-titleGray6 mt-5 w-[500px] h-[52px] bg-backgroundGreen rounded-full border border-[#ABF6C5]">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
