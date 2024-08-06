import { ShelfGrid } from '@/components';

const settings = {
  hasGenre: false,
  hasOverview: false,
  hasTitle: true,
};

const ShowSeasons = ({ data }) => {
  return (
    <ShelfGrid
      headline={`Seasons - ${data.length}`}
      isPoster={true}
      media={data}
      settings={settings}
    />
  );
};

export default ShowSeasons;