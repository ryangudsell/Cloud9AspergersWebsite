import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const testForm = new FormData()
    testForm.append("your-email", email)
    testForm.append("your-subject", subject)
    testForm.append("your-message", message)

    axios.post(formEndpoint, testForm, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then((res) => {
      console.log(res)
      setSubmitted(true)
    })
    .catch((err) => {
      console.log(err)
      setError(true)
    })

    if (submitted) {return (<>
      <h4>Thank you for your message!</h4>
      <p>We'll be in touch soon &#128513;</p>
    </>)}

    if (error) {return (<>
      <h4>Error!</h4>
      <p>Sorry, we were unable to send your message.</p>
    </>)}
  }
  return (
    <main>
      <h1>Contact Us</h1>
      <p>You can get in contact with us a number of ways or you can <Link to="http://eepurl.com/b2kwYL">join the Foundation online</Link></p>
      <div>
        <h4>Email:</h4>
        <p><Link to="mailto:admin@cloud9foundation.co.nz">admin@cloud9foundation.co.nz</Link></p>
      </div>
      <div>
        <h4>Post to:</h4>
        <p>Cloud 9 Children's Foundation, PO Box 233, Martinborough, New Zealand</p>
      </div>
      <form onSubmit={handleSubmit} method='POST'>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' value={email} required 
          onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Subject:</label>
          <input type='subject' name='subject' value={subject} required
          onChange={(event) => setSubject(event.target.value)} 
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea type='message' name='message' value={message} required 
          onChange={(event) => setMessage(event.target.value)}/>
        </div>
        <div>
          <button type='submit'>Send Message</button>
        </div>
      </form>
    </main>
  )
}

export default Contact
