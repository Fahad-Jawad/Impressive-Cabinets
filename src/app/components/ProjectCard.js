'use client';
import React from 'react';
import ReactCompareImage from 'react-compare-image';
import Image from 'next/image';

export default function ProjectCard() {
  return (
    <div className='projectCard my-2 lg:m-2 relative group'>
      <ReactCompareImage
        leftImage='/images/modern-cabinets.png'
        rightImage='/images/modern-cabinets2.png'
        leftImageCss={{borderRadius:'8px'}}
        rightImageCss={{borderRadius:'8px'}}
        handleSize={25}
      />

  
      
    </div>
  );
}
