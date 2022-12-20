import React, { Children } from 'react';

interface IBulletListProps {
  title: string;
  listItems: { text: string; id: string }[];
  cta: JSX.Element;
  img: JSX.Element;
  reverse?: boolean;
}

const BulletList: React.FC<IBulletListProps> = ({ title, listItems, cta, img, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-x-8`}>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h3 className="headline-1 mb-3">{title}</h3>
        <ul className="list-none pl-4 mb-8">
          {listItems.map(({ text, id }) => {
            return (
              <li className="text-left mb-2 before:absolute before:ml-[-1rem] before:content-['-']" key={id}>
                {text}
              </li>
            );
          })}
        </ul>
        <div>{cta}</div>
      </div>
      <div className="md:w-1/2">{img}</div>
    </div>
  );
};

export default BulletList;
