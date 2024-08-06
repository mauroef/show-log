import Image from 'next/image';
import { IMAGE_URLS } from '@/utils/constants';
import { formatDate } from '@/utils/helpers';

const Skeleton = ({ isPulse = true }) => (
  <div
    height={141}
    width={250}
    className={`absolute z-10 bg-neutral-600 aspect-[1280/1920] rounded-xl mb-2 shadow-xl w-full ${
      isPulse ? 'animate-pulse' : ''
    }`}
  ></div>
);

const ShelfPoster = ({ item }) => {
  let imageUrl = IMAGE_URLS.BASE_LEAD + item.poster_path;
  let airDate = '';
  let poster;

  if (item.air_date && item.air_date !== '') {
    airDate = formatDate(item.air_date);
  }

  if (item.poster_path) {
    poster = (
      <>
        <Skeleton />
        <Image
          alt={item.name || `image_${item.id}`}
          className={`absolute rounded-xl shadow-xl w-full h-full z-20`}
          src={imageUrl}
          width={1280}
          height={1920}
        />
        <div className='absolute z-30 inset-0 bg-neutral-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'></div>
      </>
    );
  } else {
    poster = <Skeleton isPulse={false} />;
  }

  return (
    <>
      <header>
        <div className='relative block aspect-[1280/1920] mb-2 group'>
          {poster}
        </div>
      </header>
      <div className={`px-1.5 md:px-2.5`}>
      {item.episode_count == 0 && (
          <div className='text-xs text-white/70 uppercase font-bold'>
            coming soon
          </div>
        )}
        {item.episode_count != 0 && (
          <div className='text-xs text-white/70 uppercase font-bold'>
            {item.episode_count} episodes
          </div>
        )}
        {item.name && (
          <h3
            title={item.title}
            className='text-lg font-semibold/70 text-white/70 font-normal line-clamp-1'
          >
            {item.title}
          </h3>
        )}
        {item.air_date && (
          <p className='text-sm line-clamp-3 text-white/70 font-light'>
            {airDate}
          </p>
        )}
      </div>
    </>
  );
};

export default ShelfPoster;
