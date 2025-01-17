'use client';
import Image from 'next/image';
import { useModal } from '@/app/Contexts/ModalContext';
import React, { useState, useEffect } from 'react';

export default function ProductCard({product}) {
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay to stagger animations if needed
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className='flex flex-col gap-4 m-4 mt-0 cursor-pointer'
      onClick={() => openModal({name:product.name.replace(' ','-')})}
    >
      <Image
        src={'/images/shaker.png'}
        alt='shaker img'
        width={300}
        height={400}
        className='mx-auto'
      />
      <p className='text-primary font-bold text-xl w-max mx-auto'>{product.name}</p>
    </div>
  );
}
