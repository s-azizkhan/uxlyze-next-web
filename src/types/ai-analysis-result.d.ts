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
  issues: Issue[];
  suggestions: Suggestion[];
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
  usability: CategoryAnalysis;
  visual_design: CategoryAnalysis;
  typography: CategoryAnalysis;
  cta_design: CategoryAnalysis;
  navigation: CategoryAnalysis;
  accessibility: CategoryAnalysis;
  user_flow: CategoryAnalysis;
  interactivity: CategoryAnalysis;
}
