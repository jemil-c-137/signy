import React, { useRef } from 'react';
import { Swiper as SwipperRoot, SwiperSlide, useSwiper } from 'swiper/react';
import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Hero1 from '../assets/img/hero-slide-figure-1.png';
import Hero2 from '../assets/img/hero-slide-figure-2.png';
import Hero3 from '../assets/img/hero-slide-figure-3.png';
import Image, { StaticImageData } from 'next/image';

interface IHeroProps {
  slides: { id: string; text: string; title: string }[];
}
const Hero: React.FC<IHeroProps> = ({ slides }) => {
  //const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<Swiper>();

  const renderSlide = (slideNumber: number, image: StaticImageData, width = 300) => (
    <div className="flex justify-center items-center flex-col-reverse md:flex-row">
      <div>
        <h1 className="headline-1 max-w-[70%] mb-8">Digital workflow in three stages:</h1>
        <div className="flex items-center gap-x-2 mb-3">
          <span
            onClick={() => handleSetSlide(0)}
            className={`${
              slideNumber === 0 ? 'text-lg md:text-2xl font-medium' : 'text-sm md:text-lg text-dark-blue-60'
            } cursor-pointer`}>
            1
          </span>
          <span className="h-[2px] border-r bg-success w-4 block rounded-md"></span>
          <span
            onClick={() => handleSetSlide(1)}
            className={`${
              slideNumber === 1 ? 'text-lg md:text-2xl font-medium' : 'text-sm md:text-lg text-dark-blue-60'
            } cursor-pointer`}>
            2
          </span>
          <span className="h-[2px] border-r bg-success w-4 block rounded-md"></span>
          <span
            onClick={() => handleSetSlide(2)}
            className={`${
              slideNumber === 2 ? 'text-lg md:text-2xl font-medium' : 'text-sm md:text-lg text-dark-blue-60'
            } cursor-pointer`}>
            3
          </span>
        </div>
        <p className="headline-2 mb-2">{slides[slideNumber].title}</p>
        <p className="paragraph max-w-[65%] mb-9">{slides[slideNumber].text}</p>
        <button className="btn-primary lg:ml-0 lg:mr-auto">Try for free</button>
      </div>
      <div>
        <Image width={width} height={100} src={image} alt="" />
      </div>
    </div>
  );

  const handleSetSlide = (num: number) => {
    swiperRef.current.slideTo(num);
  };

  return (
    <section>
      <div className="section pt-24">
        <SwipperRoot
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          initialSlide={0}
          onActiveIndexChange={() => console.log('changed')}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>{renderSlide(0, Hero1)}</SwiperSlide>
          <SwiperSlide>{renderSlide(1, Hero2, 330)}</SwiperSlide>
          <SwiperSlide>{renderSlide(2, Hero3, 500)}</SwiperSlide>
        </SwipperRoot>
      </div>
    </section>
  );
};

export default Hero;
