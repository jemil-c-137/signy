import Button from './button';
import Link from 'next/link';
import SignyLogo from '../assets/logos/signy-logo.svg';
import Cross from '../assets/logos/cross.svg';
import { useState } from 'react';
import Select from './select';

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleNav = () => {
    console.log('click');
    setShowMobileNav((state) => !state);
  };

  const options = [
    { name: '0 800 750 643', value: 'phoneNUmber' },
    { name: 'Blog', value: 'blog' },
    { name: 'Videos', value: 'video' },
    { name: 'Questions', value: 'questions' },
  ];

  const handleSelect = (value: string) => {
    console.log('selected', value);
  };

  return (
    <header className="absolute w-full section py-5 flex justify-between items-center">
      <SignyLogo />
      <div></div>
      <nav className="lg:hidden relative">
        <div onClick={toggleNav} className="gap-y-1 flex flex-col cursor-pointer w-100">
          <span className="block w-8 h-[2px] bg-success rounded"></span>
          <span className="block w-8 h-[2px] bg-success rounded"></span>
          <span className="block w-8 h-[2px] bg-success rounded"></span>
        </div>
        <div className={`${showMobileNav ? '' : 'hidden'} fixed right-0 top-0 w-screen h-screen bg-nav`}>
          <div className="section sm:max-w-[450px] sm:w-full bg-white ml-auto h-full">
            <div className="flex justify-between items-center pt-6 pb-4 border-b-2 border-success mb-8">
              <SignyLogo />
              <span onClick={toggleNav}>
                <Cross />
              </span>
            </div>

            <ul className="flex flex-col justify-between items-center gap-y-16">
              <Select options={options} selectHandler={handleSelect} />
              <li className='uppercase font-medium' >About us</li>
              <li className='uppercase font-medium' >Prices</li>
              <li className='uppercase font-medium' >Contacts</li>
              <Button small type="secondary">
                Login
              </Button>
              <Button small>Registration</Button>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="hidden lg:block">
        <ul className="flex justify-between items-center flex-row gap-x-9">
          <li>
            <Select options={options} selectHandler={handleSelect} />
          </li>
          <li>About us</li>
          <li>Prices</li>
          <li>Contacts</li>
          <Button small type="secondary">
            Login
          </Button>
          <Button small>Registration</Button>
        </ul>
      </nav>
    </header>
  );
}
