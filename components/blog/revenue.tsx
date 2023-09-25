import Image from 'next/image';
import React from 'react';

import TagIcon from '@/assets/images/icons/tag.svg';

export default function Revenue() {
  return (
    <section className="mt-[136px] pt-10 pb-28 px-5 border border-[#53EF89] rounded">
      <h2 className="text-[28px] inter font-bold text-center text-titleBlack">
        Bolo de laranja com chocolate e especiarias
      </h2>

      <p className="text-titleGray text-xl py-10">
        Uma combinação perfeita que desperta os sentidos e faz as delícias dos
        mais pequenos. Aprenda a fazer bolo de laranja e chocolate.
      </p>

      <div className="py-5 mb-10">
        <div className="flex items-center mb-8">
          <Image src={TagIcon} width={23} height={40} alt="Tag" />
          <h3 className="ml-4 text-[28px] inter font-bold text-titleBlack">
            Tempo do preparo
          </h3>
          <span className="ml-5 block flex-1 h-[1px] bg-[#53EF89]"></span>
        </div>

        <div className="flex justify-between items-center max-w-[906px] mx-auto">
          <div className="flex flex-col text-center">
            <span className="inter text-titleGray6 text-base font-semibold">
              Tempo de Preparo:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              20min
            </span>
          </div>

          <div className="flex justify-between items-center flex-col">
            <span className="inter text-titleGray6 text-base font-semibold">
              Tempo de Cozimento:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              35min
            </span>
          </div>

          <div className="flex justify-between items-center flex-col">
            <span className="inter text-titleGray6 text-base font-semibold">
              Tempo Total de Preparo:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              55min
            </span>
          </div>
        </div>
      </div>

      <div className="py-5 mb-10">
        <div className="flex items-center mb-8">
          <Image src={TagIcon} width={23} height={40} alt="Tag" />
          <h3 className="ml-4 text-[28px] inter font-bold text-titleBlack">
            Informações
          </h3>
          <span className="ml-5 block flex-1 h-[1px] bg-[#53EF89]"></span>
        </div>

        <div className="flex justify-between items-center max-w-[906px] mx-auto">
          <div className="flex flex-col text-center">
            <span className="inter text-titleGray6 text-base font-semibold">
              Tipo de Refeição:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              Bolos
            </span>
          </div>

          <div className="flex justify-between items-center flex-col">
            <span className="inter text-titleGray6 text-base font-semibold">
              Rendimento de porções:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              10 fatias
            </span>
          </div>

          <div className="flex justify-between items-center flex-col">
            <span className="inter text-titleGray6 text-base font-semibold">
              Calorias:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              459kcal
            </span>
          </div>
        </div>
      </div>

      <div className="py-5 mb-10">
        <div className="flex items-center mb-8">
          <Image src={TagIcon} width={23} height={40} alt="Tag" />
          <h3 className="ml-4 text-[28px] inter font-bold text-titleBlack">
            Ingredientes
          </h3>
          <span className="ml-5 block flex-1 h-[1px] bg-[#53EF89]"></span>
        </div>
        <ul className="ml-5">
          <li className="list-disc poppins text-black text-xl">
            275 g farinha
          </li>
          <li className="list-disc poppins text-black text-xl">250 g açúcar</li>
          <li className="list-disc poppins text-black text-xl">
            200 g manteiga
          </li>
          <li className="list-disc poppins text-black text-xl">5 ovos</li>
          <li className="list-disc poppins text-black text-xl">2 laranjas</li>

          <li className="list-disc poppins text-black text-xl">
            125 g chocolate preto
          </li>
        </ul>
      </div>

      <div className="pt-5">
        <div className="flex items-center mb-8">
          <Image src={TagIcon} width={23} height={40} alt="Tag" />
          <h3 className="ml-4 text-[28px] inter font-bold text-titleBlack">
            Modo de Preparo
          </h3>
          <span className="ml-5 block flex-1 h-[1px] bg-[#53EF89]"></span>
        </div>
        <ul className="ml-5">
          <li className="list-disc poppins text-black text-xl">
            Lave muito bem as laranjas antes de começar (vai utilizar as cascas
            mais tarde para decorar o bolo).
          </li>

          <li className="list-disc poppins text-black text-xl">
            Retire as cascas da laranja com a ajuda de um descascador e corte-as
            em tiras muito finas.
          </li>

          <li className="list-disc poppins text-black text-xl">
            Esprema o sumo das laranjas. Reserve.
          </li>
          <li className="list-disc poppins text-black text-xl">
            Num tacho, bata a manteiga com o açúcar até obter uma mistura
            homogénea e cremosa.
          </li>
          <li className="list-disc poppins text-black text-xl">
            Junte os ovos um a um, sem parar de bater entre a adição de cada
            ovo.
          </li>

          <li className="list-disc poppins text-black text-xl">
            Adicione o sumo de laranja ao preparado anterior.
          </li>
          <li className="list-disc poppins text-black text-xl">
            Finalmente, adicione a farinha e o chocolate ralado.
          </li>
          <li className="list-disc poppins text-black text-xl">
            Leve ao forno durante 35 minutos, numa forma redonda previamente
            untada com manteiga e polvilhada com farinha.
          </li>
          <li className="list-disc poppins text-black text-xl">
            Decore a superfície do bolo com as cascas de laranja e com chocolate
            líquido.
          </li>
        </ul>
      </div>
    </section>
  );
}
