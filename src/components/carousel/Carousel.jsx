'use client';

import { useState } from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    arrows: true,
    dots: false,
    draggable: false,
    infinite: false,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    prevArrow: <PrevArrow disabled={currentIndex === 0} />,
    nextArrow: <NextArrow disabled={currentIndex >= mediaItems.length - 5} />,
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
          draggable: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          draggable: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={`mx-6 md:mx-10`}>
      <h2 className='text-2xl font-bold px-2.5 py-3 text-white/90'>{headline}</h2>
      <Slider {...settings} className={`${styles['carousel']} pb-3`}>
        {mediaItems.length > 0 &&
          mediaItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles['carousel__item']} px-1.5 md:px-2.5`}
            >
              <Image
                alt={item.title}
                className={`${styles['carousel__image']} rounded-xl mb-2 shadow-lg`}
                height={128.25}
                width={228}
                src={`${IMAGE_URLS.BASE_TEASER}${item['backdrop_path']}`}
                priority={index === 0}
              />
              {hasGenre && (
                <div className='text-xs text-white/70 uppercase font-bold'>
                  {item['genre_name']}
                </div>
              )}
              {hasTitle && (
                <h3
                  title={item.title}
                  className='text-lg font-semibold/70 text-white/70 font-normal line-clamp-1'
                >
                  {item.title}
                </h3>
              )}
              {hasDescription && (
                <p className='text-sm line-clamp-3 text-white/70 font-light'>
                  {item.overview}
                </p>
              )}
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
