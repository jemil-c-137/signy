import { BlogPageData } from './types/blogPage';
import { MainPageData } from './types/mainPage';

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
        posts {
          tags {
            tagName
            id
          }
          slug
          id
          title
          excerpt
          createdAt
          coverImage {
            url
          }
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
    }
    `,
  );
  return data;
}
