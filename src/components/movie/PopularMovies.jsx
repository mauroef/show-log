import { getPopularMovies } from '@/utils/api';
import { withVideos } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { Slider } from '@/components';

const PopularMovies = async () => {
  const movies = await getPopularMovies().then((m) =>
    withVideos(MEDIA_TYPE.MOVIE, m)
  );

  return <Slider mediaItems={movies} />;
};

export default PopularMovies;
