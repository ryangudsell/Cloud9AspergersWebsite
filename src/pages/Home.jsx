import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Cloud 9 Asperger's/ASD Foundation</title>
        <meta name="title" content="Cloud 9 Asperger's/ASD Foundation" />
        <meta name="description" content="Hello and welcome to the site of the Cloud 9 Children’s Foundation! If you want to find out about Asperger’s Syndrome (Autistic Spectrum Disorder) then this is the place to start… all it takes is a few clicks!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5173/" />
        <meta property="og:title" content="Cloud 9 Asperger's/ASD Foundation" />
        <meta property="og:description" content="Hello and welcome to the site of the Cloud 9 Children’s Foundation! If you want to find out about Asperger’s Syndrome (Autistic Spectrum Disorder) then this is the place to start… all it takes is a few clicks!" />
        <meta property="og:image" content="https://withyoueverystepoftheway.files.wordpress.com/2012/10/cloud9.jpg?w=144" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:5173/" />
        <meta property="twitter:title" content="Cloud 9 Asperger's/ASD Foundation" />
        <meta property="twitter:description" content="Hello and welcome to the site of the Cloud 9 Children’s Foundation! If you want to find out about Asperger’s Syndrome (Autistic Spectrum Disorder) then this is the place to start… all it takes is a few clicks!" />
        <meta property="twitter:image" content="https://withyoueverystepoftheway.files.wordpress.com/2012/10/cloud9.jpg?w=144" />

        {/* Meta Tags Generated with https://metatags.io */}
      </Helmet>
      
      <main>
        <h1>Welcome!</h1>
        <p>Hello and welcome to the site of the Cloud 9 Children’s Foundation!</p>
        <p>If you want to find out about <Link to="/resources/34">Asperger’s Syndrome (Autistic Spectrum Disorder)</Link> then this is the place to start… all it takes is a few clicks!</p>
        <p>If you would like to make a donation to the Foundation, <Link to="/donate">click here</Link>.</p>
        <p>After receiving the diagnosis, <Link to="/resources/33">here</Link> are some of the next steps you may want to consider.</p>
        <p>You can now sign up to the Foundation online! <Link to="http://eepurl.com/b2kwYL">Click here to sign up now</Link>.</p>
        <p>Take time to explore the site – click on the tabs above!</p>
      </main>
    </>
  )
}

export default Home
