export interface Post {
  title: string;
  id: string;
  tags: { id: string; tagName: string }[];
  updatedAt: string;
  content: string;
}

export interface Social {
  title: string;
  medias: {
    id: string;
    link: string;
    logo: {
      url: string;
      width: string;
      height: string;
    }
  }[]
}

export interface PostPageResponse {
  post: Post;
  social: Social;
}