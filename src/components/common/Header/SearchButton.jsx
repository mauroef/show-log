import { IoSearch } from 'react-icons/io5';

const SearchButton = ({ isOpen = false, onClick }) => (
  <button
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
    onClick={onClick}
  >
    <IoSearch size={24} />
  </button>
);

export default SearchButton;
