import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  FreeMode,
} from 'swiper/modules';

import Link from 'next/link';
import Image from 'next/image';

import css from './SwiperBrands.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import cannondale from '../../public/images/brands/cannondale_logo.jpg';
import corratec from '../../public/images/brands/corratec_logo.jpg';
import eastern from '../../public/images/brands/eastern_logo.jpg';
import gt from '../../public/images/brands/gt_logo.jpg';
import jamis from '../../public/images/brands/jamis_logo.jpg';
import mongoose from '../../public/images/brands/mongoose_logo.jpg';
import norco from '../../public/images/brands/norco_logo.jpg';
import outleap from '../../public/images/brands/outleap_logo.jpg';
import wtp from '../../public/images/brands/wtp_logo.jpg';

export default function SwiperBrands() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, FreeMode]}
      spaceBetween={10}
      slidesPerView={2}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
      speed={3000}
      freeMode={true}
      loop={true}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className={css.swiper}
    >
      <SwiperSlide className={css['swiper-slide']}>
        <Link href={'#'}>
          <div className={css['img-wrapper']}>
            <Image
              src={cannondale}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Cannondale logo"
            ></Image>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={css['swiper-slide']}>
        <Link href={'#'}>
          <div className={css['img-wrapper']}>
            <Image
              src={corratec}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Corratec logo"
            ></Image>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={css['swiper-slide']}>
        <Link href={'#'} className={css['swiper-slide-link']}>
          <div className={css['img-wrapper']}>
            <Image
              src={eastern}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Eastern logo"
            ></Image>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={css['swiper-slide']}>
        <Link href={'#'}>
          <div className={css['img-wrapper']}>
            <Image
              src={gt}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="GT logo"
            ></Image>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={css['swiper-slide']}>
        <Link href={'#'}>
          <div className={css['img-wrapper']}>
            <Image
              src={jamis}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Jamis logo"
            ></Image>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={css['swiper-slide']}>
        <Link href={'#'}>
          <div className={css['img-wrapper']}>
            <Image
              src={mongoose}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Mongoose logo"
            ></Image>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={css['swiper-slide']}>
        <Link href={'#'}>
          <div className={css['img-wrapper']}>
            <Image
              src={norco}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Norco logo"
            ></Image>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={css['swiper-slide']}>
        <Link href={'#'}>
          <div className={css['img-wrapper']}>
            <Image
              src={outleap}
              sizes="100vw"
              style={{ width: '90%', height: 'auto' }}
              alt="Outleap logo"
            ></Image>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className={css['swiper-slide']}>
        <Link href={'#'}>
          <div className={css['img-wrapper']}>
            <Image
              src={wtp}
              sizes="100vw"
              style={{ width: '40%', height: 'auto' }}
              alt="WTP logo"
            ></Image>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}