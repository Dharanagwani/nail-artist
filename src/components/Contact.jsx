import React from 'react'

export default function Contact(){
  return (
    <section style={{padding:'1rem'}}>
      <div className="container">
        <h3>Contact</h3>
        <div style={{display:'grid',gridTemplateColumns:'1fr',gap:12}}>
          <div className="hero-card">
            <strong>Studio Address</strong>
            <p style={{color:'#666',marginTop:6}}>Mumbai, India — appointments by booking only</p>
            <p style={{marginTop:8}}>WhatsApp: <a href="https://wa.me/919999999999">+91 99999 99999</a></p>
            <p>Email: <a href="mailto:hello@nailbyaarti.com">hello@nailbyaarti.com</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
