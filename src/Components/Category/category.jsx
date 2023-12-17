import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/category');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Check if the data is an array
        if (Array.isArray(data.userCategory)) {
          setCategories(data.userCategory); // Assuming your backend returns an array of categories with 'name' property
        } else {
          console.error('Invalid data format received from the server:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className='container'>
      {categories.map(category => (
        <div key={category.name} className='banner'>
          {/* Display only the 'name' property since it's the only property received */}
          <h1 className='heading'>{category.categoryName}</h1>
          <Link to={`/${category.categoryName}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
