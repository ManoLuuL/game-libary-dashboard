import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { UseFavoritesStoreParams } from './types';
import type { Game } from '@/globals/types/game';

export const useFavoritesStore = create<UseFavoritesStoreParams>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (game: Game) => {
        const { favorites } = get();
        if (!favorites.find((fav) => fav.id === game.id)) {
          set({ favorites: [...favorites, game] });
        }
      },
      removeFavorite: (gameId: number) => {
        const { favorites } = get();
        set({ favorites: favorites.filter((fav) => fav.id !== gameId) });
      },
      isFavorite: (gameId: number) => {
        const { favorites } = get();
        return favorites.some((fav) => fav.id === gameId);
      },
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'game-library-favorites',
    },
  ),
);
