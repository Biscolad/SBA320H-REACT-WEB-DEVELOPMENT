import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
  const isRecipeList = window.location.pathname === '/recipelist';

  return (
    <div>
      {!isRecipeList && (
        <>
          <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <h1>WELCOME TO BLEKS HEALTH STATION</h1>
          <h3>
            <Link to="/recipelist" style={{ textDecoration: 'underline', color: 'blue' }}>
              Click here to begin
            </Link>
          </h3>
        </>
      )}
    </div>
  );
}

export default Home