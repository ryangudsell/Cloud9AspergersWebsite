import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'

const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL

const Product = () => {
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
  )
}

export default Product
