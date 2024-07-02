import { getMoviesByProvider } from '@/utils/api';
import { WATCH_PROVIDERS } from '@/utils/constants';
import { withDetailUrl } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const DisneyPlusMovies = async () => {
  const movies = await getMoviesByProvider(WATCH_PROVIDERS['Disney Plus'].id)
    .then((s) => withDetailUrl(MEDIA_TYPE.MOVIE, s));

  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
  };

  return <ShelfGrid headline='Disney+' media={movies} settings={settings} />;
};

export default DisneyPlusMovies;
