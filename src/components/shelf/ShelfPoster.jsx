'use client' ;
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

const ShelfPoster = ({ item, settings }) => {
  let imageUrl = IMAGE_URLS.BASE_LEAD + item.poster_path;

  console.log(imageUrl)

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
            src={imageUrl}
            width={1280}
          height={1920}
          />
          <div className='absolute z-30 inset-0 bg-neutral-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'></div>
        </Link>
      </header>
      <div className={`px-1.5 md:px-2.5`}>
          <h3
            title={item.title}
            className='text-lg font-semibold/70 text-white/70 font-normal line-clamp-1'
          >
            {item.title}
          </h3>
      </div>
    </>
  );
};

export default ShelfPoster;
