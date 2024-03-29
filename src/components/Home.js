import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>

<div className="row" style={{marginLeft:'70px'}}>
            <div className="col-sm-7" >
                  <p className="display-5 p-5  text-info">Create Impressive Resume</p>
                  <ul className="text-center">

                      <li className="" style={{fontFamily:'sans-serif',fontSize:'25px'}}>Professional out-of-the-box resumes, instantly generated by the most advanced resume builder technology available.</li>
                      <br></br>
                      <li style={{fontFamily:'sans-serif',fontSize:'25px'}}>Effortless crafting. Real-time preview and pre-written resume examples.
                      Dozens of HR-approved resume templates.</li>
                      <br></br>
                      <li style={{fontFamily:'sans-serif',fontSize:'25px'}}>Land your dream job with the perfect resume employers are looking for</li>

                  </ul>
                  {/* NOte: Increase Button Size a little bit */}
                  <button className="btn d-block mx-auto bg-warning">Build Resume</button>

            </div>

            {/* for resume sample image */}

            <div className="col-sm-5">

                <img className="d-block mx-auto w-75" style={{marginTop:'5px'}} src="https://images.template.net/wp-content/uploads/2018/11/Modern-Resume-Template.jpg" alt='Image not loaded'/>


            </div>

        </div>

        {/* Steps to follow to create resume */}
        <hr></hr>
        <div className="bg-info" style={{marginTop:'10px'}}>

            {/* Heading */}

              {/*GIve Half Underline  */}

            <p className='text-center display-6 '>3 Easy steps to create your Resume</p>


              {/* for cards */}

              {/* SHould change Icons for each Card........ */}

            <div className="d-flex justify-content-around">
            {/* card-1 */}

            <div className="card" style={{width:'18rem',marginTop:'15px',marginBottom:'15px'}}>
            <img src='https://thumbs.dreamstime.com/b/resume-icon-vector-job-application-cv-sign-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-resume-icon-215388315.jpg' style={{width:'100px'}}alt ='not loaded' className='rounded-circle card-img-top d-block mx-auto'></img>

                <div className="card-body">
                      <h5 className="card-title text-center">CHOOSE YOUR RESUME TEMPLATE</h5>
                      <p className="card-text">Our Professional resume templates are designed strictly following all industry guidelines and best practices employees are looking for.</p>
                </div>
            </div>

            {/* card-2 */}

            <div className="card" style={{width:'18rem',marginTop:'15px',marginBottom:'15px'}}>
            <img src='https://th.bing.com/th/id/R.9c0e9f90d6eb1ccc1ff2d3d9c2a23bc9?rik=rw3ErXTHadTRHQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_178927.png&ehk=8izE7ZtYXZ3AvpFLq3SiRUjfMNkW1rf1eRk2MJhHj1o%3d&risl=&pid=ImgRaw&r=0' style={{width:'85px',marginBottom:'10px',marginTop:'5px'}}alt ='not loaded' className='rounded-circle card-img-top d-block mx-auto'></img>

                <div className="card-body">
                      <h5 className="card-title text-center">SHOWCASE WHAT YOU'RE MADE OF</h5>
                      <p className="card-text">Fill all the details asked by us and mention all the things that you want to add to the resume</p>
                </div>
            </div>


            {/* card-3 */}


            <div className="card" style={{width:'18rem',marginTop:'15px',marginBottom:'15px'}}>
            <img src='https://cdn4.iconfinder.com/data/icons/arrows-245/24/download_1-1024.png' style={{width:'100px'}}alt ='not loaded' className='rounded-circle card-img-top d-block mx-auto'></img>

                <div className="card-body">
                      <h5 className="card-title text-center">DOWNLOAD YOUR RESUME</h5>
                      <p className="card-text">Download your awesome resume and land the job your looking for, effortlessly.</p>
                </div>
            </div>

          </div>

        </div>




            {/* For carousel */}

        <Carousel infiniteLoop autoPlay className='text-center mt-3' style={{marginTop:'10px'}}>

            <div className=''>

                    <img className='mx-auto d-block w-25' src='https://th.bing.com/th/id/OIP.YYQalPWqAyo9Zq26YTSlYwHaKe?w=185&h=262&c=7&r=0&o=5&pid=1.7'/>

            </div>




            <div className=''>

                    <img className='mx-auto d-block w-25' src='https://th.bing.com/th/id/OIP.kNCUstBzf4cPqK2guc77kwHaKe?w=185&h=262&c=7&r=0&o=5&pid=1.7'/>

            </div>

        

            
            <div className=''>

                    <img className='mx-auto d-block w-25' src='https://th.bing.com/th/id/OIP.YYQalPWqAyo9Zq26YTSlYwHaKe?w=185&h=262&c=7&r=0&o=5&pid=1.7'/>

            </div>



            <div className=''>

                    <img className='mx-auto d-block w-25' src='https://th.bing.com/th/id/OIP.kNCUstBzf4cPqK2guc77kwHaKe?w=185&h=262&c=7&r=0&o=5&pid=1.7'/>

            </div>



        </Carousel>

        {/* Button */}

        {/* Make the button bigger */}

        <button className='btn bg-warning d-block mx-auto'><NavLink style={{color:'black',textDecorationLine:'none'}} to='Forms'>Build your Resume</NavLink></button>





        {/* Footer */}

        <div className='bg-dark text-light mt-5'>

            <div className='row'>
                
                
                <div className='col-sm-4'>

                    <ul className='' style={{marginLeft:'20px',marginTop:'10px',listStyleType:'none'}}>

                        <li className='p-2'>Resume Builder</li>

                        <li className='p-2'>Resume Templates</li>

                        <li className='p-2'>Resources</li>

                        <li className='p-2'>Resume Writing Guide</li>

                        <li className='p-2'>Resume Examples</li> 


                    </ul>

                </div>


                <div className='col-sm-4'>

                    <ul className='list-group' style={{marginLeft:'20px',marginTop:'10px',listStyleType:'none'}}>

                        <li className='p-2'>Professional Resume</li>

                        <li className='p-2'> Entry-level Resume</li>

                        <li className='p-2'> Student Resume</li>

                    </ul>

                </div>

                <div className='col-sm-4'>

                    <ul className='list-group' style={{marginLeft:'20px',marginTop:'10px',listStyleType:'none'}}>

                        <li className='p-2'>About</li>

                        <li className='p-2'>Accessibility</li>

                        <li className='p-2'>Privacy Policy</li>

                        <li className='p-2'>Terms and Services</li> 




                    </ul>



                </div>
            


            </div>

            <hr></hr>
            <div className='row'>

                {/* For Website Name */}


                <div className='col-sm-8'>

                    <p className='text-warning display-6' style={{marginLeft:'20px'}}>Resume Builder</p>


                </div>

                {/* For extra info */}

                <div className='col-sm-4'>

                    <ul style={{listStyleType:'none',marginTop:'10px'}}>

                            <li className='p-1'>Contact Us on <a href='#' alt=''>asdasd@saldask.com</a></li>



                    </ul>

                </div>



            </div>


        </div>










    </div>
  )
}

export default Home