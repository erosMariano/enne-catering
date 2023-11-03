import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { HTMLProps } from 'react';

import ButtonGreen from '../button-green';

interface ListCardsProps {
  title: string;
  titleEmphasis?: string;
  viewMore: string;
  dataCard: {
    url: string;
    image: string | StaticImageData;
    title: string;
    description: string;
  }[];
  classNameSection?: HTMLProps<HTMLElement>['className'];
}
function ListCards({
  title,
  titleEmphasis,
  dataCard,
  viewMore,
  classNameSection = ''
}: ListCardsProps) {
  return (
    <section className={`${classNameSection} py-12`}>
      <div className="container">
        <div className="flex items-center justify-between mb-11">
          <h2 className="text-[32px] inter font-bold text-titleBlack">
            {title}{' '}
            {titleEmphasis && (
              <span className="text-buttonGreen">{titleEmphasis}</span>
            )}
          </h2>

          <ButtonGreen variant="normal" href={viewMore}>
            Ver mais
          </ButtonGreen>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 poppins">
          {dataCard.map((el) => (
            <Link href={el.url} key={el.title}>
              <Image
                src={el.image}
                width={270}
                height={260}
                alt={el.title}
                className="rounded-lg"
              />
              <h3 className="my-3 poppins text-titleBlack text-xl font-normal">
                {el.title}
              </h3>
              <p className="text-titleGray text-xs font-medium poppins">
                {el.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListCards;
