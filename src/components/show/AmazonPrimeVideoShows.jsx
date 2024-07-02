import { getShowsByProvider } from '@/utils/api';
import { WATCH_PROVIDERS } from '@/utils/constants';
import { withDetailUrl, withTitle } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const AmazonPrimeVideoShows = async () => {
  const shows = await getShowsByProvider(WATCH_PROVIDERS['Amazon Prime Video'].id)
    .then((s) => withTitle(s))
    .then((s) => withDetailUrl(MEDIA_TYPE.SHOW, s));

  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
  };

  return (
    <ShelfGrid headline='Amazon Prime Video' media={shows} settings={settings} />
  );
};

export default AmazonPrimeVideoShows;
