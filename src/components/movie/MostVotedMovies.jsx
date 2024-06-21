import { getMostVotedMovies } from '@/utils/api';
import { withDetailUrl, withGenre } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { Carousel } from '@/components';

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

export default MostVotedMovies;
