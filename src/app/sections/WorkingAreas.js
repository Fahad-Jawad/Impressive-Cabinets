import React from 'react';
import CityCard from '../components/CityCard';

export default function WorkingAreas() {
  const Cities = [
    { name: 'Calgary', src: '/images/Calgary.png' },
    { name: 'Airdrie', src: '/images/Airdrie.png' },
    { name: 'Cochrane', src: '/images/Cochrane.png' },
    { name: 'Chesteremere', src: '/images/Chesteremere.png' },
  ];
  return (
    <div className='p-4 py-8 md:p-8 lg:p-12 2xl:p-20'>
      <div className='lg:w-max mx-auto text-center flex flex-col gap-3'>
        <h2 className='text-sm md:text-base lg:text-lg text-bg-color mx-auto font-bold'>Where We Excel</h2>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
          Explore Our Expertise and Impact Zones
        </h3>
      </div>

      <div className='flex flex-wrap items-center'>
        {Cities.map((city, index) => (
          <div className='w-4/5 md:w-1/2 mx-auto lg:w-1/4 p-1' key={index + 'city'}>
            <CityCard name={city.name} src={city.src} />
          </div>
        ))}
        {Cities.map((city, index) => (
          <div className='w-4/5 md:w-1/2 mx-auto lg:w-1/4 p-1' key={index + 'city'}>
            <CityCard name={city.name} src={city.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
