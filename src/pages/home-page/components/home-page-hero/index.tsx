import SearchBar from '@/components/search-bar';
import { m } from 'framer-motion';
import type { HomePageHeroProps } from './types';

export const HomePageHero = (props: HomePageHeroProps) => {
  const { handleSearch, searchQuery } = props;

  return (
    <m.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 text-center'
    >
      <h1 className='mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-bold text-4xl text-transparent md:text-6xl'>
        Game Library Dashboard
      </h1>
      <p className='mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl'>
        Descubra, explore e organize sua biblioteca de jogos favoritos. Milhares de títulos esperando por você!
      </p>

      <SearchBar
        onSearch={handleSearch}
        placeholder='Buscar por jogos, gêneros ou desenvolvedores...'
        initialValue={searchQuery}
      />
    </m.section>
  );
};
