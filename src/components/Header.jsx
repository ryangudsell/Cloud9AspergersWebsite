import MobileNav from './MobileNav'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { List, ChevronUp, ChevronDown } from 'react-bootstrap-icons'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Header = () => {
  const [menuIsOpen, openMenu] = useState(false)

  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle("no-scroll");
  }

  // Copied from MobileMenu
  // Fix any characters displaying wrong
  function decodeHTMLEntities(text) {
    const doc = new DOMParser().parseFromString(text, 'text/html');
    return doc.documentElement.textContent;
  }

  // Toggle About Menu Dropdown
  const [aboutIsOpen, openAbout] = useState(false)
  const toggleAboutDropdown = () => {
    openAbout(!aboutIsOpen)
    document.getElementById("about-dropdown-btn").classList.toggle("link-active")
  }

  // Toggle Asperger's Menu Dropdown
  const [aspergersIsOpen, openAspergers] = useState(false)
  const toggleAspergersDropdown = () => {
    openAspergers(!aspergersIsOpen)
    document.getElementById("aspergers-dropdown-btn").classList.toggle("link-active")
  }
  const [aspergersLinks, setAspergersLinks] = useState([])
  const aspergersEndpoint = `${baseUrl}/resources?information_types=45`
  useEffect(() => {
    axios.get(`${aspergersEndpoint}`)
    .then((res) => setAspergersLinks(res.data))
    .catch((err) => console.log(err))
  }, [aspergersEndpoint])

  const mappedAspergersLinks = aspergersLinks.map((aspergersLink) => {
    const decodedTitle = decodeHTMLEntities(aspergersLink.title.rendered)
    return (
      <li key={aspergersLink.slug} className='desktop-menu-link-item'>
        <Link to={`/resources/${aspergersLink.id}`} className='desktop-menu-link-item'>{decodedTitle}</Link>
      </li>
    )
  })

  // Toggle Resources Menu Dropdown
  const [resourceIsOpen, openResource] = useState(false)
  const toggleResourceDropdown = () => {
    openResource(!resourceIsOpen)
    document.getElementById("resource-dropdown-btn").classList.toggle("link-active")
    if (aboutIsOpen) {toggleAboutDropdown()}
    if (aspergersIsOpen) {toggleAspergersDropdown()}
  }
  const [resourceLinks, setResourceLinks] = useState([])
  const resourceEndpoint = `${baseUrl}/resources?information_types=46`
  useEffect(() => {
    axios.get(`${resourceEndpoint}`)
    .then((res) => setResourceLinks(res.data))
    .catch((err) => console.log(err))
  }, [resourceEndpoint])

  const mappedResourceLinks = resourceLinks.map((resourceLink) => {
    const decodedTitle = decodeHTMLEntities(resourceLink.title.rendered)
    return (
      <li key={resourceLink.slug} className='desktop-menu-link-item'>
        <Link to={`/resources/${resourceLink.id}`} className='desktop-menu-link-item'>{decodedTitle}</Link>
      </li>
    )
  })

  return (
    <header>
      <nav className="desktop">
        <h1><Link to="/">Cloud 9</Link></h1>
        <ul id='mobile-menu'>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* About Dropdown */}
        <>
        {aboutIsOpen && <div>
          <ul>
          <li className='desktop-menu-link-item'>
            <Link to="/about" className='desktop-menu-link-item'>About</Link>
          </li>
          <li className='desktop-menu-link-item'>
            <Link to="/events" className='desktop-menu-link-item'>Events</Link>
          </li>
          </ul>
        </div>}
        <li>
          <a className='mobile-menu-link-header'
            id='about-dropdown-btn' onClick={toggleAboutDropdown}>
            About{!aboutIsOpen ? <ChevronUp /> : <ChevronDown />}
          </a>
        </li>
        </>
        {/* Asperger's Dropdown */}
        <>
        {aspergersIsOpen && <div><ul id='aspergers-ul'>
          {mappedAspergersLinks.reverse()}
        </ul></div>}
        <li>
          <a className='mobile-menu-link-header'
            id='aspergers-dropdown-btn' onClick={toggleAspergersDropdown}>
            Asperger's & ASD{!aspergersIsOpen ? <ChevronUp /> : <ChevronDown />}
          </a>
        </li>
        </>
        {/* Resource Dropdown */}
        <>
        {resourceIsOpen && <div><ul id='resource-ul'>
          {mappedResourceLinks.reverse()}
        </ul></div>}
        <li>
          <a className='mobile-menu-link-header'
            id='resource-dropdown-btn' onClick={toggleResourceDropdown}>
            Resources{!resourceIsOpen ? <ChevronUp /> : <ChevronDown />}
          </a>
        </li>
        </>
        <li>
          <Link to="/book-reviews">Book Reviews</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </nav>
      <nav className="mobile">
        <h1><Link to="/">Cloud 9</Link></h1>
        <List id="hamburger-icon"
        onClick={toggleMobileMenu} />
        {menuIsOpen && <MobileNav closeMethod={toggleMobileMenu} />}
      </nav>
    </header>
  )
}

export default Header
