import Link from 'next/link';
import React, { useState } from 'react';

export default function Hero() {
  const slides = [
    {
      headline: 'Quick registration',
      heroText:
        "We've created perhaps the easiest registration ever. Sign up, get full access to the service, and get 1,000 document signatures as a gift!",
      id: '1',
    },
    {
      headline: 'Download document',
      heroText: 'Load into the system any document to be signed, a contract, an act of work performed, anything',
      id: '2',
    },
    {
      headline: 'Sign and send',
      heroText:
        "Sign with your digital signature and send it to your partner or company in a split second. He signs back and that's it! Done!",
      id: '3',
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const renderSlide = (text: string, index: number, id: string) => (
    <span
      onClick={() => handleSetSlide(index)}
      key={id}
      className={`${
        activeSlide === index ? 'text-lg md:text-2xl font-medium' : 'text-sm md:text-lg text-dark-blue-60'
      } cursor-pointer`}>
      {text}
    </span>
  );

  const handleSetSlide = (num: number) => {
    setActiveSlide(num);
  };

  return (
    <section>
      <div className="section pt-24 md:pt-28 lg:pt-64 pb-4 bg-cover bg-[70%_100%] bg-[url('../public/hero-image.jpg')]">
        <h1 className="headline-1 max-w-[70%] mb-8">Digital workflow in three stages:</h1>
        <div className="flex items-center gap-x-2 mb-3">
          {slides.map(({ id }, index) => {
            if (index === 0) return renderSlide('1', index, id);
            else if (index === slides.length - 1) return renderSlide(slides.length.toString(), index, id);
            else
              return (
                <React.Fragment key={id}>
                  <span className="h-[2px] border-r bg-success w-4 block rounded-md"></span>
                  {renderSlide((index + 1).toString(), index, id)}
                  <span className="h-[2px] border-r bg-success w-4 block rounded-md"></span>
                </React.Fragment>
              );
          })}
        </div>
        <p className="headline-2 mb-2">{slides[activeSlide].headline}</p>
        <p className="paragraph max-w-[65%] mb-9">{slides[activeSlide].heroText}</p>
        <button className="btn-primary lg:ml-0 lg:mr-auto">Try for free</button>
        <div className="flex justify-center items-center gap-x-6 mt-8">
          {slides.map(({ id }, index) => (
            <p
              key={id}
              onClick={() => handleSetSlide(index)}
              className={`w-[10px] h-[10px] ${
                index === activeSlide ? 'bg-success' : 'bg-transparent border-success border-2'
              }  rounded-full cursor-pointer`}></p>
          ))}
        </div>
      </div>
    </section>
  );
}
