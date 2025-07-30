import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import type { HeaderNavBarProps } from './types';
import { twMerge } from 'tailwind-merge';

export const HeaderNavBar = (props: HeaderNavBarProps) => {
  const { favorites } = props;
  const location = useLocation();

  const isHomePath = location.pathname === '/';
  const isFavoritePath = location.pathname === '/favorites';

  const FavoritesRender = favorites.length > 0 && (
    <span className='ml-1 rounded-full bg-primary px-2 py-0.5 text-primary-foreground text-xs'>{favorites.length}</span>
  );

  return (
    <nav className='hidden items-center space-x-6 md:flex'>
      <Link
        to='/'
        className={twMerge(
          'font-medium text-sm transition-colors hover:text-primary',
          'text-muted-foreground',
          isHomePath && 'text-primary',
        )}
      >
        Descobrir
      </Link>
      <Link
        to='/favorites'
        className={twMerge(
          'flex items-center space-x-1 font-medium text-sm transition-colors hover:text-primary',
          'text-muted-foreground',
          isFavoritePath && 'text-primary',
        )}
      >
        <Heart className='h-4 w-4' />
        <span>Favoritos</span>
        {FavoritesRender}
      </Link>
    </nav>
  );
};
