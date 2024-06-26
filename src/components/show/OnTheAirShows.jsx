import { getOnTheAirShows } from '@/utils/api';
import { withDetailUrl, withTitle } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const OnTheAirShows = async ({ page }) => {
  const shows = await getOnTheAirShows(page)
    .then((s) => withTitle(s))
    .then((s) => withDetailUrl(MEDIA_TYPE.SHOW, s));

  const settings = {
    hasGenre: true,
    hasOverview: true,
    hasTitle: true,
  };

  return <ShelfGrid headline='On the Air' media={shows} settings={settings} />;
};

export default OnTheAirShows;
