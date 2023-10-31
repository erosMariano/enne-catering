'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import UploadImage from '@/assets/images/icons/upload.svg';
import { storage } from '@/firebase';
import { CreateRevenue } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { z } from 'zod';
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

const MAX_FILE_SIZE = 1000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];

const revenueSchema = z.object({
  imageFile: z
    .any()
    .refine((files) => files?.length == 1, 'Faça upload da imagem')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamanho máximo da imagem 10MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Apenas tipos: .jpg, .jpeg, .png'
    ),
  title: z
    .string()
    .min(5, { message: 'O título é obrigatório' })
    .max(100, { message: 'Máximo 100 carácteres' }),
  description: z
    .string()
    .min(1, { message: 'A descrição é obrigatória' })
    .max(200, { message: 'Máximo 200 carácteres' }),
  presentation: z.string().min(20, {
    message: 'A apresentação é obrigatória com no mínimo 20 carácteres'
  }),
  preparationInformation: z.object({
    preparation: z.object({
      hour: z.string().min(1, { message: 'Defina quantas horas de preparo' }),
      min: z.string().min(1, { message: 'Defina quantos minutos de preparo' })
    }),
    cooking: z.object({
      hour: z.string().min(1, { message: 'Defina quantas horas de cozimento' }),
      min: z.string().min(1, { message: 'Defina quantos minutos de cozimento' })
    })
  }),
  category: z.string().min(1, { message: 'A categoria é obrigatória' }),
  income: z.object({
    quantity: z.string().min(1, {
      message: 'Defina uma quantidade de rendimento'
    })
  }),
  calories: z.string().min(1, { message: 'Defina a quantidade de calorias' }),
  methodPreparation: z
    .string()
    .min(1, { message: 'O modo de preparo é obrigatório' }),
  ingredient: z.string().min(10, { message: 'Digite mais ingredientes' })
});
type RevenueSchema = z.infer<typeof revenueSchema>;

type Props = {
  idUser?: string;
};
export default function ChooseImage({ idUser }: Props) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<RevenueSchema>({
    resolver: zodResolver(revenueSchema)
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [preparationTime, setPreparationTime] = useState({
    hour: 0,
    min: 0
  });
  const [cookingTime, setCookingTime] = useState({
    hour: 0,
    min: 0
  });
  const [revenue, setRevenue] = useState<CreateRevenue>({
    title: '',
    description: '',
    presentation: '',
    userId: String(idUser),
    preparationInformation: {
      preparation: 0,
      cooking: 0,
      total: 0
    },
    category: '',
    income: {
      quantity: 0,
      type: 'Pedaço'
    },
    calories: 0,
    ingredients: '',
    methodPreparation: ''
  });

  const inputFile = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>();

  function handleGetImage() {
    inputFile.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue('imageFile', event.target.files);

    if (event.target.files) {
      const file = event.target.files[0];
      if (file) {
        setImage(file);
      }
    }
  }

  function handlePreparationTime(type: 'hour' | 'min', value: string) {
    const newValue = Number(value);
    let newPreparationTime = preparationTime;

    if (type === 'hour') {
      newPreparationTime = { ...newPreparationTime, hour: newValue };
    } else if (type === 'min') {
      newPreparationTime = { ...newPreparationTime, min: newValue };
    }
    const totalPreparationTime =
      newPreparationTime.hour * 60 + newPreparationTime.min;

    setPreparationTime(newPreparationTime);

    setRevenue((prevState) => ({
      ...prevState,
      preparationInformation: {
        ...prevState.preparationInformation,
        preparation: totalPreparationTime,
        total: totalPreparationTime + prevState.preparationInformation.cooking
      }
    }));
  }
  console.log(revenue);

  function handleCookingTime(type: 'hour' | 'min', value: string) {
    const newValue = Number(value);
    let newCookingTime = cookingTime;
    if (type === 'hour') {
      newCookingTime = { ...newCookingTime, hour: newValue };
    } else if (type === 'min') {
      newCookingTime = { ...newCookingTime, min: newValue };
    }
    const totalCooking = newCookingTime.hour * 60 + newCookingTime.min;
    setCookingTime(newCookingTime);

    setRevenue((prevState) => ({
      ...prevState,
      preparationInformation: {
        ...prevState.preparationInformation,
        cooking: totalCooking,
        total: totalCooking + prevState.preparationInformation.preparation
      }
    }));
  }

  async function handleUploadImage() {
    return new Promise((resolve, reject) => {
      if (!image) return;
      const storageRef = ref(storage, `postImages/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              setRevenue((prevState) => ({ ...prevState, imageUrl: url }));
              resolve(url); // Resolva a promessa após o upload ser concluído
            })
            .catch((error) => {
              reject(error);
            });
        }
      );
    });
  }

  async function handleSendItems() {
    setIsLoading(true);
    try {
      const imageUrl = await handleUploadImage();
      console.log(imageUrl);
      if (!String(imageUrl).includes('https')) {
        console.log('Error');
        return;
      }

      const data: CreateRevenue = {
        imageUrl: String(imageUrl),
        ...revenue
      };

      const res = await fetch('/api/receitas/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const { slug } = await res.json();

      router.push(`receita/${slug}`);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSendItems)}>
      <input
        {...register('imageFile', {
          onChange(e) {
            handleImageChange(e);
          }
        })}
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        className="hidden"
        ref={inputFile}
      />

      {!image ? (
        <div className="relative border border-buttonGreen border-dashed h-[420px] flex items-center justify-center flex-col">
          <Image src={UploadImage} width={116} height={90} alt="Ícone upload" />

          <button
            type="button"
            onClick={handleGetImage}
            className="mt-6 poppins px-[58px] py-2 text-white text-2xl bg-buttonGreen rounded-full flex items-center justify-center"
          >
            Escolher imagem
          </button>

          <div className="flex flex-col absolute left-4 bottom-4">
            <span className="block text-[#999] text-base poppins">
              Formatos aceitos:{' '}
              <span className="text-[#666]">JPEG, JPG e PNG</span>
            </span>

            <span className="block text-[#999] text-base poppins">
              Tamanho menor que <span className="text-[#666]"> 10MB</span>
            </span>

            <span className="block text-[#999] text-base poppins">
              Dimensões recomendadas{' '}
              <span className="text-[#666]">1020x420px</span>
            </span>
          </div>
          <input type="file" accept=".jpg, .jpeg, .png" className="hidden" />
        </div>
      ) : (
        <div className="relative border p-2 border-buttonGreen border-dashed flex items-center justify-center flex-col">
          <Image
            className="object-cover h-[420px] w-[1020px]"
            width={1020}
            height={420}
            quality={100}
            src={URL.createObjectURL(image)}
            alt="Imagem"
          />

          <button
            type="button"
            onClick={handleGetImage}
            className="mt-6 poppins px-[58px] py-2 text-white text-2xl bg-buttonGreen rounded-full flex items-center justify-center"
          >
            Escolher imagem
          </button>
        </div>
      )}

      {errors.imageFile?.message && (
        <p
          className="pt-2 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-400"
          role="error"
        >
          {String(errors.imageFile.message)}
        </p>
      )}
      <section className="pt-11">
        <h3 className="poppins text-2xl text-titleGray font-medium mb-4">
          *Título da Receita
        </h3>
        <input
          type="text"
          placeholder="Máx.: 100 carácteres"
          maxLength={1200}
          max={100}
          {...register('title', {
            onChange: (e) =>
              setRevenue((prevState) => ({
                ...prevState,
                title: e.target.value
              }))
          })}
          className="rounded-[2px] text-titleGray font-medium poppins border  border-buttonGreen outline-buttonGreen h-[60px] w-full px-5 placeholder:text-[#999]"
        />
        {errors.title?.message && (
          <p
            className="pt-2 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-400"
            role="error"
          >
            {errors.title.message}
          </p>
        )}

        <h3 className="poppins text-2xl text-titleGray font-medium my-4">
          *Breve descrição
        </h3>
        <input
          {...register('description', {
            onChange: (e) =>
              setRevenue((prevState) => ({
                ...prevState,
                description: e.target.value
              }))
          })}
          type="text"
          placeholder="Máx.: 200 carácteres"
          className="rounded-[2px] font-medium text-titleGray poppins border  border-buttonGreen outline-buttonGreen h-[60px] w-full px-5 placeholder:text-[#999]"
        />
        {errors.description?.message && (
          <p
            className="pt-2 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-400"
            role="error"
          >
            {errors.description.message}
          </p>
        )}

        <h3 className="mb-3 poppins text-2xl text-titleGray font-medium mt-4">
          *Apresentação
        </h3>
        <textarea
          {...register('presentation', {
            onChange: (e) =>
              setRevenue((prevState) => ({
                ...prevState,
                presentation: e.target.value
              }))
          })}
          className="font-medium h-[472px] rounded-[2px] poppins border text-titleGray border-buttonGreen outline-buttonGreen w-full p-5 placeholder:text-[#999]"
        ></textarea>

        {errors.presentation?.message && (
          <p
            className="pt-2 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-400"
            role="error"
          >
            {errors.presentation.message}
          </p>
        )}
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
                {...register('preparationInformation.preparation.hour', {
                  onChange: (e) => handlePreparationTime('hour', e.target.value)
                })}
                type="number"
                placeholder="hora(s)"
                className="w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
              <input
                {...register('preparationInformation.preparation.min', {
                  onChange: (e) => handlePreparationTime('min', e.target.value)
                })}
                type="number"
                placeholder="Minuto(s)"
                className="w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
            </div>

            {errors.preparationInformation?.preparation?.hour && (
              <p
                className="pt-2 text-sm rounded-lg dark:bg-gray-800 text-red-400"
                role="error"
              >
                {errors.preparationInformation?.preparation.hour.message}
              </p>
            )}

            {errors.preparationInformation?.preparation?.min && (
              <p
                className="pt-2 text-sm rounded-lg dark:bg-gray-800 text-red-400"
                role="error"
              >
                {errors.preparationInformation?.preparation.min.message}
              </p>
            )}
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
                {...register('preparationInformation.cooking.hour', {
                  onChange: (e) => handleCookingTime('hour', e.target.value)
                })}
              />
              <input
                {...register('preparationInformation.cooking.min', {
                  onChange: (e) => handleCookingTime('min', e.target.value)
                })}
                type="number"
                placeholder="Minuto(s)"
                className="w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
            </div>

            {errors.preparationInformation?.cooking?.hour && (
              <p
                className="pt-2 mb-1 text-sm rounded-lg dark:bg-gray-800 text-red-400"
                role="error"
              >
                {errors.preparationInformation?.cooking.hour.message}
              </p>
            )}
            {errors.preparationInformation?.cooking?.min && (
              <p
                className="text-sm rounded-lg dark:bg-gray-800 text-red-400"
                role="error"
              >
                {errors.preparationInformation?.cooking.min.message}
              </p>
            )}
          </div>

          <div className="w-[292px]">
            <h4 className="text-titleGray poppins text-2xl font-medium text-center">
              Tempo total de Preparo:
            </h4>

            <div className="flex gap-4 w-[284px] mt-4">
              <input
                value={`${
                  revenue.preparationInformation.preparation +
                  revenue.preparationInformation.cooking
                }min`}
                disabled
                type="string"
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
              <Select
                onValueChange={(e) => {
                  setValue('category', e, {
                    shouldValidate: true
                  });
                  setRevenue((prevState) => ({ ...prevState, category: e }));
                }}
              >
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
            <input
              type="text"
              {...register('category')}
              className="hidden"
              value={revenue.category}
            />
            {errors.category && (
              <p
                className="pt-2 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-400"
                role="error"
              >
                {errors.category.message}
              </p>
            )}
          </div>

          <div className="w-[298px]">
            <h4 className="text-titleGray poppins text-2xl font-medium text-center">
              *Rendimento de porção:
            </h4>

            <div className="flex gap-4 items-end">
              <input
                {...register('income.quantity', {
                  onChange: (e) => {
                    setRevenue((prevState) => ({
                      ...prevState,
                      income: {
                        quantity: Number(e.target.value),
                        type: prevState.income.type
                      }
                    }));
                  }
                })}
                type="number"
                placeholder="Quantidade"
                className="w-full rounded-sm h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />

              <div className="flex gap-4 w-[130px] mt-4">
                <Select
                  onValueChange={(e) => {
                    console.log(e);
                    setRevenue((prevState) => ({
                      ...prevState,
                      income: { quantity: prevState.income.quantity, type: e }
                    }));
                  }}
                >
                  <SelectTrigger className="w-[130px] h-[54px] border border-buttonGreen p-4 outline-buttonGreen">
                    <SelectValue placeholder="Porção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                      value="Porção"
                    >
                      Porção
                    </SelectItem>

                    <SelectItem
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                      value="Pedaço"
                    >
                      Pedaço
                    </SelectItem>

                    <SelectItem
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                      value="Prato"
                    >
                      Prato
                    </SelectItem>

                    <SelectItem
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                      value="Fatia"
                    >
                      Fatia
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {errors.income?.quantity && (
              <p
                className="pt-2 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-400"
                role="error"
              >
                {errors.income.quantity.message}
              </p>
            )}
          </div>

          <div className="w-[292px]">
            <h4 className="text-titleGray poppins text-2xl font-medium text-center">
              Calorias:
            </h4>

            <div className="flex gap-4 w-[284px] mt-4">
              <input
                {...register('calories', {
                  onChange(e) {
                    setRevenue((prevState) => ({
                      ...prevState,
                      calories: Number(e.target.value)
                    }));
                  }
                })}
                type="number"
                placeholder="00 Kcal"
                className="text-center w-full h-[54px] border border-buttonGreen p-4 outline-buttonGreen"
              />
            </div>
            {errors.calories && (
              <p
                className="pt-2 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-400"
                role="error"
              >
                {errors.calories.message}
              </p>
            )}
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
          value={revenue.ingredients}
          {...register('ingredient', {
            onChange: (e) =>
              setRevenue((prevState) => ({
                ...prevState,
                ingredients: e.target.value
              }))
          })}
          placeholder="Máx.: 500 carácteres"
          maxLength={500}
          className="mt-2 resize-none font-medium h-[400px] rounded-[2px] poppins border text-titleGray border-buttonGreen outline-buttonGreen w-full p-5 placeholder:text-[#999]"
        ></textarea>

        {errors?.ingredient && (
          <p
            className="pt-2 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-400"
            role="error"
          >
            {errors.ingredient.message}
          </p>
        )}
      </div>

      <div>
        <h2 className="inter text-[40px] text-titleGray font-extrabold mb-3 mt-6">
          Modo de Preparo
        </h2>
        <span className="poppins text-xl text-titleGray6">
          *Insira as instruções por linha
        </span>

        <textarea
          {...register('methodPreparation', {
            onChange: (e) =>
              setRevenue((prevState) => ({
                ...prevState,
                methodPreparation: e.target.value
              }))
          })}
          placeholder="Máx.: 1000 carácteres"
          maxLength={1000}
          className="mt-2 resize-none font-medium h-[400px] rounded-[2px] poppins border text-titleGray border-buttonGreen outline-buttonGreen w-full p-5 placeholder:text-[#999]"
        ></textarea>
        {errors?.methodPreparation && (
          <p
            className="pt-2 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-400"
            role="error"
          >
            {errors.methodPreparation.message}
          </p>
        )}
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="mt-6 poppins px-[58px] py-2 text-white text-2xl bg-buttonGreen rounded-full flex items-center justify-center disabled:bg-[#006f33]"
      >
        {isLoading ? 'Enviando' : 'Enviar'}
      </button>
    </form>
  );
}
