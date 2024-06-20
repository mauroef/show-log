import { notFound } from 'next/navigation';
import { MainLayout } from '@/components/';
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
      <h1>{show.title}</h1>
      <p>{JSON.stringify(show)}</p>
    </MainLayout>
  );
};

export default ShowDetailsPage;
