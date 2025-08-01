import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { useFavorites } from '@/globals/contexts/favorites-context';
import { FavoriteHeader } from './components/favorite-header';
import { FavoritesContent } from './components/favorites-content';

const FavoritesPage = () => {
  const { favorites, clearFavorites } = useFavorites();

  const handleClearFavorites = () => {
    if (window.confirm('Tem certeza que deseja remover todos os jogos dos favoritos?')) {
      clearFavorites();
    }
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='space-y-8'
    >
      <div className='flex items-center space-x-2 text-muted-foreground text-sm'>
        <Link
          to='/'
          className='transition-colors hover:text-primary'
        >
          Início
        </Link>
        <span>/</span>
        <span className='text-foreground'>Favoritos</span>
      </div>

      <FavoriteHeader
        favorites={favorites}
        handleClearFavorites={handleClearFavorites}
      />

      <FavoritesContent favorites={favorites} />
    </m.div>
  );
};

export default FavoritesPage;
