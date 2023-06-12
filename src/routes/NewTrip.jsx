import React from 'react'
import CreateTripForm from '../components/CreateTripForm'


function NewTrip(props) {
  return (
    <div>
      <h3 className='mt-5 mx-5 mb-5'> Her kan du oprette en ny tur i systemet </h3>
      <CreateTripForm/>
    </div>
  )
}


export default NewTrip

