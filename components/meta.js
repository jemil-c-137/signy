import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants';

export default function Meta({ canonicalLink }) {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta name="robots" content="all" />
      <meta name="googlebot" content="all" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`A statically generated blog example using Next.js and ${CMS_NAME}.`} />
      {canonicalLink && <link rel="canonical" href={`${canonicalLink}`} key="canonical" />}
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    </Head>
  );
}
