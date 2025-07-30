import { m } from 'framer-motion';

export const GameGridEmpty = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='py-12 text-center'
    >
      <div className='mb-2 font-medium text-lg'>Nenhum jogo encontrado</div>
      <p className='text-muted-foreground'>Tente ajustar os filtros ou buscar por outro termo.</p>
    </m.div>
  );
};
