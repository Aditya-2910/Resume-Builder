import axios from 'axios';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';



function ExperienceForm() {
  
    const {register,handleSubmit,formState:{errors}} = useForm()

    const navigate = useNavigate()


    let [experience,setExperience] = useState([])
 

    const onSaveNext = (experienceObj)=>{

        console.log(experienceObj)
   
        setExperience([...experience,experienceObj])
        axios.post('http://localhost:4000/user-api/create-user',experienceObj)
        .then(response=>{
        console.log(response);
        if(response.data.message==='User created successfully')
        {
            navigate('/EducationForm');
        }
    })
    .catch(err=>{
        console.log('Error in submitting form',err);
    })

        
   
   }
   
    const onClickingSave=()=>{
   
        alert("Data saved")
         
    }


  
  
    return (

    <div>

        {/* Giving Tips */}
        <p className="display-6 text-center">Experiences</p>

        

        <h3 className='text-dark fw-bold' style={{marginLeft:'25px'}}>Tips for this section</h3>
        
        <div className='row'>
        
        <div className='col-sm-8'>
            
            <ul className='m-3' style={{fontSize:'1.3rem'}}>

                <li className='p-2' >Your most recent or current job should be listed first. Then, work in reverse chronological order, from your newest to your oldest jobs.</li>

                <li className='p-2'>When describing your job duties, avoid using personal pronouns like “I, ” “me”, "my" etc.</li>

                <li  className='p-2'>Showcase your skills by using strong action verbs (“led,” “organized”, "coordinated"). Use figures to add value when possible. For example: "decreased production costs by 20%".</li>


                <li  className='p-2'>Use bullet points to list your job responsibilities in short, direct sentences.</li>



            </ul>

        </div>

        {/* for image */}
        <div className="col-sm-4"></div>
        </div>
        <p className='fst-italic' style={{paddingLeft:'25px'}}><b>Note:</b> List your work experience, from the most recent to the oldest</p>
        <hr></hr>

        <h2 className='text-center mb-3'>Fill the Form</h2>



{/* Form */}


        <form className='container ' onSubmit={handleSubmit(onSaveNext)}>


            {/* Employer Job */}


            <div className='row mb-3'>

            <div className='col-sm-6'>
            <label htmlFor="Employer">Employer</label>
               
            <input type="text" id='Employer' className='form-control' {...register('Employer')} />


            </div>

            
                {/*Job Title  */}


            <div className='col-sm-6'>
            <label htmlFor="JobTitle">JobTitle</label>
               
            <input type="text" id='JobTitle' className='form-control' {...register('JobTitle')} />


            </div>

            
            </div>

            <div className="row mb-3">

                <div className="col-sm-6">
                        <label htmlFor="City">City</label>
               
                        <input type="text" id='City' className='form-control' {...register('City')} />
                       
                </div>



                <div className="col-sm-6">
                        <label htmlFor="State">State</label>
               
                        <input type="text" id='State' className='form-control' {...register('State')} />
                       
                </div>

            </div>


            <div className="row mb-3">

                <div className="col-sm-6">
                        <label htmlFor="startDate">Start Date</label>
               
                        <input type="date" id='startDate' className='form-control' {...register('startDate')} />
                       
                </div>



                <div className="col-sm-6">
                        <label htmlFor="endDate">End Date</label>
               
                        <input type='date' id='endDate' className='form-control' {...register('endDate')} />
                       
                </div>

            </div>

    


            <div className="mb-3">

                <label htmlFor="jobDescription">Job description</label>
                <textarea className='form-control' rows="10"></textarea>


            </div>


            {/* for buttons */}

            <div className='d-flex justify-content-between mt-4'>

               <button  className="btn bg-info">Back</button>


               <button type='submit' className="btn bg-warning " onClick={onClickingSave}>Save</button>

            </div>




        </form>


        <button className="btn bg-warning d-block mx-auto"><a href='http://localhost:3000/EducationForm'>Go to Next Page</a></button>










    </div>
  )
}

export default ExperienceForm