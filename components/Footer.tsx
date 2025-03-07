/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 relative' id='contact'>
      <div className='w-full fixed left-0 bottom-0 min-h-96 z-[-1]'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-100'
        />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          {' '}
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <a href='mailto:afamsdev@gmail.com' className=''>
          <MagicButton
            title='Lets get in touch'
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center pb-10'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          {' '}
          Copywrite © 2024 Afam Okoh
        </p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target='_blank'
              rel='noopener noreferrer'>
              <div className='w-10 h-10 cursor-pointer flex justify-center mt-5 md:mt-0 items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <img
                  src={profile.img}
                  alt={profile.alt}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
