import ChooseImage from '@/components/criar-receita/form-create';
import Footer from '@/components/footer';

export default function Article() {
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
