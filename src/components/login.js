import {useForm} from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {userLogin} from '../slices/userslice'




function Login() {
    const {register,handleSubmit,formState:{errors}} = useForm()
  
    //for navigation purpose
    const navigate = useNavigate()
    
    let [Login,setLogin] = useState([])

    let {userObj,isError,isLoading,isSuccess,errMsg} = useSelector(state=>state.user)

    let dispatch = useDispatch();

      
    const onLogin = (loginObj)=>{
    
        console.log(loginObj)

        dispatch(userLogin(loginObj))
    
        setLogin([...Login,loginObj])
         axios.post('http://localhost:4000/user-api/Login',loginObj)
         .then(response=>{
            console.log(response)
            navigate('/Forms')
         })

         .catch(err=>{
            console.log('error is',err);
         })
        
    }
    
     const onClickingSave=()=>{
    
         alert("Data saved")
          
     }
  
  
  
  
  
  
  
    return (
    <div>
    <div className='display-4 text-center text-info'>Login</div>
    <Form className='mx-auto' onSubmit={handleSubmit(onLogin)}>
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

        <button type="submit" className='d-block mx-auto bg-info'>Login</button>

        <p className='text-center'>New User? <a href='http://localhost:3000/Signup'>Click here</a></p>

    </Form>
    </div>
  )
}

export default Login