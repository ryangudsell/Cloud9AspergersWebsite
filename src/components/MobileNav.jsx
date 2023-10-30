import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { X, ChevronDown, ChevronUp } from "react-bootstrap-icons"

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const MobileNav = ({ closeMethod }) => {
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
    if (aspergersIsOpen) {toggleAspergersDropdown()}
    if (resourceIsOpen) {toggleResourceDropdown()}
  }

  // Toggle Asperger's Menu Dropdown
  const [aspergersIsOpen, openAspergers] = useState(false)
  const toggleAspergersDropdown = () => {
    openAspergers(!aspergersIsOpen)
    document.getElementById("aspergers-dropdown-btn").classList.toggle("link-active")
    if (aboutIsOpen) {toggleAboutDropdown()}
    if (resourceIsOpen) {toggleResourceDropdown()}
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
      <li key={aspergersLink.slug}>
        <Link to={`/resources/${aspergersLink.id}`} className='mobile-menu-link-item'
          onClick={closeMethod}>{decodedTitle}</Link>
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
      <li key={resourceLink.slug}>
        <Link to={`/resources/${resourceLink.id}`} className='mobile-menu-link-item'
          onClick={closeMethod}>{decodedTitle}</Link>
      </li>
    )
  })

  return (
    <>
      <button id="close-nav-menu" onClick={closeMethod}>
        <X />
      </button>      
      <ul id='mobile-menu'>
        <li>
          <Link to="/" onClick={closeMethod}>Home</Link>
        </li>
        {/* About Dropdown */}
        <>
        <li>
          <a className='mobile-menu-link-header'
            id='about-dropdown-btn' onClick={toggleAboutDropdown}>
            About{!aboutIsOpen ? <ChevronUp /> : <ChevronDown />}
          </a>
        </li>
        {aboutIsOpen && <>
          <li>
            <Link to="/about" className='mobile-menu-link-item'
            onClick={closeMethod}>About</Link>
          </li>
          <li>
            <Link to="/events" className='mobile-menu-link-item' 
            onClick={closeMethod}>Events</Link>
          </li>
        </>}
        </>
        {/* Asperger's Dropdown */}
        <>
        <li>
          <a className='mobile-menu-link-header'
            id='aspergers-dropdown-btn' onClick={toggleAspergersDropdown}>
            Asperger's & ASD{!aspergersIsOpen ? <ChevronUp /> : <ChevronDown />}
          </a>
        </li>
        {aspergersIsOpen && <>
          {mappedAspergersLinks.reverse()}
        </>}
        </>
        {/* Resource Dropdown */}
        <>
        <li>
          <a className='mobile-menu-link-header'
            id='resource-dropdown-btn' onClick={toggleResourceDropdown}>
            Resources{!resourceIsOpen ? <ChevronUp /> : <ChevronDown />}
          </a>
        </li>
        {resourceIsOpen && <>
          {mappedResourceLinks.reverse()}
        </>}
        </>
        <li>
          <Link to="/book-reviews" onClick={closeMethod}>Book Reviews</Link>
        </li>
        <li>
          <Link to="/donate" onClick={closeMethod}>Donate</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMethod}>Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default MobileNav
