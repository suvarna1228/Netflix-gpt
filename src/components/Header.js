import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants'

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
      navigate("/error");
    });
    
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
       dispatch(
        addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        }));
      navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return()=> unsubscribe();
  },[])
  return (
    <div className='absolute w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-10 justify-between flex'>
      <img className='w-28 sm:w-36 md:w-44' src={LOGO} alt="logo"
/>
{user&&<div className='flex p-4 gap-3 '>
  <img className='w-11 ' alt='user icon' src='

https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e'/>
<button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
</div>}
</div>
  )
}

export default Header