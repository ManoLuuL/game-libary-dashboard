import rawgApi from '@/api/raw-api';
import type { SearchFilters } from '@/globals/types/game';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import type { GameResponse } from './types';

export const useGames = (filters: SearchFilters = {}) => {
  return useQuery({
    queryKey: ['games', filters],
    queryFn: () => rawgApi.searchGames(filters),
    staleTime: 5 * 60 * 1000,
  });
};

export const useInfiniteGames = (filters: SearchFilters = {}) => {
  return useInfiniteQuery<GameResponse, Error>({
    queryKey: ['games-infinite', filters],
    queryFn: ({ pageParam = 1 }) => rawgApi.searchGames({ ...filters, page: pageParam as number }),
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        return lastPage.next;
      }
      return undefined;
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useGameDetails = (id: number) => {
  return useQuery({
    queryKey: ['game', id],
    queryFn: () => rawgApi.getGameDetails(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });
};

export const useGameScreenshots = (id: number) => {
  return useQuery({
    queryKey: ['game-screenshots', id],
    queryFn: () => rawgApi.getGameScreenshots(id),
    enabled: !!id,
    staleTime: 15 * 60 * 1000,
  });
};

export const useGameTrailers = (id: number) => {
  return useQuery({
    queryKey: ['game-trailers', id],
    queryFn: () => rawgApi.getGameTrailers(id),
    enabled: !!id,
    staleTime: 15 * 60 * 1000,
  });
};

export const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: rawgApi.getGenres,
    staleTime: 60 * 60 * 1000,
  });
};

export const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: rawgApi.getPlatforms,
    staleTime: 60 * 60 * 1000,
  });
};

export const usePopularGames = (page: number = 1) => {
  return useQuery({
    queryKey: ['popular-games', page],
    queryFn: () => rawgApi.getPopularGames(page),
    staleTime: 10 * 60 * 1000,
  });
};

export const useRecentGames = (page: number = 1) => {
  return useQuery({
    queryKey: ['recent-games', page],
    queryFn: () => rawgApi.getRecentGames(page),
    staleTime: 5 * 60 * 1000,
  });
};
