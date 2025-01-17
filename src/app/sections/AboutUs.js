import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-20 flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2 '>
        <div className='w-full overflow-hidden h-full'>
          <Image
            src='/images/aboutus-side.png'
            width={600}
            height={600}
            alt='about us img'
            className='transform transition-transform duration-300 hover:scale-110 h-full lg:w-11/12 mx-auto lg:mx-0'
          />
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <div className='flex flex-col gap-4 py-10'>
          <h2 className='text-bg-color text-sm md:text-base lg:text-lg font-bold'>About Us</h2>
          <h3 className='text-4xl md:text-5xl xl:text-7xl font-bold'>
            Creative Solutions by professional designers
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quasi quidem provident sed id, fuga temporibus quam aperiam delectus
            suscipit perspiciatis! Iusto cumque autem doloremque accusantium
            nisi, alias magnam ipsam.
          </p>
          <button className='bg-primary text-white rounded-full p-3 lg:p-3 px-4 lg:px-6 w-max text-xs font-semibold uppercase'>
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
}
