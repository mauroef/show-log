import Link from 'next/link';
import { MainLayout } from '@/components/';

export default function NotFound() {
  return (
    <MainLayout>
      <div className='is-404 2xl:container 2xl:mx-auto 2xl:px-12 px-6 md:px-12 mt-[20%] xl:mt-[10%]'>
        <div className='rounded-xl p-6 bg-neutral-700 text-center text-white/90 flex flex-col items-center gap-8'>
          <h1 className='text-4xl md:text-5xl font-bold'>Not Found</h1>
          <p className='text-xl'>Could not find requested resource</p>
          <Link href='/' className='rounded-lg bg-neutral-600 px-4 py-2 md:max-w-fit hover:bg-neutral-500 transition duration-300'>
            Return Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
