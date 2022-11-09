import React from 'react';

const Select = () => {
  const options = [
    { name: 'option 1', value: 'option 1' },
    { name: 'option 2', value: 'option 2' },
    { name: 'option 3', value: 'option 3' },
  ];

  return (
    <>
      <select
        id="standard-select"
        className="appearance-none  bg-transparent border-none w-full font-plex-sans font-medium text-sm cursor-pointer outline-none">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
      </select>
    </>
  );
};

export default Select;
