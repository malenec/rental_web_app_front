import React from 'react'
import travelWorldImage from '../Images/travelWorldImage.jpg';

const Home = ({ user }) => {
  

  return (
    <div>
      <div className='text-center mt-5'>
      <h1>Velkommen til Verden Rundt </h1>
      <h4>Her kan du finde guidede ture til alle verdenshjørner</h4>

      <img src={travelWorldImage} alt="Your Image Description" style={{maxWidth: '500px'}} />

      {user.username === "" ? (<h4>Log ind for at se og melde dig til vores guidede ture</h4>) :
        (<></>)}
        
        </div>
    </div>
  );
};

export default Home;

