import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { m } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FavoritesContentEmpty = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Card className='py-16 text-center'>
        <CardContent className='space-y-6'>
          <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted'>
            <Heart className='h-12 w-12 text-muted-foreground' />
          </div>

          <div className='space-y-2'>
            <h2 className='font-semibold text-2xl'>Nenhum jogo favorito</h2>
            <p className='mx-auto max-w-md text-muted-foreground'>
              Você ainda não adicionou nenhum jogo aos seus favoritos. Explore nossa biblioteca e adicione jogos que
              você gosta!
            </p>
          </div>

          <div className='flex flex-col justify-center gap-3 sm:flex-row'>
            <Link to='/'>
              <Button className='w-full sm:w-auto'>Descobrir Jogos</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </m.div>
  );
};
