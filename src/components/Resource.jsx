import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import axios from 'axios'
import { useParams, Link, useNavigate } from "react-router-dom"
import { ArrowLeft } from "react-bootstrap-icons"

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Resource = () => {
  // Fix any characters displaying wrong
  function decodeHTMLEntities(text) {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
  }

  function stripHTMLTags(string) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = string;
    return tempElement.textContent || tempElement.innerText;
  }

  function getKeywords(acf) {
    if (!acf) {return}

    let keywords = []
    if (acf.keyword1) keywords.push(acf.keyword1);
    if (acf.keyword2) keywords.push(acf.keyword2);
    if (acf.keyword3) keywords.push(acf.keyword3);
    if (acf.keyword4) keywords.push(acf.keyword4);
    if (acf.keyword5) keywords.push(acf.keyword5);
    
    return keywords.join(", ");
  }

  const [resource, setResource] = useState(null)
  const [loading, setLoading] = useState(true)

  const {id} = useParams()
  const endpoint = `${baseUrl}/resources/${id}`

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      console.log("RESOURCE -->", res.data);
      setResource(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Cloud 9 Asperger's/ASD Foundation</title>
        <meta name="title" content={`Cloud 9 Asperger's/ASD Foundation || ${resource?.title.rendered}`} />
        <meta name="description" content={`Hello and welcome to the site of the Cloud 9 Children’s Foundation! ${stripHTMLTags(resource?.excerpt.rendered)}`} />
        <meta name="keywords" content={`${getKeywords(resource?.acf)}`}/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5173/" />
        <meta property="og:title" content={`Cloud 9 Asperger's/ASD Foundation || ${resource?.title.rendered}`} />
        <meta property="og:description" content={`Hello and welcome to the site of the Cloud 9 Children’s Foundation! ${stripHTMLTags(resource?.excerpt.rendered)}`} />
        <meta property="og:image" content="https://withyoueverystepoftheway.files.wordpress.com/2012/10/cloud9.jpg?w=144" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:5173/" />
        <meta property="twitter:title" content={`Cloud 9 Asperger's/ASD Foundation || ${resource?.title.rendered}`} />
        <meta property="twitter:description" content={`Hello and welcome to the site of the Cloud 9 Children’s Foundation! ${stripHTMLTags(resource?.excerpt.rendered)}`} />
        <meta property="twitter:image" content="https://withyoueverystepoftheway.files.wordpress.com/2012/10/cloud9.jpg?w=144" />

        {/* Meta Tags Generated with https://metatags.io */}
      </Helmet>

      <main>
        {loading ? <>Loading...</> : <>
        <button onClick={() => navigate(-1)}><ArrowLeft /> Go Back</button>
        <div className='component-container'>
          <h1>{decodeHTMLEntities(resource.title.rendered)}</h1>
          <div dangerouslySetInnerHTML={{ __html: resource.content.rendered }} />
        </div>
      </>}
      </main>
    </>
  )
}

export default Resource
