import React from 'react'
import Gallery from '../components/Gallery'

export default function GalleryPage(){
  return (
    <div>
      <section style={{padding:'2rem 1rem', marginBottom:0}}>
        <div className="container">
          <h2>My Nail Art Creations</h2>
          <p style={{color:'#666', marginBottom:0,fontSize:"16px", marginTop:"20px", fontWeight:"bold"}}>Take a peek at our collection of stunning nail designs! From elegant gel finishes to bold, creative art, each set of nails is crafted with precision and passion. Browse through the gallery to see the variety of styles we offer – and get inspired for your next manicure!</p>
        </div>
      </section>
      <Gallery />
    </div>
  )
}
