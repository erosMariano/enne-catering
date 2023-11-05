import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

import Footer from '@/components/footer';

import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export default async function DetalhesUser() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  async function getDataUser() {
    if (session && session.user) {
      const data = await prisma.user.findUnique({
        where: {
          email: String(session.user.email)
        }
      });

      return data;
    }
  }
  const dataUser = await getDataUser();
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
            {dataUser?.name}
          </span>

          <span className="text-xl poppins text-titleGray6 font-medium block mb-2">
            Qual sua função:
          </span>
          <span className="text-xl poppins text-titleBlack font-medium block  mb-10">
            {dataUser?.function ? dataUser.function : 'Não informado'}
          </span>
          <span className="text-xl poppins text-titleGray6 font-medium block mb-2">
            Adicione uma biografia ao seu perfil:
          </span>

          <span className="text-xl poppins text-titleBlack font-medium block">
            {dataUser?.description ? dataUser.description : 'Não informado'}
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
