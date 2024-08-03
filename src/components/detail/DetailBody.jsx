'use client';

const DetailBody = ({ media }) => {
  console.log({ media });

  return (
    <section className='px-6 py-3 md:px-12'>
      <h3 class='text-2xl font-bold py-3 text-white/90'>Summary</h3>
      <div className='bg-neutral-700 p-4 rounded-xl'>
        <p className='text-white/90 md:text-xl'>{media.overview}</p>
      </div>
    </section>
  );
};

export default DetailBody;
