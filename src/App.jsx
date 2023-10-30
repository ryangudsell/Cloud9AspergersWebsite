import './css/App.css'
import { HashRouter } from 'react-router-dom'

import Links from './Links'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter>
      <Header />
      <Links />
      <Footer />
    </HashRouter>
  )
}

export default App
