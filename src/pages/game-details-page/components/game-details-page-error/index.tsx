import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GameDetailsPageError = () => {
  return (
    <div className='py-12 text-center'>
      <h1 className='mb-4 font-bold text-2xl'>Jogo não encontrado</h1>
      <p className='mb-6 text-muted-foreground'>
        O jogo que você está procurando não existe ou não pôde ser carregado.
      </p>
      <Link to='/'>
        <Button>
          <ArrowLeft className='mr-2 h-4 w-4' />
          Voltar ao início
        </Button>
      </Link>
    </div>
  );
};
