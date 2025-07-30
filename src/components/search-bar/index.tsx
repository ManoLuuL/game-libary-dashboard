import { useState, useCallback, type FormEvent, type KeyboardEvent } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { m } from 'framer-motion';
import type { SearchBarProps } from './types';
import { twMerge } from 'tailwind-merge';
import { SEARCH_BAR_SUGGESTIONS } from './consts';

const SearchBar = (props: SearchBarProps) => {
  const { onSearch, initialValue = '', placeholder = 'Buscar Jogos...' } = props;

  const [query, setQuery] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onSearch(query.trim());
    },
    [query, onSearch],
  );

  const handleClear = useCallback(() => {
    setQuery('');
    onSearch('');
  }, [onSearch]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClear();
      }
    },
    [handleClear],
  );

  const ClearButtonQueryRender = query && (
    <m.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <Button
        type='button'
        variant='ghost'
        size='icon'
        onClick={handleClear}
        className='h-8 w-8 hover:bg-destructive/10 hover:text-destructive'
      >
        <X className='h-4 w-4' />
        <span className='sr-only'>Limpar busca</span>
      </Button>
    </m.div>
  );

  const SuggestionsRender = !query && (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className='mt-4 flex flex-wrap justify-center gap-2'
    >
      {SEARCH_BAR_SUGGESTIONS.map((suggestion) => {
        const handleClick = () => {
          setQuery(suggestion);
          onSearch(suggestion);
        };

        return (
          <Button
            key={suggestion}
            variant='outline'
            size='sm'
            onClick={handleClick}
            className='text-xs transition-colors hover:bg-primary hover:text-primary-foreground'
          >
            {suggestion}
          </Button>
        );
      })}
    </m.div>
  );

  return (
    <m.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='mx-auto w-full max-w-2xl'
    >
      <form
        onSubmit={handleSubmit}
        className='relative'
      >
        <div
          className={twMerge(
            'relative flex scale-100 items-center transition-all duration-200',
            isFocused && 'scale-105',
          )}
        >
          <Search className='absolute left-3 z-10 h-4 w-4 text-muted-foreground' />

          <Input
            type='text'
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            className={twMerge(
              'h-12 pr-20 pl-10 text-base shadow-md transition-all duration-200 hover:shadow-lg',
              isFocused && 'shadow-lg ring-2 ring-primary ring-offset-2',
            )}
          />

          <div className='absolute right-2 flex items-center space-x-1'>
            {ClearButtonQueryRender}

            <Button
              type='submit'
              size='sm'
              className='h-8 bg-primary px-3 hover:bg-primary/90'
              disabled={!query.trim()}
            >
              Buscar
            </Button>
          </div>
        </div>

        <m.div
          className='-bottom-1 absolute left-0 h-0.5 bg-gradient-to-r from-primary to-primary/60'
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : 0 }}
          transition={{ duration: 0.2 }}
        />
      </form>

      {SuggestionsRender}
    </m.div>
  );
};

export default SearchBar;
