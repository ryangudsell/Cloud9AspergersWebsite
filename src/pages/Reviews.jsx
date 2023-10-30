import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl =  import.meta.env.VITE_WP_API_BASEURL
const endpoint = `${baseUrl}/book_reviews?_embed`

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

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
                    <button key={review.slug + "-" + review.acf.reviewer + "-" + index}>
                        <a href={`#/book-reviews/${review.id}`}>Read more of this review</a>
                    </button><br />
                    <a key={review.slug + "-" + index}
                    href={`#/book-reviews/book/${review.book_names[0]}`}
                    >View all reviews about "{review.title.rendered}"</a>
                </div>
            </div>
        )
    })

    return mappedReviews.reverse()
  }

  return (
    <main>
      <h1>Book Reviews</h1>

      {loading ? <>Loading...</> : <Reviews reviews={reviews} />}
    </main>
  )
}

export default Reviews
