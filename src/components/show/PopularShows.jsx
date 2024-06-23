import { getPopularShows } from '@/utils/api';
import { withVideos } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { Slider } from '@/components';

const PopularShows = async () => {
  const shows = await getPopularShows().then((s) =>
    withVideos(MEDIA_TYPE.SHOW, s, 14)
  );

  return <Slider mediaItems={shows} />;
};

export default PopularShows;
