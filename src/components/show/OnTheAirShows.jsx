import { getOnTheAirShows } from '@/utils/api';
import { withDetailUrl, withTitle } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { Carousel } from '@/components';

const OnTheAirShows = async ({ page }) => {
  const shows = await getOnTheAirShows(page)
    .then((s) => withTitle(s))
    .then((s) => withDetailUrl(MEDIA_TYPE.SHOW, s));

  return (
    <Carousel
      hasTitle={true}
      headline={page === 1 ? 'On the Air' : ''}
      mediaItems={shows}
    />
  );
};

export default OnTheAirShows;
