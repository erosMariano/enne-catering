import Image from 'next/image';
import Link from 'next/link';

import MostPopularArticles from '@/components/home/most-popular-articles';
import MostRecentArticles from '@/components/home/most-recent-articles';
import QuickNavigation from '@/components/home/quick-navigation';
import ListCards from '@/components/templates/list-cards';

import CardImage3 from '@/assets/images/bg-image-taco.jpg';
import CardImage1 from '@/assets/images/bg-img-salad.jpg';
import CardImage2 from '@/assets/images/bg-img-smoothie.jpg';
import CardImage4 from '@/assets/images/bg-img-suco.jpg';
import ArrowButtonNext from '@/assets/images/icons/arrow-button-next.svg';
import PratoImage from '@/assets/images/img-prato-hero.png';
import TomatoImage from '@/assets/images/tomato-blur.png';
import { prisma } from '@/lib/prisma';

async function getMoreRecent() {
  const revenues = await prisma.revenues.findMany({
    take: 4,
    orderBy: {
      createAt: 'desc'
    }
  });

  await prisma.$disconnect();
  return revenues;
}
export default async function Home() {
  const moreRecentRevenue = await getMoreRecent();

  const dataReceitasEmAlta = [
    {
      title: 'Salada Caesar',
      description:
        'Uma deliciosa opção de entrada para seu almoço. contém: alface, frango, croutons de trigo e molho.',
      image: CardImage1,
      url: '/receitas/bolo-simples'
    },
    {
      title: ' Smoothie de morango',
      description: 'Uma deliciosa opção de sobremesa para os dias ensolarados.',
      image: CardImage2,
      url: '/receitas/bolo-simples'
    },
    {
      title: 'Tacos low carb',
      description: 'Uma deliciosa opção de lanche da tarde rápido e fácil.',
      image: CardImage3,
      url: '/receitas/bolo-simples'
    },
    {
      title: 'Suco refrescante',
      description:
        'Uma deliciosa opção de bebida saudável para dias ensolarados.',
      image: CardImage4,
      url: '/receitas/bolo-simples'
    }
  ];

  return (
    <>
      <main className="pt-[70px] mt-[-70px] bg-[url('../assets/images/bg-hero.jpg')] w-full bg-cover">
        <section className="py-20 relative">
          <Image
            width={50}
            height={50}
            src={TomatoImage}
            alt="Imagem tomate"
            className="absolute top-[275px] left-[-13px]"
          />

          <Image
            width={50}
            height={50}
            src={TomatoImage}
            alt="Imagem tomate"
            className="absolute right-[448px] top-[82px] z-20"
          />

          <Image
            width={50}
            height={50}
            src={TomatoImage}
            alt="Imagem tomate"
            className="absolute right-[0] bottom-[-20px] z-20"
          />

          <div className="container flex justify-between gap-4 items-center ">
            <div>
              <h1 className="text-4xl inter font-extrabold text-titleGray">
                Encontre receitas, artigos e dicas
                <span className="block mt-5 mb-6">Em um só lugar!</span>
              </h1>
              <p className="text-xl poppins max-w-[669px] text-titleGray font-normal leading-10	">
                Receitas saudáveis que se encaixam em seu dia a dia seja para o
                trabalho, em casa, festas em família, lanchinho da tarde e mais!{' '}
              </p>
              <Link
                href="/categorias"
                className="w-[240px] group  hover:w-[260px] h-11 flex items-center pl-6 gap-16 bg-buttonGreen rounded-full mt-7 transition-all"
              >
                <span className="text-white font-medium inter">
                  Explorar mais
                </span>
                <Image
                  src={ArrowButtonNext}
                  width={24}
                  height={24}
                  alt="Explorar mais,seta para direita"
                  className="relative transition-all group-hover:translate-x-5"
                />
              </Link>
            </div>

            <div>
              <Image
                src={PratoImage}
                width={450}
                height={446.65}
                alt="Prato comida saudável"
              />
            </div>
          </div>
        </section>
      </main>
      <ListCards
        viewMore="/"
        title="Receitas"
        titleEmphasis="em alta"
        dataCard={dataReceitasEmAlta}
      />

      <QuickNavigation />
      <MostRecentArticles data={moreRecentRevenue} />
      <MostPopularArticles />
    </>
  );
}
