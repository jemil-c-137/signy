import { PER_PAGE } from 'pages/blog';
import { BlogPageData, GetPostsResponse } from './types/blogPage';
import { MainPageData } from './types/mainPage';
import { PostPageResponse } from './types/postPage';

const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

async function fetchAPI<T>(
  query: string,
  { variables, preview = false }: { variables?: unknown; preview?: boolean } = {},
): Promise<T> {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI<any>(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    },
  );
  return data?.post;
}

export async function getMainPageData() {
  const data = await fetchAPI<MainPageData>(
    `query MyQuery {
      faq {
        item {
          question
          id
          answer
        }
      }
      allPosts(filter: {featured: {eq: true}}) {
        title
        id
        createdAt
        coverImage {
          url
        }
        tags {
          tagName
          id
        }
        excerpt
        slug
      }
      cardsGrid {
        title
        card {
          price
          id
          title
          description
          buttonText
        }
      }
      partnersModel {
        title
        partnerLogo {
          url
          id
        }
      }
      standOut {
        bottomText
        mainText
        subText
      }
      allBulletLists {
        text {
          text
          id
        }
        title
        id
        image {
          url
        }
      }
      allFeatures {
        id
        text
        title
        logo {
          url
          width
          height
        }
      }
      heroSlider {
        heroSlide {
          text
          id
          title
        }
      }
    }
    `,
  );
  return data;
}

export async function getBlogPageData() {
  const data = fetchAPI<BlogPageData>(
    `
    query MyQuery {
      blogPage {
        heading
        pageDetails {
          title
          slug
        }
        featuredPost {
          slug
          tags {
            id
            tagName
          }
          excerpt
          createdAt
          title
          coverImage {
            url
          }
        }
        
      }
      allPosts {
        id
      }
    }
    `,
  );
  return data;
}

export async function getFirstPagePosts(limit: number = PER_PAGE) {
  const data = await fetchAPI<GetPostsResponse>(
    `
    query MyQuery {
      allPosts {
        title
        id
        createdAt
        coverImage {
          url
        }
        tags {
          tagName
          id
        }
        excerpt
        slug
      }
    }
    `,
  );
  return data;
}

export async function getFeaturedPosts() {
  const data = await fetchAPI(
    `query MyQuery {
      allPosts(filter: {featured: {eq: true}}) {
        title
        id
        createdAt
        coverImage {
          url
        }
        tags {
          tagName
          id
        }
        excerpt
        slug
      }
    }`,
  );

  return data;
}

export async function getPagePosts(skip: number) {
  const data = await fetchAPI<GetPostsResponse>(
    `
    query MyQuery {
      allPosts(skip: ${skip}, first: ${PER_PAGE}) {
        title
        id
        createdAt
        coverImage {
          url
        }
        tags {
          tagName
          id
        }
        excerpt
        slug
      }
    }
    `,
  );

  return data;
}

export async function getAllPostsSlugs() {
  const data = await fetchAPI<{ allPosts: { id: string; slug: string }[] }>(
    `query MyQuery {
      allPosts {
        slug
        id
      }
    }
    `,
  );
  return data;
}

export async function getPostData(slug: string) {
  const data = await fetchAPI<PostPageResponse>(
    `query MyQuery {
      post(filter: {slug: {eq: "${slug}"}}) {
        id
        title
        tags {
          tagName
          id
        }
        updatedAt
        content(markdown: true)
      }
      social {
        title
        medias {
          id
          link
          logo {
            url
            width
            height
          }
        }
      }
    }
    `,
  );
  return data;
}
