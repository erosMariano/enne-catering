import Link from 'next/link';
import React from 'react';

interface ButtonGreenProps {
  children: React.ReactNode;
  href: string;
}
function ButtonGreen({ children, href }: ButtonGreenProps) {
  return (
    <Link
      href={href}
      className="py-[10px] inter px-5 bg-buttonGreen rounded-full text-white font-semibold flex items-center justify-center w-auto"
    >
      {children}
    </Link>
  );
}

export default ButtonGreen;
