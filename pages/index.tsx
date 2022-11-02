import Layout from '@/components/layout';
import { getAllPostsForHome } from '@/lib/api';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import Hero from '@/components/hero';
import Features from '@/components/features';

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Hero />
        <Features />
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
