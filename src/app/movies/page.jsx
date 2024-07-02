import {
  NetflixMovies,
  MainLayout,
  PopularMovies,
  Divider,
  AmazonPrimeVideoMovies,
  AppleTvPlusMovies,
  DisneyPlusMovies,
  MaxMovies,
  ParamountPlusMovies,
  MaxShows,
  CrunchyrollMovies,
} from '@/components/';

const MoviesPage = () => {
  return (
    <MainLayout>
      <PopularMovies />
      <NetflixMovies />
      <Divider />
      <AmazonPrimeVideoMovies />
      <Divider />
      <MaxShows />
      <Divider />
      <DisneyPlusMovies />
      <Divider />
      <AppleTvPlusMovies />
      <Divider />
      <ParamountPlusMovies />
      <Divider />
      <CrunchyrollMovies />
    </MainLayout>
  );
};

export default MoviesPage;
