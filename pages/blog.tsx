import React from 'react';
import Layout from '@/components/layout';
import Head from 'next/head';
import { BlogPageData } from '@/lib/types/blogPage';
import { getBlogPageData } from '@/lib/api';
import Image from 'next/image';

const Blog: React.FC<BlogPageData> = ({ blogPage }) => {
  const { pageDetails, featuredPost, posts, heading } = blogPage;

  return (
    <>
      <Layout>
        <Head>
          <title>{pageDetails.title}</title>
        </Head>
        <div className="section pt-24">
          <h1 className="headline-1 mb-8">{heading}</h1>
          <div className="flex gap-x-8 flex-col lg:flex-row mb-6">
            <Image className="rounded max-h-[422px]" width={731} height={422} src={featuredPost.coverImage.url} alt="" />
            <div className="mt-4">
              <p className="text-xs">{new Date(featuredPost.createdAt).toDateString()}</p>
              <h3 className="headline-1 mb-4">{featuredPost.title}</h3>
              <div className="flex gap-x-4 mb-2">
                {featuredPost.tags.map((tag) => (
                  <span className="tag">{tag.tagName}</span>
                ))}
              </div>
              <div className="mb-8 text-lg">{featuredPost.excerpt}</div>
              <p className="font-medium uppercase cursor-pointer">read more</p>
            </div>
          </div>
          <div className="mb-6">
            <hr />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {posts.map((post) => (
              <div key={post.id}>
                <Image className="rounded" width={370} height={370} src={post.coverImage.url} alt="" />
                <p className="text-xs">{new Date(post.createdAt).toDateString()}</p>
                <h3 className="headline-2 mb-4">{post.title}</h3>
                <div className="flex gap-x-4 mb-2">
                  {post.tags.map((tag) => (
                    <span className="tag" key={tag.id}>
                      {tag.tagName}
                    </span>
                  ))}
                </div>
                <div className="mb-4 text-lg">{post.excerpt}</div>
                <p className="font-medium uppercase cursor-pointer">read more</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;

export async function getStaticProps(): Promise<{ props: BlogPageData }> {
  const data = await getBlogPageData();
  return {
    props: data,
  };
}
