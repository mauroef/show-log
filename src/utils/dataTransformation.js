import { MEDIA_TYPE } from '@/utils/constants';
import {
  getMovieGenres,
  getMovieVideosById,
  getShowGenres,
  getShowVideosById,
} from '@/utils/api';
import { slug } from '@/utils/helpers';

const handleDataError = (error, context) => {
  console.error(`Error processing ${context}:`, error);
};

export const transformSearchData = (data) => {
  let transformedData = data;

  try {
    const excludePerson = (data) =>
      data.filter((d) => d.media_type !== 'person');
    const excludInvalidImages = (data) => data.filter((d) => d.poster_path);
    const mapTransformedData = (data) =>
      data.map((d) => {
        const newData = { ...d };

        if (!newData.title) {
          newData.title = newData.name || '';
        }

        if (newData.media_type === 'movie') {
          newData.url = `/movies/${slug(newData.title)}-${newData.id}`;
        } else if (newData.media_type === 'tv') {
          newData.media_type = 'tv show';
          newData.url = `/shows/${slug(newData.title)}-${newData.id}`;
        }

        return newData;
      });

    transformedData = mapTransformedData(
      excludePerson(excludInvalidImages(data))
    );
  } catch (error) {
    handleDataError(error, 'transformSearchData');
  } finally {
    return transformedData;
  }
};

export const withDetailUrl = (type, media) => {
  let mediaWithUrl = media;

  try {
    mediaWithUrl = media.map((m) => {
      let url = '';

      if (type === MEDIA_TYPE.MOVIE) {
        url = `/movies/${slug(m.title)}-${m.id}`;
      }
      if (type === MEDIA_TYPE.SHOW) {
        url = `/shows/${slug(m.title)}-${m.id}`;
      }

      return { ...m, url };
    });
  } catch (error) {
    handleDataError(error, 'withDetailUrl');
  } finally {
    return mediaWithUrl;
  }
};

export const withGenre = async (type, media) => {
  let mediaWithGenre = media;

  try {
    let genres;

    if (type === MEDIA_TYPE.MOVIE) {
      genres = await getMovieGenres();
    }
    if (type === MEDIA_TYPE.SHOW) {
      genres = await getShowGenres();
    }

    mediaWithGenre = media.map((m) => {
      const genre = genres.find((g) => g.id === m['genre_ids'][0]);

      return { ...m, genre_name: genre ? genre.name : '' };
    });
  } catch (error) {
    handleDataError(error, 'withGenre');
  } finally {
    return mediaWithGenre;
  }
};

export const withTitle = (media) => {
  let mediaWithTitle = media;

  if (!media.title) {
    mediaWithTitle = media.map((s) => ({
      ...s,
      title: s.name,
    }));
  }

  return mediaWithTitle;
};

export const withVideos = async (type, media, limit = 8) => {
  try {
    const mediaSlice = media.slice(0, limit);

    const videoPromises = mediaSlice.map(async (item) => {
      if (type === MEDIA_TYPE.MOVIE) {
        const videoData = await getMovieVideosById(item.id);
        if (!videoData || videoData.length === 0) {
          return null;
        }
        return {
          title: item.title,
          id: item.id,
          image: {
            landscape: item.backdrop_path,
            portrait: item.poster_path,
          },
          video: videoData.find((v) => v.type === 'Trailer'),
        };
      }
      if (type === MEDIA_TYPE.SHOW) {
        const videoData = await getShowVideosById(item.id);
        if (!videoData || videoData.length === 0) {
          return null;
        }
        return {
          title: item.name,
          id: item.id,
          image: {
            landscape: item.backdrop_path,
            portrait: item.poster_path,
          },
          video: videoData.find((v) => v.type === 'Trailer'),
        };
      }
      return null;
    });

    const mediaWithVideo = await Promise.all(videoPromises);
    return mediaWithVideo.filter((item) => item !== null && item?.video);
  } catch (error) {
    handleDataError(error, 'getVideos');
    return [];
  }
};
