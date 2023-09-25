'use client';

import Image from 'next/image';
import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import UploadImage from '@/assets/images/icons/upload.svg';

const typesSnack = [
  {
    value: 'item1',
    label: 'Item 1'
  },
  {
    value: 'item2',
    label: 'Item 2'
  }
];
export default function ChooseImage() {
  return (
    <div>
      <div className="relative border border-buttonGreen border-dashed h-[420px] flex items-center justify-center flex-col">
        <Image src={UploadImage} width={116} height={90} alt="Ícone upload" />
        <button className="mt-6 poppins px-[58px] py-2 text-white text-2xl bg-buttonGreen rounded-full flex items-center justify-center">
          Escolher imagem
        </button>

        <div className="flex flex-col absolute left-4 bottom-4">
          <span className="block text-[#999] text-base poppins">
            Formatos aceitos: <span className="text-[#666]">JPEG e PNG</span>
          </span>

          <span className="block text-[#999] text-base poppins">
            Tamanho menor que <span className="text-[#666]"> 10MB</span>
          </span>

          <span className="block text-[#999] text-base poppins">
            Dimensões <span className="text-[#666]">1020x420px Máx.</span>
          </span>
        </div>
        <input type="file" accept=".jpg, .jpeg, .png" className="hidden" />
      </div>

      <section className="pt-11">
        <h3 className="poppins text-2xl text-titleGray font-medium mb-4">
          *Título da Receita
        </h3>
        <input
          type="text"
          placeholder="Máx.: 100 carácteres"
          maxLength={1200}
          max={100}
          className="rounded-[2px] text-titleGray font-medium poppins border  border-buttonGreen outline-buttonGreen h-[60px] w-full px-5 placeholder:text-[#999]"
        />

        <h3 className="poppins text-2xl text-titleGray font-medium my-4">
          *Breve descrição
        </h3>
        <input
          type="text"
          placeholder="Máx.: 200 carácteres"
          maxLength={200}
          max={200}
          className="rounded-[2px] font-medium text-titleGray poppins border  border-buttonGreen outline-buttonGreen h-[60px] w-full px-5 placeholder:text-[#999]"
        />

        <h3 className="mb-3 poppins text-2xl text-titleGray font-medium mt-4">
          *Apresentação
        </h3>
        <textarea
          placeholder="Máx.: 2000 carácteres"
          maxLength={2000}
          className="font-medium h-[472px] rounded-[2px] poppins border text-titleGray border-buttonGreen outline-buttonGreen w-full p-5 placeholder:text-[#999]"
        ></textarea>
      </section>

      <div>
        <h2 className="inter text-[40px] text-titleGray font-extrabold mb-10 mt-12">
          Informações do Preparo
        </h2>

        <div className="flex justify-between">
          <div className="w-[284px]">
            <h4 className="text-titleGray poppins text-2xl font-medium text-center">
              *Tempo de Preparo:
            </h4>

            <div className="flex gap-4 w-[284px] mt-4">
              <input
                type="number"
                placeholder="hora(s)"
                className="w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
              <input
                type="number"
                placeholder="Minuto(s)"
                className="w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
            </div>
          </div>

          <div className="w-[284px]">
            <h4 className="text-titleGray poppins text-2xl font-medium text-center">
              *Tempo de Cozimento:
            </h4>

            <div className="flex gap-4 w-[284px] mt-4">
              <input
                type="number"
                placeholder="hora(s)"
                className="w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
              <input
                type="number"
                placeholder="Minuto(s)"
                className="w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
            </div>
          </div>

          <div className="w-[292px]">
            <h4 className="text-titleGray poppins text-2xl font-medium text-center">
              Tempo total de Preparo:
            </h4>

            <div className="flex gap-4 w-[284px] mt-4">
              <input
                type="number"
                placeholder="hora(s)"
                className="w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="inter text-[40px] text-titleGray font-extrabold mb-10 mt-12">
          Informações adicionais
        </h2>

        <div className="flex justify-between">
          <div className="w-[284px]">
            <h4 className="text-titleGray poppins text-2xl font-medium text-center">
              *Tipo de Refeição:
            </h4>

            <div className="flex gap-4 w-[284px] mt-4">
              <Select>
                <SelectTrigger className="w-[284px] h-[54px] border border-buttonGreen p-4 outline-buttonGreen">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {typesSnack.map((el) => (
                    <SelectItem
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                      key={el.value}
                      value={el.value}
                    >
                      {el.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-[298px]">
            <h4 className="text-titleGray poppins text-2xl font-medium text-center">
              *Rendimento de porção:
            </h4>

            <div className="flex gap-4 items-end">
              <input
                type="number"
                placeholder="Quantidade"
                className="w-full rounded-sm h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />

              <div className="flex gap-4 w-[130px] mt-4">
                <Select>
                  <SelectTrigger className="w-[130px] h-[54px] border border-buttonGreen p-4 outline-buttonGreen">
                    <SelectValue placeholder="Porções" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                      value="porcao"
                    >
                      Porção
                    </SelectItem>

                    <SelectItem
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                      value="pedaco"
                    >
                      Pedaço
                    </SelectItem>

                    <SelectItem
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                      value="prato"
                    >
                      Prato
                    </SelectItem>

                    <SelectItem
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                      value="fatia"
                    >
                      Fatia
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="w-[292px]">
            <h4 className="text-titleGray poppins text-2xl font-medium text-center">
              Calorias:
            </h4>

            <div className="flex gap-4 w-[284px] mt-4">
              <input
                type="number"
                placeholder="00 Kcal"
                className="text-center w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="inter text-[40px] text-titleGray font-extrabold mb-3 mt-14">
          Ingredientes
        </h2>
        <span className="poppins text-xl text-titleGray6">
          *Insira os ingredientes por linha
        </span>

        <textarea
          placeholder="Máx.: 500 carácteres"
          maxLength={500}
          className="mt-2 font-medium h-[400px] rounded-[2px] poppins border text-titleGray border-buttonGreen outline-buttonGreen w-full p-5 placeholder:text-[#999]"
        ></textarea>
      </div>

      <div>
        <h2 className="inter text-[40px] text-titleGray font-extrabold mb-3 mt-6">
          Modo de Preparo
        </h2>
        <span className="poppins text-xl text-titleGray6">
          *Insira as instruções por linha
        </span>

        <textarea
          placeholder="Máx.: 1000 carácteres"
          maxLength={1000}
          className="mt-2 font-medium h-[400px] rounded-[2px] poppins border text-titleGray border-buttonGreen outline-buttonGreen w-full p-5 placeholder:text-[#999]"
        ></textarea>
      </div>
    </div>
  );
}
