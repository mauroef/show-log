import {
  NetflixMovies,
  MainLayout,
  PopularMovies,
  Divider,
  AmazonPrimeVideoMovies,
  AppleTvPlusMovies,
  DisneyPlusMovies,
  ParamountPlusMovies,
  MaxMovies,
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
      <MaxMovies />
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
