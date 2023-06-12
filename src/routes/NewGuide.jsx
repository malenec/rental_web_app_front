import React from 'react'
import CreateGuideForm from '../components/CreateGuideForm'


function NewGuide(props) {
  return (
    <div>
      <h3 className='mt-5 mx-5 mb-5'> Her kan du oprette en ny guide i systemet </h3>
      <CreateGuideForm/>
    </div>
  )
}


export default NewGuide

