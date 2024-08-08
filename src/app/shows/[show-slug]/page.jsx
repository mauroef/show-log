import { notFound } from 'next/navigation';
import { getShowById, getShowCreditsById } from '@/utils/api';
import { extractIdFromSlug } from '@/utils/helpers';
import { Cast, DetailHeader, DetailBody, Divider, MainLayout, ShowSeasons } from '@/components/';
import { transformCastData, withTitle } from '@/utils/dataTransformation';

const ShowDetailsPage = async ({ params }) => {
  const id = extractIdFromSlug(params['show-slug']);
  const show = await getShowById(id);

  const credits = await getShowCreditsById(id);
  const cast = transformCastData(credits);

  const seasons = await withTitle(show.seasons);

  if (!show) {
    notFound();
  }

  return (
    <MainLayout>
      <DetailHeader
        average={Math.trunc(show.vote_average * 10)}
        landscape={show.backdrop_path}
        subheadline={show.tagline}
        portrait={show.poster_path}
        headline={show.name}
      />
      <DetailBody overview={show.overview} />
      <Divider />
      <ShowSeasons data={seasons} showId={id}/>
      <Divider />
      <Cast data={cast} />
      <Divider />
    </MainLayout>
  );
};

export default ShowDetailsPage;
