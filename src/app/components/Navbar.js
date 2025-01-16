'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '../sections/TopBar';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <TopBar />
      <nav className='bg-white text-primaryDark sticky top-0 z-50 shadow-md px-4 md:px-8 lg:px-12 2xl:px-20 py-1'>
        <div className='container mx-auto lg:px-4 flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='text-base font-bold'>
            <Link href='/'>
              <Image
                src={'/images/logo.svg'}
                width={100}
                height={80}
                alt='relaxing-food logo'

              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className='hidden lg:flex items-center space-x-8 text-base'>
            <Link href='/' className='hover:text-yellow-400 py-3'>
              Home
            </Link>
            <div className='relative group menu'>
              <div className='flex items-center'>
                <Link
                  href='#'
                  className='hover:text-yellow-400 flex items-center py-3'
                >
                  About
                  <span className='ml-2 transition-transform transform group-hover:rotate-180'>
                    <Image
                      src='/images/icons/ArrowDownWhite.svg'
                      alt='arrow img'
                      width={13}
                      height={13}
                    />
                  </span>
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className='dropdown-menu text-sm'>
                <Link
                  href='about-us'
                  className='block px-4 py-2 hover:bg-primaryLight rounded-t-md'
                >
                  About Us
                </Link>
                <Link
                  href='mission'
                  className='block px-4 py-2 hover:bg-primaryLight border-y'
                >
                  Mission
                </Link>
                <Link
                  href='/team'
                  className='block px-4 py-2 hover:bg-primaryLight rounded-b-md'
                >
                  Team
                </Link>
              </div>
            </div>
            <div className='relative group menu text-base'>
              <div className='flex items-center'>
                <Link
                  href='/categories/relaxing-essence'
                  className='hover:text-yellow-400 flex items-center py-3'
                >
                  3D Laminate
                  <span className='ml-2 transition-transform transform group-hover:rotate-180'>
                    <Image
                      src='/images/icons/ArrowDownWhite.svg'
                      alt='arrow img'
                      width={13}
                      height={13}
                    />
                  </span>
                </Link>
              </div>

              {/* Dropdown Menu */}
              <div className='dropdown-menu text-sm'>
                <Link
                  href='/categories/relaxing-essence/ashwa-poppy-fusion'
                  className='block px-4 py-2 hover:bg-primaryLight rounded-t-md'
                >
                  Shaker
                </Link>
                <Link
                  href='/categories/relaxing-essence/turmeric-bliss'
                  className='block px-4 py-2 hover:bg-primaryLight border-y'
                >
                  Slab
                </Link>
                <Link
                  href='/categories/relaxing-essence/garlic-elan'
                  className='block px-4 py-2 hover:bg-primaryLight border-y'
                >
                  Raised Panel
                </Link>
                <Link
                  href='/categories/relaxing-essence/gingera'
                  className='block px-4 py-2 hover:bg-primaryLight rounded-b-md'
                >
                  3D Colours
                </Link>
              </div>
            </div>

            <Link href='/contact-us' className='hover:text-yellow-400 py-3'>
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className='lg:hidden'>
            <button onClick={toggleMobileNav}>
              <span className='text-2xl'>&#9776;</span>
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
            isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className='flex justify-end p-4'>
            <button onClick={toggleMobileNav} className='text-2xl text-black'>
              &times;
            </button>
          </div>

          {/* Mobile Links */}
          <div className='flex flex-col items-center text-black px-4'>
            <Link
              href='/'
              className='text-base font-medium border-b w-full text-start py-2'
            >
              Home
            </Link>
            <div className='w-full mobile-menu'>
              {/* About Us Accordion */}
              <button
                onClick={() => toggleAccordion(1)}
                className='text-base font-medium w-full text-left py-3 border-b flex justify-between items-center'
              >
                About
                <Image
                  src='/images/icons/ArrowDown.svg'
                  alt='arrow'
                  width={13}
                  height={13}
                  className={`transform transition-transform ${
                    activeAccordion === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 1 ? 'max-h-40' : 'max-h-0'
                }`}
                style={{
                  transitionProperty: 'max-height',
                }}
              >
                <div className='flex flex-col bg-gray-200 text-base'>
                  <Link
                    href='/categories/relaxing-essence'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                    About Us
                  </Link>
                  <Link
                    href='/categories/relaxing-essence/ashwa-poppy-fusion'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                    Mission
                  </Link>
                  <Link
                    href='/categories/relaxing-essence/turmeric-bliss'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                    Team
                  </Link>
                </div>
              </div>

              {/* 3D Laminate Accordion */}
              <button
                onClick={() => toggleAccordion(2)}
                className='text-base font-medium w-full text-left py-3 border-b flex justify-between items-center'
              >
                3D Laminate
                <Image
                  src='/images/icons/ArrowDown.svg'
                  alt='arrow'
                  width={13}
                  height={13}
                  className={`transform transition-transform ${
                    activeAccordion === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeAccordion === 2 ? 'max-h-80' : 'max-h-0'
                }`}
                style={{
                  transitionProperty: 'max-height',
                }}
              >
                <div className='flex flex-col bg-gray-200 text-base'>
                  <Link
                    href='/categories/energy-booster'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                    Shaker
                  </Link>
                  <Link
                    href='/categories/energy-booster/golden-coconut-treat'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                    Slab 
                  </Link>
                  <Link
                    href='/categories/energy-booster/almond-nirvana'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                   Raised Panel
                  </Link>
                  <Link
                    href='/categories/energy-booster/walnut-luxe-delight'
                    className='block px-4 py-3 hover:bg-gray-300'
                  >
                    3D Colours
                  </Link>

                </div>
              </div>
            </div>

            <Link
              href='/about-us'
              className='text-base font-medium border-b w-full text-start py-3'
            >
              Mission
            </Link>
            <Link
              href='/products'
              className='text-base font-medium border-b w-full text-start py-3'
            >
              Team
            </Link>
            <Link
              href='/contact-us'
              className='text-base font-medium border-b w-full text-start py-3'
            >
              Contact Us
            </Link>
          </div>

          {/* Social Links */}
          <div className='absolute bottom-4 w-full flex justify-center space-x-6 px-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/FacebookIcon.svg'
                alt='Facebook'
                className='h-6 w-6'
              />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/XIcon.svg'
                alt='Twitter'
                className='h-6 w-6'
              />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80'
            >
              <img
                src='/images/icons/InstaIcon.svg'
                alt='Instagram'
                className='h-6 w-6'
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
