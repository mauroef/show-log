'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { IMAGE_URLS } from '@/utils/constants';

const ShowHeader = ({ show }) => {
  return (
    <section className='relative'>
      <motion.div className='2xl:rounded-b-2xl w-full'>
        <Image
          alt={show.name}
          width={1280}
          height={1920}
          className='w-full block md:hidden'
          src={`${IMAGE_URLS.BASE_LEAD}${show.poster_path}`}
          priority
        />
        <Image
          alt={show.name}
          width={1280}
          height={720}
          className='2xl:rounded-b-2xl w-full hidden md:block'
          src={`${IMAGE_URLS.BASE_LEAD}${show.backdrop_path}`}
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent 2xl:rounded-b-2xl'></div>
      </motion.div>
      <div className='absolute bottom-10 left-12 leading-normal max-w-2xl hidden md:block'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='text-white text-6xl'
        >
          {show.name || ''}
        </motion.h2>
      </div>
    </section>
  );
};

export default ShowHeader;
