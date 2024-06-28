import React from 'react'
import Crd from './Crd'
// import rp from './assets/images/rp.png'

import courses from '../courses.json';

// console.log(courses);

function Cards() {
  return (
    <>
   

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
         {/* <Crd cardText={"Ethereum Developer"} />
         <Crd cardText={"FrontEnd Developer"}/>
         <Crd cardText={"Backend Developer"}/>
         <Crd cardText={"Full Stack Dev"}/>
         <Crd cardText ={"Hyperledger "} />
         <Crd  cardText={"Ethereum Developer"}/> */}
         {courses.map((crs)=>(
        <Crd key={crs.id} course={crs}/>
        ))}

         
    </div>
    </>
  )
}

export default Cards