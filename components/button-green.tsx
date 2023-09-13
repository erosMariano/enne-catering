import Link from 'next/link';
import React from 'react';

interface ButtonGreenProps {
  children: React.ReactNode;
  href: string;
  variant: 'normal' | 'readMore';
}
function ButtonGreen({ children, variant, href }: ButtonGreenProps) {
  if (variant === 'normal') {
    return (
      <Link
        href={href}
        className="py-[10px] inter px-5 bg-buttonGreen rounded-full text-white font-semibold flex items-center justify-center w-auto"
      >
        {children}
      </Link>
    );
  }
  if (variant === 'readMore') {
    return (
      <Link
        href={href}
        className="h-6 poppins px-5 bg-buttonGreen rounded-full text-white font-medium flex items-center justify-center w-fit"
      >
        {children}
      </Link>
    );
  }
}

export default ButtonGreen;
