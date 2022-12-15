import Layout from '@/components/layout';
import { getHeroSlides } from '@/lib/api';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import Hero from '@/components/hero';
import Features from '@/components/features';
import BulletList from '@/components/bulletList';
import Button from '@/components/button';
import Image from 'next/image';
import interfaceImg from '../assets/img/interface.png';
import CardsGrid from '@/components/cardsGrid';
import novaPoshta from '../assets/img/poshta.png';
import oboronProm from '../assets/img/obrprom.png';
import nix from '../assets/img/nix.png';
import hlib from '../assets/img/hlib.png';
import computer from '../assets/img/computer.png';
import bigComputer from '../assets/img/big-computer.png';
import Accordion from '@/components/accordion';
import SubscribeForm from '@/components/subscribeForm';
import { HeroSliderResponse } from '@/lib/types';

const listItems = [
  { name: "Create documents according to your personal habitual templates. It's individual!", id: '1' },
  { name: "Customize the order of signing the document if you are several people. It's responsible!", id: '2' },
  { name: "Upload an XML file with your own ready-to-document template. It's comfortable!", id: '3' },
  { name: "Work in a super simple and clear interface without complications. It's nice!", id: '4' },
];

const secondListItems = [
  { name: 'Web version without software installation', id: '1' },
  { name: 'Ability to process incoming documents for free and unlimited', id: '2' },
  { name: 'Ease of integration with 1C and other services', id: '3' },
  { name: 'Mobile ID login support', id: '4' },
];

const cardsGridItems = [
  {
    title: 'Demo',
    subtext: (
      <>
        <p className="mb-4">30 documents</p>
        <p className="mb-8">
          <span className="font-bold text-6xl">0</span>$/month
        </p>
      </>
    ),
    cta: <Button wide>Register</Button>,
    id: '1',
  },
  {
    title: 'Business',
    subtext: (
      <>
        <p className="mb-4">1000 documents</p>
        <p className="mb-8">
          <span className="font-bold text-6xl">300</span>$/month
        </p>
      </>
    ),
    cta: <Button wide>Order</Button>,
    id: '2',
  },
  {
    title: 'Pro',
    subtext: (
      <>
        <p className="mb-4">10000 documents</p>
        <p className="mb-8">
          <span className="font-bold text-6xl">1000</span>$/month
        </p>
      </>
    ),
    cta: <Button wide>Order</Button>,
    id: '3',
  },
  {
    title: 'Individual',
    subtext: (
      <>
        <p className="mb-24">Unlimited number of documents</p>
      </>
    ),
    cta: <Button wide>Contact</Button>,
    id: '4',
  },
];

const accordionData = [
  {
    title: 'Why is a round pizza put in a square box, but cut into triangles?',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    title: 'Why is the water wet?',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title: 'Can microbes see each other?',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    title: 'Why is blood red and veins blue?',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    title: 'What is a rainbow made of?',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];

export default function Index({ slides }: { allPosts: any; slides: HeroSliderResponse }) {
  console.log('all posts', slides);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Hero slides={slides.heroSlider.heroSlide} />
        <Features />
        <section className="section-cyan py-5 md:py-12 lg:py-14 gap-y-14 flex flex-col">
          <BulletList
            title="Comfort at work"
            listItems={listItems}
            img={<Image src={interfaceImg} alt="pic of interface" width={500} height={500} />}
            cta={
              <Button style="secondary" classes="md:mr-auto md:ml-0">
                More
              </Button>
            }
          />
          <BulletList
            title="Our Product is"
            reverse
            listItems={secondListItems}
            img={<Image src={interfaceImg} alt="picture of interface" width={500} height={500} />}
            cta={<Button classes="md:mr-auto md:ml-0">Register</Button>}
          />
        </section>
        <section className="section-white py-5 md:py-8">
          <CardsGrid title="Digital signature packages" cards={cardsGridItems} />
        </section>
        <section className="section-cyan py-10">
          <h3 className="text-4xl md:text-[56px] lg:text-7xl leading-[48px] lg:mb-4 font-medium text-center mb-2">
            5 820 125 114{' '}
          </h3>
          <p className="headline-1 text-center mb-4">signed documents</p>
          <p className="paragraph">
            Our company has been creating convenient solutions for businesses of any size for over 30 years. We are
            proud of Signy as a safe and comfortable product.
          </p>
        </section>
        <section className="section-white py-5">
          <h3 className="headline-1 mb-6 text-center">Friends of Signy</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-12">
            <Image width={200} height={200} src={oboronProm} alt="oboron prom image" />
            <Image width={200} height={200} src={novaPoshta} alt="oboron prom image" />
            <Image width={200} height={200} src={nix} alt="oboron prom image" />
            <Image width={200} height={200} src={hlib} alt="oboron prom image" />
          </div>
        </section>
        <section className="section-cyan py-5 md:py-8 lg:py-10">
          <h3 className="headline-1 text-center mb-6">Interestingly writing about</h3>
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-11 items-center justify-center">
            <div>
              <Image width={374} height={395} src={computer} alt="computer image" className="mb-3" />
              <p className="text-xs mb-1.5 md:text-sm">28.05.2020</p>
              <p className="text-base md:text-lg lg:text-xl font-semibold">Short title</p>
            </div>
            <div>
              <Image width={374} height={395} src={computer} alt="computer image" className="mb-3" />
              <p className="text-xs mb-1.5 md:text-sm">28.05.2020</p>
              <p className="text-base md:text-lg lg:text-xl font-semibold">Short title</p>
            </div>
          </div>
        </section>
        <section className="section-white py-5 flex flex-col justify-center items-center">
          <h3 className="headline-1 mb-6">Let's meet live?</h3>
          <Image width={734} height={451} src={bigComputer} alt="computer image"></Image>
        </section>
        <section className="section-cyan py-8 md:py-10 lg:py-12">
          <h3 className="headline-1 text-center mb-4">FAQ</h3>
          <div className="max-w-[511px] lg:max-w-[550xp] mx-auto my-0">
            <Accordion list={accordionData} />
          </div>
        </section>
        <section className="section-white py-12">
          <SubscribeForm />
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const slides: HeroSliderResponse = await getHeroSlides();
  return {
    props: { slides },
  };
}
