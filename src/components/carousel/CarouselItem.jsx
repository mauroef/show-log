import Image from 'next/image';
import Link from 'next/link';
import styles from './carousel.module.css';
import { IMAGE_URLS } from '@/utils/constants';

const CarouselItem = ({ item, index, hasGenre, hasTitle, hasDescription }) => (
  <div className={`${styles['carousel__item']} px-1.5 md:px-2.5`}>
    <Link href={item.url || '#'} className="relative block group">
      <Image
        alt={item.title}
        className={`${styles['carousel__image']} rounded-xl mb-2 shadow-lg`}
        height={128.25}
        width={228}
        src={`${IMAGE_URLS.BASE_TEASER}${item['backdrop_path']}`}
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-neutral-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </Link>
    {hasGenre && (
      <div className="text-xs text-white/70 uppercase font-bold">
        {item['genre_name']}
      </div>
    )}
    {hasTitle && (
      <h3
        title={item.title}
        className="text-lg font-semibold/70 text-white/70 font-normal line-clamp-1"
      >
        {item.title}
      </h3>
    )}
    {hasDescription && (
      <p className="text-sm line-clamp-3 text-white/70 font-light">
        {item.overview}
      </p>
    )}
  </div>
);

export default CarouselItem;
