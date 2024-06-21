import {
  Divider,
  MainLayout,
  MostVotedMovies,
  MostVotedShows,
  PopularMovies,
} from '@/components/';

const HomePage = () => {
  return (
    <MainLayout>
      <PopularMovies />
      <MostVotedMovies />
      <Divider />
      <MostVotedShows />
    </MainLayout>
  );
};

export default HomePage;
