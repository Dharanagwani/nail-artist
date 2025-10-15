import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Booking from '../components/Booking'
import About from '../components/About'

export default function Home(){
  return (
    <div>
      <Hero />
      <Services limit={4} />
      <Gallery count={5} />
      <Booking />
      <About />
    </div>
  )
}
