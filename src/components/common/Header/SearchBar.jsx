import { useState, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import { getMultiSearchResults } from '@/utils/api';
import { IMAGE_URLS } from '@/utils/constants';
import { transformSearchData } from '@/utils/dataTransformation';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [hasResults, setHasResults] = useState(true);
  const debounceTimeoutRef = useRef(null);

  const handleSearch = async (searchPhrase) => {
    if (!searchPhrase || searchPhrase.length < 3) {
      setResults([]);
      return;
    }

    const results = await getMultiSearchResults(searchPhrase).then((s) =>
      transformSearchData(s)
    );

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
        {results.map((result, index) => (
          <div key={index} className='text-white/90'>
            {result.title}
            <img
              width='50'
              src={`${IMAGE_URLS.BASE_LEAD}${result.poster_path}`}
              alt={result.title}
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <div className='p-6 md:px-12 2xl:container 2xl:mx-auto'>
      <form autoComplete='off' className='relative flex items-center'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          className='bg-transparent text-2xl text-white/80 w-full border-b-2 border-white/80 rounded-none focus:outline-none'
          id={'search'}
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
      <div className='max-h-48 overflow-y-auto'>{resultsContent}</div>
    </div>
  );
};

export default SearchBar;
