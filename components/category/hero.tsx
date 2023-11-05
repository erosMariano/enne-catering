import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ButtonCategory from '@/components/buttons/button-category';

import imageCategory1 from '@/public/images/categoria-img-1.png';
import imageCategory2 from '@/public/images/categoria-img-2.png';
import imageCategory3 from '@/public/images/categoria-img-3.png';
import imageCategory4 from '@/public/images/categoria-img-4.png';
import imageCategory5 from '@/public/images/categoria-img-5.png';
import imageCategory6 from '@/public/images/categoria-img-6.png';

export default function HeroCategory() {
  return (
    <section className="container pt-14">
      <div className="flex gap-2 p-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 flex-col">
            <div className="flex gap-2">
              <Link
                href="/categorias/snacks-e-aperitivos"
                className="overflow-hidden rounded-xl relative"
              >
                <h1 className="absolute text-[40px] inter font-extrabold text-titleBlack p-5 w-60">
                  Explore nossas Categorias
                </h1>
                <Image
                  width={380}
                  height={380}
                  src={imageCategory1}
                  alt="Snacks e aperitivos"
                  quality={100}
                />
                <ButtonCategory
                  className="absolute bottom-5 left-5"
                  label="Snacks e aperitivos"
                />
              </Link>

              <div className="w-[380px] h-[380px] flex flex-col justify-between gap-2">
                <div className="flex-1 w-full flex justify-between items-center">
                  <Link
                    href="/categorias/sobremesas"
                    className="overflow-hidden rounded-xl relative"
                  >
                    <Image
                      width={186}
                      height={188}
                      src={imageCategory2}
                      alt="Sobremesas"
                      quality={100}
                    />
                    <ButtonCategory
                      className="absolute bottom-6 left-6"
                      label="Sobremesas"
                    />
                  </Link>
                  <Link
                    href="/categorias/bebidas"
                    className="overflow-hidden rounded-xl relative"
                  >
                    <Image
                      width={186}
                      height={188}
                      src={imageCategory3}
                      alt="Bebidas"
                      quality={100}
                    />
                    <ButtonCategory
                      className="absolute bottom-6 left-6"
                      label="Bebidas"
                    />
                  </Link>
                </div>
                <Link
                  href="/categorias/refeicoes"
                  className="w-full h-full overflow-hidden rounded-xl relative"
                >
                  <Image src={imageCategory4} alt="Refeições" quality={100} />
                  <ButtonCategory
                    className="absolute bottom-6 left-6"
                    label="Refeições"
                  />
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/categorias/carnes-e-frutos-do-mar"
            className="w-full h-[400px] overflow-hidden rounded-xl relative"
          >
            <Image
              src={imageCategory5}
              height={400}
              alt="Carnes e Frutos do Mar"
              quality={100}
            />
            <ButtonCategory
              className="absolute bottom-5 left-5"
              label="Carnes e Frutos do Mar"
            />
          </Link>
        </div>

        <Link
          href="/categorias/saladas"
          className="flex-1  overflow-hidden rounded-xl relative"
        >
          <Image src={imageCategory6} alt="Saladas" width={380} quality={100} />
          <ButtonCategory
            className="absolute bottom-5 left-5"
            label="Saladas"
          />
        </Link>
      </div>
    </section>
  );
}
