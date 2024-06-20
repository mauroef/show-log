import { Carousel, Divider, MainLayout, Slider } from '@/components/';
import { getMostVotedMovies, getMostVotedShows } from '@/utils/api';
import { MEDIA_TYPE } from '@/utils/constants';
import { getVideos, withGenre } from '@/utils/helpers';

const PopularMovies = async () => {
  const movies = await getVideos();

  return <Slider mediaItems={movies} />;
};

const MostVotedMovies = async () => {
  const movies = await getMostVotedMovies();
  const withGenreMovies = await withGenre(MEDIA_TYPE.MOVIE, movies);

  return (
    <Carousel
      headline='Most voted Movies'
      mediaItems={withGenreMovies}
      hasGenre={true}
      hasDescription={true}
      hasTitle={true}
    />
  );
};

const MostVotedShows = async () => {
  const shows = await getMostVotedShows();
  let withGenreShows = await withGenre(MEDIA_TYPE.SHOW, shows);

  if (!shows.title) {
    withGenreShows = withGenreShows.map((s) => ({
      ...s,
      title: s.original_name,
    }));
  }

  return (
    <Carousel
      headline='Most voted Shows'
      mediaItems={withGenreShows}
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
