import React from 'react'

export default function About(){
  return (
    <section style={{padding:'2rem 1rem'}}>
      <div className="container about-section">
        <div style={{display:'grid',gridTemplateColumns:'1fr',gap:12,alignItems:'center'}}>
          <div className="hero-card">
            <h3>About Me</h3>
            <p style={{color:'#555'}}>I am a professional nail artist with 2+ years experience creating couture nail looks. For me, nails are more than just polish – they’re a way to express yourself! I love bringing ideas to life with creative, colorful designs that make my clients feel confident and fabulous.</p>
            <ul style={{marginTop:10,color:'#555'}}>
              <li>Passion for Perfection</li>
              <li>Elegance & Innovation</li>
              <li>Personalized Care</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
