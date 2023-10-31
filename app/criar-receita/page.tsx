import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

import ChooseImage from '@/components/criar-receita/form-create';
import Footer from '@/components/footer';

import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';
export default async function Article() {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/login');
  const idUser = await prisma.user.findUnique({
    where: {
      email: String(session.user?.email)
    }
  });

  return (
    <>
      <main className="max-w-[1020px] mx-auto pt-28 pb-32">
        <h1 className="inter text-[40px] text-titleGray font-extrabold mb-8">
          Envie sua receita!
        </h1>

        <ChooseImage idUser={idUser?.id} />
      </main>
      <Footer />
    </>
  );
}
