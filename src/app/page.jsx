import MainLayout from '@/components/layout/MainLayout';
import MovieList from '@/components/movie/MovieList';
import { MediaSlider } from '@/components/';
import { getMostVotedMovies } from '@/utils/api';
import { getVideos } from '@/utils/helpers';

const MostVotedMovies = async () => {
  const movies = await getMostVotedMovies();

  return <MovieList movies={movies} />;
};

const PopularMovies = async () => {
  const movies = await getVideos();

  return <MediaSlider mediaItems={movies} />;
}

const HomePage = () => {
  return (
    <MainLayout>
      <PopularMovies />
      <MostVotedMovies />
    </MainLayout>
  );
};

export default HomePage;
