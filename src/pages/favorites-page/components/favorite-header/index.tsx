import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FavoriteHeaderProps } from './types';

export const FavoriteHeader = (props: FavoriteHeaderProps) => {
  const { favorites, handleClearFavorites } = props;

  const HasFavoritesRender =
    favorites.length === 0
      ? 'Nenhum jogo favoritado ainda'
      : `${favorites.length} jogo${favorites.length > 1 ? 's' : ''} favoritado${favorites.length > 1 ? 's' : ''}`;

  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-center space-x-3'>
        <div className='rounded-lg bg-red-500/10 p-2'>
          <Heart className='h-6 w-6 fill-current text-red-500' />
        </div>
        <div>
          <h1 className='font-bold text-3xl md:text-4xl'>Meus Favoritos</h1>
          <p className='text-muted-foreground'>{HasFavoritesRender}</p>
        </div>
      </div>

      <div className='flex items-center space-x-2'>
        <Link to='/'>
          <Button variant='outline'>
            <ArrowLeft className='mr-2 h-4 w-4' />
            Voltar
          </Button>
        </Link>

        {favorites.length > 0 && (
          <Button
            variant='destructive'
            onClick={handleClearFavorites}
            className='flex items-center space-x-2'
          >
            <Trash2 className='h-4 w-4' />
            <span>Limpar Todos</span>
          </Button>
        )}
      </div>
    </div>
  );
};
