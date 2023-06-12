import React from 'react'
import CreateRentalForm from '../components/CreateRentalForm'


function NewRental(props) {
  return (
    <div>
      <h3 className='mt-5 mx-5 mb-5'> Her kan du oprette en ny lejekontrakt i systemet </h3>
      <CreateRentalForm/>
    </div>
  )
}


export default NewRental

