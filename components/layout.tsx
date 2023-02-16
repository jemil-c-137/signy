import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './footer';
import Header from './header';
import Meta from './meta';

export default function Layout({
  children,
  title,
  canonicalLink,
}: {
  children: ReactNode;
  title: string;
  canonicalLink?: string;
}) {
  return (
    <>
      <Meta canonicalLink={canonicalLink} />
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative">
        <Header />
        {children}
        <Footer></Footer>
      </div>
    </>
  );
}
