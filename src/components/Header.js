import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
    
  }
  return (
    <div className='absolute w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-10 justify-between flex'>
      <img className='w-28 sm:w-36 md:w-44' src="
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"
/>
{user&&<div className='flex p-4 gap-3 '>
  <img className='w-11 ' alt='user icon' src='
https://avatars.githubusercontent.com/u/176758716?s=16&v=4'/>
<button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
</div>}
</div>
  )
}

export default Header