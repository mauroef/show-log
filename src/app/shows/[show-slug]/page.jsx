import { notFound } from 'next/navigation';
import { MainLayout, ShowHeader } from '@/components/';
import { getShowById } from '@/utils/api';
import { extractIdFromSlug } from '@/utils/helpers';

const ShowDetailsPage = async ({ params }) => {
  const id = extractIdFromSlug(params['show-slug']);
  const show = await getShowById(id);

  if (!show) {
    notFound();
  }

  return (
    <MainLayout>
      <ShowHeader
        landscape={show.backdrop_path}
        portrait={show.poster_path}
        overview={show.overview}
        title={show.name}
      />
    </MainLayout>
  );
};

export default ShowDetailsPage;
