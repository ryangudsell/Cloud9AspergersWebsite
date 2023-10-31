import { useState } from 'react'
import { Helmet } from 'react-helmet'
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
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Cloud 9 Asperger's/ASD Foundation</title>
        <meta name="title" content="Cloud 9 Asperger's/ASD Foundation || Contact Us" />
        <meta name="description" content="Hello and welcome to the site of the Cloud 9 Children’s Foundation! You can get in contact with us a number of ways or you can join the Foundation online!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5173/" />
        <meta property="og:title" content="Cloud 9 Asperger's/ASD Foundation || Contact Us" />
        <meta property="og:description" content="Hello and welcome to the site of the Cloud 9 Children’s Foundation! You can get in contact with us a number of ways or you can join the Foundation online!" />
        <meta property="og:image" content="https://withyoueverystepoftheway.files.wordpress.com/2012/10/cloud9.jpg?w=144" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:5173/" />
        <meta property="twitter:title" content="Cloud 9 Asperger's/ASD Foundation || Contact Us" />
        <meta property="twitter:description" content="Hello and welcome to the site of the Cloud 9 Children’s Foundation! You can get in contact with us a number of ways or you can join the Foundation online!" />
        <meta property="twitter:image" content="https://withyoueverystepoftheway.files.wordpress.com/2012/10/cloud9.jpg?w=144" />

        {/* Meta Tags Generated with https://metatags.io */}
      </Helmet>

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
    </>
  )
}

export default Contact
