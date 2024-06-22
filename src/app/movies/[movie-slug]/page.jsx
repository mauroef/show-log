import { notFound } from 'next/navigation';
import { getMovieById } from '@/utils/api';
import { extractIdFromSlug } from '@/utils/helpers';
import { MainLayout, MovieHeader } from '@/components/';

const MovieDetailsPage = async ({ params }) => {
  const id = extractIdFromSlug(params['movie-slug']);
  const movie = await getMovieById(id);

  if (!movie) {
    notFound();
  }

  return (
    <MainLayout>
      <MovieHeader movie={movie} />
      <div style={{ height: '1000vh', width: '100%' }}></div>
    </MainLayout>
  );
};

export default MovieDetailsPage;
