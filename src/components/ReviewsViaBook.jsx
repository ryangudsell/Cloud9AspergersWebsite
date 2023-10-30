import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'

const baseUrl =  import.meta.env.VITE_WP_API_BASEURL

const ReviewsViaBook = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  const {id} = useParams()
  const endpoint = `${baseUrl}/book_reviews?book_names=${id}&_embed`

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
        console.log(res.data);
        setReviews(res.data)
        setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  const Reviews = ({ reviews }) => {
    const mappedReviews = reviews.map((review, index) => {
        return (
            <div key={review.slug + "-" + index} className='container'>
                <h2 className='title'>{review.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: review.excerpt.rendered }} />
                <div className='review-btns'>
                    <button key={review.slug + "-" + index}>
                        <a href={`#/book_reviews/${review.id}`}>Read More</a>
                    </button>
                </div>
            </div>
        )
    })

    return mappedReviews.reverse()
  }

  return (
    <main>
      <button onClick={() => navigate(-1)}><ArrowLeft /> Go Back</button>
      <h1 id='reviews-via-book-title'>Book Reviews for "{reviews[0]?.title.rendered}"</h1>

      {loading ? <>Loading...</> : <Reviews reviews={reviews} />}
    </main>
  )
}

export default ReviewsViaBook
