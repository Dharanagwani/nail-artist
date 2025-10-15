import React, {useState} from 'react'

export default function Booking(){
  const [form,setForm] = useState({name:'',phone:'',email:'',service:'',date:''})
  const [sent,setSent] = useState(false)
  function update(e){
    setForm(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  function submit(e){
    e.preventDefault();
    // For demo: we just show a confirmation. Integrate email/API in real project.
    setSent(true)
    setTimeout(()=>setSent(false),4000)
  }
  return (
    <section style={{marginTop:'30px',padding:'1rem'}}>
      <div className="container">
        <h3>Book an Appointment</h3>
        <form onSubmit={submit} className="form-grid" style={{maxWidth:720}}>
          <div className="form-row">
            <input name="name" className="input col" placeholder="Your name" value={form.name} onChange={update} required />
            <input name="phone" className="input col" placeholder="Phone" value={form.phone} onChange={update} required />
          </div>
          <div className="form-row">
            <input name="email" className="input col" placeholder="Email" value={form.email} onChange={update} />
            <select name="service" className="input col" value={form.service} onChange={update} required>
              <option value="">Select service</option>
              <option>Classic Manicure</option>
              <option>Gel Nails</option>
              <option>Acrylic Extensions</option>
              <option>Bridal Package</option>
            </select>
          </div>
          <input name="date" className="input" type="date" value={form.date} onChange={update} required />
          <textarea name="notes" placeholder="Any notes (optional)" onChange={update}></textarea>
          <div>
            <button type="submit" className="btn-primary">Request Booking</button>
            {sent && <span style={{marginLeft:10,color:'#b23a66'}}>Request sent! I will confirm soon.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
