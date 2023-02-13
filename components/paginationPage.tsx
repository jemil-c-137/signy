import Pagination from './pagination';
import { BlogPage, Post } from '../lib/types/blogPage';
import Image from 'next/image';
import Link from 'next/link';

type PageProps = {
  blogPage: BlogPage;
  currentPage: number;
  totalProducts: number;
  perPage: number;
  posts: Post[];
};

const PaginationPage = ({ currentPage, totalProducts, perPage, blogPage, posts }: PageProps): JSX.Element => {
  const { featuredPost, heading } = blogPage;

  return (
    <div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`}>
              <Image className="rounded" width={700} height={370} src={post.coverImage.url} alt="" />
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
            </Link>
          ))}
        </div>
        <Pagination
          totalItems={totalProducts}
          currentPage={currentPage}
          itemsPerPage={perPage}
          renderPageLink={(page) => `/blog/${page}`}
        />
      </div>
    </div>
  );
};

export default PaginationPage;
