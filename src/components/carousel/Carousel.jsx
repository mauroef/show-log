'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import sliderSettings from './sliderSettings';
import styles from './carousel.module.css';

const Carousel = ({ hasDescription, hasGenre, hasTitle, mediaItems, headline }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = sliderSettings(currentIndex, setCurrentIndex, mediaItems.length);

  return (
    <div className="mx-6 md:mx-10">
      <h2 className="text-2xl font-bold px-2.5 py-3 text-white/90">{headline}</h2>
      <Slider {...settings} className={`${styles['carousel']} pb-3`}>
        {mediaItems.length > 0 &&
          mediaItems.map((item, index) => (
            <CarouselItem
              hasDescription={hasDescription}
              hasGenre={hasGenre}
              hasTitle={hasTitle}
              index={index}
              item={item}
              key={item.id}
            />
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
