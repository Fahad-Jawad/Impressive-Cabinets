import Image from 'next/image';
import React from 'react';

export default function ContactUs() {
  return (
    <div className='flex my-20 px-4 md:px-8 lg:px-12 2xl:px-20  gap-10 flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2 serviceSide'>
        <Image
          src={'/images/contact-side.png'}
          alt='contact img'
          width={800}
          height={800}
          className='w-full h-full rounded-lg'
        />
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-4 py-10 relative'>
      <Image
          src={'/images/map.png'}
          alt='contact img'
          width={500}
          height={500}
          className='absolute top-0 right-0 z-10'
        />
        <div className='flex flex-col gap-4 z-20'>
          <h2 className='text-sm md:text-base lg:text-lg text-bg-color font-bold'>
            Get Free Quote
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary'>
            Design Your Vision with a Free Consultation
          </h3>
        </div>

        <div className='flex flex-col gap-4 z-20'>
          <div className='flex gap-3'>
            <input
              type='text'
              id='first_name'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4 '
              placeholder='First Name'
              required
            />
            <input
              type='text'
              id='last_name'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-4 '
              placeholder='Last Name'
              required
            />
          </div>
          <textarea
            id='message'
            rows='6'
            class='block p-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 '
            placeholder='Write your thoughts here...'
          ></textarea>

          <button className='w-max bg-primaryLight p-3 px-4 md:px-6 lg:px-8 text-sm md:text-base lg:text-lg text-white font-bold rounded-lg'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
