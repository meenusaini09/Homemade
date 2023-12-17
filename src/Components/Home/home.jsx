// import React from 'react';
// import './home.css';




// const Home = () => {

  
//     return (


//         <div className='container'>
// <h1 class="h1">Find your Products Inside</h1>
// <div className='submit-container'>
// <a href="/loginSignup" target='_blank'><button className="button">Login
//                     </button></a>
//                     <a href="/register" target='_blank'><button className="button">Register
//                     </button></a>
                    
                    
//     </div>
//         </div>
    

//     )


//     }

   

//     export default Home

import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component
import './home.css';

const Home = () => {
  return (
    <div className='container'>
      <h1 className="heading">Find your Products Inside</h1>
      <div className='submit-container'>
        {/* Use Link to navigate to the LoginSignup component */}
        <Link to="/loginSignup">
          <button className="button">Login</button>
        </Link>
        {/* Use Link to navigate to the Register component */}
        <Link to="/register">
          <button className="button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
