import React, { HTMLProps } from 'react';

interface ButtonCategoryProps {
  label: string;
  className?: HTMLProps<HTMLElement>['className'];
}
function ButtonCategory({ label, className = '' }: ButtonCategoryProps) {
  return (
    <button
      className={`${className} min-w-[138px] text-white poppins text-base py-2 px-[18px] bg-titleBlack rounded-full transition border border-titleBlack`}
    >
      {label}
    </button>
  );
}

export default ButtonCategory;
