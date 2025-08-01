import { useFavoritesStore } from '@/globals/stores/favorite-context';
import type { UseFavoritesStoreParams } from '@/globals/stores/favorite-context/types';
import { createContext, useContext } from 'react';
import type { FavoritesProviderProps } from './types';

const FavoritesContext = createContext<UseFavoritesStoreParams | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  const store = useFavoritesStore();

  if (context === undefined) {
    return store;
  }
  return context;
};

export const FavoritesProvider = (props: FavoritesProviderProps) => {
  const { children } = props;
  const store = useFavoritesStore();

  return <FavoritesContext.Provider value={store}>{children}</FavoritesContext.Provider>;
};
