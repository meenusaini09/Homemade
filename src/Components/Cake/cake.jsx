
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cake.css';

import cake_banner from '../Assets/cake-banner.jpg'

const Cake = () => {
  const [cakeData, setCakeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/product'); // Replace with your API URL
        const data = response.data.userdata;

        console.log(data, "============")

        // Assuming your API response is an array of products
        setCakeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className='container'>
      <div className='banner'>
        <img src={cake_banner} alt="" />
      </div>
      <div className='content'>
        {cakeData.map(product => (
          <div key={product._id}>
            <h1>{product.title}</h1>
            <p>{product.latitute}, {product.longitute}</p>
            <p>{product.phone}</p>
            <p>{product.content}</p>
          </div>
        ))}
      </div>
      <div className='category'>
        {/* <img src={clothes_icon} alt="Clothes" />
        <img src={lipstick_icon} alt="Cosmetic" />
        <img src={food_icon} alt="Food" />
        <img src={pizza_icon} alt="Pizza" /> */}
      </div>
    </div>
  );
}

export default Cake;
