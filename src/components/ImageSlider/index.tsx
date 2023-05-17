import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Container } from './styles';
import { SliderData } from './SliderData';

export const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Container>
    <section className='slider'>
      <AiOutlineLeft className='left-arrow' onClick={prevSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    <AiOutlineRight className='right-arrow' onClick={nextSlide} />
    </section>
    </Container>
  );
};

