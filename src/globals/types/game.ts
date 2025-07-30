type ScreenShotsType = {
  id: number;
  image: string;
};

type ParentPlatforms = {
  platform: Platform;
};

type Tags = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
};

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type PlatformInfo = {
  platform: Platform;
  released_at?: string;
  requirements?: {
    minimum?: string;
    recommended?: string;
  };
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type Store = {
  id: number;
  name: string;
  slug: string;
};

export type StoreInfo = {
  id: number;
  store: Store;
  url: string;
};

export type Developer = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type Publisher = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type EsrbRating = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;
  metacritic: number | null;
  metacritic_platforms: any[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: any[];
  reactions: any;
  added: number;
  added_by_status: any;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  short_screenshots: ScreenShotsType[];
  parent_platforms: ParentPlatforms[];
  platforms: PlatformInfo[];
  stores: StoreInfo[];
  developers: Developer[];
  genres: Genre[];
  tags: Tags[];
  publishers: Publisher[];
  esrb_rating: EsrbRating | null;
  clip: any;
  clip_preview: string;
};

export type GameListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
};

export type GameTrailer = {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
};

export type GameScreenshot = {
  id: number;
  image: string;
  width: number;
  height: number;
};

export type SearchFilters = {
  search?: string;
  genres?: string;
  platforms?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
};
