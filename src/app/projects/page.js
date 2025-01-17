import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ProjectCard from '../components/ProjectCard';

export default function page() {
  return (
    <div>
      <Breadcrumb name={'Our Projects'} />
   
      <div className='flex flex-wrap p-2 md:p-5 lg:p-10'>
        <div className='w-full lg:w-1/2'>
          <ProjectCard />
        </div>
        <div className='w-full lg:w-1/2'>
          <ProjectCard />
        </div>
        <div className='w-full lg:w-1/2'>
          <ProjectCard />
        </div>
        <div className='w-full lg:w-1/2'>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
