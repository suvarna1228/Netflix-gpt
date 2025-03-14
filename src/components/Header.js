import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user=useSelector(store=>store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
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
          photoURL:photoURL,
        }));
      navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return()=> unsubscribe();
  },[]);

  const handleGptSearchClick =  () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageaChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  };
  return (
    <div className='absolute w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center'>
      <img className='w-28 mx-auto md:mx-0  md:w-44' src={LOGO} alt="logo"
/>
{user&&(
  <div className='flex p-4 gap-3 justify-between '>
    {showGptSearch&&(
      <select className='md:p-3 m-2 p-2 bg-gray-800 text-white rounded-sm'
    onChange={handleLanguageaChange}>
      {SUPPORTED_LANGUAGES.map((lang)=>(
      <option 
      key={lang.identifier} 
      value={lang.identifier}
      >
        {lang.name}
      </option>
       )
      )}

    </select>)}
  <button 
  className='py-2 px-4 mx-4 my-2 bg-purple-600 text-white rounded-sm'
  onClick={handleGptSearchClick}>
    {showGptSearch?"Home Page" :"GPT Search"}
  </button>
  <img className='w-11 hidden md:block ' alt='user icon' src='
https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e'
/>

<button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>

</div>)}
</div>
  )
}

export default Header;