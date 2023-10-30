import { useState, useEffect } from "react"
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
    <main>
      {loading ? <>Loading...</> : <>
      <button onClick={() => navigate(-1)}><ArrowLeft /> Go Back</button>
      <div className='component-container'>
        <h1>{decodeHTMLEntities(resource.title.rendered)}</h1>
        <div dangerouslySetInnerHTML={{ __html: resource.content.rendered }} />
      </div>
    </>}
    </main>
  )
}

export default Resource
