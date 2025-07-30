import type { GameMetricProps } from './types';

export const GameMetric = (props: GameMetricProps) => {
  const { metric } = props;

  return (
    <div className='absolute right-2 bottom-2 rounded bg-yellow-500 px-2 py-1 text-black'>
      <span className='font-bold text-xs'>{metric}</span>
    </div>
  );
};
