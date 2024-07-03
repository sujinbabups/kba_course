import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Cards from './components/Cards'
// import View from './components/View'

import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import CoursePage from './pages/CoursePage'
// import MainLayout from './Layout/MainLayout'
import Notfound from './pages/Notfound'
import Contact from './pages/Contact'
import AddCourses from './pages/AddCourses'
import LearnMore, { courseLoader } from './pages/LearnMore'
import EditCourse from './pages/EditCourse'
function App() {
  // const [count, setCount] = useState(0)
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      
      {/* <Route path='/' element={MainLayout}> */}
        <Route path='/' element={<Homepage/>}/>
        <Route path='/courses' element={<CoursePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/add_course' element={<AddCourses/>}/>
        <Route path='/*' element={<Notfound/>}/>
        <Route path='/edit-course/:id' element={<EditCourse/>} loader={courseLoader}/>
        <Route path='/learn_more/:id' element={<LearnMore/>} loader={courseLoader}/>
      {/* </Route> */}
      </>
    )
  )

  return (
    <>
   {/* <Navbar/>
   <Hero/>
   <Cards/>
   <View/> */}
<RouterProvider router={router}/>

    

   </>
  )
}

export default App
