import { getShowByProvider } from '@/utils/api';
import { WATCH_PROVIDERS } from '@/utils/constants';
import { withDetailUrl, withTitle } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const NetflixShows = async () => {
  const shows = await getShowByProvider(WATCH_PROVIDERS['Disney Plus'].id)
    .then((s) => withTitle(s))
    .then((s) => withDetailUrl(MEDIA_TYPE.SHOW, s));

  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
  };

  return (
    <ShelfGrid headline='Disney+ Shows' media={shows} settings={settings} />
  );
};

export default NetflixShows;
