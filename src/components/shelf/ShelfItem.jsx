import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_URLS } from '@/utils/constants';

const Skeleton = () => (
  <div
    height={141}
    width={250}
    className={`absolute z-10 animate-pulse bg-neutral-600 aspect-[250/141] rounded-xl mb-2 shadow-xl w-full`}
  ></div>
);

const ShelfItem = ({ item, settings }) => {
  let imageUrl = IMAGE_URLS.BASE_TEASER;

  if (item.backdrop_path) {
    imageUrl += item.backdrop_path;
  } else {
    imageUrl += item.image?.landscape;
  }

  return (
    <>
      <header>
        <Link
          href={item.url || '#'}
          className='relative block aspect-[250/141] mb-2 group'
        >
          <Skeleton />
          <Image
            alt={item.title || `image_${item.id}`}
            className={`absolute rounded-xl shadow-xl w-full z-20`}
            height={141}
            src={imageUrl}
            width={250}
          />
          <div className='absolute z-30 inset-0 bg-neutral-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'></div>
        </Link>
      </header>
      <div className={`px-1.5 md:px-2.5`}>
        {settings.hasGenre && (
          <div className='text-xs text-white/70 uppercase font-bold'>
            {item.genre_name}
          </div>
        )}
        {settings.hasTitle && (
          <h3
            title={item.title}
            className='text-lg font-semibold/70 text-white/70 font-normal line-clamp-1'
          >
            {item.title}
          </h3>
        )}
        {settings.hasOverview && (
          <p className='text-sm line-clamp-3 text-white/70 font-light'>
            {item.overview}
          </p>
        )}
      </div>
    </>
  );
};

export default ShelfItem;
