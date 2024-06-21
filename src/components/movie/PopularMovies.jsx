import { getVideos } from '@/utils/dataTransformation';
import { Slider } from '@/components';

const PopularMovies = async () => {
  const movies = await getVideos();

  return <Slider mediaItems={movies} />;
};

export default PopularMovies;
