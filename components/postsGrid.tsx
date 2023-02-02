import { Post } from '@/lib/types/blogPage';
import React from 'react';
import Image from 'next/image';

interface PostsGridProps {
  title: string;
  posts: Post[];
  sectionClasses?: string;
}

const PostsGrid = ({ posts, title, sectionClasses = '' }: PostsGridProps) => {
  return (
    <section className={`section ${sectionClasses} py-5 md:py-8 lg:py-10`}>
      <h3 className="headline-1 text-center mb-6">{title}</h3>
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-11 items-center justify-center">
        {posts.map((post) => (
          <div className="max-w-sm" key={post.id}>
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
    </section>
  );
};

export default PostsGrid;
