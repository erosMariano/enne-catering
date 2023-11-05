import Image from 'next/image';
import React from 'react';

import ListCardCategory from '@/components/templates/list-cards-category';

import ImageBebida1 from '@/public/images/categories/bebidas-1.png';
import ImageBebida2 from '@/public/images/categories/bebidas-2.png';
import ImageBebida3 from '@/public/images/categories/bebidas-3.png';
import Image1 from '@/public/images/categories/categorias-manha-1.png';
import Image2 from '@/public/images/categories/categorias-manha-2.png';
import Image3 from '@/public/images/categories/categorias-manha-3.png';
import Image4 from '@/public/images/categories/categorias-manha-4.png';
import Image5 from '@/public/images/categories/categorias-manha-5.png';
import Image6 from '@/public/images/categories/categorias-manha-6.png';
import ImageBg from '@/public/images/categories/hero-search.png';
import ImageDia1 from '@/public/images/categories/image-dia-a-dia1.png';
import ImageDia2 from '@/public/images/categories/image-dia-a-dia2.png';
import ImageDia3 from '@/public/images/categories/image-dia-a-dia3.png';
import ImageDia4 from '@/public/images/categories/image-dia-a-dia4.png';
import ImageDia5 from '@/public/images/categories/image-dia-a-dia5.png';
import ImageDia6 from '@/public/images/categories/image-dia-a-dia6.png';
import ImageRefeicao1 from '@/public/images/categories/img-refeicao1.png';
import ImageRefeicao2 from '@/public/images/categories/img-refeicao2.png';
import ImageRefeicao3 from '@/public/images/categories/img-refeicao3.png';
import ImageSobremesa1 from '@/public/images/categories/sobremesa-1.png';
import ImageSobremesa2 from '@/public/images/categories/sobremesa-2.png';
import ImageSobremesa3 from '@/public/images/categories/sobremesa-3.png';

export default function Article() {
  const receitasCafeManha = [
    {
      imageUrl: Image1,
      slug: 'bolo-simples',
      title: 'Combinações para pão'
    },
    {
      imageUrl: Image2,
      slug: 'bolo-simples',
      title: 'Panquecas com Geleia de frutas vermelhas'
    },
    {
      imageUrl: Image3,
      slug: 'bolo-simples',
      title: 'Broa de fubá com goiabada'
    },
    {
      imageUrl: Image4,
      slug: 'bolo-simples',
      title: 'Crepioca de chocolate com creminho de Whey '
    },
    {
      imageUrl: Image5,
      slug: 'bolo-simples',
      title: 'Crepioca recheada com queijo'
    },
    {
      imageUrl: Image6,
      slug: 'bolo-simples',
      title: 'Overnight Oats com Banana e Pasta de Amendoim'
    }
  ];

  const receitasDiaADia = [
    {
      imageUrl: ImageDia1,
      slug: 'bolo-simples',
      title: 'Bolo de Banana com Aveia '
    },
    {
      imageUrl: ImageDia2,
      slug: 'bolo-simples',
      title: 'Banana Bites com Banana e Chocolate'
    },
    {
      imageUrl: ImageDia3,
      slug: 'bolo-simples',
      title: 'Overnight Oats sabor Tiramisu'
    },
    {
      imageUrl: ImageDia4,
      slug: 'bolo-simples',
      title: 'Tapioca recheada'
    },
    {
      imageUrl: ImageDia5,
      slug: 'bolo-simples',
      title: 'Bolinho de Arroz na Air Fryer'
    },
    {
      imageUrl: ImageDia6,
      slug: 'bolo-simples',
      title: 'Snack de Grão-de-Bico Assado Crocante'
    }
  ];

  const receitasRefeicoes = [
    {
      imageUrl: ImageRefeicao1,
      slug: 'bolo-simples',
      title: 'Frango Xadrez com Legumes'
    },
    {
      imageUrl: ImageRefeicao2,
      slug: 'bolo-simples',
      title: 'Peitos de Frango com Molho de Coentros e Lima'
    },
    {
      imageUrl: ImageRefeicao3,
      slug: 'bolo-simples',
      title: 'Strogonoff de Frango Light'
    },
    {
      imageUrl: ImageDia4,
      slug: 'bolo-simples',
      title: 'Tapioca recheada'
    }
  ];

  const receitasSobremesa = [
    {
      imageUrl: ImageSobremesa1,
      slug: 'bolo-simples',
      title: 'Docinho fit sem lactose'
    },
    {
      imageUrl: ImageSobremesa2,
      slug: 'bolo-simples',
      title: 'Cookie de Pasta de Amendoim'
    },
    {
      imageUrl: ImageSobremesa3,
      slug: 'bolo-simples',
      title: 'Bolo de limão Saudável na Air Fryer'
    }
  ];

  const receitasBebidas = [
    {
      imageUrl: ImageBebida1,
      slug: 'bolo-simples',
      title: 'Smothie de Banana com Pasta de Amendoim'
    },
    {
      imageUrl: ImageBebida2,
      slug: 'bolo-simples',
      title: 'Refresco de Frutas  Vermelhas '
    },
    {
      imageUrl: ImageBebida3,
      slug: 'bolo-simples',
      title: 'Suco de Laranja Natural Fresco'
    }
  ];
  return (
    <main className="container">
      <div className="relative mb-32">
        <Image
          src={ImageBg}
          quality={100}
          alt="ALIMENTAÇÃO SAUDÁVEL"
          className="w-full object-cover"
        />
        <h1 className="backdrop-blur-sm max-w-[1000px] py-11 w-full bg-white/75 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] inter font-extrabold text-titleGray">
          ALIMENTAÇÃO SAUDÁVEL
        </h1>
      </div>

      <ListCardCategory
        quantityCards={6}
        title="Receitas para"
        emphasis="Café da Manhã"
        data={receitasCafeManha}
      />
      <ListCardCategory
        quantityCards={6}
        title="Receitas para"
        emphasis="Dia a Dia"
        data={receitasDiaADia}
      />
      <ListCardCategory
        quantityCards={3}
        title="Receitas para"
        emphasis="Refeições"
        data={receitasRefeicoes}
      />

      <ListCardCategory
        quantityCards={3}
        title="Receitas para"
        emphasis="Sobremesas"
        data={receitasSobremesa}
      />

      <ListCardCategory
        quantityCards={3}
        title="Receitas para"
        emphasis="Bebidas"
        data={receitasBebidas}
      />
    </main>
  );
}
