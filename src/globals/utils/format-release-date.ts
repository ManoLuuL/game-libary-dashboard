export const formatReleaseDate = (dateString: string) => {
  if (!dateString) {
    return 'Data não disponível';
  }
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
