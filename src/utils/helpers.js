import { getPopularMovies, getMovieVideoById } from './api';

export const getVideos = async (limit = 8) => {
  const videos = [];

  try {
    const movies = await getPopularMovies();

    for (let i = 0; i < limit; i++) {
      const movie = movies[i];
      const videoData = await getMovieVideoById(movies[i].id);
      videos.push({
        title: movie.title,
        id: movie.id,
        image: {
          landscape: movie.backdrop_path,
          portrait: movie.poster_path,
        },
        video: videoData,
      });
    }
  } catch (error) {
    console.log({ error });
  } finally {
    return videos;
  }
};
