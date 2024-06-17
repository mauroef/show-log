'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import styles from './carousel.module.css';
import { IMAGE_URLS } from '@/utils/constants';

const Carousel = ({
  hasDescription,
  hasGenre,
  hasTitle,
  mediaItems,
  headline,
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carousel}>
      <h2>{headline}</h2>
      <Slider {...settings}>
        {console.log({ mediaItems })}
        {mediaItems.length > 0 &&
          mediaItems.map((item) => (
            <div key={item.id} className={styles['carousel__item']}>
              <Image
                alt={item.title}
                className={styles['carousel__image']}
                height={141}
                width={250}
                src={`${IMAGE_URLS.BASE_TEASER}${item['backdrop_path']}`}
              />
              {hasGenre && item['genre_ids'][0]}
              {hasTitle && <h3>{item.title}</h3>}
              {hasDescription && <p>{item.overview}</p>}
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
