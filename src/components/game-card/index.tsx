import { type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Gamepad2 } from 'lucide-react';
import { m } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useFavorites } from '../contexts/FavoritesContext';
import type { GameCardProps } from './types';
import { CardHeader } from './components/card-header';
import { formatReleaseDate } from './utils/format-release-date';

import 'react-lazy-load-image-component/src/effects/blur.css';

const GameCard = (props: GameCardProps) => {
  const { game, index = 0 } = props;
  const { name, id, rating, metacritic, background_image, released, genres, parent_platforms } = game;

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isGameFavorite = isFavorite(id);

  const handleFavoriteClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isGameFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(game);
    }
  };

  const GenresBadgeRender = genres?.slice(0, 3).map((genre) => (
    <Badge
      key={genre.id}
      variant='secondary'
      className='px-2 py-0.5 text-xs'
    >
      {genre.name}
    </Badge>
  ));

  const GenresBadgeGreaterThree = genres?.length > 3 && (
    <Badge
      variant='outline'
      className='px-2 py-0.5 text-xs'
    >
      +{genres.length - 3}
    </Badge>
  );

  const ParentPlatformsRender = parent_platforms?.map((p) => p.platform.name).join(', ') || 'Multiplataforma';

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className='group'
    >
      <Card className='overflow-hidden border-0 bg-card shadow-md transition-all duration-300 hover:shadow-xl'>
        <Link
          to={`/game/${id}`}
          className='block'
        >
          <CardHeader
            handleFavoriteClick={handleFavoriteClick}
            isGameFavorite={isGameFavorite}
            name={name}
            rating={rating}
            background_image={background_image}
            metacritic={metacritic}
          />

          <CardContent className='p-4'>
            <h3 className='mb-2 line-clamp-2 font-semibold text-lg transition-colors group-hover:text-primary'>
              {name}
            </h3>

            <div className='mb-3 flex items-center space-x-1 text-muted-foreground text-sm'>
              <Calendar className='h-4 w-4' />
              <span>{formatReleaseDate(released)}</span>
            </div>

            <div className='mb-3 flex flex-wrap gap-1'>
              {GenresBadgeRender}
              {GenresBadgeGreaterThree}
            </div>

            <div className='flex items-center space-x-1 text-muted-foreground text-sm'>
              <Gamepad2 className='h-4 w-4' />
              <span className='line-clamp-1'>{ParentPlatformsRender}</span>
            </div>
          </CardContent>
        </Link>
      </Card>
    </m.div>
  );
};

export default GameCard;
