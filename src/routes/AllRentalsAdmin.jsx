import React from 'react'
import ViewRentalsListAdmin from '../components/ViewRentalsListAdmin';

function AllRentalsAdmin({ user }) {
    return (
      <div  style={{ padding: '20px' }}>
        <h3 className='mt-5 mx-5 mb-5'> Her kan du se dine lejekontrakter </h3>
        <ViewRentalsListAdmin user={user} />
      </div>
    )
  }
  

export default AllRentalsAdmin;