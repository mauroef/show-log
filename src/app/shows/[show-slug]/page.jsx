import { notFound } from 'next/navigation';
import { getShowById } from '@/utils/api';
import { extractIdFromSlug } from '@/utils/helpers';
import { DetailHeader, MainLayout } from '@/components/';

const ShowDetailsPage = async ({ params }) => {
  const id = extractIdFromSlug(params['show-slug']);
  const show = await getShowById(id);

  if (!show) {
    notFound();
  }

  return (
    <MainLayout>
      <DetailHeader
        average={Math.trunc(show.vote_average * 10)}
        landscape={show.backdrop_path}
        overview={show.overview}
        portrait={show.poster_path}
        title={show.name}
      />
    </MainLayout>
  );
};

export default ShowDetailsPage;
