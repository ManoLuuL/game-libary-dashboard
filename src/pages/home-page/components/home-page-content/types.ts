import type { GameListResponse } from '@/globals/types/game';

export type HomepageContentProps = {
  activeTab: string;
  setActiveTab(tab: string): void;
  hasActiveFilters: string | boolean;
  popularGames?: GameListResponse;
  popularLoading: boolean;
  popularError?: Error | null;
  searchResults?: GameListResponse;
  searchLoading: boolean;
  searchError?: Error | null;
};
