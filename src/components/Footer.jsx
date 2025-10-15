import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">Nails by Myra</h2>
          <p>Nails that shine as bright as you do.</p>
        </div>

        {/* Quick Links
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Portfolio</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div> */}

        {/* Social Icons */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nails by Myra. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
