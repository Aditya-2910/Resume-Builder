import React,{useState} from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function EducationForm() {


    const {register,handleSubmit,formState:{errors}} = useForm()

    const navigate = useNavigate;

    let [education,setEducation] = useState([])
 

    const onSaveNext = (educationObj)=>{

        console.log(educationObj)
   
        setEducation([...education,educationObj])
        axios.post('http://localhost:4000/user-api/create-user',educationObj)
        .then(response=>{
        console.log(response);
        if(response.data.message==='User created successfully')
        {
            navigate('/SkillsForm');
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

        <h3 className='text-center'>Education</h3>

        <p className='fst-italic' style={{paddingLeft:'25px'}}><b>Note:</b> Add information about your education</p>



        {/* Form */}

            
        <form className='container ' onSubmit={handleSubmit(onSaveNext)}>


                {/* sCHOOLnAME */}


                <div className='row mb-3'>

                        <div className='col-sm-6'>
                            <label htmlFor="schoolName">SchoolName</label>
   
                            <input type="text" id='schoolName' className='form-control' {...register('schoolName',{required:true})} />

                            {errors.schoolName?.type==='required'&&<p className="text-danger">* SchoolName is required</p>}

                </div>


                {/*City  */}


                <div className='col-sm-6'>
                <label htmlFor="City">City</label>
   
                <input type="text" id='City' className='form-control' {...register('City',{required:true})}/>

                {errors.City?.type==='required'&&<p className="text-danger">* City is required</p>}
                </div>


            </div>

            <div className="row mb-3">

                <div className="col-sm-6">
                    <label htmlFor="State">State</label>
   
                    <input type="text" id='State' className='form-control' {...register('State',{required:true})} />
           
                 </div>

                {/* Dropdown is required */}

                <div className="col-sm-6">
                        <label htmlFor="degree">Degree</label>
   
                        <input type="text" id='degree' className='form-control' {...register('degree',{required:true})} />
           
                        {errors.degree?.type==='required'&&<p className="text-danger">* Degree is required</p>}

                </div>

            </div>


            <div className="row mb-3">

                <div className="col-sm-6">
                    <label htmlFor="fieldOfStudy">Field Of Study</label>
   
                    <input type="text" id='fieldOfStudy' className='form-control' {...register('fieldOfStudy',{required:true})} />
           
                    {errors.fieldOfStudy?.type==='required'&&<p className="text-danger">* Field Of Study is required</p>}

             </div>



            <div className="col-sm-6">
                <label htmlFor="GraduationDate">End Date</label>
   
                <input type='date' id='GraduationDate' className='form-control' {...register('GraduationDate')} />
           
             </div>

        </div>


        {/* for buttons */}

        <div className='d-flex justify-content-between mt-4'>

        <button  className="bg-info btn">Back</button>


        <button type='submit' className="btn bg-warning " onClick={onClickingSave}>Save</button>

        </div>




    </form>


        <button className="btn bg-warning d-block mx-auto"><a href='http://localhost:3000/SkillsForm'>Go to Next Page</a></button>




















    </div>
  )
}

export default EducationForm