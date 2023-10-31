import Image from 'next/image';
import React from 'react';

import TagIcon from '@/assets/images/icons/tag.svg';
import { convertSecondsInMinutes } from '@/utils/convertSecondsInMinutes';

type Props = {
  data: {
    title: string;
    description: string;
    preparationInformation: {
      tempoPreparo: number;
      tempoCozimento: number;
      total: number;
    };
    ingredients: string;
    methodPreparation: string;
    rendimento: string;
    category: string;
    incomeType: string;
    calories: number;
  };
};
export default function Revenue({ data }: Props) {
  return (
    <section className="mt-[136px] pt-10 pb-28 px-5 border border-[#53EF89] rounded">
      <h2 className="text-[28px] inter font-bold text-center text-titleBlack">
        {data.title}
      </h2>

      <p className="text-titleGray text-xl py-10">{data.description}</p>

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
              {convertSecondsInMinutes(
                data.preparationInformation.tempoPreparo
              )}
            </span>
          </div>

          <div className="flex justify-between items-center flex-col">
            <span className="inter text-titleGray6 text-base font-semibold">
              Tempo de Cozimento:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              {convertSecondsInMinutes(
                data.preparationInformation.tempoCozimento
              )}
            </span>
          </div>

          <div className="flex justify-between items-center flex-col">
            <span className="inter text-titleGray6 text-base font-semibold">
              Tempo Total de Preparo:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              {convertSecondsInMinutes(data.preparationInformation.total)}
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
              {data.category}
            </span>
          </div>

          <div className="flex justify-between items-center flex-col">
            <span className="inter text-titleGray6 text-base font-semibold">
              Rendimento de porções:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              {data.rendimento} {data.incomeType}
            </span>
          </div>

          <div className="flex justify-between items-center flex-col">
            <span className="inter text-titleGray6 text-base font-semibold">
              Calorias:
            </span>
            <span className="inter text-[28px] text-titleGray font-bold">
              {data.calories}kcal
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
          {data.ingredients.split('\n').map((text, index) => (
            <li key={index} className="list-disc poppins text-black text-xl">
              {text}
            </li>
          ))}
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
          {data.methodPreparation.split('\n').map((text, index) => {
            if (text.length > 0) {
              return (
                <li
                  key={index}
                  className="list-disc poppins text-black text-xl"
                >
                  {text.length > 0 ? text : null}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}
