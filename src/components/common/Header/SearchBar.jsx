import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { getMultiSearchResults } from '@/utils/api';
import { transformSearchData, withTitle } from '@/utils/dataTransformation';
import SearchItem from './SearchItem';

const SearchBar = ({inputRef}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [hasResults, setHasResults] = useState(true);
  const debounceTimeoutRef = useRef(null);

  const handleSearch = async (searchPhrase) => {
    if (!searchPhrase || searchPhrase.length < 3) {
      setResults([]);
      return;
    }

    let results = await getMultiSearchResults(searchPhrase);
    results = await transformSearchData(results);

    setResults(results);

    if (results.length === 0) setHasResults(false);
    else setHasResults(true);
  };

  const handleChange = (event) => {
    setHasResults(true);
    setQuery(event.target.value);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      handleSearch(query);
    }, 1000);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [query]);

  let resultsContent = null;

  if (!hasResults) {
    resultsContent = <p className='text-white/90'>No results for "{query}"</p>;
  }

  if (hasResults && results && results.length > 0) {
    resultsContent = (
      <>
        {results.map((resultItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <SearchItem data={resultItem} />
          </motion.div>
        ))}
      </>
    );
  }

  return (
    <div className='p-6 md:px-12 2xl:container 2xl:mx-auto flex flex-col gap-6'>
      <form autoComplete='off' className='relative flex items-center'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          className='py-1 bg-transparent text-xl md:text-2xl text-white/80 w-full border-b-2 border-white/80 rounded-none focus:outline-none'
          id={'search'}
          ref={inputRef}
          onChange={handleChange}
          placeholder='Search for a movie or tv show...'
          type='search'
          value={query}
        />
        {query !== '' && (
          <button
            className='absolute right-0 bg-neutral-600 rounded-full hover:pointer hover:bg-neutral-400'
            onClick={clearSearch}
          >
            <IoClose size={24} />
          </button>
        )}
      </form>
      <div className='max-h-[calc(100dvh-140px)] md:max-h-64 overflow-y-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {resultsContent}
      </div>
    </div>
  );
};

export default SearchBar;
