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

  const toggleAccordion = (accordionIndex) => {
    setActiveAccordion((prev) =>
      prev === accordionIndex ? null : accordionIndex
    );
  };

  const closeMobileNav = () => {
    if (activeAccordion === 1) {
      toggleAccordion(1);
    }
    setIsMobileNavOpen(false); // Close the mobile nav when a link is clicked
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
            <Link href='/' className=' py-3 underline-animation'>
              Home
            </Link>
            <Link href='/about-us' className='py-3 underline-animation'>
              About Us
            </Link>
            <div className='relative group menu'>
              <div className='flex items-center'>
                <Link href='/about-us' className=' flex items-center py-3 '>
                  Our Services
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
                  href='/services/custom-cabinet-design'
                  className='block px-4 py-2 hover:bg-primaryLight rounded-t-md'
                >
                  Custom Cabinet Design
                </Link>
                <Link
                  href='/services/cabinet-refinishing'
                  className='block px-4 py-2 hover:bg-primaryLight border-y'
                >
                  Cabinet Refinishing
                </Link>
                <Link
                  href='/services/installation-services'
                  className='block px-4 py-2 hover:bg-primaryLight border-y'
                >
                  Installation Services
                </Link>
                <Link
                  href='/services/countertop-integration'
                  className='block px-4 py-2 hover:bg-primaryLight border-y'
                >
                  Countertop Integration
                </Link>
                <Link
                  href='/services/storage-optimization-solutions'
                  className='block px-4 py-2 hover:bg-primaryLight border-y'
                >
                  Storage Optimization Solutions
                </Link>
                <Link
                  href='/services/eco-friendly-cabinets'
                  className='block px-4 py-2 hover:bg-primaryLight rounded-b-md'
                >
                  Eco-Friendly Cabinets
                </Link>
              </div>
            </div>

            <Link href='/products' className=' py-3 underline-animation'>
              3D Laminate
            </Link>
            <Link href='/projects' className=' py-3 underline-animation'>
              Projects
            </Link>

            <Link href='/contact-us' className=' py-3 underline-animation'>
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
              onClick={closeMobileNav}
            >
              Home
            </Link>
            <Link
              href='/about-us'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              About Us
            </Link>
            <div className='w-full mobile-menu'>
              {/* About Us Accordion */}
              <button
                onClick={() => toggleAccordion(2)}
                className='text-base font-medium w-full text-left py-3 border-b flex justify-between items-center'
              >
                Our Services
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
                  activeAccordion === 2 ? 'max-h-80' : 'max-h-0'
                }`}
                style={{
                  transitionProperty: 'max-height',
                }}
              >
                <div className='flex flex-col bg-primaryExtraLight text-base rounded-lg'>
                  <Link
                    href='/services/custom-cabinet-design'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Custom Cabinet Design
                  </Link>
                  <Link
                    href='/services/cabinet-refinishing'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Cabinet Refinishing
                  </Link>
                  <Link
                    href='/services/installation-services'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Installation Services
                  </Link>
                  <Link
                    href='/services/countertop-integration'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Countertop Integration
                  </Link>
                  <Link
                    href='/services/storage-optimization-solutions'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Storage Optimization Solutions
                  </Link>
                  <Link
                    href='/services/eco-friendly-cabinets'
                    className='block px-4 py-3 '
                    onClick={closeMobileNav}
                  >
                    Eco-Friendly Cabinets
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href='/products'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              3D Laminate
            </Link>
            <Link
              href='/projects'
              className='text-base font-medium border-b w-full text-start py-2'
              onClick={closeMobileNav}
            >
              Projects
            </Link>
            <Link
              href='/mission'
              className='text-base font-medium border-b w-full text-start py-3'
              onClick={closeMobileNav}
            >
              Mission
            </Link>
            <Link
              href='/contact-us'
              className='text-base font-medium border-b w-full text-start py-3'
              onClick={closeMobileNav}
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
