import { IAiAnalysis } from "./ai-analysis-result";

export interface ILink {
  absoluteLink: string;
  href: string;
  isAbsolute: boolean;
  isInternal: boolean;
  text: string;
}

export interface IFontSizeDistribution {
  [size: string]: number;
}

export interface IFontUsage {
  count: number;
  fontSize: string;
  text: string;
}

export interface INavigationStructure {
  externalLinks: ILink[];
  internalLinks: ILink[];
}

export interface INavigationAnalysis {
  externalLinksCount: number;
  internalLinksCount: number;
  linkStructure: INavigationStructure;
  linksWithTargetBlank: number;
  linksWithoutHref: number;
  navElementCount: number;
  totalLinks: number;
}

export interface IFontDistribution {
  h1: IFontSizeDistribution;
  h2: IFontSizeDistribution;
  p: IFontSizeDistribution;
}

export interface IFontsUsed {
  [font: string]: {
    h1: IFontUsage[];
    h2: IFontUsage[];
    p: IFontUsage[];
  };
}

export interface IFontUsageDetails {
  fontSizeDistribution: IFontDistribution;
  fontsUsed: IFontsUsed;
  totalFonts: number;
}

export interface IColorUsage {
  colors: string[];
  totalColors: number;
}

export interface IScreenshots {
  Desktop: string;
  Mobile: string;
  Navigation: string;
}

export interface ISEO {
  description: string;
  "og:description": string;
  "og:image": string;
  "og:title": string;
  "og:type": string;
  "twitter:card": string;
  "twitter:description": string;
  "twitter:image": string;
  "twitter:title": string;
  viewport: string;
}

export interface IAnalysisResult {
  Title: string;
  URL: string;
  Navigation: INavigationAnalysis;
  MobileFriendly: boolean;
  Readability: string;
  Screenshots: IScreenshots;
  ColorUsage: IColorUsage;
  FontUsage: IFontUsageDetails;
  SEO: ISEO;
  AiAnalysis: IAiAnalysis;
}
