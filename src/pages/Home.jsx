import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>Hello and welcome to the site of the Cloud 9 Children’s Foundation!</p>
      <p>If you want to find out about <Link to="/resources/34">Asperger’s Syndrome (Autistic Spectrum Disorder)</Link> then this is the place to start… all it takes is a few clicks!</p>
      <p>If you would like to make a donation to the Foundation, <Link to="/donate">click here</Link>.</p>
      <p>After receiving the diagnosis, <Link to="/resources/33">here</Link> are some of the next steps you may want to consider.</p>
      <p>You can now sign up to the Foundation online! <Link to="http://eepurl.com/b2kwYL">Click here to sign up now</Link>.</p>
      <p>Take time to explore the site – click on the tabs above!</p>
    </main>
  )
}

export default Home
