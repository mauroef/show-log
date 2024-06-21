import { getMostVotedShows } from '@/utils/api';
import { withDetailUrl, withGenre, withTitle } from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { Carousel } from '@/components';

const MostVotedShows = async () => {
  const shows = await getMostVotedShows()
    .then((s) => withGenre(MEDIA_TYPE.SHOW, s))
    .then((s) => withTitle(s))
    .then((s) => withDetailUrl(MEDIA_TYPE.SHOW, s));

  return (
    <Carousel
      headline='Most voted Shows'
      mediaItems={shows}
      hasGenre={true}
      hasDescription={true}
      hasTitle={true}
    />
  );
};

export default MostVotedShows;
