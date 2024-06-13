import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <ul className='grid grid-cols-3 gap-4'>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
