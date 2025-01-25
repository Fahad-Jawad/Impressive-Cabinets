'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import './styles/Header.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
export default function Header() {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        draggable
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className='h-[400px] lg:!h-[700px]'
      >
        <SwiperSlide>
          <div className='w-full h-full  flex items-center'>
            <div className='w-1/2 bg-gray-700 h-full relative slideContentBg'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 -right-2/3 md:-right-20 lg:-right-32 w-[150%] md:w-11/12 lg:w-4/5'>
                <div className='flex flex-col gap-2 '>
                  <h3 className='text-3xl md:text-4xl  lg:text-6xl font-bold text-white !leading-tight'>
                    Elegant Cabinets,Without the Renovation Hassle
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    Our cabinet refacing services offer a quick and
                    cost-effective way to refresh your kitchen. Say goodbye to
                    messy remodels and hello to a stunning new look!
                  </p>
                </div>
                <Link href={'#contact'}>
                  <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase'>
                    Get a free Quote
                  </button>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex z-10 slide1Bg h-full'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full  flex items-center'>
            <div className='w-1/2 bg-gray-700 h-full relative slideContentBg'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 -right-2/3 md:-right-20 lg:-right-32 w-[150%] md:w-11/12 lg:w-4/5'>
                <div className='flex flex-col gap-2 '>
                  <h3 className='text-3xl md:text-4xl  lg:text-6xl font-bold text-white !leading-tight'>
                    Transform Your Kitchen with Ease
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    With over 25 years of expertise, we use premium materials
                    and meticulous craftsmanship to create cabinets you'll love
                    for years to come.
                  </p>
                </div>
                <Link href={'/projects'}>
                  <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase'>
                    Explore Our Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex z-10 slide1Bg h-full'></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full  flex items-center'>
            <div className='w-1/2 bg-gray-700 h-full relative slideContentBg'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 -right-2/3 md:-right-20 lg:-right-32 w-[150%] md:w-11/12 lg:w-4/5'>
                <div className='flex flex-col gap-2 '>
                  <h3 className='text-3xl md:text-4xl  lg:text-6xl font-bold text-white !leading-tight'>
                    Beautiful Cabinets Within Your Budget
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    Enjoy a high-end transformation without breaking the bank.
                    Our affordable solutions make your dream kitchen a reality.
                  </p>
                </div>
                <Link href={'https://wa.me/14033614968'}>
                  <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase'>
                    Call Us Now
                  </button>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex z-10 slide1Bg h-full'></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-full h-full  flex items-center'>
            <div className='w-1/2 bg-gray-700 h-full relative slideContentBg'>
              <div className='flex flex-col gap-3 md:gap-4 lg:gap-6 z-20 absolute top-1/3 lg:top-1/4 -right-2/3 md:-right-20 lg:-right-32 w-[150%] md:w-11/12 lg:w-4/5'>
                <div className='flex flex-col gap-2 '>
                  <h3 className='text-3xl md:text-4xl  lg:text-6xl font-bold text-white !leading-tight'>
                    Cabinets That Reflect Your Style
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    Choose from a wide range of finishes, colors, and designs to
                    create cabinets that are uniquely yours. Your dream kitchen
                    starts here.
                  </p>
                </div>
                <Link href={'https://wa.me/14033614968'}>
                  <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase'>
                    Start Your Design Journey
                  </button>
                </Link>
              </div>
            </div>
            <div className='w-1/2 flex z-10 slide1Bg h-full'></div>
          </div>
        </SwiperSlide>
        <div className='swiper-button-next !hidden md:!block'></div>
        <div className='swiper-button-prev !hidden md:!block'></div>
      </Swiper>
    </div>
  );
}
