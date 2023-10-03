import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

import ChooseImage from '@/components/criar-receita/form-create';
import Footer from '@/components/footer';

import { authOptions } from '../api/auth/[...nextauth]/route';
export default async function Article() {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session) redirect('/login');
  return (
    <>
      <main className="max-w-[1020px] mx-auto pt-28 pb-32">
        <h1 className="inter text-[40px] text-titleGray font-extrabold mb-8">
          Envie sua receita!
        </h1>

        <ChooseImage />
      </main>
      <Footer />
    </>
  );
}
