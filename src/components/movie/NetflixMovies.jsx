import { getMoviesByProvider } from '@/utils/api';
import { WATCH_PROVIDERS } from '@/utils/constants';
import { withDetailUrl } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const NetflixMovies = async () => {
  const movies = await getMoviesByProvider(WATCH_PROVIDERS.Netflix.id).then(
    (m) => withDetailUrl(MEDIA_TYPE.MOVIE, m)
  );

  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
  };

  return <ShelfGrid headline='Netflix' media={movies} settings={settings} />;
};

export default NetflixMovies;
