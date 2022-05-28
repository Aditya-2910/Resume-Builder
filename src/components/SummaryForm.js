import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

function SummaryForm() {

  const {register,handleSubmit,formState:{errors}} = useForm()


  let [summary,setSummary] = useState([])


  const onSaveNext = (summaryObj)=>{

      console.log(summaryObj)
 
      setSummary([...summary,summaryObj])
      
 
 }
 
  const onClickingSave=()=>{
 
      alert("Data saved")
       
  }



  return (
    <div>

            <p className="display-6 text-center">Professional Summary</p>

        

            <h3 className='text-dark fw-bold' style={{marginLeft:'25px'}}>Tips for this section</h3>

            <div className='row'>

                <div className='col-sm-8'>
    
                    <ul className='m-3' style={{fontSize:'1.3rem'}}>

                        <li className='p-2' >Keep your summary short and straight to the point. You can always elaborate during the interview. The optimal length for a professional summary is between 50 and 100 words.</li>

                        <li className='p-2'>Tailor the summary to the job you are applying for. Show the employer exactly why you’re the best fit for this position.</li>

                        <li  className='p-2'>Be specific about your background, skills and goals.</li>


                        <li  className='p-2'>Remember, the best resume summary should quickly grab recruiters’ attention by shouting out: “Hey, I’m who you are looking for!”</li>



                    </ul>

                </div>

                <div className="col-sm-4">
                        {/* For Image */}
                </div>

            </div>

            <p className='fst-italic' style={{paddingLeft:'25px'}}><b>Note:</b> Write a short summary telling more about yourself, your strengths and experience.</p>


            <form  className="container" onSubmit={handleSubmit(onSaveNext)}>


                  <div className="mb-3">

                      <label htmlFor="summary">Summary</label>
                      <textarea className='form-control' rows="10" {...register('summary',{required:true})}></textarea>

                      {errors.summary?.type==='required'&&<p className="text-danger">* Summary is required</p>}


                    </div>

             {/* for buttons */}

              <div className='d-flex justify-content-between mt-4'>

                      <button  className="btn bg-info">Back</button>


                      <button type='submit' className="btn bg-warning " onClick={onClickingSave}>Save</button>

              </div>



            </form>

            <button className="btn bg-warning d-block mx-auto"><a href='http://localhost:3000/TemplateSelectAndDownload'>Go to Next Page</a></button>

    
    </div>
  )
}

export default SummaryForm