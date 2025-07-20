import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import Layout from './Components/layout/layout'
import Errorpage from './Components/Errorpage/errorpage'
import CountryDetails from './Pages/CountryDetails'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Layout/>} errorElement={<Errorpage/>} >
        <Route path='' element={<Home/>}/>
        <Route path='country' element={<Country/>}/>
        <Route path='/country/:countryid' element={<CountryDetails/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
      
      


    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
