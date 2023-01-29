import Layout from '@/components/layout';
import { getAllPostsSlugs, getPostData } from '@/lib/api';
import { PostPageResponse } from '@/lib/types/postPage';
import React from 'react';
import Image from 'next/image';
import SubscribeForm from '@/components/subscribeForm';

const Post = ({ post, social }: PostPageResponse) => {
  console.log(social, 'props');

  return (
    <Layout>
      <main className="section p-24">
        <h1 className="headline-1 mb-2">{post.title}</h1>
        <p className="mb-2 text-xs">{new Date(post.updatedAt).toLocaleDateString('ru')}</p>
        <div className="mb-8 flex flex-col gap-y-8 max-w-3xl mx-0 my-auto" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <h3 className="headline-1 text-center mb-4">{social.title}</h3>
        <div className="flex items-center justify-evenly mb-8">
          {social.medias.map((media) => {
            return (
              <div key={media.id}>
                <Image width={+media.logo.width} height={+media.logo.height} src={media.logo.url} alt="" />
                <a href={media.link}></a>
              </div>
            );
          })}
        </div>
        <SubscribeForm />
      </main>
    </Layout>
  );
};

export default Post;

export async function getStaticProps({ params }: { params: { id: string } }): Promise<{
  props: PostPageResponse;
}> {
  const response = await getPostData(params.id);

  return {
    props: {
      post: response.post,
      social: response.social,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPostsSlugs();

  const paths = (await posts).allPosts.map((post) => ({
    params: {
      id: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
