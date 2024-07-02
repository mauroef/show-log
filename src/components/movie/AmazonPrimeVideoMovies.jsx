import { getMoviesByProvider } from '@/utils/api';
import { WATCH_PROVIDERS } from '@/utils/constants';
import { withDetailUrl } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const AmazonPrimeVideoMovies = async () => {
  const movies = await getMoviesByProvider(
    WATCH_PROVIDERS['Amazon Prime Video'].id
  ).then((m) => withDetailUrl(MEDIA_TYPE.MOVIE, m));

  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
  };

  return (
    <ShelfGrid
      headline='Amazon Prime Video'
      media={movies}
      settings={settings}
    />
  );
};

export default AmazonPrimeVideoMovies;
