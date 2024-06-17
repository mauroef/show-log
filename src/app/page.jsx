import { Carousel, MainLayout, Slider } from '@/components/';
import { getMostVotedMovies } from '@/utils/api';
import { getVideos } from '@/utils/helpers';

const PopularMovies = async () => {
  const movies = await getVideos();

  return <Slider mediaItems={movies} />;
};

const MostVotedMovies = async () => {
  const movies = await getMostVotedMovies();

  return <Carousel title='Most votes Movies' mediaItems={movies} />;
};

const HomePage = () => {
  return (
    <MainLayout>
      <PopularMovies />
      <MostVotedMovies />
    </MainLayout>
  );
};

export default HomePage;
