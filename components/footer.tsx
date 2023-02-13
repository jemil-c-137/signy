import React from 'react';
import SignyLogo from '../assets/logos/signy-logo.svg';
import ArrowUp from '../assets/logos/arrow-up.svg';

const Footer = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="section py-6 md:py-12 lg:py-16 bg-dark text-white grid grid-cols-2 md:grid-cols-[repeat(4,_minmax(0,_auto))]">
      <div className="p-4 col-span-1 order-1 md:col-start-1 md:col-end-1">
        <SignyLogo fill="white" />
      </div>
      <ul className="p-4 col-span-full order-3 md:order-2 md:col-start-2 md:col-end-2 flex flex-col max-h-[200px] md:max-h-auto flex-wrap">
        <li>
          <p className="font-bold text-sm mb-4">About us</p>
        </li>
        <li>
          <p className="font-bold text-sm mb-4">Prices</p>
        </li>
        <li>
          <p className="font-bold text-sm mb-4">Blog</p>
        </li>
        <li>
          <p className="font-bold text-sm mb-4">Contacts</p>
        </li>
        <li>
          <p className="font-bold text-sm mb-4">Sign in</p>
        </li>
        <li>
          <p className="font-bold text-sm mb-4">Registration</p>
        </li>
      </ul>
      <ul className="p-4 col-span-full order-4 md:order-3 flex flex-col flex-wrap md:col-start-3 md:col-end-3 lg:grid lg:grid-cols-2 lg:grid-rows-4">
        <li className="lg:order-1">
          <p className="font-bold text-sm mb-4">infosmartsign@smarttender.biz</p>
        </li>
        <li className="lg:order-3 lg:row-start-2 lg:row-end-5">
          <p className="font-bold text-sm mb-4">Facebook</p>
        </li>
        <li className="lg:order-2">
          <p className="opacity-80 text-sm mb-4">Mykoli Bazhan Ave, 14 A Kyiv, 02072</p>
        </li>
        <li className="lg:order-4">
          <p className="opacity-80 text-sm mb-4">0 800 750643</p>
        </li>
        <li className="lg:order-5">
          <p className="opacity-80 text-sm mb-4">+380 44 334 56 43</p>
        </li>
        <li className="lg:order-6">
          <p className="opacity-80 text-sm mb-4">+380 44 338 86 43</p>
        </li>
      </ul>
      <div className="p-4 col-start-2 col-end-2 order-2 md:order-4 ml-auto md:col-start-4 md:col-end-4">
        <ArrowUp onClick={handleScrollUp} className="cursor-pointer " />
      </div>
    </div>
  );
};

export default Footer;
