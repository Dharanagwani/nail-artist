import React from 'react'
import Services from '../components/Services'
import { Link, NavLink } from 'react-router-dom'
export default function ServicesPage(){
  return (
    <div>
      <section style={{padding:'0 1rem', marginBottom:"0"}}>
        <div className="container">
          <h2>Services & Pricing</h2>
          <p style={{color:'#666', fontSize:"18px", marginTop:"20px", marginBottom:0, fontWeight:"bold"}}>Looking for nails that truly stand out? Whether it’s a subtle glow or a bold statement, we’ve got you covered! For pricing and custom designs, contact us directly and let’s create your perfect manicure.</p>
        </div>
        <Link to="/contact"><button className="btn-primary" style={{fontSize:18, marginLeft:"120px",marginTop:"20px",marginBottom:"0"}}>Book Now</button></Link>
      </section>
      <Services />
    </div>
  )
}
