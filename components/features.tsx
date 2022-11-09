import Speedometer from '../assets/logos/speedometer.svg';
import ThumbsUp from '../assets/logos/thumbup.svg';
import Pig from '../assets/logos/pig.svg';

export default function Features() {
  return (
    <section className="section-white py-12 md:py-14 lg:px-56">
      <div className="flex flex-col justify-center  md:pl-0 gap-y-9 md:flex-row md:gap-x-5">
        <div className="flex items-center gap-x-8 md:gap-x-4">
          <div>
            <Speedometer />
          </div>
          <div>
            <p className="headline-2 md:text-center">Instantly</p>
            <p className="paragraph md:text-center">No delays. 1 second to sign</p>
          </div>
        </div>
        <div className="flex items-center gap-x-8 md:gap-x-4">
          <div>
            <ThumbsUp />
          </div>

          <div>
            <p className="headline-2 md:text-center">Globally</p>
            <p className="paragraph md:text-center">The service is available 24/7 from all devices</p>
          </div>
        </div>
        <div className="flex items-center gap-x-8 md:gap-x-4">
          <div>
            <Pig />
          </div>

          <div>
            <p className="headline-2 md:text-center">Economically</p>
            <p className="paragraph md:text-center">30 times cheaper than mail and couriers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
