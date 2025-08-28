import React from 'react'
import Preview from '../components/Preview'
import StepperComponent from '../components/StepperComponent'

const FormPage = () => {
  return (
     <>
    <div className='row m-5'>
        <div className='col-lg-6'>
            <StepperComponent/>
        </div>
        <div className='col-lg-6'>
            <Preview/>
        </div>
    </div>
      
    </>
  )
}

export default FormPage
