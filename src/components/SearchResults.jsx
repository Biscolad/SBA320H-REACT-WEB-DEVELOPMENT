import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SearchResults() {
  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint that provides search results
        const response = await fetch(`https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2/by-uri?type=public&beta=true&field%5B0%5D=uri?q=${encodeURIComponent(term)}`);
        const data = await response.json();
        setSearchResults(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchData();
   
  }, [term]); 

  return (
    <div>
      <h3>Search Results for {decodeURIComponent(term)}</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
            
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
