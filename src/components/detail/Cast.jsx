import { ShelfGrid } from '@/components/';

const Cast = ({ data }) => {
  const settings = {
    hasGenre: false,
    hasOverview: false,
    hasTitle: true,
  };

  return (
    <ShelfGrid headline='Cast' isCast={true} media={data} settings={settings} />
  );
};

export default Cast;
