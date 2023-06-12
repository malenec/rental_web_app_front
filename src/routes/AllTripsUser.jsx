import React from 'react'
import ViewTripsListUser from '../components/ViewTripsListUser';

function AllTripsUser({ user }) {
    return (
      <div  style={{ padding: '20px' }}>
        <h3 className='mt-5 mx-5 mb-5'> Her kan du se alle oprettede ture </h3>
        <ViewTripsListUser user={user} />
      </div>
    )
  }
  

export default AllTripsUser;