import { Star } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { GameRatingProps } from './types';

export const GameRating = (props: GameRatingProps) => {
  const { rating, rationColor } = props;

  return (
    <div className='absolute top-2 left-2 flex items-center space-x-1 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm'>
      <Star className={twMerge('h-3 w-3 fill-current', rationColor)} />
      <span className='font-medium text-white text-xs'>{rating.toFixed(1)}</span>
    </div>
  );
};
