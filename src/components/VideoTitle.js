import React from 'react'


const VideoTitle = ({title,overview})=> {
  return (
    <div className='w-screen aspect-video pt-[15%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='md:text-6xl text-lg font-bold'> {title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'> {overview} </p>
        <div className='my-2 md:my-0'>
        <button className='bg-white text-black md:py-2 py-1 px-2 md:px-7 text-xl  rounded-sm hover:bg-opacity-75'>▶ Play</button>
        <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-8 text-xl opacity-50 rounded-sm hover:bg-opacity-75'> ℹ️ More Info</button>
        </div>
    </div>
  );
};



export default VideoTitle;