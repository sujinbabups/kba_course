import React from 'react'
import rp from '../assets/images/rp.png'

function Crd({cardText } ) {
  return (
    <>
    <div className=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
    <h2 className=' font-bold text-lg text-purple-900 '>{cardText}</h2>
    <img src={rp} alt="course thumbnail" className='w-80 h-40 ' />

    <p className='text-black group-hover:text-white my-2 mx-5'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
    <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5">Learn More</a>
</div>


 </>
    
  )
}

export default Crd;