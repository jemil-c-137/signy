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
