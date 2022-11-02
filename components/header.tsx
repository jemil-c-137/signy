import Link from 'next/link';
import SignyLogo from '../assets/logos/signy-logo.svg';

export default function Header() {
  return (
    <header className="absolute w-full section py-5 flex justify-between items-center">
      <SignyLogo />
      <div></div>
      <nav>
        <div className="gap-y-1 flex flex-col cursor-pointer w-100">
          <span className="block w-8 h-[2px] bg-success rounded"></span>
          <span className="block w-8 h-[2px] bg-success rounded"></span>
          <span className="block w-8 h-[2px] bg-success rounded"></span>
        </div>
      </nav>
    </header>
  );
}
