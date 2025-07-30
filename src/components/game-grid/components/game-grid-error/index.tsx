import { m } from 'framer-motion';

export const GameGridError = (props: { error: string }) => {
  const { error } = props;

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='py-12 text-center'
    >
      <div className='mb-2 font-medium text-destructive text-lg'>Erro ao carregar jogos</div>
      <p className='text-muted-foreground'>{error}</p>
    </m.div>
  );
};
