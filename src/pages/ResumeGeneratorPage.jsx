import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ResumeGeneratorPage = () => {
  return (
    <>
        <div className='container'>
<h4 className='text-center mt-5'>Create a job-winning Resume in minutes</h4>

<div className='d-flex justify-content-between'>
  <div className='informationDiv shadow border round p-5 text-center'>
<FaFileAlt className='text-primary fs-1 mb-3' />
<h4>Add your information</h4>
<p>Add pre-written examples to each section </p>
<h4>step 1</h4>
  </div>
  <div className='downloadDiv shadow border rounded p-5 text-center'>
   <FaFileArrowDown className='text-danger fs-1 mb-3'/>
   <h4>Download your Resume</h4>
   <p>Download and start applying</p>
   <h4>step 2</h4>
  </div>
</div>
<div className='text-center' >
  <Link to={'/form'} className='btn btn-primary'>Let's Start</Link>
</div>
  </div>
    
    </>
  )
}

export default ResumeGeneratorPage
