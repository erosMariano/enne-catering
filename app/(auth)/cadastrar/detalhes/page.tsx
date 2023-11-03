import React from 'react';

import Footer from '@/components/footer';

function DetalhesUser() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <section className="container mt-10 flex-1 pb-20">
        <h2 className="inter text-[40px] font-extrabold mb-5 text-titleGray">
          Boas vindas ao Enne Catering
        </h2>
        <p className="mt-5 poppins font-medium text-2xl mb-10">
          Personalize seu perfil de acordo com suas informações.
        </p>

        <form className="max-w-[1020px]">
          <span className="text-2xl poppins font-medium block mb-4">
            Nome de usuário
          </span>
          <input
            type="text"
            className="w-full border outline-buttonGreen border-buttonGreen p-4 mb-10"
            placeholder="Insira o nome que ficará visível ao público"
          />

          <span className="text-2xl poppins font-medium block mb-4">
            Qual sua função
          </span>
          <input
            type="text"
            className="w-full border outline-buttonGreen border-buttonGreen p-4 mb-10"
            placeholder="Ex. Nutricionista, confeiteira, culinária caseira, criadora de conteúdo..."
          />

          <span className="text-2xl poppins font-medium block mb-4">
            Adicione uma biografia ao seu perfil
          </span>
          <textarea
            className="resize-none h-[80px] w-full border outline-buttonGreen border-buttonGreen p-4"
            placeholder="Adicione uma breve descrição sobre você"
          ></textarea>

          <button className="mt-10 poppins text-white text-2xl bg-buttonGreen rounded-full w-[200px] h-[60px] flex items-center justify-center">
            Enviar
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}

export default DetalhesUser;
