export interface BlogPageData {
  blogPage: BlogPage;
}

export interface BlogPage {
  heading:      string;
  pageDetails:  PageDetails;
  posts:        Post[];
  featuredPost: Post;
}

export interface Post {
  slug:      string;
  tags:      Tag[];
  excerpt:   string;
  createdAt: string;
  title:     string;
  id?:       string;
  coverImage: {
    url: string
  }
}

export interface Tag {
  id:      string;
  tagName: string;
}

export interface PageDetails {
  title: string;
  slug:  string;
}