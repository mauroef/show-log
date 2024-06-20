import { PrevArrow, NextArrow } from './CustomArrow';

const sliderSettings = (currentIndex, setCurrentIndex, mediaItemsLength) => {
  return {
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
    nextArrow: <NextArrow disabled={currentIndex >= mediaItemsLength - 5} />,
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
};

export default sliderSettings;
