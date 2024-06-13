import Image from 'next/image';
import { BASE_URL_TEASER_IMAGE } from '@/utils/constants';

const MovieCard = ({ backdrop_path, poster_path, title }) => {
  return (
    <article className=''>
      <header>
        <div className=''>
          <Image
            alt={title}
            className='object-cover rounded-xl'
            height={141}
            src={`${BASE_URL_TEASER_IMAGE}${poster_path}`}
            width={250}
          />
        </div>
      </header>
    </article>
  );
};

export default MovieCard;
