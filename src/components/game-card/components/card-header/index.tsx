import { getRatingColor } from '../../../../globals/utils/get-rating-color';
import { GameMetric } from '../game-metric';
import { GameRating } from '../game-rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { CardHeaderProps } from './types';

export const CardHeader = (props: CardHeaderProps) => {
  const { isGameFavorite, metacritic, rating, handleFavoriteClick, name, background_image } = props;

  const rationColor = getRatingColor(rating);

  const GameRatingRender = rating > 0 && (
    <GameRating
      rating={rating}
      rationColor={rationColor}
    />
  );

  const GameMetricRender = metacritic && <GameMetric metric={metacritic} />;

  return (
    <div className='relative aspect-video overflow-hidden'>
      <LazyLoadImage
        src={background_image || '/placeholder-game.jpg'}
        alt={name}
        effect='blur'
        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
        placeholderSrc='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhcnJlZ2FuZG8uLi48L3RleHQ+PC9zdmc+'
      />

      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

      <Button
        variant='ghost'
        size='icon'
        onClick={handleFavoriteClick}
        className={twMerge(
          'absolute top-2 right-2 h-8 w-8 rounded-full text-white backdrop-blur-sm transition-all duration-200',
          isGameFavorite && 'bg-red-500 hover:bg-red-600',
          !isGameFavorite && 'bg-black/20 hover:bg-black/40',
        )}
      >
        <Heart className={twMerge('h-4 w-4', isGameFavorite ? 'fill-current' : '')} />
      </Button>

      {GameRatingRender}

      {GameMetricRender}
    </div>
  );
};
