'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import AvatarImage from '@/assets/images/icons/avatar.svg';
import LogoImage from '@/assets/images/logo.svg';
import { encodeURLParameter } from '@/utils/encodeURLParameter';
import clsx from 'clsx';
import { Search } from 'lucide-react';

export default function MainNav() {
  const { data, status } = useSession();
  const isLogged = status === 'authenticated';
  const [openSearch, setOpenSearch] = useState(true);
  const inputSearch = useRef<HTMLInputElement>(null);

  const [showGradient, setShowGradient] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowGradient(true);
    } else {
      setShowGradient(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  function handleChangeSearchModal() {
    setOpenSearch((prevState) => !prevState);
    if (openSearch) {
      inputSearch.current?.focus();
    }
  }
  const router = useRouter();
  function handleSearchRevenue(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputSearch.current) {
      router.push(
        `/pesquisa?s=${encodeURLParameter(String(inputSearch.current.value))}`
      );
      inputSearch.current.innerHTML = '';
      handleChangeSearchModal();
    }
  }
  return (
    <header
      className={`transition-all w-full flex items-center h-[70px] sticky top-0 z-30 ${
        showGradient ? 'bg-white/90' : 'bg-transparent'
      } poppins`}
    >
      <div className="container flex items-center w-full relative">
        <Link href="/">
          <Image
            src={LogoImage}
            width={97}
            height={46}
            alt="Logo Enne Catering"
          />
        </Link>
        <nav className="flex justify-center flex-1">
          <ul className="flex gap-5 font-medium font-base menu_blog text-titleGray">
            <li className="hover:text-buttonGreen transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-buttonGreen transition-all">
              <Link href="/receitas">Receitas</Link>
            </li>
            <li className="hover:text-buttonGreen transition-all">
              <Link href="/categorias/alimentacao-saudavel">
                Alimentação Saudável
              </Link>
            </li>
            <li className="hover:text-buttonGreen transition-all">
              <Link href="/">Área Vegana</Link>
            </li>

            <li className="hover:text-buttonGreen transition-all">
              <Link href="/">Todas as receitas</Link>
            </li>
          </ul>
        </nav>

        <form
          onSubmit={(e) => handleSearchRevenue(e)}
          className={clsx(
            'w-full max-w-[800px] left-1/2 -translate-x-1/2 absolute flex items-center justify-center transition-all',
            {
              '-mt-32': openSearch
            }
          )}
        >
          <span className="block left-10 relative">
            <Search width={24} height={24} color="#999999" />
          </span>

          <input
            ref={inputSearch}
            type="text"
            placeholder="Busque aqui sua receita"
            className="w-full max-w-[800px] h-12 rounded-full border border-[#DDDDDD]/50 pl-12 outline-buttonGreen"
          />
        </form>
        <div className="flex items-center gap-4">
          <button onClick={handleChangeSearchModal}>
            <Search
              width={24}
              height={24}
              className="text-titleGray hover:text-buttonGreen transition-all"
            />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-10 w-10 bg-green items-center justify-center">
                  <Image
                    width={28}
                    height={28}
                    src={!isLogged ? AvatarImage : data?.user?.image}
                    alt="Avatar logar"
                    className="rounded-full object-contain"
                  />
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
              {isLogged ? (
                <>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {data?.user?.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {data?.user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href="/perfil">
                      <DropdownMenuItem className="focus:bg-[#EDFCEB] cursor-pointer">
                        Perfil
                      </DropdownMenuItem>
                    </Link>

                    <Link href="/criar-receita">
                      <DropdownMenuItem className="focus:bg-[#EDFCEB] cursor-pointer">
                        Criar receita
                      </DropdownMenuItem>
                    </Link>

                    <DropdownMenuItem className="focus:bg-[#EDFCEB] cursor-pointer">
                      Receita favorita
                    </DropdownMenuItem>

                    <div className="px-2">
                      <DropdownMenuSeparator />
                    </div>

                    <DropdownMenuItem
                      onClick={() => signOut()}
                      className="focus:bg-[#EDFCEB] cursor-pointer"
                    >
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </>
              ) : (
                <>
                  <DropdownMenuGroup className="px-2 py-1">
                    <Link href="/login">
                      <DropdownMenuItem className="focus:bg-[#EDFCEB] cursor-pointer">
                        Login
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href="/cadastrar">
                      <DropdownMenuItem className="focus:bg-[#EDFCEB] cursor-pointer">
                        Cadastre-se
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
