// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

// export default function Navbar(){
//   return (
//     <header className="nav">
//       <div className="container nav-inner">
//         <div className="logo">
//           <div className="mark">💅</div>
//           <div>
//             <div style={{fontSize:14}}>Nails</div>
//             <div style={{fontSize:16,marginTop:2,color:'#666'}}>by Myra</div>
//           </div>
//         </div>
//         <nav className="nav-links">
//           <NavLink to="/" end>Home</NavLink>
//           <NavLink to="/gallery">Gallery</NavLink>
//           <NavLink to="/services">Services</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//           <Link to="/contact"><button className="btn-primary" style={{fontSize:18}}>Book Now</button></Link>
//         </nav>
//       </div>
//     </header>
//   )
// }

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        {/* Logo */}
        <div className="logo">
          <div className="mark">💅</div>
          <div>
            <div style={{fontSize:14}}>Nails</div>
            <div style={{fontSize:16,marginTop:2,color:'#666'}}>by Myra</div>
          </div>
        </div>

        {/* Hamburger Button */}
        <button 
          className={`hamburger ${open ? "active" : ""}`} 
          onClick={() => setOpen(!open)} 
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${open ? "show" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="btn-primary" style={{fontSize:18}}>Book Now</button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
