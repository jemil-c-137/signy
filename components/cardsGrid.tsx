import React from 'react';

interface ICardsGridProps {
  cards: {
    title: string;
    cta: JSX.Element;
    subtext: JSX.Element;
    id: string;
  }[];
  title: string;
}

const CardsGrid: React.FC<ICardsGridProps> = ({ cards, title }) => {
  return (
    <div>
      <h3 className="headline-1 mb-5 text-center">{title}</h3>
      <div className="grid grid-cols-[256px] md:grid-cols-[repeat(2,_256px)] lg:md:grid-cols-[repeat(4,_minmax(auto,256px))] gap-x-12 justify-center gap-y-5">
        {cards.map((card) => (
          <div className="bg-light-cyan-100 p-8 flex flex-col justify-between" key={card.id}>
            <div>
              <h4 className="headline-2 mb-3">{card.title}</h4>
              {card.subtext}
            </div>

            <div>{card.cta}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
