import Speedometer from '../assets/logos/speedometer.svg';
import ThumbsUp from '../assets/logos/thumbup.svg';
import Pig from '../assets/logos/pig.svg';
import { AllFeatures } from '@/lib/types';
import Image from 'next/image';

interface IFeaturesProps {
  features: AllFeatures;
}

export default function Features({ features }: IFeaturesProps) {
  return (
    <section className="section-white py-12 md:py-14 lg:px-56">
      <div className="flex flex-col justify-center  md:pl-0 gap-y-9 md:flex-row md:gap-x-5">
        {features.allFeatures.map((feature) => (
          <div key={feature.id} className="flex items-center gap-x-8 md:gap-x-4">
            <Image className='w-full max-w-[42px]' src={feature.logo.url} height={42} width={42} alt="" />

            <div>
              <p className="headline-2 md:text-center">{feature.title}</p>
              <p className="paragraph md:text-center">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
