import React from 'react';

import AllRevenue from '@/components/category/all-revenue';
import HeroCategory from '@/components/category/hero';
import News from '@/components/category/news';
import Footer from '@/components/footer';
import Newsletter from '@/components/Newsletter';
import ListCards from '@/components/templates/list-cards';

import ImageEmAlta3 from '@/public/images/categories/bg-image-banoffe.png';
import ImageRecentes3 from '@/public/images/categories/bg-image-taco.png';
import ImageEmAlta1 from '@/public/images/categories/bg-img-bolo.png';
import ImageEmAlta2 from '@/public/images/categories/bg-img-bombom.png';
import ImageEmAlta4 from '@/public/images/categories/bg-img-maizena.png';
import ImageRecentes1 from '@/public/images/categories/bg-img-salad.png';
import ImageRecentes2 from '@/public/images/categories/bg-img-smothie.png';
import ImageRecentes4 from '@/public/images/categories/bg-img-suco.png';

export default function CategoryPage() {
  const receitasRecentes = [
    {
      title: 'Fettuccine Alfredo',
      description: '',
      image: ImageRecentes1,
      url: '/'
    },
    {
      title: 'Lasanha á Bolonhesa',
      description: '',
      image: ImageRecentes2,
      url: '/'
    },
    {
      title: 'Pão Caseiro',
      description: '',
      image: ImageRecentes3,
      url: '/'
    },
    {
      title: 'Frango Xadrez',
      description: '',
      image: ImageRecentes4,
      url: '/'
    }
  ];

  const receitasEmAlta = [
    {
      title: 'Bolo de Laranja',
      description: '',
      image: ImageEmAlta1,
      url: '/'
    },
    {
      title: 'Bombom de Travessa com Morangos',
      description: '',
      image: ImageEmAlta2,
      url: '/'
    },
    {
      title: 'Banoffe',
      description: '',
      image: ImageEmAlta3,
      url: '/'
    },
    {
      title: 'Biscoitos de Maizena',
      description: '',
      image: ImageEmAlta4,
      url: '/'
    }
  ];

  return (
    <>
      <HeroCategory />
      <AllRevenue />
      <ListCards
        classNameSection="my-8"
        viewMore="/"
        title="Receitas"
        titleEmphasis="recentes"
        dataCard={receitasRecentes}
      />
      <ListCards
        classNameSection="my-8"
        viewMore="/"
        title="Receitas"
        titleEmphasis="em alta"
        dataCard={receitasEmAlta}
      />
      <News />
      <Newsletter />
      <Footer />
    </>
  );
}
