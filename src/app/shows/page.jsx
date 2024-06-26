import {
  DisneyPlusShows,
  Divider,
  MainLayout,
  MaxShows,
  NetflixShows,
  PopularShows,
} from '@/components';

const ShowsPage = () => {
  return (
    <MainLayout>
      <PopularShows />
      <NetflixShows />
      <Divider />
      <MaxShows />
      <Divider />
      <DisneyPlusShows />
    </MainLayout>
  );
};

export default ShowsPage;
