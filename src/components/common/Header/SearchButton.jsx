import { IoSearch } from 'react-icons/io5';

const SearchButton = ({ isOpen = false, onClick }) => (
  <button
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
    className='hover:text-white/60 transition-all duration-300 ease-in-out hidden md:block'
    onClick={onClick}
  >
    <IoSearch size={24} />
  </button>
);

export default SearchButton;
