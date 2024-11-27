export interface IIssue {
  description: string;
  location: string;
  impact: string;
}

export interface ISuggestion {
  description: string;
  expected_impact: string;
}

export interface ICategoryAnalysis {
  score: number;
  issues: IIssue[] | string[];
  suggestions: ISuggestion[] | string[];
}

export interface IColorScheme {
  primary_colors: string[];
  secondary_colors: string[];
  accent_colors: string[];
}

export interface IAiAnalysis {
  total_score: number;
  website_category: string;
  website_category_score: number;
  color_scheme: ColorScheme;
  usability: ICategoryAnalysis;
  visual_design: ICategoryAnalysis;
  typography: ICategoryAnalysis;
  cta_design: ICategoryAnalysis;
  navigation: ICategoryAnalysis;
  accessibility: ICategoryAnalysis;
  user_flow: ICategoryAnalysis;
  interactivity: ICategoryAnalysis;
}
