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
                  <h3 className='text-3xl md:text-4xl  lg:text-6xl font-bold text-white leading-snug'>
                    Make a kitchen part <br /> of the family
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    kitchen should be designed around whats truly
                    important.family, food and life
                  </p>
                </div>
                <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase'>
                  Find A ShowRoom
                </button>
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
                  <h3 className='text-3xl md:text-4xl  lg:text-6xl font-bold text-white leading-snug'>
                    Make a kitchen part <br /> of the family
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    kitchen should be designed around whats truly
                    important.family, food and life
                  </p>
                </div>
                <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase'>
                  Find A ShowRoom
                </button>
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
                  <h3 className='text-3xl md:text-4xl  lg:text-6xl font-bold text-white leading-snug'>
                    Make a kitchen part <br /> of the family
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    kitchen should be designed around whats truly
                    important.family, food and life
                  </p>
                </div>
                <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase'>
                  Find A ShowRoom
                </button>
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
                  <h3 className='text-3xl md:text-4xl  lg:text-6xl font-bold text-white leading-snug'>
                    Make a kitchen part <br /> of the family
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    kitchen should be designed around whats truly
                    important.family, food and life
                  </p>
                </div>
                <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase'>
                  Find A ShowRoom
                </button>
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
                  <h3 className='text-3xl md:text-4xl  lg:text-6xl font-bold text-white leading-snug'>
                    Make a kitchen part <br /> of the family
                  </h3>
                  <p className='text-white text-xs lg:text-lg w-full md:w-2/3'>
                    kitchen should be designed around whats truly
                    important.family, food and life
                  </p>
                </div>
                <button className='bg-white rounded-full p-1 lg:p-3 px-4 lg:px-12 w-max text-xxs lg:text-sm font-semibold uppercase'>
                  Find A ShowRoom
                </button>
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
