import React from 'react'
import rentalImage from '../Images/RentalImage.jpg';

const Home = ({ user }) => {
  

  return (
    <div>
      <div className='text-center mt-5'>
      <h1>Velkommen til LejeLand </h1>
      <h4>Her kan du se dine lejekontrakter både som udlejer og lejer</h4>

      <img src={rentalImage} alt="Your Image Description" style={{maxWidth: '500px'}} />

      {user.username === "" ? (<h4>Log ind for at se dine muligheder</h4>) :
        (<></>)}
        
        </div>
    </div>
  );
};

export default Home;

