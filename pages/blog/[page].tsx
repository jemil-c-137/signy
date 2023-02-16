import Layout from '@/components/layout';
import PaginationPage from '@/components/paginationPage';
import { getBlogPageData, getPagePosts } from '@/lib/api';
import { BlogPage, Post } from '@/lib/types/blogPage';
import Head from 'next/head';
import React from 'react';
import { PER_PAGE } from '.';

interface BlogPageProps {
  blogPage: BlogPage;
  posts: Post[];
  allPosts: any[];
}

const Page = ({ blogPage, posts, allPosts }: BlogPageProps) => {
  const firstPagePosts = posts;
  return (
    <>
      <Layout title="Signy - Posts">
        <Head>
          <title>{blogPage.pageDetails.title}</title>
        </Head>

        <div className="section pt-24">
          <PaginationPage
            posts={firstPagePosts}
            blogPage={blogPage}
            currentPage={1}
            perPage={PER_PAGE}
            totalProducts={allPosts.length}
          />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps({ params }) {
  const page = Number(params?.page) || 1;
  const data = await getBlogPageData();
  const { allPosts } = await getPagePosts(Math.ceil(PER_PAGE * page));

  // if (!products.length) {
  //   return {
  //     notFound: true,
  //   }
  // }

  // Redirect the first page to `/blog` to avoid duplicated content
  if (page === 1) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts: allPosts,
      totalProducts: allPosts.length,
      currentPage: page,
      blogPage: data.blogPage,
      allPosts: data.allPosts,
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  };
}

export async function getStaticPaths() {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 5 }).map((_, i) => `/blog/${i + 2}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: false,
  };
}

export default Page;
