import Button from './button';
import Link from 'next/link';
import SignyLogo from '../assets/logos/signy-logo.svg';
import Cross from '../assets/logos/cross.svg';
import { useState } from 'react';
import Select from './select';
import { useRouter } from 'next/router';

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    console.log('click');
    setShowMobileNav((state) => !state);
  };

  const options = [
    { name: 'Blog', value: 'blog' },
    { name: 'Videos', value: 'videos' },
    { name: 'Questions', value: 'faq' },
  ];

  const handleSelect = (value: string) => {
    console.log('selected', value);
    router.push(`/${value}`);
  };

  return (
    <header className="header absolute w-full py-5 flex justify-between items-center">
      <Link href="/">
        <SignyLogo />
      </Link>
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
              <Link href="/">
                <SignyLogo />
              </Link>
              <span onClick={toggleNav}>
                <Cross />
              </span>
            </div>

            <ul className="flex flex-col justify-between items-center gap-y-16">
              <li className="uppercase font-medium hover:text-success">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="uppercase font-medium hover:text-success">
                <Link href="/videos">Videos</Link>
              </li>
              <li className="uppercase font-medium hover:text-success">
                <Link href="/contacts">Contacts</Link>
              </li>
              <li className="uppercase font-medium hover:text-success">
                <Link href="/faq">Questions</Link>
              </li>
              <Button small style="secondary">
                Login
              </Button>
              <Button small>Registration</Button>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="hidden lg:block">
        <ul className="flex justify-between items-center flex-row gap-x-9 uppercase font-medium">
          <li>{showSelect && <Select options={options} selectHandler={handleSelect} />}</li>
          <li className="hover:text-success">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:text-success transition-colors">
            <Link href="/videos">Videos</Link>
          </li>
          <li className="hover:text-success transition-colors">
            <Link href="/about-us">About us</Link>
          </li>
          <li className="hover:text-success transition-colors">
            <Link href="contacts">Contacts</Link>
          </li>
          <li className="hover:text-success transition-colors">
            <Link href="contacts">Questions</Link>
          </li>
          <Button small style="secondary">
            Login
          </Button>
          <Button small>Registration</Button>
        </ul>
      </nav>
    </header>
  );
}
