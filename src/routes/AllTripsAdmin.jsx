import React from 'react'
import ViewTripsListAdmin from '../components/ViewTripsListAdmin';

function AllTripsAdmin({ user }) {
    return (
      <div  style={{ padding: '20px' }}>
        <h3 className='mt-5 mx-5 mb-5'> Her kan du se alle oprettede ture </h3>
        <ViewTripsListAdmin user={user} />
      </div>
    )
  }
  

export default AllTripsAdmin;