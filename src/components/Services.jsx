import React from 'react'

const services = [
  {title:'Gel Polish on Natural Nails',desc:'Enhance your natural nails with long-lasting, vibrant gel polish that keeps your nails looking flawless for weeks.'},
  {title:'Temporary Extensions',desc:'Get beautifully extended nails for special occasions or short-term style, lasting 2–3 weeks with a natural finish.'},
  {title:'Permanent Extensions (1 Month & More)',desc:'Enjoy durable nail extensions designed to last over a month, providing strength, length, and elegance to your nails.'},
  {title:'Press-On Nails',desc:'Quick, stylish, and easy-to-apply press-on nails for an instant manicure without the wait.'},
  {title:'Nail Art (Per Finger)',desc:'Add a personalized touch to your nails with intricate designs, patterns, or embellishments for each finger.'},
]

export default function Services({limit}){
  const shown = limit? services.slice(0,limit):services
  return (
    <section style={{padding:'2rem 1rem',marginTop:'0'}}>
      <div className="container" style={{marginTop:'0'}}>
        <h3>Services</h3>
        <div className="services-grid">
          {shown.map((s,idx)=> (
            <div key={idx} className="service-card">
              <h4>{s.title}</h4>
              <p style={{color:'#666'}}>{s.desc}</p>
              {/* <div style={{marginTop:10}} className="price">{s.price}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
