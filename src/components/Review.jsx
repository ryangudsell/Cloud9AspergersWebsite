import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Review = () => {
  const [review, setReview] = useState(null)
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  const navigate = useNavigate()
  const endpoint = `${baseUrl}/book_reviews/${id}?_embed`

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
        console.log(res.data);
        setReview(res.data)
        setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    
    <main>
    {loading ? <>Loading...</> : <>
      <button onClick={() => navigate(-1)}><ArrowLeft /> Go Back</button>
      <div className='component-container'>
        <h1>{review.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: review.content.rendered }} />
      </div>
    </>}
    </main>
  )
}

export default Review
