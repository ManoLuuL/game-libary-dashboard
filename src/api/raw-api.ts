import type {
  Game,
  GameListResponse,
  GameScreenshot,
  GameTrailer,
  Genre,
  Platform,
  SearchFilters,
} from '@/globals/types/game';
import { baseApi } from './consts';
import { mockGames, mockGenres, mockPlatforms } from '@/data/mock-data';

const filterMockGames = (filters: SearchFilters): Game[] => {
  let filteredGames = [...mockGames];

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredGames = filteredGames.filter(
      (game) =>
        game.name.toLowerCase().includes(searchTerm) ||
        game.genres?.some((genre) => genre.name.toLowerCase().includes(searchTerm)) ||
        game.developers?.some((dev) => dev.name.toLowerCase().includes(searchTerm)),
    );
  }

  if (filters.genres) {
    const genreId = Number.parseInt(filters.genres);
    filteredGames = filteredGames.filter((game) => game.genres?.some((genre) => genre.id === genreId));
  }

  if (filters.platforms) {
    const platformId = Number.parseInt(filters.platforms);
    filteredGames = filteredGames.filter((game) => game.parent_platforms?.some((p) => p.platform.id === platformId));
  }

  if (filters.ordering) {
    switch (filters.ordering) {
      case '-rating':
        filteredGames.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case '-released':
        filteredGames.sort((a, b) => new Date(b.released).getTime() - new Date(a.released).getTime());
        break;
      case '-added':
        filteredGames.sort((a, b) => (b.added || 0) - (a.added || 0));
        break;
      case '-metacritic':
        filteredGames.sort((a, b) => (b.metacritic || 0) - (a.metacritic || 0));
        break;
      case 'name':
        filteredGames.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case '-name':
        filteredGames.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
  }

  return filteredGames;
};

export const rawgApi = {
  searchGames: async (filters: SearchFilters = {}): Promise<GameListResponse> => {
    const params = {
      search: filters.search,
      genres: filters.genres,
      platforms: filters.platforms,
      ordering: filters.ordering || '-rating',
      page: filters.page || 1,
      page_size: filters.page_size || 20,
    };

    Object.keys(params).forEach((key) => {
      if (params[key as keyof typeof params] === undefined) {
        delete params[key as keyof typeof params];
      }
    });

    try {
      const response = await baseApi.get<GameListResponse>('/games', { params });
      return response.data;
    } catch (error) {
      console.warn('API request failed, using mock data:', error);
      const filteredGames = filterMockGames(filters);
      return createMockGameListResponse(filteredGames);
    }
  },

  getGameDetails: async (id: number): Promise<Game> => {
    try {
      const response = await baseApi.get<Game>(`/games/${id}`);
      return response.data;
    } catch (error) {
      console.warn('API request failed, using mock data:', error);
      const mockGame = mockGames.find((game) => game.id === id);
      if (mockGame) {
        return mockGame;
      }
      throw new Error(`Game with id ${id} not found`);
    }
  },

  getGameScreenshots: async (id: number): Promise<GameScreenshot[]> => {
    try {
      const response = await baseApi.get<{ results: GameScreenshot[] }>(`/games/${id}/screenshots`);
      return response.data.results;
    } catch (error) {
      console.warn('API request failed, using mock data:', error);
      const mockGame = mockGames.find((game) => game.id === id);
      if (mockGame && mockGame.short_screenshots) {
        return mockGame.short_screenshots.map((screenshot) => ({
          id: screenshot.id,
          image: screenshot.image,
          width: 1920,
          height: 1080,
        }));
      }
      return [];
    }
  },

  getGameTrailers: async (id: number): Promise<GameTrailer[]> => {
    try {
      const response = await baseApi.get<{ results: GameTrailer[] }>(`/games/${id}/movies`);
      return response.data.results;
    } catch (error) {
      console.warn('API request failed, using mock data:', error);
      return [];
    }
  },

  getGenres: async (): Promise<Genre[]> => {
    try {
      const response = await baseApi.get<{ results: Genre[] }>('/genres');
      return response.data.results;
    } catch (error) {
      console.warn('API request failed, using mock data:', error);
      return mockGenres;
    }
  },

  getPlatforms: async (): Promise<Platform[]> => {
    try {
      const response = await baseApi.get<{ results: Platform[] }>('/platforms');
      return response.data.results;
    } catch (error) {
      console.warn('API request failed, using mock data:', error);
      return mockPlatforms;
    }
  },

  getPopularGames: async (page: number = 1): Promise<GameListResponse> => {
    return await rawgApi.searchGames({
      ordering: '-rating',
      page,
      page_size: 20,
    });
  },

  getRecentGames: async (page: number = 1): Promise<GameListResponse> => {
    return await rawgApi.searchGames({
      ordering: '-released',
      page,
      page_size: 20,
    });
  },

  getGamesByGenre: async (genreId: number, page: number = 1): Promise<GameListResponse> => {
    return await rawgApi.searchGames({
      genres: genreId.toString(),
      page,
      page_size: 20,
    });
  },

  getGamesByPlatform: async (platformId: number, page: number = 1): Promise<GameListResponse> => {
    return await rawgApi.searchGames({
      platforms: platformId.toString(),
      page,
      page_size: 20,
    });
  },
};

export default rawgApi;
