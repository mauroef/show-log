import { Carousel, MainLayout, Slider } from '@/components/';
import { getMostVotedMovies } from '@/utils/api';
import { getVideos } from '@/utils/helpers';

const PopularMovies = async () => {
  const movies = await getVideos();

  return <Slider mediaItems={movies} />;
};

const MostVotedMovies = async () => {
  const movies = await getMostVotedMovies();

  return (
    <Carousel
      headline='Most votes Movies'
      mediaItems={movies}
      hasGenre={true}
      hasDescription={true}
      hasTitle={true}
    />
  );
};

const HomePage = () => {
  return (
    <MainLayout>
      {/* set conditinal util components are loaded */}
      <PopularMovies />
      <MostVotedMovies />
    </MainLayout>
  );
};

export default HomePage;
