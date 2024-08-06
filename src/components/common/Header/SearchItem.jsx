import Image from 'next/image';
import { IMAGE_URLS } from '@/utils/constants';

const SearchItem = ({ data }) => {
  return (
    <a
      href={data.url}
      className='relative p-4 bg-neutral-800 flex gap-3 items-center rounded-xl hover:opacity-70 transition-opacity duration-300'
    >
      <div className='abosulute z-10 animate-pulse bg-neutral-600 aspect-[2/3] rounded-lg shadow-xl min-w-16'></div>
      <Image
        alt={data.title}
        height={1920}
        src={`${IMAGE_URLS.BASE_LEAD}${data.poster_path}`}
        width={1280}
        className='absolute z-10 aspect-[2/3] w-16 rounded-lg'
      />
      <div className='relative flex flex-col gap-0.5'>
        <p className='text-xs text-white/70 uppercase font-bold'>
          {data.media_type}
        </p>
        <p className='text-white/90 text-lg font-semibold/70 line-clamp-2'>
          {data.title}
        </p>
      </div>
    </a>
  );
};

export default SearchItem;
