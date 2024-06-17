'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { PrevArrow, NextArrow } from './CustomArrow';
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
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`mx-10`}>
      <h2 className="text-2xl font-bold mb-4">{headline}</h2>
      <Slider {...settings} className={`${styles['carousel__slider']}`}>
        {mediaItems.length > 0 &&
          mediaItems.map((item) => (
            <div key={item.id} className={`${styles['carousel__item']} px-2.5`}>
              <Image
                alt={item.title}
                className={`${styles['carousel__image']} rounded-xl`}
                height={128.25}
                width={228}
                src={`${IMAGE_URLS.BASE_TEASER}${item['backdrop_path']}`}
              />
              {hasGenre && <div className="text-sm text-gray-600">{item['genre_ids'][0]}</div>}
              {hasTitle && <h3 className="text-lg font-semibold">{item.title}</h3>}
              {hasDescription && <p className="text-sm">{item.overview}</p>}
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
