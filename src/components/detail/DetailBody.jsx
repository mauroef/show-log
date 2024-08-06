const DetailBody = ({ overview }) => {

  return (
    <section className='px-6 py-3 md:px-12'>
      <h3 className='text-2xl font-bold py-3 text-white/90'>Summary</h3>
      <div className='bg-neutral-700 p-4 rounded-xl'>
        <p className='text-white/90 md:text-xl'>{overview || 'No available.'}</p>
      </div>
    </section>
  );
};

export default DetailBody;
