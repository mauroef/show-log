import { getShowsByProvider } from '@/utils/api';
import { WATCH_PROVIDERS } from '@/utils/constants';
import { withDetailUrl, withTitle } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const CrunchyrollShows = async () => {
  const shows = await getShowsByProvider(WATCH_PROVIDERS.Crunchyroll.id)
    .then((s) => withTitle(s))
    .then((s) => withDetailUrl(MEDIA_TYPE.SHOW, s));

  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
  };

  return (
    <ShelfGrid headline='Crunchyroll' media={shows} settings={settings} />
  );
};

export default CrunchyrollShows;
