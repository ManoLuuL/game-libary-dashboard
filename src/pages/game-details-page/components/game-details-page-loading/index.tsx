export const GameDetailsPageLoading = () => {
  return (
    <div className='space-y-8'>
      <div className='animate-pulse'>
        <div className='mb-4 h-8 w-32 rounded bg-muted' />
        <div className='mb-2 h-12 w-3/4 rounded bg-muted' />
        <div className='h-6 w-1/2 rounded bg-muted' />
      </div>

      <div className='animate-pulse'>
        <div className='aspect-video rounded-lg bg-muted' />
      </div>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        <div className='animate-pulse space-y-6 lg:col-span-2'>
          <div className='space-y-2'>
            <div className='h-6 w-32 rounded bg-muted' />
            <div className='h-4 w-full rounded bg-muted' />
            <div className='h-4 w-3/4 rounded bg-muted' />
          </div>
        </div>
        <div className='animate-pulse space-y-4'>
          <div className='h-48 rounded bg-muted' />
        </div>
      </div>
    </div>
  );
};
