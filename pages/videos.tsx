import Layout from '@/components/layout';
import React from 'react';
import computer from '../assets/img/computer.png';
import Image from 'next/image';
import { getFeaturedPosts, getFirstPagePosts } from '@/lib/api';
import { Post } from '@/lib/types/blogPage';
import PostsGrid from '@/components/postsGrid';
import SubscribeForm from '@/components/subscribeForm';

function Videos(props) {
  console.log(props, 'props');

  const posts: Post[] = props.data.allPosts;

  return (
    <Layout>
      <main className="section p-24">
        <h1 className="headline-1 mb-4">Video instructions</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10">
          <div className="mb-4 col-span-1 md:col-span-2">
            <h5 className="headline-2">Video instruction name</h5>
            <p>28.05.2020</p>
            <div className="h-[213px] md:h-[423px] w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/pwaloCWHfHM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>

          <div className="mb-4 col-span-1">
            <div className="h-[158px] md:h-[215px] w-full">
              <iframe
                width="100%"
                height="213"
                src="https://www.youtube.com/embed/pwaloCWHfHM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <h5 className="headline-2">Video instruction name</h5>
            <p>28.05.2020</p>
          </div>

          <div className="mb-4 col-span-1">
            <div className="h-[158px] md:h-[215px] w-full">
              <iframe
                width="100%"
                height="213"
                src="https://www.youtube.com/embed/pwaloCWHfHM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <h5 className="headline-2">Video instruction name</h5>
            <p>28.05.2020</p>
          </div>

          <div className="mb-4 col-span-1">
            <div className="h-[158px] md:h-[215px] w-full">
              <iframe
                width="100%"
                height="213"
                src="https://www.youtube.com/embed/pwaloCWHfHM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <h5 className="headline-2">Video instruction name</h5>
            <p>28.05.2020</p>
          </div>

          <div className="mb-4 col-span-1">
            <div className="h-[158px] md:h-[215px] w-full">
              <iframe
                width="100%"
                height="213"
                src="https://www.youtube.com/embed/pwaloCWHfHM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <h5 className="headline-2">Video instruction name</h5>
            <p>28.05.2020</p>
          </div>
        </div>
        <PostsGrid title="Interestingly writing about" posts={posts} />
      </main>
      <div className="section-cyan pt-24 pb-24">
        <SubscribeForm />
      </div>
    </Layout>
  );
}

export default Videos;

export async function getStaticProps() {
  const data = await getFeaturedPosts();
  return {
    props: { data },
  };
}
