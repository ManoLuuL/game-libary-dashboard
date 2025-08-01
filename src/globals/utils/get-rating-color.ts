export const getRatingColor = (rating: number) => {
  if (rating >= 4.5) {
    return 'text-green-500';
  }
  if (rating >= 4.0) {
    return 'text-yellow-500';
  }
  if (rating >= 3.0) {
    return 'text-orange-500';
  }
  return 'text-red-500';
};
