import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);

  const [errorMessage,setErrorMessage] = useState(null);

  const [showMore, setShowMore] = useState(false);
  const name = useRef(null);
  const email=useRef(null);
  const password=useRef(null);
 
  const dispatch = useDispatch();


  const handleButtonClick = ()=>{


    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;
    
    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
      .then((userCredential) => {
        
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
           photoURL:USER_AVATAR,
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(
                  addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL
        })
      );
          
        }).catch((error) => {
       setErrorMessage(error.message);
        });

        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage);
      });
    
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage)
      });
    
    }

  };
  const  toggleSignInForm =()=>{
       setIsSignInForm(!isSignInForm);
  };
  return (
  <div className="relative min-h-screen bg-black">
    <Header/>
    <div className="absolute inset-0">
    <img 
    className="w-full h-full object-cover"
    src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg" alt='bg'/>
    </div>
  
    <form onSubmit={(e)=>e.preventDefault()} className="max-w-md w-11/12 sm:w-8/12 md:w-6/12 lg:w-3/12 absolute p-6 sm:p-14 bg-black bg-opacity-80 my-20 mx-auto text-white right-0 left-0 rounded-lg shadow-lg">
  <h1 className="text-3xl font-bold py-4 ">
    {isSignInForm ?" Sign In" : "Sign Up"}
    </h1>
  
  {!isSignInForm &&(<input 
  ref={name}
  type="text" placeholder="Name"
   className="border border-gray-300 bg-transparent p-4 my-2 w-full rounded-md" 
   />)
  }

  <input 
  ref={email} 
  type="text" 
  placeholder="Email or mobile number" 
  className="border border-gray-300 bg-transparent p-4 my-2 w-full rounded-md"
   />

  
  <input 
  ref={password} 
  type="password"
   placeholder="Password" 
   className="border border-gray-300 bg-transparent p-4 my-2 w-full rounded-md" 
   />

  <p className='text-red-500 font-bold text-xl'>{errorMessage}</p>

  <button 
  className="p-4 my-4 w-full bg-red-700 hover:bg-red-600 transition-all rounded-md"
   onClick={handleButtonClick}>{isSignInForm ?" Sign In" : "Sign Up"}
   </button>
  
  <h3 className="text-center my-2 text-gray-400">OR</h3>
  
  <button 
  className="p-3 w-full  rounded-md bg-gray-600 opacity-80 transition-all">
    Use a Sign-in code
    </button>
  
  <p className="text-center text-sm my-3 cursor-pointer underline ">Forgot password?</p>
  <p className='py-4 cursor-pointer'onClick={toggleSignInForm}>
    {isSignInForm
     ?"New to Netflix ? Sign up now." 
    : "Already a User ? Sign In Now"}
    </p>
    <p className='text-sm my-2 text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
    {!showMore && (
          <button className="text-xs text-blue-500 cursor-pointer underline" onClick={() => setShowMore(true)}>
            Load More
          </button>
        )}
    {showMore && (
      <p 
      className='text-xs my-2 text-gray-400'
      >
        The information collected by Google reCAPTCHA is subject to the Google <span className='text-blue-600'>Privacy Policy</span>  and <span className='text-blue-600'>Terms of Service</span> , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
        </p>
    )}
</form>

  </div>
  ); 
};

export default Login;