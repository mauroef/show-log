import {
  Divider,
  MainLayout,
  MostVotedMovies,
  MostVotedShows,
  UpcomingMovies,
} from '@/components/';

const HomePage = () => {
  return (
    <MainLayout>
      <UpcomingMovies />
      <MostVotedMovies />
      <Divider />
      {/* <MostVotedShows /> */}
    </MainLayout>
  );
};

export default HomePage;
