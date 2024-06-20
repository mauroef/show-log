import { Carousel, Divider, MainLayout, Slider } from '@/components/';
import { getMostVotedMovies, getMostVotedShows } from '@/utils/api';
import { MEDIA_TYPE } from '@/utils/constants';
import { getVideos, withDetailUrl, withGenre, withTitle } from '@/utils/helpers';

const PopularMovies = async () => {
  const movies = await getVideos();

  return <Slider mediaItems={movies} />;
};

const MostVotedMovies = async () => {
  const movies = await getMostVotedMovies()
    .then((m) => withGenre(MEDIA_TYPE.MOVIE, m))
    .then((m) => withDetailUrl(MEDIA_TYPE.MOVIE, m));

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
  const shows = await getMostVotedShows()
    .then((s) => withGenre(MEDIA_TYPE.SHOW, s))
    .then((s) => withTitle(s))
    .then((s) => withDetailUrl(MEDIA_TYPE.SHOW, s));

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
