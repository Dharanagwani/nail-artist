import React from 'react'
import Contact from '../components/Contact'
import Booking from '../components/Booking'

export default function ContactPage(){
  return (
    <div>
      <section style={{padding:'2rem 1rem'}}>
        <div className="container">
          <h2>Contact & Bookings</h2>
          <Booking/>
        </div>
      </section>
      <Contact />
    </div>
  )
}
