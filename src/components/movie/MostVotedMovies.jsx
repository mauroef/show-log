import { Suspense } from 'react';
import { getMostVotedMovies } from '@/utils/api';
import { withDetailUrl, withGenre } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
// import { Carousel } from '@/components';
import { ShelfGrid } from '@/components';

const MostVotedMovies = async () => {
  const movies = await getMostVotedMovies()
    .then((m) => withGenre(MEDIA_TYPE.MOVIE, m))
    .then((m) => withDetailUrl(MEDIA_TYPE.MOVIE, m));

  const settings = {
    hasGenre: true,
    hasOverview: true,
    hasTitle: true,
  };

  return (
    // <Carousel
    //   headline='Most voted Movies'
    //   mediaItems={movies}
    //   hasGenre={true}
    //   hasDescription={true}
    //   hasTitle={true}
    // />
    <Suspense>
      <ShelfGrid
        headline='Most voted Movies'
        media={movies}
        settings={settings}
      />
    </Suspense>
  );
};

export default MostVotedMovies;
