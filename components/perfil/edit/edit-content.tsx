'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Footer from '@/components/footer';
import TitlePagePerfil from '@/components/perfil/titlePage';
import SpinnerLoading from '@/components/templates/spinner-loading';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type Props = {
  name?: string;
  functionUser?: string;
  description?: string;
};

const editPerfilSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    .max(100, { message: 'Máximo 100 caracteres' }),
  function: z.string().max(100, { message: 'Máximo 100 caracteres' }),
  description: z.string().max(500, { message: 'Máximo 500 caracteres' })
});
type EditPerfilSchema = z.infer<typeof editPerfilSchema>;

export default function EditContent({
  description,
  functionUser,
  name
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EditPerfilSchema>({
    resolver: zodResolver(editPerfilSchema)
  });

  const router = useRouter();
  const { toast } = useToast();

  const [dataUser, setDataUser] = useState({
    userName: name,
    function: functionUser,
    description: description
  });
  const [isLoading, setIsLoading] = useState(false);
  async function handleEditUser() {
    setIsLoading(true);
    try {
      const res = await fetch('/api/perfil/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
      });
      if (res.status === 200) {
        router.push('/perfil');
      } else {
        toast({
          variant: 'destructive',
          title: 'Erro ao editar usuário'
        });
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Toaster />

      <section className="container mt-10 flex-1 pb-20">
        <TitlePagePerfil />
        <p className="mt-5 poppins font-medium text-2xl mb-10">
          Personalize seu perfil de acordo com suas informações.
        </p>

        <form
          onSubmit={handleSubmit(handleEditUser)}
          className="max-w-[1020px]"
        >
          <span className="text-2xl poppins font-medium block mb-4">
            Nome de usuário
          </span>
          <input
            type="text"
            className="w-full border outline-buttonGreen border-buttonGreen p-4 mb-10"
            placeholder="Insira o nome que ficará visível ao público"
            defaultValue={dataUser.userName}
            {...register('name', {
              onChange: (e) =>
                setDataUser((prevState) => ({
                  ...prevState,
                  userName: e.target.value
                }))
            })}
          />

          {errors?.name && (
            <p
              className="-mt-8 mb-10 text-sm rounded-lg dark:bg-gray-800 text-red-400"
              role="error"
            >
              {errors.name.message}
            </p>
          )}

          <span className="text-2xl poppins font-medium block mb-4">
            Qual sua função
          </span>
          <input
            defaultValue={dataUser.function}
            type="text"
            className="w-full border outline-buttonGreen border-buttonGreen p-4 mb-10"
            placeholder="Ex. Nutricionista, confeiteira, culinária caseira, criadora de conteúdo..."
            {...register('function', {
              onChange: (e) =>
                setDataUser((prevState) => ({
                  ...prevState,
                  function: e.target.value
                }))
            })}
          />
          {errors?.function && (
            <p
              className="-mt-8 mb-10 text-sm rounded-lg dark:bg-gray-800 text-red-400"
              role="error"
            >
              {errors.function.message}
            </p>
          )}
          <span className="text-2xl poppins font-medium block mb-4">
            Adicione uma biografia ao seu perfil
          </span>
          <textarea
            defaultValue={dataUser.description}
            {...register('description', {
              onChange: (e) =>
                setDataUser((prevState) => ({
                  ...prevState,
                  description: e.target.value
                }))
            })}
            className="resize-none h-64 w-full border outline-buttonGreen border-buttonGreen p-4"
            placeholder="Adicione uma breve descrição sobre você"
          ></textarea>

          {errors?.description && (
            <p
              className="mt-2 mb-10 text-sm rounded-lg dark:bg-gray-800 text-red-400"
              role="error"
            >
              {errors.description.message}
            </p>
          )}

          <button
            type="submit"
            className="mt-10 w-[188px] h-[47px] text-base flex items-center justify-center poppins px-[58px] py-2 text-white  bg-buttonGreen rounded-full  disabled:bg-[#006f33]"
          >
            {isLoading ? <SpinnerLoading label="Enviando" /> : 'Enviar'}
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
