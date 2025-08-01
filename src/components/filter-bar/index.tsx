import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import type { FilterBarProps } from './types';
import { getSelectedGenreName } from './utils/get-selected-genre-name';
import { getOrderingLabel } from './utils/get-ordering-label';
import { getSelectedPlatformName } from './utils/get-selected-platform-name';
import { FilterBarTrigger } from './components/filter-bar-trigger';
import { useGenres, usePlatforms } from '@/globals/hooks/use-games';

const FilterBar = (props: FilterBarProps) => {
  const { filters, onFiltersChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  const { data: genres, isLoading: genresLoading } = useGenres();
  const { data: platforms, isLoading: platformsLoading } = usePlatforms();

  const handleGenreChange = (genreId: string) => {
    const newFilters = { ...filters };
    if (genreId === 'all') {
      delete newFilters.genres;
    } else {
      newFilters.genres = genreId;
    }
    onFiltersChange(newFilters);
  };

  const handlePlatformChange = (platformId: string) => {
    const newFilters = { ...filters };
    if (platformId === 'all') {
      delete newFilters.platforms;
    } else {
      newFilters.platforms = platformId;
    }
    onFiltersChange(newFilters);
  };

  const handleOrderingChange = (ordering: string) => {
    const newFilters = { ...filters };
    if (ordering === 'default') {
      delete newFilters.ordering;
    } else {
      newFilters.ordering = ordering;
    }
    onFiltersChange(newFilters);
  };

  const platformName = getSelectedPlatformName(filters, platforms);
  const genre = getSelectedGenreName(filters, genres);
  const orderingLabel = getOrderingLabel(filters);

  const activeFiltersCount = Object.keys(filters).length;

  const GenreRender = genre && (
    <Badge
      variant='secondary'
      className='flex items-center space-x-1'
    >
      <span>Gênero: {genre}</span>
      <button
        type='button'
        onClick={() => handleGenreChange('all')}
        className='ml-1 hover:text-destructive'
      >
        x
      </button>
    </Badge>
  );

  const PlatformNameRender = platformName && (
    <Badge
      variant='secondary'
      className='flex items-center space-x-1'
    >
      <span>Plataforma: {platformName}</span>
      <button
        type='button'
        onClick={() => handlePlatformChange('all')}
        className='ml-1 hover:text-destructive'
      >
        x
      </button>
    </Badge>
  );

  const FiltersOrderingRender = filters.ordering && (
    <Badge
      variant='secondary'
      className='flex items-center space-x-1'
    >
      <span>Ordem: {orderingLabel}</span>
      <button
        type='button'
        onClick={() => handleOrderingChange('default')}
        className='ml-1 hover:text-destructive'
      >
        x
      </button>
    </Badge>
  );

  const ActiveFilters = activeFiltersCount > 0 && (
    <m.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className='flex flex-wrap gap-2'
    >
      {GenreRender}

      {PlatformNameRender}

      {FiltersOrderingRender}
    </m.div>
  );

  return (
    <div className='space-y-4'>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger asChild={true}>
          <FilterBarTrigger
            activeFiltersCount={activeFiltersCount}
            isOpen={isOpen}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className='space-y-4'>
          <AnimatePresence>
            {isOpen && (
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className='grid grid-cols-1 gap-4 rounded-lg bg-muted/50 p-4 sm:grid-cols-2 lg:grid-cols-4'
              >
                <div className='space-y-2'>
                  <label
                    className='font-medium text-sm'
                    htmlFor=''
                  >
                    Gênero
                  </label>
                  <Select
                    value={filters.genres || 'all'}
                    onValueChange={handleGenreChange}
                    disabled={genresLoading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Todos os gêneros' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='all'>Todos os gêneros</SelectItem>
                      {genres?.slice(0, 15).map((genre) => (
                        <SelectItem
                          key={genre.id}
                          value={genre.id.toString()}
                        >
                          {genre.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <label
                    className='font-medium text-sm'
                    htmlFor=''
                  >
                    Plataforma
                  </label>
                  <Select
                    value={filters.platforms || 'all'}
                    onValueChange={handlePlatformChange}
                    disabled={platformsLoading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Todas as plataformas' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='all'>Todas as plataformas</SelectItem>
                      {platforms?.slice(0, 15).map((platform) => (
                        <SelectItem
                          key={platform.id}
                          value={platform.id.toString()}
                        >
                          {platform.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <label
                    className='font-medium text-sm'
                    htmlFor=''
                  >
                    Ordenar por
                  </label>
                  <Select
                    value={filters.ordering || 'default'}
                    onValueChange={handleOrderingChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Ordenação' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='default'>Padrão</SelectItem>
                      <SelectItem value='-rating'>Melhor Avaliação</SelectItem>
                      <SelectItem value='-released'>Mais Recentes</SelectItem>
                      <SelectItem value='-added'>Mais Populares</SelectItem>
                      <SelectItem value='-metacritic'>Melhor Metacritic</SelectItem>
                      <SelectItem value='name'>Nome A-Z</SelectItem>
                      <SelectItem value='-name'>Nome Z-A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <label
                    className='font-medium text-sm opacity-0'
                    htmlFor=''
                  >
                    Ações
                  </label>
                  <Button
                    variant='outline'
                    onClick={() => onFiltersChange({})}
                    disabled={activeFiltersCount === 0}
                    className='w-full'
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>

      {ActiveFilters}
    </div>
  );
};

export default FilterBar;
