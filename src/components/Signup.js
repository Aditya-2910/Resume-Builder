import {useForm} from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Form } from 'react-bootstrap';






function Signup() {
    const {register,handleSubmit,formState:{errors}} = useForm()
  
    //for navigation purpose
    const navigate = useNavigate()
    
    let [Signup,setSignup] = useState([])
      
    const onSignup = (signupObj)=>{
    
        console.log(signupObj)
    
        setSignup([...Signup,signupObj])

        if(signupObj.password===signupObj.confirmpassword){
         
        axios.post('http://localhost:4000/user-api/signup',signupObj)
        .then(response=>{
            console.log(response);
            if(response.data.message==='username already taken')
            {
                console.log('Username already taken')
            }
            if(response.data.message==='user registered')
            {
                navigate('/Login');
            }
        })
        .catch(err=>{
            console.log('Error in submitting form',err);
        })
        }
        else{
            console.log("Please confirm the password properly");
        }
        
    }
    
     const onClickingSave=()=>{
    
         alert("Data saved")
          
     }
  
  
  
  
  
  
  
    return (
    <div>
    <div className='display-4 text-center text-info'>Signup</div>
    <Form className='mx-auto' onSubmit={handleSubmit(onSignup)}>
        <Form.Group className='mx-auto w-50 mb-3'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter Username' {...register("username",{required:true,maxLength:15})}></Form.Control>

            {errors.username?.type==='required'&&<p className="text-danger">* username is required</p>}

            {errors.username?.type==='maxLength'&&<p className='text-danger'>* Max length is 15</p>}

        </Form.Group>

        <Form.Group className='mx-auto w-50 mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter Password' {...register("password",{required:true})}></Form.Control>
            {errors.password?.type==='required'&&<p className="text-danger">* Password is required</p>}

        </Form.Group>

        <Form.Group className='mx-auto w-50 mb-3'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='password' placeholder='Confirm Password' {...register("confirmpassword",{required:true})}></Form.Control>
            {errors.confirmpassword?.type==='required'&&<p className="text-danger">*Please Confirm the password.</p>}

        </Form.Group>

        <button type="submit" className='d-block mx-auto bg-info'>Signup</button>


    </Form>
    </div>
  )
}

export default Signup