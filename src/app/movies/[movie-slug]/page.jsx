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
      <MovieHeader
        average={Math.trunc(movie.vote_average * 10)}
        landscape={movie.backdrop_path}
        overview={movie.overview}
        portrait={movie.poster_path}
        title={movie.title}
      />
    </MainLayout>
  );
};

export default MovieDetailsPage;
