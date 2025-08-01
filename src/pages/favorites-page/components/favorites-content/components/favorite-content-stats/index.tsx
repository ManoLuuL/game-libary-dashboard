import GameGrid from '@/components/game-grid';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { m } from 'framer-motion';
import { Heart } from 'lucide-react';
import type { FavoriteContentStatsProps } from './types';

export const FavoriteContentStats = (props: FavoriteContentStatsProps) => {
  const { favorites } = props;

  return (
    <div className='space-y-6'>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center space-x-2'>
              <Heart className='h-5 w-5 fill-current text-red-500' />
              <span>Estatísticas dos Favoritos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
              <div className='rounded-lg bg-muted/50 p-4 text-center'>
                <div className='font-bold text-2xl text-primary'>{favorites.length}</div>
                <div className='text-muted-foreground text-sm'>Jogos Favoritos</div>
              </div>

              <div className='rounded-lg bg-muted/50 p-4 text-center'>
                <div className='font-bold text-2xl text-primary'>
                  {new Set(favorites.flatMap((game) => game.genres?.map((g) => g.name) || [])).size}
                </div>
                <div className='text-muted-foreground text-sm'>Gêneros Únicos</div>
              </div>

              <div className='rounded-lg bg-muted/50 p-4 text-center'>
                <div className='font-bold text-2xl text-primary'>
                  {favorites.reduce((sum, game) => sum + (game.rating || 0), 0) / favorites.length || 0}
                </div>
                <div className='text-muted-foreground text-sm'>Avaliação Média</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </m.div>

      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <GameGrid games={favorites} />
      </m.div>
    </div>
  );
};
