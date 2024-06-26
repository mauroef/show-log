import { getMostVotedShows } from '@/utils/api';
import {
  withDetailUrl,
  withGenre,
  withTitle,
} from '@/utils/dataTransformation';
import { MEDIA_TYPE } from '@/utils/constants';
import { ShelfGrid } from '@/components';

const MostVotedShows = async () => {
  const shows = await getMostVotedShows()
    .then((s) => withGenre(MEDIA_TYPE.SHOW, s))
    .then((s) => withTitle(s))
    .then((s) => withDetailUrl(MEDIA_TYPE.SHOW, s));

  const settings = {
    hasGenre: true,
    hasOverview: true,
    hasTitle: true,
  };

  return (
    <ShelfGrid headline='Most voted Shows' media={shows} settings={settings} />
  );
};

export default MostVotedShows;
