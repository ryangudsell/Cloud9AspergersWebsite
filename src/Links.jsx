import { Routes, Route } from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import Reviews from './pages/Reviews'

// Import Components
import Event from './components/Event'
import Resource from './components/Resource'
import Review from './components/Review'
import ReviewsViaBook from './components/ReviewsViaBook'
import Product from './components/Product'

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/events/:id" element={<Event />} />
        <Route exact path="/resources/:id" element={<Resource />} />
        <Route exact path="/book-reviews" element={<Reviews />} />
        <Route exact path="/book-reviews/:id" element={<Review />} />
        <Route exact path="/book-reviews/book/:id" element={<ReviewsViaBook />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/products/:id" element={<Product />} />
    </Routes>
  )
}

export default Links
