'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

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
import { Search } from 'lucide-react';

export default function MainNav() {
  const isLogged = true;
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
  return (
    <header
      className={`transition-all w-full flex items-center h-[70px] sticky top-0 z-30 ${
        showGradient ? 'bg-white/90' : 'bg-transparent'
      } poppins`}
    >
      <div className="container flex items-center w-full">
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
              <Link href="/">Artigos</Link>
            </li>
            <li className="hover:text-buttonGreen transition-all">
              <Link href="/">Alimentação Saudável</Link>
            </li>
            <li className="hover:text-buttonGreen transition-all">
              <Link href="/">Área Vegana</Link>
            </li>

            <li className="hover:text-buttonGreen transition-all">
              <Link href="/">Todas as receitas</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button>
            <Search width={24} height={24} className="text-titleGray" />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-10 w-10 bg-green items-center justify-center">
                  <Image
                    width={28}
                    height={28}
                    src={AvatarImage}
                    alt="Avatar logar"
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
                        Nome de usuário
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        email@email.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-[#EDFCEB] cursor-pointer">
                      Perfil
                    </DropdownMenuItem>
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

                    <DropdownMenuItem className="focus:bg-[#EDFCEB] cursor-pointer">
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </>
              ) : (
                <>
                  <DropdownMenuGroup className="px-2 py-1">
                    <DropdownMenuItem className="focus:bg-[#EDFCEB] cursor-pointer">
                      Login
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="focus:bg-[#EDFCEB] cursor-pointer">
                      Cadastre-se
                    </DropdownMenuItem>
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

{
  /* <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>*/
}
