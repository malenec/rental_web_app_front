import React from 'react'
import ViewRentalsListUser from '../components/ViewRentalsListUser';

function AllRentalsUser({ user }) {
    return (
      <div  style={{ padding: '20px' }}>
        <h3 className='mt-5 mx-5 mb-5'> Her kan du se alle dine lejekontrakter </h3>
        <ViewRentalsListUser user={user} />
      </div>
    )
  }
  

export default AllRentalsUser;