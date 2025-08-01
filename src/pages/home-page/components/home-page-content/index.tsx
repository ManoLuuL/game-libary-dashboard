import GameGrid from '@/components/game-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { m } from 'framer-motion';
import type { HomepageContentProps } from './types';

export const HomePageContent = (props: HomepageContentProps) => {
  const {
    activeTab,
    setActiveTab,
    hasActiveFilters,
    popularGames,
    popularLoading,
    popularError,
    searchResults,
    searchLoading,
    searchError,
  } = props;

  const activeFilterText = hasActiveFilters ? 'Resultados da Busca' : 'Buscar Jogos';
  const popularGamesText = popularGames?.count ? `${popularGames.count.toLocaleString()} jogos` : '';
  const activeSearchText = hasActiveFilters ? 'Resultados da Busca' : 'Todos os Jogos';
  const searchResultText = searchResults?.count ? `${searchResults.count.toLocaleString()} jogos encontrados` : '';

  return (
    <m.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='w-full'
      >
        <TabsList className='mb-8 grid w-full grid-cols-2'>
          <TabsTrigger
            value='popular'
            className='text-sm'
          >
            Jogos Populares
          </TabsTrigger>
          <TabsTrigger
            value='search'
            className='text-sm'
          >
            {activeFilterText}
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value='popular'
          className='space-y-6'
        >
          <div className='flex items-center justify-between'>
            <h2 className='font-bold text-2xl'>Jogos Mais Populares</h2>
            <p className='text-muted-foreground text-sm'>{popularGamesText}</p>
          </div>

          <GameGrid
            games={popularGames?.results || []}
            loading={popularLoading}
            error={popularError?.message}
          />
        </TabsContent>

        <TabsContent
          value='search'
          className='space-y-6'
        >
          <div className='flex items-center justify-between'>
            <h2 className='font-bold text-2xl'>{activeSearchText}</h2>
            <p className='text-muted-foreground text-sm'>{searchResultText}</p>
          </div>

          {hasActiveFilters ? (
            <GameGrid
              games={searchResults?.results || []}
              loading={searchLoading}
              error={searchError?.message}
            />
          ) : (
            <div className='py-12 text-center'>
              <p className='text-muted-foreground'>Use a barra de busca ou filtros para encontrar jogos específicos.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </m.section>
  );
};
