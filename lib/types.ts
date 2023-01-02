export interface HeroSliderResponse {
  heroSlider: {
    heroSlide: { id: string; text: string; title: string }[];
  };
}

export interface AllFeatures {
  allFeatures: {
    id: string;
    text: string;
    title: string;
    logo: {
      url: string;
    };
  }[];
}

export interface AllBulletLists {
  allBulletLists: {
    text: [{ text: string; id: string }];
    title: string;
    id: string;
    image: {
      url: string;
    };
  }[];
}

export interface StandOut {
  standOut: {
    mainText: string;
    subText: string;
    bottomText: string;
  };
}

export interface Partners {
  partnersModel: {
    title: string;
    partnerLogo: [{ url: string; id: string }];
  };
}

export interface CardsGridResponse {
  cardsGrid: CardsGrid;
}

export interface CardsGrid {
  title: string;
  card: Card[];
}

export interface Card {
  price: string;
  id: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface PostsListResponse {
  allPosts: AllPost[];
}

export interface AllPost {
  title: string;
  id: string;
  createdAt: string;
  coverImage: CoverImage;
}

export interface CoverImage {
  url: string;
}

export interface FAQResponse {
  faq: FAQ
}

export interface FAQ {
  item: Item[];
}

export interface Item {
  question: string;
  id:       string;
  answer:   string;
}
