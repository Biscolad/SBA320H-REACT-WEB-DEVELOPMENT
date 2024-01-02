import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  
  const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '78bbde1bf9msh49c8ca25d9838c6p115afbjsncde3f07062d9',
      'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json(); 
        setRecipes(result.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchButtonClick = () => {
    fetchData(); // Call fetchData when the button is clicked
  };

  return (
    <div>
      <h3>Recipe Search</h3>
      <input
        type="text"
        placeholder="Enter ingredients..."
        value={search}
        onChange={handleSearchChange}
      />
      <Link to={`/search/${encodeURIComponent(search)}`}>
        <button disabled={!search.trim()}>
          Search
        </button>
      </Link>
      <ul>
        {recipes && recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;