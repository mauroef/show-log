import Image from 'next/image';
import { IMAGE_URLS } from '@/utils/constants';

const ShowChapters = ({ data }) => {
  console.log({ data });
  return (
    <ul className='flex flex-col gap-4'>
      {data.map((season) => (
        <li key={season.id}>
          <article className='p-3 bg-neutral-600 rounded-xl flex gap-3'>
            <header className='max-w-[120px] md:max-w-[180px]'>
              <Image
                alt={season.name}
                className='rounded-lg shadow-xl'
                height={141}
                width={250}
                src={`${IMAGE_URLS.BASE_LEAD}${season.still_path}`}
              />
            </header>
            <main className='flex items-center'>
              <p className='line-clamp-3 text-sm font-semibold/70 md:text-lg'>
                {season.name}
              </p>
              {season.overview && (
                <p className='hidden md:visible md:text-lg font-light'>
                  {season.overview}
                </p>
              )}
            </main>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ShowChapters;
