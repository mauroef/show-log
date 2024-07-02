import {
  AmazonPrimeVideoShows,
  AppleTvPlusShows,
  CrunchyrollShows,
  DisneyPlusShows,
  Divider,
  MainLayout,
  MaxShows,
  NetflixShows,
  ParamountPlusShows,
  PopularShows,
} from '@/components';

const ShowsPage = () => {
  return (
    <MainLayout>
      <PopularShows />
      <NetflixShows />
      <Divider />
      <AmazonPrimeVideoShows />
      <Divider />
      <MaxShows />
      <Divider />
      <DisneyPlusShows />
      <Divider />
      <AppleTvPlusShows />
      <Divider />
      <ParamountPlusShows />
      <Divider />
      <CrunchyrollShows />
    </MainLayout>
  );
};

export default ShowsPage;
