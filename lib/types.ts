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
  }[];
}
