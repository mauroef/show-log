import { notFound } from 'next/navigation';
import { MainLayout } from '@/components/';
import { getMovieById } from '@/utils/api';
import { extractIdFromSlug } from '@/utils/helpers';

const MovieDetailsPage = async ({ params }) => {
  const id = extractIdFromSlug(params['movie-slug']);
  const movie = await getMovieById(id);

  if (!movie) {
    notFound();
  }

  return (
    <MainLayout>
        {console.log({movie})}
      <h1>{movie.title}</h1>
      <p>{JSON.stringify(movie)}</p>
    </MainLayout>
  );
};

export default MovieDetailsPage;
