import MainLayout from '@/components/layout/MainLayout';
import MovieList from '@/components/movie/MovieList';
import { getPopularMovies } from '@/utils/api';

const PopularMovies = async () => {
  const popular = await getPopularMovies();

  return <MovieList movies={popular} />;
};

const HomePage = () => {
  return (
    <MainLayout>
      <PopularMovies />
    </MainLayout>
  );
};

export default HomePage;
