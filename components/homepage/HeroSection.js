import React from 'react';
import { Autoplay, EffectFade, Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

const params = {
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
};
const images = [
  '/images/home-1.jpg',
  '/images/home-2.jpg',
  '/images/home-3.jpg',
  '/images/home-4.jpg',
];

export default function HeroSection() {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <div className="hero-section position-relative">
      <Swiper {...params}>
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div
              className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5"
              style={{
                backgroundImage: `url("${image}")`
              }}
            >
              <p className="font-size-display5 font-family-secondary mb-4 text-center hero-header">
                Hathor Voyance
              </p>
              <p className="text-transform-uppercase font-size-title hero-subheader">
                Voyance digitale et par téléphone 
              </p>
              <p className="text-transform-uppercase font-size-title hero-subheader">
              <a href='tel:+41901588741'>+41 901 588 741</a>
              </p>
              <p className="text-transform-uppercase font-size-title hero-subheader">
              2.50CHF par minute
              </p>
              <p className="text-transform-uppercase font-size-title hero-subheader">
              08h00 - 14h00</p>
              <p className="text-transform-uppercase font-size-title mb-5 hero-subheader">
              Lundi au Vendredi</p>
              <Link href="/collection">
                <a className="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn">
                  Offrez-vous un tirage
                </a>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
