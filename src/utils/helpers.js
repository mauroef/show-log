import { MEDIA_TYPE } from './constants';
import {
  getPopularMovies,
  getMovieVideoById,
  getMovieGenres,
  getShowGenres,
} from './api';

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

export const withGenre = async (type, media) => {
  let mediaWithGenre = media;

  try {
    let genres;

    if (type === MEDIA_TYPE.MOVIE) {
      genres = await getMovieGenres();
      console.log({ genres });
    }
    if (type === MEDIA_TYPE.SHOW) {
      genres = await getShowGenres();
    }

    mediaWithGenre = media.map((m) => {
      const genre = genres.find((g) => g.id === m['genre_ids'][0]);

      return { ...m, genre_name: genre ? genre.name : '' };
    });
  } catch (error) {
    console.log({ error });
  } finally {
    return mediaWithGenre;
  }
};
