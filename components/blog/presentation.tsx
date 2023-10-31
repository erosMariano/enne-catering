import React from 'react';

type Props = {
  title: string;
  presentation: string;
};
export default function Presentation({ title, presentation }: Props) {
  return (
    <>
      <h2 className="inter text-[40px] font-extrabold mb-4">{title}</h2>
      {presentation.split('\n').map((text, index) => {
        return (
          <p key={index} className="mb-4 poppins text-xl">
            {text}
          </p>
        );
      })}
    </>
  );
}
