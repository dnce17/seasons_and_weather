import React from 'react'
import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [data, setData] = useState([]); // State to hold JSON data
  const [query, setQuery] = useState(''); // State for the search input
  const [filteredResults, setFilteredResults] = useState([]); // State for filtered results

  // Fetch JSON data on component mount
  // TODO: Put a component here that uses data grabbed from another component
  useEffect(() => {
    setData([
      { 'name': 'Apple', 'category': 'Fruit' },
      { 'name': 'Banana', 'category': 'Fruit' },
      { 'name': 'Carrot', 'category': 'Vegetable' },
      { 'name': 'Daikon', 'category': 'Vegetable' },
      { 'name': 'Eggplant', 'category': 'Vegetable' }
    ]);
  }, []);

  // Update filtered results when query or data changes
  useEffect(() => {
    if (query) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log(results);
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [query, data]);

  return (
    <div className='relative max-w-md mx-auto mt-10'>

      {/* Search Input */}
      <input
        type='text'
        value={ query }
        onChange={ (e) => setQuery(e.target.value) } // Update query state
        placeholder='Search location'
        className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />

      {/* Results Dropdown */}
      { filteredResults.length > 0 && (
        <div className='absolute w-full bg-white border border-gray-200 rounded-lg mt-1 max-h-48 overflow-y-auto shadow-lg z-10'>
          { filteredResults.map((item, index) => (
            <div
              key={ index }
              className='px-4 py-2 cursor-pointer hover:bg-gray-100'
              onClick={ () => setQuery(item.name) } // Set query to the clicked item's name
            >
              { item.name }
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;