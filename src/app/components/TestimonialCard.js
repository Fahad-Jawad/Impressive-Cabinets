import Image from 'next/image';
import React from 'react';

export default function TestimonialCard() {
  return (
    <div className='bg-white rounded-lg p-4 relative'>
      <Image

        
        src={'/images/icons/QuotesIcon.svg'}
        alt='quotes'
        width={30}
        height={30}
        className='absolute top-2 left-2'
      />
      <Image

        
        src={'/images/icons/QuoteInvert.svg'}
        alt='quotes'
        width={30}
        height={30}
        className='absolute bottom-2 right-2'
      />

      <div className='pt-8 px-2 flex flex-col gap-5'>
        <p className='text-primaryLight text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          tenetur quas ipsa earum sit, fugit illum asperiores! Odio explicabo
          aut quia rem praesentium magnam, impedit numquam. Delectus numquam
          quisquam quae?
        </p>

        <div className='flex w-full xl:w-1/2 items-center gap-5'>
          <div>
            <Image

              
              src={'/images/client1.jpg'}
              alt='client 1'
              width={100}
              height={100}
              className='rounded-full w-14 lg:w-16 h-14 lg:h-16'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-base lg:text-lg font-bold'>Joshua Keith</h3>
            <p className='text-sm lg:text-base text-primaryLight'>
              Senior Client
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
