import React from 'react';
import Layout from '@/components/layout';
import Head from 'next/head';
import { BlogPage, BlogPageData, GetPostsResponse, Post } from '@/lib/types/blogPage';
import { getBlogPageData, getFirstPagePosts } from '@/lib/api';
import PaginationPage from '@/components/paginationPage';

export const PER_PAGE = 2;

interface BlogPageProps {
  blogPage: BlogPage;
  posts: {
    allPosts: Post[];
  };
}

const Blog: React.FC<BlogPageProps> = ({ blogPage, posts }) => {
  console.log(posts, 'posts');
  const firstPagePosts = posts.allPosts.slice(0, PER_PAGE);

  console.log(firstPagePosts, 'posts');

  return (
    <>
      <Layout title='Signy - Posts' >
        <Head>
          <title>{blogPage.pageDetails.title}</title>
        </Head>

        <div className="section pt-24">
          <PaginationPage
            posts={firstPagePosts}
            blogPage={blogPage}
            currentPage={1}
            perPage={PER_PAGE}
            totalProducts={posts.allPosts.length}
          />
        </div>
      </Layout>
    </>
  );
};

export default Blog;

export async function getStaticProps(): Promise<{ props: BlogPageProps }> {
  const data = await getBlogPageData();
  const posts = await getFirstPagePosts();
  const result = {
    blogPage: data.blogPage,
    posts: posts,
  };
  return {
    props: result,
  };
}
