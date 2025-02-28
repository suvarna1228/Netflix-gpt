import React from 'react'
import Header from './Header';

const Login = () => {
  return (
  <div >
    <Header/>
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg" alt='bg'/>
    </div>
  
  <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0  left-0">
    <input type="text" placeholder="email adress" className="p-2 m-2"/>
    <input type="password" placeholder="password" className="p-2 m-2"/>
    <button className="p-4 m-4 ">Sign In</button>
  </form>
  </div>
  ); 
};

export default Login;