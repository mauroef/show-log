import { Carousel, Divider, MainLayout, Slider } from '@/components/';
import { getMostVotedMovies, getMostVotedShows } from '@/utils/api';
import { getVideos } from '@/utils/helpers';

const PopularMovies = async () => {
  const movies = await getVideos();

  return <Slider mediaItems={movies} />;
};

const MostVotedMovies = async () => {
  const movies = await getMostVotedMovies();

  return (
    <Carousel
      headline='Most voted Movies'
      mediaItems={movies}
      hasGenre={true}
      hasDescription={true}
      hasTitle={true}
    />
  );
};

const MostVotedShows = async () => {
  let shows = await getMostVotedShows();

  if (!shows.title) {
    shows = shows.map(s => ({ ...s, title: s.original_name }));
  }
  return (
    <Carousel
      headline='Most voted Shows'
      mediaItems={shows}
      hasGenre={true}
      hasDescription={true}
      hasTitle={true}
    />
  );
};

const HomePage = () => {
  return (
    <MainLayout>
      <PopularMovies />
      <MostVotedMovies />
      <Divider />
      <MostVotedShows />
    </MainLayout>
  );
};

export default HomePage;
