export const GameGridLoading = () => {
  const LoadingRender = Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className='animate-pulse'
    >
      <div className='overflow-hidden rounded-lg bg-muted'>
        <div className='aspect-video bg-muted-foreground/20' />
        <div className='space-y-3 p-4'>
          <div className='h-4 w-3/4 rounded bg-muted-foreground/20' />
          <div className='h-3 w-1/2 rounded bg-muted-foreground/20' />
          <div className='flex space-x-2'>
            <div className='h-6 w-16 rounded bg-muted-foreground/20' />
            <div className='h-6 w-20 rounded bg-muted-foreground/20' />
          </div>
          <div className='h-3 w-2/3 rounded bg-muted-foreground/20' />
        </div>
      </div>
    </div>
  ));

  return <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>{LoadingRender}</div>;
};
