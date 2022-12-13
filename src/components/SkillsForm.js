import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function SkillsForm() {

    const {register,handleSubmit,formState:{errors}} = useForm()


    let [skills,setSkills] = useState([])
 
    const navigate = useNavigate()

    const onSaveNext = (skillsObj)=>{

        console.log(skillsObj)
   
        setSkills([...skills,skillsObj])

        skillsObj["token"] = localStorage.getItem("token")

        axios.post('http://localhost:4000/user-api/update-user',skillsObj)
        .then(response=>{
        console.log(response);
        if(response.data.message==='User created successfully')
        {
            navigate('/SummaryForm');
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
        
        <p className="display-6 text-center">Skills</p>

        

        <h3 className='text-dark fw-bold' style={{marginLeft:'25px'}}>Tips for this section</h3>
        
        <div className='row'>
        
        <div className='col-sm-8'>
            
            <ul className='m-3' style={{fontSize:'1.3rem'}}>

                <li className='p-2' >List your top skills. The more relevant they are to the job you are applying for, the better.</li>

                <li className='p-2'>Use one or two keywords, not complete sentences. For example: "Project Management", "Online Marketing", "HTML", "SEO", etc.</li>

                <li  className='p-2'>Make sure to include all important skills for the job you are applying for, even if you are not proficient on some of them.</li>


                <li  className='p-2'>Keep it short. Try to showcase no more than 8 skills.</li>



            </ul>

        </div>

                <div className="col-sm-4">
                        {/* For Image */}
                </div>

        </div>

        <p className='fst-italic'><b>Note:</b> Highlight your top skills</p>


        {/* Form */}

        <form className='container' onSubmit={handleSubmit(onSaveNext)}>

            <div className='row mb-3'>

                <div className='col-sm-6'>
                        <label htmlFor="skill1">Skill</label>

                        <input className='form-control' type="text"  id="skill1" {...register('skill1',{required:true})}/>

                        {errors.skill1?.type==='required'&&<p className="text-danger">* Skill is required</p>}

                </div>

                
               
                <div className='col-sm-6'>
                        <label htmlFor="skill_1_level">Level</label>

                        <input className='form-control' type="text"  id="skill_1_level" {...register('skill_1_level',{required:true})} />

                        {errors.skill_3_level?.type==='required'&&<p className="text-danger">* Level is required</p>}


                </div>


            </div>

            {/* skill-2 */}
            <div className='row mb-3'>

                <div className='col-sm-6'>
                        <label htmlFor="skill2">Skill</label>

                        <input className='form-control' type="text"  id="skill2" {...register('skill2',{required:true})}/>

                        {errors.skill2?.type==='required'&&<p className="text-danger">* Skill is required</p>}

                </div>

                
               
                <div className='col-sm-6'>
                        <label htmlFor="skill_2_level">Level</label>

                        <input className='form-control' type="text"  id="skill_2_level" {...register('skill_2_level',{required:true})} />

                        {errors.skill_3_level?.type==='required'&&<p className="text-danger">* Level is required</p>}

                </div>


            </div>


            {/* Skiil-3 */}


            <div className='row mb-3'>

                <div className='col-sm-6'>
                    <label htmlFor="skill3">Skill</label>

                    <input className='form-control' type="text"  id="skill3" {...register('skill3',{required:true})}/>

                    {errors.skill3?.type==='required'&&<p className="text-danger">* Skill is required</p>}

                </div>



                <div className='col-sm-6'>
                     <label htmlFor="skill_3_level">Level</label>

                    <input className='form-control' type="text"  id="skill_3_level" {...register('skill_3_level',{required:true})} />

                    {errors.skill_3_level?.type==='required'&&<p className="text-danger">* Level is required</p>}
                </div>


            </div>



            {/* Skill-4 */}
            <div className='row mb-3'>

                <div className='col-sm-6'>
                    <label htmlFor="skill4">Skill</label>

                    <input className='form-control' type="text"  id="skill4" {...register('skill4')}/>

                </div>



                <div className='col-sm-6'>
                    <label htmlFor="skill_4_level">Level</label>

                    <input className='form-control' type="text"  id="skill_4_level" {...register('skill_4_level')} />
                </div>


            </div>
            {/* Skill-5 */}

            <div className='row mb-3' >

                    <div className='col-sm-6'>
                         <label htmlFor="skill5">Skill</label>

                        <input className='form-control' type="text"  id="skill5" {...register('skill5')}/>

                    </div>



                    <div className='col-sm-6'>
                        <label htmlFor="skill_5_level">Level</label>

                        <input className='form-control' type="text"  id="skill_5_level" {...register('skill_5_level')} />
                    </div>


            </div>

            {/* Skill-6 */}

            <div className='row mb-3'>

                    <div className='col-sm-6'>
                        <label htmlFor="skill6">Skill</label>

                        <input className='form-control' type="text"  id="skill6" {...register('skill6')}/>

                    </div>



                    <div className='col-sm-6'>
                        <label htmlFor="skill_6_level">Level</label>

                        <input className='form-control' type="text"  id="skill_6_level" {...register('skill_6_level')} />
                    </div>


            </div>


        {/* For button */}


        {/* for buttons */}

        <div className='d-flex justify-content-between mt-4'>

        <button  className="btn bg-info">Back</button>


        <button type='submit' className="btn bg-warning " onClick={onClickingSave}>Save</button>

        </div>



        </form>


        <button className="btn bg-warning d-block mx-auto"><a href='http://localhost:3000/SummaryForm'>Go to Next Page</a></button>


    </div>
  )
}

export default SkillsForm