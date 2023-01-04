import Layout from '@/components/layout';
import { getMainPageData } from '@/lib/api';
import Head from 'next/head';
import Hero from '@/components/hero';
import Features from '@/components/features';
import BulletList from '@/components/bulletList';
import Button from '@/components/button';
import Image from 'next/image';
import CardsGrid from '@/components/cardsGrid';
import bigComputer from '../assets/img/big-computer.png';
import Accordion from '@/components/accordion';
import SubscribeForm from '@/components/subscribeForm';
import { MainPageData } from '@/lib/types/mainPage';

interface IndexProps {
  data: MainPageData;
}

export default function Index({ data }: IndexProps) {
  const { heroSlider, allFeatures, allBulletLists, standOut, partnersModel, cardsGrid, allPosts, faq } = data;

  const [FirstList, SecondList] = allBulletLists;
  const accordionData = faq.item.map((faqItem) => ({ title: faqItem.question, content: faqItem.answer }));

  const cards = () => {
    return cardsGrid.card.map((card) => {
      return {
        title: card.title,
        subtext: (
          <>
            <p className="mb-24">{card.description}</p>
            {card.price !== '' && (
              <p className="mb-8">
                <span className="font-bold text-6xl">{card.price}</span>$/month
              </p>
            )}
          </>
        ),
        cta: <Button wide>{card.buttonText}</Button>,
        id: card.id,
      };
    });
  };

  const cardsData = cards();

  console.log(data, 'data');

  return (
    <>
      <Layout>
        <Head>
          <title>Signy</title>
        </Head>
        <Hero slides={heroSlider.heroSlide} />
        <Features allFeatures={allFeatures} />
        <section className="section-cyan py-5 md:py-12 lg:py-14 items-center gap-y-14 flex flex-col">
          <BulletList
            title={FirstList.title}
            reverse
            listItems={FirstList.text}
            img={<Image src={FirstList.image.url} alt="pic of interface" width={500} height={500} />}
            cta={
              <Button style="secondary" classes="md:mr-auto md:ml-0">
                More
              </Button>
            }
          />
          <BulletList
            title={SecondList.title}
            listItems={SecondList.text}
            img={<Image src={SecondList.image.url} alt="picture of interface" width={500} height={500} />}
            cta={<Button classes="md:mr-auto md:ml-0">Register</Button>}
          />
        </section>
        <section className="section-white py-5 md:py-8">
          <CardsGrid title={cardsGrid.title} cards={cardsData} />
        </section>
        <section className="section-cyan py-10">
          <h3 className="text-4xl md:text-[56px] lg:text-7xl leading-[48px] lg:mb-4 font-medium text-center mb-2">
            {standOut.mainText}
          </h3>
          <p className="headline-1 text-center mb-4">{standOut.subText}</p>
          <p className="paragraph text-center">{standOut.bottomText}</p>
        </section>
        <section className="section-white py-5">
          <h3 className="headline-1 mb-6 text-center">{partnersModel.title}</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-12">
            {partnersModel.partnerLogo.map((logo) => (
              <Image width={200} height={200} src={logo.url} key={logo.id} alt="oboron prom image" />
            ))}
          </div>
        </section>
        <section className="section-cyan py-5 md:py-8 lg:py-10">
          <h3 className="headline-1 text-center mb-6">Interestingly writing about</h3>
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-11 items-center justify-center">
            {allPosts.map((post) => (
              <div key={post.id}>
                <Image width={374} height={395} src={post.coverImage.url} alt="computer image" className="mb-3" />
                <p className="text-xs mb-1.5 md:text-sm">{post.createdAt}</p>
                <p className="text-base md:text-lg lg:text-xl font-semibold">{post.title}</p>
              </div>
            ))}
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

export async function getStaticProps(): Promise<{ props: IndexProps }> {
  const data = await getMainPageData();
  return {
    props: { data },
  };
}
