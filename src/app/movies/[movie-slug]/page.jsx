import { notFound } from 'next/navigation';
import { getMovieById, getMovieCreditsById } from '@/utils/api';
import { extractIdFromSlug } from '@/utils/helpers';
import { Cast, DetailHeader, Divider, MainLayout, SimilarMovies } from '@/components/';
import { transformCastData } from '@/utils/dataTransformation';

const MovieDetailsPage = async ({ params }) => {
  const id = extractIdFromSlug(params['movie-slug']);
  const movie = await getMovieById(id);

  const credits = await getMovieCreditsById(id);
  const cast = transformCastData(credits);

  if (!movie) {
    notFound();
  }

  return (
    <MainLayout>
      <DetailHeader
        average={Math.trunc(movie.vote_average * 10)}
        landscape={movie.backdrop_path}
        overview={movie.overview}
        portrait={movie.poster_path}
        title={movie.title}
      />
      <SimilarMovies id={id} />
      <Divider />
      <Cast data={cast} />
    </MainLayout>
  );
};

export default MovieDetailsPage;
