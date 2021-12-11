import React from 'react';
import Slider from 'react-slick';
import sliderImage from '../assets/images/slider.png';

const ImageSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className='image__slider py-12 px-4'
        data-aos='fade-right'
        data-aos-duration='1200'
      >
        <Slider {...settings}>
          <div className='mx-2'>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>
          <div className='mx-2'>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>
          <div className='mx-2'>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>

          <div className='mx-2'>
            <img src={sliderImage} alt='' className='max-w-full' />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
