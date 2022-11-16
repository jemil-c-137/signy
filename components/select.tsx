import React, { useState } from 'react';
import Arrow from '../assets/logos/arrow.svg';

interface ISelectProps {
  options: { name: string; value: string }[];
  selectHandler: (option: string) => void;
  defaultSelectIndex?: number;
}

const Select: React.FC<ISelectProps> = ({ options, selectHandler }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const clickHandler = (value: React.MouseEvent) => {
    if (!open) {
      setOpen(true);
    }
  };

  const select = (value: string) => {
    const newSelected = options.find((option) => option.value === value);
    setSelected(newSelected);
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={clickHandler}
        id="standard-select"
        className="uppercase relative text-center font-medium md:font-normal bg-transparent border-none w-full font-plex-sans text-base cursor-pointer outline-none">
        <div className={`${open ? 'block' : 'hidden'} uppercase absolute top-0 left-0 w-full bg-light-blue-100`}>
          {options.map((option) => (
            <div onClick={() => select(option.value)} className="py-4 active:bg-white" key={option.value}>
              {option.name}
            </div>
          ))}
        </div>
        {selected.name} <Arrow className={open ? 'rotate-180' : ''} />
      </div>
    </>
  );
};

export default Select;
