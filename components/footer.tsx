import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import InstagramImage from '@/assets/images/icons/instagram.svg';
import LinkedinImage from '@/assets/images/icons/linkedin.svg';
import WebImage from '@/assets/images/icons/web.svg';
import YoutubeImage from '@/assets/images/icons/youtube.svg';
import LogoEnne from '@/assets/images/logo-enne.svg';
import Logo from '@/assets/images/logo.svg';

function Footer() {
  return (
    <footer className="py-8 bg-backgroundGreen">
      <div className="container flex justify-between">
        <div className="max-w-[490px]">
          <Image width={97} height={46} src={Logo} alt="Logo Enne Catering" />

          <div className="flex gap-5 mt-7">
            <p className="text-titleGray6 poppins text-base">
              Todos os direitos reservados
            </p>
            <span className="block text-titleGray6 poppins text-base">|</span>
            <p className="text-titleGray6 poppins text-base">
              Termos e condições - 2023
            </p>
          </div>
        </div>

        <div className="max-w-[490px]">
          <div className="flex justify-between">
            <Image width={38} height={52} src={LogoEnne} alt="Logo Enne Code" />

            <div className="flex gap-4">
              <Link href="/">
                <Image
                  width={28}
                  height={28}
                  src={InstagramImage}
                  alt="Instagram Enne Code"
                />
              </Link>
              <Link href="/">
                <Image
                  width={28}
                  height={28}
                  src={WebImage}
                  alt="Site Enne Code"
                />
              </Link>
              <Link href="/">
                <Image
                  width={28}
                  height={28}
                  src={YoutubeImage}
                  alt="Youtube Enne Code"
                />
              </Link>
              <Link href="/">
                <Image
                  width={28}
                  height={28}
                  src={LinkedinImage}
                  alt="LinkedIN Enne Code"
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-5 mt-7">
            <p className="text-titleGray6 poppins text-base">
              Criado e desenvolvido por Enne Code
            </p>
            <span className="block text-titleGray6 poppins text-base">|</span>
            <p className="text-titleGray6 poppins text-base">@Copyright</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
