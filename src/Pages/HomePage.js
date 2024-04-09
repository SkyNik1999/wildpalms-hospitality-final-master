import React from 'react'
import Hero from "../Components/Hero/Hero"
import Logos from "../Components/Logos/Logos"
import Contact from "../Components/Contact/Contact"
import Subscribe from "../Components/Subscribe/Subscribe"
import Value from '../Components/Value/Value'
import Popular from '../Components/Popular/Popular'


const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Logos/>
        <Popular/>
        <Value/>
        <Contact/>
        <Subscribe/>
    </div>
  )
}

export default HomePage