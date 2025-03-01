import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const  toggleSignInForm =()=>{
       setIsSignInForm(!isSignInForm);
  };
  return (
  <div >
    <Header/>
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg" alt='bg'/>
    </div>
  
    <form className="max-w-md w-full sm:w-8/12 md:w-6/12 lg:w-3/12 absolute p-14 bg-black bg-opacity-80 my-20 mx-auto text-white right-0 left-0 rounded-lg shadow-lg">
  <h1 className="text-3xl font-bold py-4 ">{isSignInForm ?" Sign In" : "Sign Up"}</h1>
  
  {!isSignInForm &&(<input 
  type="text" placeholder="Name"
   className="border border-gray-300 bg-transparent p-4 my-2 w-full rounded-md" 
   />)
  }

  <input type="text" placeholder="Email or mobile number" className="border border-gray-300 bg-transparent p-4 my-2 w-full rounded-md" />

  
  <input type="password" placeholder="Password" className="border border-gray-300 bg-transparent p-4 my-2 w-full rounded-md" />
  
  <button className="p-4 my-4 w-full bg-red-700 hover:bg-red-600 transition-all rounded-md">{isSignInForm ?" Sign In" : "Sign Up"}</button>
  
  <h3 className="text-center my-2 text-gray-400">OR</h3>
  
  <button className="p-3 w-full  rounded-md bg-gray-600 opacity-80 transition-all">Use a Sign-in code</button>
  
  <p className="text-center text-sm my-3 cursor-pointer underline ">Forgot password?</p>
  <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>
    {isSignInForm
     ?"New to Netflix ? Sign up now." 
    : "Already a User ? Sign In Now"}
    </p>
    <p className='text-sm my-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
    <p className='text-sm my-2'>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>
</form>

  </div>
  ); 
};

export default Login;