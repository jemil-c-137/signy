import Speedometer from '../assets/logos/speedometer.svg';
import ThumbsUp from '../assets/logos/thumbup.svg';
import Pig from '../assets/logos/pig.svg';

export default function Features() {
  return (
    <section className="section-white py-12">
      <div className="flex flex-col gap-y-9">
        <div className="flex items-center gap-x-8">
          <div>
            <Speedometer />
          </div>
          <div>
            <p className="headline-2">Instantly</p>
            <p className="paragraph">No delays. 1 second to sign</p>
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <div>
            <ThumbsUp />
          </div>

          <div>
            <p className="headline-2">Globally</p>
            <p className="paragraph">The service is available 24/7 from all devices</p>
          </div>
        </div>
        <div className="flex items-center gap-x-8">
          <div>
            <Pig />
          </div>

          <div>
            <p className="headline-2">Economically</p>
            <p className="paragraph">30 times cheaper than mail and couriers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
