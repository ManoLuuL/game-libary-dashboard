import { useState, useCallback } from 'react';
import type { SearchFilters } from '@/globals/types/game';
import { useGames, usePopularGames } from '@/globals/hooks/use-games';
import { HomePageHero } from './components/home-page-hero';
import { HomePageFilter } from './components/home-page-filter';
import { HomePageContent } from './components/home-page-content';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [activeTab, setActiveTab] = useState('search');

  const searchFilters: SearchFilters = {
    ...filters,
    search: searchQuery || undefined,
    page: 1,
    page_size: 20,
  };

  const {
    data: searchResults,
    isLoading: searchLoading,
    error: searchError,
  } = useGames(searchQuery || Object.keys(filters).length > 0 ? searchFilters : undefined);

  const { data: popularGames, isLoading: popularLoading, error: popularError } = usePopularGames(1);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query) {
      setActiveTab('search');
    }
  }, []);

  const handleFiltersChange = useCallback((newFilters: SearchFilters) => {
    setFilters(newFilters);
    setActiveTab('search');
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setFilters({});
    setActiveTab('popular');
  }, []);

  const hasActiveFilters = searchQuery || Object.keys(filters).length > 0;

  return (
    <div className='space-y-8'>
      <HomePageHero
        handleSearch={handleSearch}
        searchQuery={searchQuery}
      />

      <HomePageFilter
        clearFilters={clearFilters}
        filters={filters}
        handleFiltersChange={handleFiltersChange}
        hasActiveFilters={hasActiveFilters}
        searchQuery={searchQuery}
      />

      <HomePageContent
        activeTab={activeTab}
        hasActiveFilters={hasActiveFilters}
        popularLoading={popularLoading}
        searchLoading={searchLoading}
        setActiveTab={setActiveTab}
        popularError={popularError}
        popularGames={popularGames}
        searchError={searchError}
        searchResults={searchResults}
      />
    </div>
  );
};

export default HomePage;
