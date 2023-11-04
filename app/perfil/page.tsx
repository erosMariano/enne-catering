import Link from 'next/link';
import React from 'react';

import Footer from '@/components/footer';

function DetalhesUser() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <section className="container mt-10 flex-1 pb-20">
        <h2 className="inter text-[40px] font-extrabold mb-5 text-titleGray">
          Seu perfil
        </h2>

        <div className="max-w-[1020px]">
          <span className="text-xl poppins text-titleGray6 font-medium block mb-2">
            Nome de usuário:
          </span>
          <span className="text-xl poppins text-titleBlack font-medium block mb-10">
            Eros dos Santos Mariano
          </span>

          <span className="text-xl poppins text-titleGray6 font-medium block mb-2">
            Qual sua função:
          </span>
          <span className="text-xl poppins text-titleBlack font-medium block  mb-10">
            Nutricionista
          </span>
          <span className="text-xl poppins text-titleGray6 font-medium block mb-2">
            Adicione uma biografia ao seu perfil:
          </span>

          <span className="text-xl poppins text-titleBlack font-medium block">
            Meu nome é João da Silva, e sou um nutricionista apaixonado por
            ajudar as pessoas a alcançarem uma vida mais saudável por meio da
            alimentação. Desde que me formei em Nutrição na Universidade XYZ,
            tenho dedicado minha carreira a orientar indivíduos a fazerem
            escolhas alimentares conscientes e equilibradas.
          </span>
        </div>

        <Link
          href="/perfil/detalhes?edit=true"
          className="mt-10 poppins text-white text-2xl bg-buttonGreen rounded-full w-[200px] h-[60px] flex items-center justify-center"
        >
          Editar perfil
        </Link>
      </section>
      <Footer />
    </main>
  );
}

export default DetalhesUser;
