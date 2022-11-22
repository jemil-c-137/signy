import Layout from '@/components/layout';
import { getAllPostsForHome } from '@/lib/api';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import Hero from '@/components/hero';
import Features from '@/components/features';
import BulletList from '@/components/bulletList';
import Button from '@/components/button';
import Image from 'next/image';
import interfaceImg from '../assets/img/interface.png';
import CardsGrid from '@/components/cardsGrid';

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

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Hero />
        <Features />
        <section className="section-cyan py-5 md:py-12 lg:py-14 gap-y-14 flex flex-col">
          <BulletList
            title="Comfort at work"
            listItems={listItems}
            img={<Image src={interfaceImg} alt="pic of interface" width={500} height={500} />}
            cta={
              <Button type="secondary" classes="md:mr-auto md:ml-0">
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
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
