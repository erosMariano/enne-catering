'use client';

import { Poppins } from 'next/font/google';
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
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import AvatarImage from '@/assets/images/icons/avatar.svg';
import LogoImage from '@/assets/images/logo.svg';
import { ChevronDown, Search } from 'lucide-react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function MainNav() {
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowGradient(true);
      } else {
        setShowGradient(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`transition-all w-full flex items-center h-[70px] sticky top-0 z-20 ${
        showGradient ? 'bg-white/90' : 'bg-transparent'
      } ${poppins.className}`}
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center hover:text-buttonGreen cursor-pointer transition-all gap-1">
                    <span>Mais</span>
                    <ChevronDown width={16} height={16} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 mt-2"
                  align="end"
                  forceMount
                >
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Item 1<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Item 2<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li className="hover:text-buttonGreen transition-all">
              Todas as receitas
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
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">shadcn</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    m@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>New Team</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
