import { Partners } from './mainPage';

export interface AboutUsPage {
  aboutUsPage: {
    title: string;
    content: string;
    leadingImage: {
      url: string;
      width: number;
      height: number;
    };
  };
  partnersModel: Partners;
}
