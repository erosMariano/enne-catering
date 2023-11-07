'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Footer from '@/components/footer';
import TitlePagePerfil from '@/components/perfil/titlePage';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

function DetalhesUser() {
  const router = useRouter();
  const { toast } = useToast();

  const [dataUser, setDataUser] = useState({
    userName: '',
    function: '',
    description: ''
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

        <form className="max-w-[1020px]">
          <span className="text-2xl poppins font-medium block mb-4">
            Nome de usuário
          </span>
          <input
            type="text"
            className="w-full border outline-buttonGreen border-buttonGreen p-4 mb-10"
            placeholder="Insira o nome que ficará visível ao público"
            onChange={(e) =>
              setDataUser((prevState) => ({
                ...prevState,
                userName: e.target.value
              }))
            }
          />

          <span className="text-2xl poppins font-medium block mb-4">
            Qual sua função
          </span>
          <input
            type="text"
            className="w-full border outline-buttonGreen border-buttonGreen p-4 mb-10"
            placeholder="Ex. Nutricionista, confeiteira, culinária caseira, criadora de conteúdo..."
            onChange={(e) =>
              setDataUser((prevState) => ({
                ...prevState,
                function: e.target.value
              }))
            }
          />

          <span className="text-2xl poppins font-medium block mb-4">
            Adicione uma biografia ao seu perfil
          </span>
          <textarea
            onChange={(e) =>
              setDataUser((prevState) => ({
                ...prevState,
                description: e.target.value
              }))
            }
            className="resize-none h-[80px] w-full border outline-buttonGreen border-buttonGreen p-4"
            placeholder="Adicione uma breve descrição sobre você"
          ></textarea>

          <button
            type="button"
            onClick={handleEditUser}
            className="mt-10 poppins text-white text-2xl bg-buttonGreen rounded-full w-[200px] h-[60px] flex items-center justify-center"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin h-5 mr-2 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="text-base">Enviando</span>
              </div>
            ) : (
              'Enviar'
            )}
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}

export default DetalhesUser;
