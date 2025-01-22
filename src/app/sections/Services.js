'use client';

import React from 'react';
import ServiceCard from '../components/ServiceCard';
export default function Services() {
  return (
    <div className='flex p-4 md:p-8 lg:p-12 2xl:p-20 bg-grayBg servicesBg flex-col'>
      <div className='flex flex-col gap-4 items-center'>
        <h2 className='text-sm md:text-base xl:text-lg text-bg-white font-bold'>
          Our Services
        </h2>
        <h3 className='text-3xl md:text-4xl xl:text-5xl font-bold text-primary'>
          Expertly Designed Cabinets,Tailored to Your Style
        </h3>
      </div>
      <div className='w-full mt-10 flex flex-wrap'>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='custom cabinet design'
            link='custom-cabinet-design'
            desc='Tailored solutions to match your unique style and kitchen layout.'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='cabinet refinishing'
            link='cabinet-refinishing'
            desc='Transform your old cabinets with a fresh, new look at a fraction of the cost.'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='installation services'
            link='installation-services'
            desc='Professional and hassle-free cabinet installation for a perfect fit.'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='countertop integration'
            link='countertop-integration'
            desc='Seamlessly designed countertops to complement your cabinet choices.'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='storage optimization solutions'
            link='storage-optimization-solutions'
            desc='Smart designs to maximize space and keep your kitchen organized.'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-3'>
          <ServiceCard
            name='eco friendly cabinets'
            link='eco-friendly-cabinets'
            desc='Sustainable materials and finishes for an environmentally conscious kitchen.'
          />
        </div>
      </div>
    </div>
  );
}
