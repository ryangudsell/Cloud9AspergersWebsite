import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL

const Donate = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios.get(`${productsUrl}`)
    .then((res) => {
      console.log(res.data)
      setProducts(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [])

  const Products = ({ products }) => {
    console.log(products);
    const mappedProducts = products.map((product, index) => {
      return (
        <div key={index} className='donate-container'>
            <h2 className='title'><Link to={`/products/${product.id}`}>{product.name}</Link></h2>
            <p className='price'>
              {product.prices.currency_symbol}
              {product.prices.regular_price.slice(0, -2)}
              {product.prices.currency_decimal_separator}
              {product.prices.regular_price.slice(-2)}
              {" "}{product.prices.currency_code}
            </p>
            <button key={index}>
                <Link to={`/products/${product.id}`}>Buy now</Link>
            </button>
        </div>
      ) // end of return
    }) // end of map

    return (mappedProducts)

  } // end of Products

  const handleSubmit =() => console.log("Donate Submitted");
  return (
    <main>
      <h2>Donate</h2>
      <p>Donations are the life blood of our foundation.</p>
      <p>We receive no financial support from the government and wouldn’t be able to survive without the generosity of sponsorships and private donations.</p>
      <p>If you would like to make a donation, the easiest way is by clicking “<Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=88VR3NNLBCVK2">DONATE</Link>” here. This will take you to the secure Paypal site where you can donate using your credit card or your Paypal account if you have one.</p>

      <p>Alternatively, you can donate by:</p>
      <ol>
        <li>Posting a cheque to Cloud 9 Children’s Foundation, P O Box 233, Martinborough, New Zealand</li>
        <li>Direct deposit into our bank account 03-0539-0220090-00</li>
      </ol>

      <p>New Zealand residents are entitled to a tax rebate on donations of $5 or more. <u>If you would like a receipt for your donation</u> please provide your name, postal address and the amount you’ve donated in the form below, click “Submit” and we’ll post you a receipt.</p>
      
      {loading ? <>Loading Products...</> : <Products products={products} />}

      <form onSubmit={handleSubmit}>
        <h1>Custom Donation:</h1>
        <div>
          <label>Your Name:</label>
          <input type='text' />
        </div>
        <div>
          <label>Your Postal Address:</label>
          <textarea cols={30} rows={10} />
        </div>
        <div>
          <label>Amount:</label>
          <input type='number' />
        </div>
        <button>Submit</button>
      </form>
    </main>
  )
}

export default Donate
