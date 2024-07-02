import { getPopularShows } from '@/utils/api';
import { withDetailUrl, withVideos } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { Slider } from '@/components';

const PopularShows = async () => {
  const showsLimit = 14;
  const shows = await getPopularShows()
    .then((s) => withVideos(MEDIA_TYPE.SHOW, s, showsLimit))
    .then((s) => withDetailUrl(MEDIA_TYPE.SHOW, s));

  return <Slider mediaItems={shows} />;
};

export default PopularShows;
