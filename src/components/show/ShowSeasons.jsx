import { ShelfGrid } from '@/components';

const ShowSeasons = ({ showId, data }) => {
  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
    showId,
  };

  return (
    <ShelfGrid
      headline={`Seasons`}
      isPoster={true}
      media={data}
      settings={settings}
    />
  );
};

export default ShowSeasons;
