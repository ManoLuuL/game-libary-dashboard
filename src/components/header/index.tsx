import { Link } from 'react-router-dom';
import { Moon, Sun, Gamepad2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeaderNavBar } from './components/header-nav-bar';
import { useTheme } from '@/globals/contexts/theme-context';
import { useFavorites } from '@/globals/contexts/favorites-context';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { favorites } = useFavorites();

  const FavoriteQuantityRender = favorites.length > 9 ? '9+' : favorites.length;

  const FavoritesRender = favorites.length > 0 && (
    <span className='-top-1 -right-1 absolute flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs'>
      {FavoriteQuantityRender}
    </span>
  );

  const ThemeIconRender = theme === 'light' ? <Moon className='h-5 w-5' /> : <Sun className='h-5 w-5' />;

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link
          to='/'
          className='flex items-center space-x-2 transition-opacity hover:opacity-80'
        >
          <Gamepad2 className='h-8 w-8 text-primary' />
          <span className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-bold text-transparent text-xl'>
            Game Library
          </span>
        </Link>

        <HeaderNavBar favorites={favorites} />

        <div className='flex items-center space-x-2'>
          <Link
            to='/favorites'
            className='relative md:hidden'
          >
            <Button
              variant='ghost'
              size='icon'
            >
              <Heart className='h-5 w-5' />
              {FavoritesRender}
            </Button>
          </Link>

          <Button
            variant='ghost'
            size='icon'
            onClick={toggleTheme}
            className='transition-transform hover:scale-110'
          >
            {ThemeIconRender}
            <span className='sr-only'>Alternar tema</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
