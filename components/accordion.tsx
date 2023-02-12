import React, { JSXElementConstructor, MouseEventHandler, ReactNode, useState } from 'react';

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
          <div className="flex gap-x-4 cursor-pointer">
            <div>{active === index ? '-' : '+'}</div>
            <div>{item.title}</div>
          </div>
          {index === active && (
            <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
