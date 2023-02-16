import { Feature } from '@/lib/types/mainPage';
import Image from 'next/image';

interface IFeaturesProps {
  allFeatures: Feature[];
}

export default function Features({ allFeatures }: IFeaturesProps) {
  return (
    <section className="section-white py-12 md:py-14 lg:px-56">
      <div className="flex flex-col justify-center  md:pl-0 gap-y-9 md:flex-row md:gap-x-5">
        {allFeatures.map((feature) => (
          <div key={feature.id} className="flex items-center gap-x-8 md:gap-x-4">
            <Image
              loading="eager"
              className="w-full max-w-[42px]"
              src={feature.logo.url}
              height={feature.logo.height}
              width={feature.logo.width}
              alt=""
            />

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
