import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero(){
  const images = [
    'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    'https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="kicker">Where Art Meets Nails</div>
          <motion.h1 className="headline" initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}}>
            {/* Elegant • Creative • You */}
            Nail Art That Speaks Your Style.
          </motion.h1>
          <p className="sub">💅I specialize in gel polish, nail extensions, and custom designs to give you flawless nails that turn heads.</p>
          <div className="hero-cta">
            <Link to="/contact"><button className="btn-primary" style={{fontSize:14}}>Book Appointment</button></Link>
            <Link to="/gallery"><button className="btn-primary" style={{fontSize:14}}>View My Work</button></Link>
          </div>

          {/* <div style={{marginTop:20}} className="hero-card">
            <strong>Quick Services</strong>
            <div style={{display:'flex',gap:10,marginTop:8}}>
              <div style={{flex:1}}>
                <div style={{fontSize:13,color:'#666'}}>Express Manicure</div>
                <div className="price">₹499</div>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:13,color:'#666'}}>Gel Nails</div>
                <div className="price">₹999</div>
              </div>
            </div>
          </div> */}
        </div>

        <aside>
          <div className="gallery-preview">
            {images.map((src,i)=> (
              <img key={i} src={src} alt={`nail-${i}`} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
