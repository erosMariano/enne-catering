import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

import Footer from '@/components/footer';
import DeletePost from '@/components/perfil/delete-post/delete-post';

import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export default async function DetalhesUser() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  async function getDataUser() {
    if (session && session.user) {
      const user = await prisma.user.findUnique({
        where: {
          email: String(session.user.email)
        }
      });

      const posts = await prisma.revenues.findMany({
        where: {
          userId: user?.id
        }
      });

      return { user: user, posts: posts };
    }
    await prisma.$disconnect();
    return { user: null, posts: [] };
  }

  const { user, posts } = await getDataUser();

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
            {user?.name}
          </span>

          <span className="text-xl poppins text-titleGray6 font-medium block mb-2">
            Qual sua função:
          </span>
          <span className="text-xl poppins text-titleBlack font-medium block  mb-10">
            {user?.function ? user.function : 'Não informado'}
          </span>
          <span className="text-xl poppins text-titleGray6 font-medium block mb-2">
            Adicione uma biografia ao seu perfil:
          </span>

          <span className="text-xl poppins text-titleBlack font-medium block">
            {user?.description ? user.description : 'Não informado'}
          </span>
        </div>

        <Link
          href="/perfil/detalhes?edit=true"
          className="mt-10 poppins text-white text-2xl bg-buttonGreen rounded-full w-[200px] h-[60px] flex items-center justify-center"
        >
          Editar perfil
        </Link>
      </section>

      <section className="container mt-10 flex-1 pb-20">
        <h2 className="inter text-[40px] font-extrabold mb-5 text-titleGray">
          Suas receitas
        </h2>

        <div className="flex gap-7">
          {posts.map((el) => (
            <div key={el.id}>
              <Link href={`/receitas/${el.slug}`}>
                <Image
                  width={200}
                  height={200}
                  alt={el.title}
                  src={el.imageUrl}
                />
                <p>{el.title}</p>
              </Link>
              <DeletePost id={el.id} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
