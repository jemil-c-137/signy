export interface BlogPageData {
  blogPage: BlogPage;
  allPosts: {
    id: string;
  }[];
}

export interface GetPostsResponse {
  allPosts: Post[];
}

export interface BlogPage {
  heading: string;
  pageDetails: PageDetails;
  featuredPost: Post;
}

export interface Post {
  slug: string;
  tags: Tag[];
  excerpt: string;
  createdAt: string;
  title: string;
  id?: string;
  coverImage: {
    url: string;
  };
}

export interface Tag {
  id: string;
  tagName: string;
}

export interface PageDetails {
  title: string;
  slug: string;
}
