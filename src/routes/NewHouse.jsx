import React from 'react'
import CreateHouseForm from '../components/CreateHouseForm'


function NewHouse(props) {
  return (
    <div>
      <h3 className='mt-5 mx-5 mb-5'> Her kan du oprette et nyt hus i systemet </h3>
      <CreateHouseForm/>
    </div>
  )
}


export default NewHouse

