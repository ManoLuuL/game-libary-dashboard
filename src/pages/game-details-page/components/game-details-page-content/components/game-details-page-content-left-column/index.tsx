import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { m } from 'framer-motion';
import { Play } from 'lucide-react';
import type { GameDetailsPageContentLeftColumnProps } from './types';

export const GameDetailsPageContentLeftColumn = (props: GameDetailsPageContentLeftColumnProps) => {
  const { game, screenshots, trailers } = props;
  const { description_raw } = game ?? {};

  const ScreenShotsRender = screenshots && screenshots.length > 0 && (
    <Card>
      <CardHeader>
        <CardTitle>Screenshots</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {screenshots.slice(0, 6).map((screenshot, index) => (
            <m.div
              key={screenshot.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className='group relative aspect-video cursor-pointer overflow-hidden rounded-lg'
            >
              <LazyLoadImage
                src={screenshot.image}
                alt={`Screenshot ${index + 1}`}
                effect='blur'
                className='h-full w-full object-cover transition-transform group-hover:scale-110'
              />
            </m.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const TrailersRender = trailers && trailers.length > 0 && (
    <Card>
      <CardHeader>
        <CardTitle>Trailers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {trailers.slice(0, 3).map((trailer, index) => (
            <m.div
              key={trailer.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className='flex items-center space-x-4 rounded-lg bg-muted/50 p-4 transition-colors hover:bg-muted'
            >
              <div className='relative'>
                <img
                  src={trailer.preview}
                  alt={trailer.name}
                  className='h-16 w-24 rounded object-cover'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Play className='h-6 w-6 text-white' />
                </div>
              </div>
              <div className='flex-1'>
                <h4 className='font-medium'>{trailer.name}</h4>
                <p className='text-muted-foreground text-sm'>Trailer oficial</p>
              </div>
            </m.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const DescriptionRawRender = description_raw && (
    <Card>
      <CardHeader>
        <CardTitle>Sobre o Jogo</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-muted-foreground leading-relaxed'>{description_raw}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className='space-y-8 lg:col-span-2'>
      {DescriptionRawRender}

      {ScreenShotsRender}
      {TrailersRender}
    </div>
  );
};
