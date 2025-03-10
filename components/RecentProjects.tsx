/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <section className='py-20' id='projects'>
      <h2 className='heading'>
        A small selection of{' '}
        <span className='text-purple'> recent projects</span>
      </h2>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <article
            key={id}
            className='lg:min-h-[32.5rem] flex sm:h-[41rem] h-[32rem] items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={title} href={link}>
              <div className='relative sm:w-[570px] flex items-center justify-center sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#080A24]'>
                  <img src='/bg.png' alt='bg-img' />
                </div>
                <img src={img} alt={title} className='z-10 absolute bottom-0' />
              </div>
              <h3 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h3>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className='border rounded-full flex justify-center items-center bg-black lg:w-10 lg:h-10 w-8 h-8 border-white/[0.2]'
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <a href={link}>
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                      {link.includes('github')
                        ? 'Check out the github repo'
                        : 'Check the live site'}
                    </p>
                  </a>
                  <FaLocationArrow className='ms-3' color='#CBACF9' />
                </div>
              </div>
            </PinContainer>
          </article>
        ))}
      </div>
    </section>
  );
};
export default RecentProjects;
