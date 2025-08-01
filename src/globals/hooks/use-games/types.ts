import type rawgApi from '@/api/raw-api';

export type GameResponse = Awaited<ReturnType<typeof rawgApi.searchGames>>;
