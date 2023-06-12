import React from 'react'
import travelWorldImage from '../Images/travelWorldImage.jpg';

const Home = ({ user }) => {
  

  return (
    <div>
      <div className='text-center mt-5'>
      <h1>Velkommen til LejeLand </h1>
      <h4>Her kan du se dine lejekontrakter både som udlejer og lejer</h4>

      <img src={travelWorldImage} alt="Your Image Description" style={{maxWidth: '500px'}} />

      {user.username === "" ? (<h4>Log ind for at se dine lejekontrakter</h4>) :
        (<></>)}
        
        </div>
    </div>
  );
};

export default Home;

