import React from 'react'

// Import your local images from assets
import g1 from '../assets/img1.jpg'
import g2 from '../assets/img2.jpg'
import g3 from '../assets/img3.jpg'
import g4 from '../assets/img4.jpg'
import g5 from '../assets/img5.jpg'
import g6 from '../assets/img6.jpg'
import g7 from '../assets/img7.jpg'
import g8 from '../assets/img8.jpg'
import g9 from '../assets/img9.jpg'


// Put all images in an array
const sample = [g1, g2, g3, g4, g5, g6, g7, g8, g9]

export default function Gallery({ count }) {
  const items = count ? sample.slice(0, count) : sample

  return (
    <section style={{ padding: '1rem' }}>
      <div className="container">
        <h3>My Work</h3>
        <div className="gallery-grid">
          {items.map((src, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={src} alt={`nail-${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
