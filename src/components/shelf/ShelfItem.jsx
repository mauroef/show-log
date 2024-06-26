import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_URLS } from '@/utils/constants';

const ShelfItem = ({ item, settings }) => (
  <>
    <header>
      <Link href={item.url || '#'} className='relative block group'>
        <Image
          alt={item.title || `image_${item.id}`}
          className={`rounded-xl mb-2 shadow-xl w-full`}
          height={141}
          width={250}
          src={`${IMAGE_URLS.BASE_TEASER}${item.backdrop_path}`}
        />
        <div className='absolute inset-0 bg-neutral-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'></div>
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

export default ShelfItem;
