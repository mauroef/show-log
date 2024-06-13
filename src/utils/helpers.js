import { getPopularMovies, getMovieVideoById } from './api';

export const getVideos = async (limit = 8) => {
  const movies = await getPopularMovies();
  const videos = [];

  for (let i = 0; i < limit; i++) {
    const movie = movies[i];
    const videoData = await getMovieVideoById(movies[i].id);
    videos.push({
      title: movie.title,
      id: movie.id,
      poster: movie.poster_path,
      video: videoData,
    });
  }

  return videos;
};
