'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import styles from './carousel.module.css';
import { IMAGE_URLS } from '@/utils/constants';

const Carousel = ({ title, mediaItems }) => {
  const settings = {
    dots: true,
    infinite: true,
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
      <Slider {...settings}>
        <h3>{title}</h3>
        {mediaItems.length > 0 &&
          mediaItems.map((item) => (
            <div key={item.id} className={styles.slide}>
              <Image
                alt={item.title}
                className={styles.image}
                layout='fill'
                objectFit='cover'
                src={`${IMAGE_URLS.BASE_LEAD}${item.poster}`}
              />
              <div className={styles.title}>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
