import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from "axios"
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'

const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL

const Product = () => {
  function stripHTMLTags(string) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = string;
    return tempElement.textContent || tempElement.innerText;
  }

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const {id} = useParams()
  const navigate = useNavigate()
  const endpoint = `${productsUrl}/${id}`

  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
        console.log(res.data)
        setProduct(res.data)
        setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Cloud 9 Asperger's/ASD Foundation</title>
        <meta name="title" content={`Cloud 9 Asperger's/ASD Foundation || ${product?.name}`} />
        <meta name="description" content={`Hello and welcome to the site of the Cloud 9 Children’s Foundation! ${stripHTMLTags(product?.description)}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5173/" />
        <meta property="og:title" content={`Cloud 9 Asperger's/ASD Foundation || ${product?.name}`} />
        <meta property="og:description" content={`Hello and welcome to the site of the Cloud 9 Children’s Foundation! ${stripHTMLTags(product?.description)}`} />
        <meta property="og:image" content="https://withyoueverystepoftheway.files.wordpress.com/2012/10/cloud9.jpg?w=144" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:5173/" />
        <meta property="twitter:title" content={`Cloud 9 Asperger's/ASD Foundation || ${product?.name}`} />
        <meta property="twitter:description" content={`Hello and welcome to the site of the Cloud 9 Children’s Foundation! ${stripHTMLTags(product?.description)}`} />
        <meta property="twitter:image" content="https://withyoueverystepoftheway.files.wordpress.com/2012/10/cloud9.jpg?w=144" />

        {/* Meta Tags Generated with https://metatags.io */}
      </Helmet>

      <main>
      {loading ? <>Loading...</> : <>
        <button onClick={() => navigate(-1)}><ArrowLeft /> Go Back</button>
        <div className='component-container'>
              <h1>{product.name}</h1>
              <p className='price'>
                {product.prices.currency_symbol}
                {product.prices.regular_price.slice(0, -2)}
                {product.prices.currency_decimal_separator}
                {product.prices.regular_price.slice(-2)}
                {" "}{product.prices.currency_code}
              </p>
              <div id="product-description"
              dangerouslySetInnerHTML={{__html: product.description}} />
          </div>
      </>}
      </main>
    </>
  )
}

export default Product
