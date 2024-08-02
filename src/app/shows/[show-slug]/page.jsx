import { notFound } from 'next/navigation';
import { getShowById, getShowCreditsById } from '@/utils/api';
import { extractIdFromSlug } from '@/utils/helpers';
import { Cast, DetailHeader, Divider, MainLayout } from '@/components/';
import { transformCastData } from '@/utils/dataTransformation';

const ShowDetailsPage = async ({ params }) => {
  const id = extractIdFromSlug(params['show-slug']);
  const show = await getShowById(id);

  const credits = await getShowCreditsById(id);
  const cast = transformCastData(credits);

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
      <Cast data={cast} />
      <Divider />
    </MainLayout>
  );
};

export default ShowDetailsPage;
