import { useOnClickOutside } from 'hooks/useClickOutside';
import React, { useState, useRef } from 'react';
import Arrow from '../assets/logos/arrow.svg';

interface ISelectProps {
  options: { name: string; value: string }[];
  selectHandler: (option: string) => void;
  defaultSelectIndex?: number;
}

const Select: React.FC<ISelectProps> = ({ options, selectHandler }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const ref = useRef();

  useOnClickOutside(ref, () => setOpen(false));

  const select = (value: string) => {
    const newSelected = options.find((option) => option.value === value);
    setSelected(newSelected);
    setOpen(false);
    selectHandler(value);
  };

  return (
    <div ref={ref} >
      <div
        onMouseEnter={() => setOpen(true)}
        id="standard-select"
        className="uppercase flex justify-center items-center gap-x-2 relative text-center font-medium bg-transparent border-none w-full font-plex-sans text-base cursor-pointer outline-none">
        <div className={`${open ? 'block' : 'hidden'} uppercase absolute top-[25px] left-0 w-full bg-light-blue-100`}>
          {options.map((option) => (
            <div onClick={() => select(option.value)} className="py-4 hover:bg-white" key={option.value}>
              {option.name}
            </div>
          ))}
        </div>
        {selected.name} <Arrow className={open ? 'rotate-180' : ''} />
      </div>
    </div>
  );
};

export default Select;
