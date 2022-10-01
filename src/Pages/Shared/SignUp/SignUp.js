import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SignUp = () => {

    const[email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const navigate=useNavigate()
   
    const [
        createUserWithEmailAndPassword,user
      ] = useCreateUserWithEmailAndPassword(auth);
      
      
    const handleEmailChange= event =>{
            setEmail(event.target.value)
    }
    const handlePasswordChange= event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordChange= event =>{
        setConfirmPassword(event.target.value)
    }

    const handleSubmit = event =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        console.log(user)
    }
    if(user){
        navigate('/')
    }
    return (
        <div className='w-1/4 mt-5 mx-auto'>
             <div className=' container border-4'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-2xl'>Email</h2>
                <input class='w-100 border-b-2 border-indigo-500 ' type="email" onBlur={handleEmailChange} required placeholder='Please enter your email' />
                <h2 className='text-2xl'> Password</h2>

                <input class='w-100 border-b-2 border-indigo-500' type="password" onBlur={handlePasswordChange} required placeholder='Please enter Password' />
                <h2 className='text-2xl'>Confirm Password</h2>
                <input class='w-100 border-b-2 border-indigo-500' type="password" onBlur={handleConfirmPasswordChange} required placeholder='Confirm Password'/>
                <input className='mb-4 mt-3 w-50 mx-40 rounded-md bg-blue-500' type="submit" value="Sign Up" />
                <p className='font-black'>Already have an account? Please <Link to='/login'>Login</Link></p>
            </form>
        </div>
        </div>
       
    );
};

export default SignUp;