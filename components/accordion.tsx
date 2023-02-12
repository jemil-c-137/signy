import React, { useState } from 'react';
import Plus from '../assets/logos/plus.svg';
interface IAccordionProps {
  list: {
    title: string;
    content: string;
  }[];
}

const Accordion: React.FC<IAccordionProps> = ({ list }) => {
  const [active, setActive] = useState<number>(-1);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, idx: number) => {
    event.stopPropagation();

    const element = event.target as HTMLElement;

    console.log(element, 'item');

    if (idx === active) {
      setActive(-1);
    } else {
      setActive(idx);
    }
  };

  return (
    <div className="flex flex-col items-start justify-center gap-y-8">
      {list.map((item, index) => (
        <div key={item.title} onClick={(e) => handleClick(e, index)}>
          <div className="flex gap-x-4 cursor-pointer items-center">
            <div>
              <Plus width={16} height={16} className={`text-success plus ${active === index ? 'minus' : ''}`} />
            </div>
            <div className={`${active === index ? 'font-bold' : ''} text-xl transition-all`}>{item.title}</div>
          </div>
          <div className={`accordion-content ml-8 ${active === index ? 'mt-4' : ''}`} aria-expanded={active !== index}>
            <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
