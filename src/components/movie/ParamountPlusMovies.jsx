import { getMoviesByProvider } from '@/utils/api';
import { WATCH_PROVIDERS } from '@/utils/constants';
import { withDetailUrl } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const ParamountPlusMovies = async () => {
  const movies = await getMoviesByProvider(
    WATCH_PROVIDERS['Paramount Plus'].id
  ).then((m) => withDetailUrl(MEDIA_TYPE.MOVIE, m));

  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
  };

  return <ShelfGrid headline='Paramount+' media={movies} settings={settings} />;
};

export default ParamountPlusMovies;
