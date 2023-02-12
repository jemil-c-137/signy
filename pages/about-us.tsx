import Layout from '@/components/layout';
import SubscribeForm from '@/components/subscribeForm';
import { getAboutUsPageData } from '@/lib/api';
import { AboutUsPage } from '@/lib/types/aboutUsPage';
import React from 'react';
import Image from 'next/image';

const AboutUs = ({ aboutUsPage, partnersModel }: AboutUsPage) => {
  const { title, content, leadingImage } = aboutUsPage;

  console.log(partnersModel, 'partners');

  return (
    <Layout>
      <section className="section pt-24 pb-8">
        <h1 className="headline-1 mb-8">{title}</h1>
        <div className="mb-8 flex justify-center">
          <Image width={leadingImage.width} height={leadingImage.height} src={leadingImage.url} alt="" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </section>

      <section className="section-white py-5">
        <h3 className="headline-1 mb-6 text-center">{partnersModel.title}</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-12">
          {partnersModel.partnerLogo.map((logo) => (
            <Image width={200} height={200} src={logo.url} key={logo.id} alt="oboron prom image" />
          ))}
        </div>
      </section>

      <section className="section-cyan py-12">
        <SubscribeForm />
      </section>
    </Layout>
  );
};

export default AboutUs;

export async function getStaticProps(): Promise<{ props: AboutUsPage }> {
  const data = await getAboutUsPageData();
  return {
    props: data,
  };
}
