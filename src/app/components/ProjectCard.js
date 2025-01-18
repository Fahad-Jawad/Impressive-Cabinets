'use client';
import React from 'react';
import ReactCompareImage from 'react-compare-image';
import Image from 'next/image';

export default function ProjectCard() {
  return (
    <div className='projectCard my-2 lg:m-2 relative group max-h-[400px] overflow-hidden'>
      <ReactCompareImage
        leftImage='/images/before.jpg'
        rightImage='/images/after.jpg'
        leftImageCss={{borderRadius:'8px',maxHeight:'400px'}}
        rightImageCss={{borderRadius:'8px',maxHeight:'400px'}}
        handleSize={25}
        aspectRatio='wider'
      />

  
      
    </div>
  );
}
