import React from 'react'
import {Route, Routes} from "react-router-dom";

import Home from './components/Home'
import RecipeList from './components/RecipeList'
import SearchResults from './components/SearchResults'


import './index.css'






function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/home" elememt={<Home />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/searchresult/:id" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App








