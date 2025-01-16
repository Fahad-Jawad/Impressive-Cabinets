'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
export default function Services() {
  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-20 bg-grayBg servicesBg flex-col lg:flex-row'>
      <div className='w-full lg:w-1/3'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-sm md:text-base xl:text-lg text-bg-white font-bold'>Our Services</h2>
          <h3 className='text-3xl md:text-4xl xl:text-5xl font-bold text-primary'>
            Expertly Designed Cabinets,Tailored to Your Style
          </h3>
          <p className='text-primaryLight'>
            At our kitchen cabinet design and sales company, we blend
            craftsmanship and innovation to bring your dream kitchen to life.
            From modern minimalism to timeless classics, we offer bespoke
            solutions tailored to your taste and needs. Let us help you create a
            space that’s not only functional but also stunningly beautiful.
          </p>
        </div>
      </div>
      <div className='w-full lg:w-2/3'>
        <div className='w-full h-full p-5 lg:pl-10'>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            draggable
            autoplay={{ delay: 3000 }}
            className='!h-full'
            breakpoints={{
              // For screens >= 640px (Tablet)
              720: {
                slidesPerView: 2, // Show 4 slides on tablet
              },
              // For screens >= 1024px (Laptop and above)
              1024: {
                slidesPerView: 2, // Show 7 slides on laptop and above
              },
              1240: {
                slidesPerView: 3, // Show 7 slides on laptop and above
              },
            }}
          >
            <SwiperSlide>
              <div className='bg-gray-100 p-6 rounded-lg shadow-md h-full service group relative overflow-hidden'>
                {/* Background Image */}
                <Image
                  src={'/images/serviceBg.png'}
                  alt='service Bg'
                  width={300}
                  height={350}
                  className='serviceBgImg w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 object-cover'
                />

                {/* Black Overlay */}
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>

                {/* Content */}
                <div className='flex flex-col gap-2 z-20 relative'>
                  <div className='text-gray-300 text-9xl font-bold serviceNumber group-hover:opacity-20 transition-opacity duration-300'>
                    01
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mt-4 group-hover:text-white transition-colors duration-300'>
                    Custom <br /> Cabinet Design
                  </h3>
                  <p className='text-gray-600 mt-2 group-hover:text-white transition-colors duration-300'>
                    We will measure your kitchen, ask you questions, and start
                    the actual design process with you.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='bg-gray-100 p-6 rounded-lg shadow-md h-full service group relative overflow-hidden'>
                {/* Background Image */}
                <Image
                  src={'/images/serviceBg.png'}
                  alt='service Bg'
                  width={300}
                  height={350}
                  className='serviceBgImg w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 object-cover'
                />

                {/* Black Overlay */}
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>

                {/* Content */}
                <div className='flex flex-col gap-2 z-20 relative'>
                  <div className='text-gray-300 text-9xl font-bold serviceNumber group-hover:opacity-20 transition-opacity duration-300'>
                    02
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mt-4 group-hover:text-white transition-colors duration-300'>
                    Cabinet <br /> Refinishing
                  </h3>
                  <p className='text-gray-600 mt-2 group-hover:text-white transition-colors duration-300'>
                    Transform your old cabinets with a fresh, new look at a
                    fraction of the cost.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='bg-gray-100 p-6 rounded-lg shadow-md h-full service group relative overflow-hidden'>
                {/* Background Image */}
                <Image
                  src={'/images/serviceBg.png'}
                  alt='service Bg'
                  width={300}
                  height={350}
                  className='serviceBgImg w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 object-cover'
                />

                {/* Black Overlay */}
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>

                {/* Content */}
                <div className='flex flex-col gap-2 z-20 relative'>
                  <div className='text-gray-300 text-9xl font-bold serviceNumber group-hover:opacity-20 transition-opacity duration-300'>
                    03
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mt-4 group-hover:text-white transition-colors duration-300'>
                    Installation <br /> Services
                  </h3>
                  <p className='text-gray-600 mt-2 group-hover:text-white transition-colors duration-300'>
                    Professional and hassle-free cabinet installation for a
                    perfect fit.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='bg-gray-100 p-6 rounded-lg shadow-md h-full service group relative overflow-hidden'>
                {/* Background Image */}
                <Image
                  src={'/images/serviceBg.png'}
                  alt='service Bg'
                  width={300}
                  height={350}
                  className='serviceBgImg w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 object-cover'
                />

                {/* Black Overlay */}
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>

                {/* Content */}
                <div className='flex flex-col gap-2 z-20 relative'>
                  <div className='text-gray-300 text-9xl font-bold serviceNumber group-hover:opacity-20 transition-opacity duration-300'>
                    04
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mt-4 group-hover:text-white transition-colors duration-300'>
                    Countertop <br /> Integration
                  </h3>
                  <p className='text-gray-600 mt-2 group-hover:text-white transition-colors duration-300'>
                    Seamlessly designed countertops to complement your cabinet
                    choices.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='bg-gray-100 p-6 rounded-lg shadow-md h-full service group relative overflow-hidden'>
                {/* Background Image */}
                <Image
                  src={'/images/serviceBg.png'}
                  alt='service Bg'
                  width={300}
                  height={350}
                  className='serviceBgImg w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 object-cover'
                />

                {/* Black Overlay */}
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>

                {/* Content */}
                <div className='flex flex-col gap-2 z-20 relative'>
                  <div className='text-gray-300 text-9xl font-bold serviceNumber group-hover:opacity-20 transition-opacity duration-300'>
                    05
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mt-4 group-hover:text-white transition-colors duration-300'>
                    Storage <br /> Optimization Solutions
                  </h3>
                  <p className='text-gray-600 mt-2 group-hover:text-white transition-colors duration-300'>
                    We will measure your kitchen, ask you questions, and start
                    the actual design process with you.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='bg-gray-100 p-6 rounded-lg shadow-md h-full service group relative overflow-hidden'>
                {/* Background Image */}
                <Image
                  src={'/images/serviceBg.png'}
                  alt='service Bg'
                  width={300}
                  height={350}
                  className='serviceBgImg w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 object-cover'
                />

                {/* Black Overlay */}
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>

                {/* Content */}
                <div className='flex flex-col gap-2 z-20 relative'>
                  <div className='text-gray-300 text-9xl font-bold serviceNumber group-hover:opacity-20 transition-opacity duration-300'>
                    06
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 mt-4 group-hover:text-white transition-colors duration-300'>
                    Eco-Friendly <br /> Cabinets
                  </h3>
                  <p className='text-gray-600 mt-2 group-hover:text-white transition-colors duration-300'>
                    Sustainable materials and finishes for an environmentally
                    conscious kitchen.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
