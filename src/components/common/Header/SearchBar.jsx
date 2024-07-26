import { useState, useEffect, useRef } from 'react';
import { getMultiSearchResults } from '@/utils/api';
import { IMAGE_URLS } from '@/utils/constants'
import { transformSearchData } from '@/utils/dataTransformation';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debounceTimeoutRef = useRef(null);

  const handleSearch = async (searchPhrase) => {
    if (!searchPhrase || searchPhrase.length < 3) {
      setResults([]);
      return;
    }

    const results = await getMultiSearchResults(searchPhrase).then((s) =>
      transformSearchData(s)
    );

    console.log({ results });
    setResults(results);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
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

  return (
    <div className='p-6 md:px-12 2xl:container 2xl:mx-auto'>
      <form>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          className='bg-transparent text-2xl text-white/70 w-full border-b-2 border-white/70 focus:outline-none'
          id={'search'}
          onChange={handleChange}
          placeholder='Search for a movie or show...'
          type='search'
          value={query}
        />
      </form>
      <div className='max-h-48 overflow-y-auto'>
        {results.length > 0 &&
          results.map((result, index) => (
            <div key={index} className='text-white'>
              {result.title}
              <img width='50' src={`${IMAGE_URLS.BASE_LEAD}${result.poster_path}`} alt={result.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
