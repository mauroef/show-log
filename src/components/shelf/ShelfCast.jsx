import Image from 'next/image';
import { IMAGE_URLS } from '@/utils/constants';

const ShelfCast = ({ item }) => {
  return (
    <>
      <header className='relative aspect-[1/1] mb-2'>
        <Image
          alt={item.name || `image_${item.id}`}
          className={`rounded-full shadow-xl aspect-[1/1] m-auto`}
          height={150}
          src={`${IMAGE_URLS.BASE_CAST}${item.profile_path}`}
          width={150}
        />
      </header>
      <div className={`px-1.5 md:px-2.5 text-center`}>
        <p className='text-lg font-semibold/70 text-white/70'>{item.name}</p>
        <p className='text-md font-semibold/70 text-white/50'>{item.character}</p>
      </div>
    </>
  );
};

export default ShelfCast;
