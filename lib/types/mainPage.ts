export interface HeroSliderResponse {
  heroSlide: { id: string; text: string; title: string }[];
}

export interface Feature {
  id: string;
  text: string;
  title: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
}

export interface AllBulletLists {
  text: [{ text: string; id: string }];
  title: string;
  id: string;
  image: {
    url: string;
  };
}

export interface StandOut {
  mainText: string;
  subText: string;
  bottomText: string;
}

export interface Partners {
  title: string;
  partnerLogo: [{ url: string; id: string }];
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
  faq: FAQ;
}

export interface FAQ {
  item: Item[];
}

export interface Item {
  question: string;
  id: string;
  answer: string;
}

export interface MainPageData {
  allFeatures: Feature[];
  heroSlider: HeroSliderResponse;
  allBulletLists: AllBulletLists[];
  standOut: StandOut;
  partnersModel: Partners;
  cardsGrid: CardsGrid;
  allPosts: AllPost[];
  faq: FAQ;
}
