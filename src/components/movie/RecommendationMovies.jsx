import { getRecommendationsMovies } from '@/utils/api';
import { withDetailUrl, withVideos } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const RecommendationMovies = async ({ id }) => {
  const movies = await getRecommendationsMovies(id)
    .then((m) => withVideos(MEDIA_TYPE.MOVIE, m))
    .then((m) => withDetailUrl(MEDIA_TYPE.MOVIE, m));

  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
  };

  return (
    <ShelfGrid
      headline={'Similar movies'}
      media={movies}
      settings={settings}
    />
  );
};

export default RecommendationMovies;
