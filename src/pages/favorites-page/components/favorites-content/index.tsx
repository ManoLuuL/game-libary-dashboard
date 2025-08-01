import { FavoritesContentEmpty } from './components/favorite-content-empty';
import type { FavoriteContentProps } from './types';
import { FavoriteContentStats } from './components/favorite-content-stats';

export const FavoritesContent = (props: FavoriteContentProps) => {
  const { favorites } = props;

  const isEmptyFavorites = favorites.length === 0;

  const FavoriteContentRender = isEmptyFavorites ? (
    <FavoritesContentEmpty />
  ) : (
    <FavoriteContentStats favorites={favorites} />
  );

  return FavoriteContentRender;
};
